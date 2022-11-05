// Reference models.
const Applicant = require('#models/Applicant');


const { Err } = require('#factories/errors');


module.exports = {
    // Auth:
    create: _create,
    update: _update,
    delete: _delete,
    getAll: _getAll,
    // Private:


    // Add your methods here...

    // Private\
}

// Auth:
async function _create(ApplicantDetails) {
    try {
        // Try to create new user.
        const applicant = await Applicant.create({
            applicantId: ApplicantDetails.applicantId,
            name: ApplicantDetails.name,
            serialNumber: ApplicantDetails.serialNumber,
            tokken: ApplicantDetails.tokken,
            photo: ApplicantDetails.photo,
        });

        // Prepare output.
        const result = [
            applicant
        ];
        // Send output.
        return Promise.resolve(result);
    }
    catch (error) {
        return Promise.reject(error);
    }
}

async function _update(ApplicantDetails) {
    try {
        // Try to find user.

        const result = await Applicant.update(
            { name: ApplicantDetails.name, serialNumber: ApplicantDetails.serialNumber, tokken: ApplicantDetails.tokken, photo: ApplicantDetails.photo },
            { where: { applicantId: ApplicantDetails.applicantId } }
        );

        //  If user not found, throw error with name UserNotFound:
        if (result[0] == 0) {
            const err = new Err('Applicant not found');
            err.name = "ApplicantNotFound";
            throw err;
        }

        // Send output.
        return Promise.resolve([result]);
    }
    catch (error) {
        return Promise.reject(error);
    }

}

// Get all Users
async function _getAll() {
    try {
        // Try to find user.
        const applicant = await Applicant.findAll();

        // Send output.
        return Promise.resolve([applicant]);
    }
    catch (error) {
        return Promise.reject(error);
    }
}

// Delete
async function _delete(ApplicantDetails) {
    try {
        // Try to find user.
        console.log("ApplicantDetails", ApplicantDetails)
        const result = await Applicant.destroy({ where: { applicantId: ApplicantDetails.applicantId } });

        //  If user not found, throw error with name UserNotFound:
        if (result == 0) {
            const err = new Err('Applicant not found');
            err.name = "ApplicantNotFound";
            throw err;
        }

        // Send output.
        return Promise.resolve([result]);
    }
    catch (error) {
        return Promise.reject(error);
    }


}