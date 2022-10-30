// ORM:
const { DataTypes } = require('sequelize');
const database = require('#services/db.service');



const ApplicantDetails = database.define(
	'ApplicantDetails',
	{
		eightPattern: {
			type: DataTypes.JSON,
		},
		trafficLightPattern: {
			type: DataTypes.JSON,
		},
		rampPattern: {
			type: DataTypes.JSON,
		},
		lParkingPattern: {
			type: DataTypes.JSON,
		},
		behaviourPattern: {
			type: DataTypes.JSON
		}
	},
	{
		// Enable automatic 'createdAt' and 'updatedAt' fields.
		timestamps: true,
		// Only allow 'soft delete'
		// (set of 'deletedAt' field, insted of the real deletion).
	}
);


ApplicantDetails.associate = (models) => {
	models.Applicant.hasOne(models.ApplicantDetails)
}



// ApplicantDetails.findOneByEmail = function (email) {
// 	const query = {
// 		where: {
// 			email
// 		}
// 	};
// 	return this.findOne(query);
// }
// Static methods\

// Instance methods\

module.exports = ApplicantDetails;
