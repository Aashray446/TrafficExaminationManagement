module.exports = {
	'GET /users/getAllUsers': 'UsersController.getAllUsers',
	'POST /users/register': 'UsersController.register',
	'POST /users/update': 'UsersController.update',
	'POST /users/delete': 'UsersController.delete',


	'POST /applicant/create': 'ApplicantController.create',
	'GET /applicant/getAll': 'ApplicantController.getAll',
	'POST /applicant/delete': 'ApplicantController.delete',
	'GET /applicant/getById/:id': 'ApplicantController.getById',
	'POST /applicant/update': 'ApplicantController.update',

	'POST /applicantDetails/create ': 'ApplicantDetailsController.create',
	'GET /applicantDetails/search-by-token/:tokken': 'ApplicantDetailsController.searchByToken',
	'POST /applicantDetails/update': 'ApplicantDetailsController.update',
	'POST /applicant/updatePassStatus': 'ApplicantController.updatePassStatus',
};
