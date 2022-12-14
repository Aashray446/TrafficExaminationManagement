// ORM:
const { DataTypes } = require('sequelize');
const database = require('#services/db.service');


const Applicant = database.define(
    'Applicant',
    {
        applicantId: {
            type: DataTypes.STRING(80),
            unique: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(80),
            allowNull: true
        },
        serialNumber: {
            type: DataTypes.INTEGER(),
        },
        tokken: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: true
        },
        photo: {
            type: DataTypes.STRING(255)
        },
        passStatus: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        }
    },
    {
        // Enable automatic 'createdAt' and 'updatedAt' fields.
        timestamps: true,

        // Only allow 'soft delete'
        // (set of 'deletedAt' field, insted of the real deletion).
    }
);


// Static methods:
Applicant.associate = (models) => {
    models.ApplicantDetails.belongsTo(models.Applicant, { onDelete: 'CASCADE' });
}


// Static methods\

// Instance methods:

// Instance methods\

module.exports = Applicant;
