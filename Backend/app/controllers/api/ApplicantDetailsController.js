// Facades:
const Applicant = require('#facades/ApplicantDetails');
const baseUrl = process.env.HOST
// Reponse protocols.
const {
    createOKResponse,
    createErrorResponse
} = require('#factories/responses/api');
// Custom error.
const { Err } = require('#factories/errors');


module.exports = ApplicantController;

function ApplicantController() {

    const _processError = (error, req, res) => {
        // Default error message.
        let errorMessage = error?.message ?? 'Internal server error';
        // Default HTTP status code.
        let statusCode = 500;

        switch (error.name) {
            case ('Unauthorized'):
                errorMessage = 'Email or password are incorrect.';
                statusCode = 406;
                break;
            case ('ValidationError'):
                errorMessage = "Invalid email OR password input";
                statusCode = 401;
                break;
            case ('InvalidToken'):
                errorMessage = 'Invalid token or token expired';
                statusCode = 401;
                break;
            case ('UserFound'):
                errorMessage = "Applicant already exists";
                statusCode = 400;
                break;

            // Perform your custom processing here...

            default:
                break;
        }

        // Send error response with provided status code.
        return createErrorResponse({
            res,
            error: {
                message: errorMessage
            },
            status: statusCode
        });
    }

    // Auth:
    const _create = async (req, res) => {
        try {
            // Extract request input:
            const applicantDetails = req.body.applicantDetails;
            const applicantId = req.body.applicant.applicantId;

            const applicant = await Applicant.create(applicantDetails, applicantId);

            // Everything's fine, send response.
            return createOKResponse({
                res,
                content: {
                    applicant: applicant
                }
            });
        }
        catch (error) {
            console.error("UsersController._create error: ", error);
            error.name = "UserFound";
            return _processError(error, req, res);
        }
    }


    //get all
    const _getAll = async (req, res) => {
        try {

            const applicants = await Applicant.getAll();

            // Everything's fine, send response.
            return createOKResponse({
                res,
                content: {
                    applicant: applicants
                }
            });
        }
        catch (error) {
            console.error("UsersController._create error: ", error);
            return _processError(error, req, res);
        }
    }

    //delete applicant
    const _delete = async (req, res) => {
        try {
            const applicant = req.body;
            console.log(applicant)
            const result = await Applicant.delete(applicant);

            // Everything's fine, send response.
            return createOKResponse({
                res,
                content: {
                    applicant: result
                }
            });

        }
        catch (error) {
            console.error("UsersController._create error: ", error);
            return _processError(error, req, res);
        }
    }




    return {
        // Auth:
        create: _create,
        getAll: _getAll,
        delete: _delete,

    }



}
