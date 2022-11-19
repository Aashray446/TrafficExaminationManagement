// Reference models.
const Applicant = require('#models/Applicant');
const ApplicantDetails = require('#models/ApplicantDetails')
const { Op } = require('sequelize');

const { Err } = require('#factories/errors');


module.exports = {

    create: _create,
    update: _update,
    delete: _delete,
    getAll: _getAll,


    search: _search,
    getById: _getById,
    updatePassStatus: _updatePassStatus,
    getAllByDate: _getAllByDate

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

async function _update(applicant) {
    try {
        // Try to find user.
        let result = await Applicant.update(
            { name: applicant.name, serialNumber: applicant.serialNumber, tokken: applicant.tokken, photo: applicant.photo, passStatus: applicant.passStatus },
            { where: { applicantId: applicant.applicantId } }
        );
        //  If user not found, throw error with name UserNotFound:
        if (result == 0) {
            const err = new Err('Applicant not found');
            err.name = "ApplicantNotFound";
            throw err;
        }

        const applicantDetails = applicant.applicantDetails
        result = await ApplicantDetails.update(
            {
                eightPattern: applicantDetails.eightPattern,
                trafficLightPattern: applicantDetails.trafficLightPattern,
                rampPattern: applicantDetails.rampPattern,
                lParkingPattern: applicantDetails.lParkingPattern,
                behaviourPattern: applicantDetails.behaviourPattern,
            }
            ,
            { where: { ApplicantApplicantId: applicant.applicantId } }
        );

        if (result == 0) {
            const err = new Err('Applicant Details not found');
            err.name = "ApplicantDetailsNotFound";
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

async function _search(data, type, role) {
    try {
        // Try to find user.
        const applicant = await Applicant.findAll({
            where: {
                [type]: data
            }
        });

        if (applicant.length == 0) {
            throw Error("Tokken Not Found")
        }

        if (type == "tokken") {
            if (await checkIfCompleted(role, applicant[0].applicantId)) {
                throw Error('Applicant Data Already Filled')
            }
        }

        const applicantDetails = await ApplicantDetails.findOne({
            where: {
                ApplicantApplicantId: applicant[0].applicantId
            }
        });


        applicant[0].dataValues.applicantDetails = applicantDetails

        // Send output.
        return Promise.resolve(applicant);
    }
    catch (error) {
        return Promise.reject(error);
    }

}

//getby id  
async function _getById(id) {
    try {
        // Try to find user.
        const applicant = await Applicant.findOne({
            where: {
                applicantId: id
            }
        });

        if (applicant == null) {
            const err = new Err('Applicant not found');
            err.name = "ApplicantNotFound";
            throw err;
        }


        const applicantDetails = await ApplicantDetails.findOne({
            where: {
                ApplicantApplicantId: applicant.dataValues.applicantId
            }
        });




        // Send output.
        return Promise.resolve(
            [
                applicant, applicantDetails
            ]
        );
    }
    catch (error) {
        return Promise.reject(error);
    }
}

// udpate passStatus
async function _updatePassStatus(ApplicantDetails) {
    try {
        // Try to find user.

        const result = await Applicant.update(
            { passStatus: ApplicantDetails.passStatus, tokken: null },
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

// Business logic

const checkIfCompleted = async (role, applicantId) => {

    const result = await ApplicantDetails.findOne({
        where: {
            ApplicantApplicantId: applicantId
        }
    })

    if (role == "EightOfficer" && result.eightPattern) {
        return true
    }
    if (role == "TrafficLightOfficer" && result.trafficLightPattern) {
        return true
    }
    if (role == "RampOfficer" && result.rampPattern) {
        return true
    }

    if (role == "LParkingOfficer" && result.lParkingPattern) {
        return true
    }

    if (role == "BehaviourOfficer" && result.behaviourPattern) {
        return true
    }
    return false
}


async function _getAllByDate(date, type) {
    try {

        if (type == null) {
            const applicant = await Applicant.findAll({
                where: {
                    createdAt: {
                        [Op.lt]: date + ' 23:59:59',
                        [Op.gt]: date + ' 00:00:00'
                    }
                },
                include: [
                    {
                        model: ApplicantDetails,
                    }
                ]
            });

            return Promise.resolve([applicant]);
        }
        if (type == true) {
            const applicant = await Applicant.findAll({
                where: {
                    createdAt: {
                        [Op.lt]: date + ' 23:59:59',
                        [Op.gt]: date + ' 00:00:00'
                    },
                    passStatus: true
                },
                include: [
                    {
                        model: ApplicantDetails,
                    }
                ]
            });

            return Promise.resolve([applicant]);
        }

        if (type == false) {
            const applicant = await Applicant.findAll({
                where: {
                    createdAt: {
                        [Op.lt]: date + ' 23:59:59',
                        [Op.gt]: date + ' 00:00:00'
                    },
                    passStatus: false
                },
                include: [
                    {
                        model: ApplicantDetails,
                    }
                ]
            });

            return Promise.resolve([applicant]);
        }
        // Send output.

    }
    catch (error) {
        return Promise.reject(error);
    }
}