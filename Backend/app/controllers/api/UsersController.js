// Facades:
const usersFacade = require('#facades/users');
const jwtFacade = require('#facades/jwt.facade');
// JWT Service.
const JWT = require('#services/jwt.service');
// Reponse protocols.
const {
	createOKResponse,
	createErrorResponse
} = require('#factories/responses/api');
// Custom error.
const { Err } = require('#factories/errors');


module.exports = UsersController;

function UsersController() {

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
			case ('UserNotFound'):
				errorMessage = "Such user doesn't exist";
				statusCode = 400;
				break;
			case ("UserAlreadyExists"):
				errorMessage = "User with such email already exists";
				statusCode = 401;
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
	const _register = async (req, res) => {

		if (req?.token?.role !== 'Admin') {
			return createErrorResponse({
				res,
				error: {
					message: 'You are not allowed to perform this action'
				},
				status: 401
			});
		}

		try {
			// Extract request input:
			const email = req.body?.email
			const password = req.body?.password
			const name = req.body?.name
			const role = req.body?.role

			// Create new one.
			const [tokens, user] = await usersFacade.register({
				email,
				password,
				name,
				role
			});

			// Everything's fine, send response.
			return createOKResponse({
				res,
				content: {
					tokens,
					// Convert user to JSON, to clear sensitive data (like password)
					user: user.toJSON()
				}
			});
		}
		catch (error) {
			console.error("UsersController._create error: ", error);
			error.name = "UserAlreadyExists";
			return _processError(error, req, res);
		}
	}

	const _login = async (req, res) => {
		try {
			// Extract request input:
			const email = req.body?.email
			const password = req.body?.password


			if (!email || email === undefined || !password || password === undefined) {
				// If bad input, throw ValidationError:
				const err = new Error("Invalid email OR password input");
				err.name = "ValidationError";
				throw err;
			}

			const [tokens, user] = await usersFacade.login({ email, password });

			// Everything's fine, send response.
			return createOKResponse({
				res,
				content: {
					tokens,
					// Convert user to JSON, to clear sensitive data (like password).
					user: user.toJSON()
				}
			});
		}
		catch (error) {
			console.error("UsersController._login error: ", error);
			return _processError(error, req, res);
		}
	}

	const _update = async (req, res) => {

		const UserData = req.body;

		try {

			const status = await usersFacade.update(UserData);

			return createOKResponse({
				res,
				content: {
					status: status
				}
			});
		}
		catch (error) {

			console.error("UsersController._login error: ", error);
			return _processError(error, req, res);

		}

	}

	const _validate = async (req, res) => {
		try {
			const { token } = req.body;

			// Validate token against local seed.
			await JWT.verifyAccessToken(token);

			// Everything's fine, send response.
			return createOKResponse({
				res,
				content: {
					isValid: true,
					message: "Valid Token"
				}
			});
		}
		catch (error) {
			console.error("UsersController._validate error: ", error);

			// In any error case, we send token not valid:
			// Create custom error with name InvalidToken.
			const err = new Error('Invalid Token!');
			err.name = "InvalidToken";
			return _processError(err, req, res);
		}
	}

	const _refresh = async (req, res) => {
		try {
			// Unwrap refresh token.
			const refreshToken = req?.refreshToken;
			if (!refreshToken) {
				const err = new Err("No refreshToken found");
				err.name = "Unauthorized";
				err.status = 401;
				throw err;
			}

			// Everything's ok, issue new one.
			const [accessToken] = await jwtFacade.refreshAccessToken({ refreshToken });

			return createOKResponse({
				res,
				content: {
					token: accessToken
				}
			});
		}
		catch (error) {
			console.error("UsersController._refresh error: ", error);

			// In any error case, we send token not valid:
			// Create custom error with name InvalidToken.
			const err = new Error('Invalid Token!');
			err.name = "InvalidToken";
			return _processError(err, req, res);
		}
	}

	const _logout = async (req, res) => {
		try {
			const refreshToken = req?.refreshToken;
			if (!refreshToken) {
				const err = new Err("No refreshToken found");
				err.name = "Unauthorized";
				err.status = 401;
				throw err;
			}

			// Everything's ok, destroy token.
			const [status] = await jwtFacade.disableRefreshToken({ refreshToken });

			return createOKResponse({
				res,
				content: {
					status,
					loggedIn: status === true
				}
			});
		}
		catch (error) {
			console.error("UsersController._logout error: ", error);

			// In any error case, we send token not valid:
			// Create custom error with name InvalidToken.
			const err = new Error('Invalid Token!');
			err.name = "InvalidToken";
			return _processError(err, req, res);
		}
	}
	// Auth\

	// Protected:
	const _getAll = async (req, res) => {
		try {

			// get all users
			const users = await usersFacade.getAllUsers();


			return createOKResponse({
				res,
				content: {
					users
				}
			});
		}
		catch (error) {
			console.error("UsersController._getFullName error: ", error);
			return _processError(error, req, res);
		}
	}

	const _delete = async (req, res) => {
		try {
			const UserData = req.body;

			const status = await usersFacade.delete(UserData);

			if (!status) {
				const err = new Error("User not found");
				err.name = "NotFound";
				throw err;
			}

			return createOKResponse({
				res,
				content: {
					status: true
				}
			});
		}
		catch (error) {
			console.error("UsersController._delete error: ", error);
			return _processError(error, req, res);
		}
	}


	return {
		// Auth:
		register: _register,
		login: _login,
		validate: _validate,
		refresh: _refresh,
		logout: _logout,
		update: _update,
		delete: _delete,
		// Protected:
		getAllUsers: _getAll
	}
}
