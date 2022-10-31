module.exports = {
	'GET /status': 'APIController.getStatus',

	// User:
	'POST /auth/login': 'UsersController.login',
	'POST /auth/validate': 'UsersController.validate',
	'POST /auth/refresh': 'UsersController.refresh',
	'POST /auth/logout': 'UsersController.logout',
};
