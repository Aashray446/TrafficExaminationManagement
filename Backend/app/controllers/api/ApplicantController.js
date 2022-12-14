// Facades:
const Applicant = require('#facades/applicant');
const ApplicantDetails = require('#facades/applicantDetails');
const baseUrl = process.env.HOST
const sharp = require('sharp');
const path = require('path');
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
                errorMessage = error?.message ?? 'Internal server error';
                statusCode = 406;
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
            const applicantDetails = JSON.parse(req.body.applicant);

            const relativePath = path.join(__dirname, '../../../public/');
            sharp(relativePath + req.file.filename).resize(200, 200).jpeg({ quality: 50 }).toFile(relativePath + req.file.filename + '.jpeg');


            applicantDetails.photo = `${baseUrl}/${req.file.filename}.jpeg`;


            const applicant = await Applicant.create(applicantDetails)
            await ApplicantDetails.create({}, applicantDetails.applicantId);
            // Everything's fine, send response.
            return createOKResponse({
                res,
                content: {
                    applicant: applicant
                }
            });
        }
        catch (error) {
            // console.error("UsersController._create error: ", error);
            error.message = error.errors[0].message;
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

    const _getById = async (req, res) => {
        try {
            const applicant = await Applicant.getById(req.params.id);
            // Everything's fine, send response.
            return createOKResponse({
                res,
                content: {
                    applicant: applicant[0],
                    applicantDetails: applicant[1]
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

    //update applicant
    const _update = async (req, res) => {
        try {
            const applicant = req.body;
            const result = await Applicant.update(applicant);

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


    const _updatePassStatus = async (req, res) => {
        try {
            const applicantDetails = req.body;
            const result = await Applicant.updatePassStatus(applicantDetails);

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

    const _getAllByDate = async (req, res) => {
        try {
            const applicants = await Applicant.getAllByDate(req.body.date, req.body.type);

            // Everything's fine, send response.
            return createOKResponse({
                res,
                content: {
                    applicant: applicants[0]
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
        getById: _getById,
        update: _update,
        updatePassStatus: _updatePassStatus,
        getAllByDate: _getAllByDate
    }



}
