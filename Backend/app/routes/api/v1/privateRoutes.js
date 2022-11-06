module.exports = {
	'GET /users/getAllUsers': 'UsersController.getAllUsers',
	'POST /users/register': 'UsersController.register',
	'POST /users/update': 'UsersController.update',
	'POST /users/delete': 'UsersController.delete',


	'POST /applicant/create': 'ApplicantController.create',
	'GET /applicant/getAll': 'ApplicantController.getAll',
	'POST /applicant/delete': 'ApplicantController.delete',

	'POST /applicantDetails/create ': 'ApplicantDetailsController.create',
	'GET /applicantDetails/search-by-token': 'ApplicantDetailsController.searchByToken',

};
