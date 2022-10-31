// Reference models.
const User = require('#models/User');
// JWT facade.
const JWT = require('#facades/jwt.facade');
// Password hash and compare service.
const bcrypt = require('#services/bcrypt.service');
// Custom error.
const { Err } = require('#factories/errors');


module.exports = {
	// Auth:
	register: _register,
	login: _login,
	// Auth\
	update: _update,
	delete: _delete,

	// Private:
	getAllUsers: _getAllUsers

	// Add your methods here...

	// Private\
}

// Auth:
async function _register({ email, password, name, role }) {
	try {
		// Try to create new user.
		const user = await User.create({
			email,
			password,
			name,
			role
		});

		// Issue new access and refresh JWT.
		const [tokens] = await JWT.issueTokens({ user });

		// Prepare output.
		const result = [
			tokens,
			user
		];
		// Send output.
		return Promise.resolve(result);
	}
	catch (error) {
		return Promise.reject(error);
	}
}

async function _login({ email, password }) {
	try {
		// Try to find user.
		const user = await User.findOneByEmail(email);

		if (!user) {
			// If no such user was found, throw error with name UserNotFound:
			const err = new Err('User not found');
			err.name = "UserNotFound";
			throw err;
		}

		if (!bcrypt.comparePasswords(password, user.password)) {
			// Validation failed,
			// throw custom error with name Unauthorized:
			const err = new Err(`Validation failed.`);
			err.name = "ValidationError";
			throw err;
		}

		// Issue new access and refresh JWT.
		const [tokens] = await JWT.issueTokens({ user });

		// Prepare output.
		const result = [
			tokens,
			user
		];
		// Send output.
		return Promise.resolve(result);
	}
	catch (error) {
		return Promise.reject(error);
	}
}


async function _update(user) {
	try {
		// Try to find user.
		let result;
		if (!user.password) {
			result = await User.update(
				{ name: user.name, email: user.email, role: user.role },
				{ where: { id: user.id } }
			);
		}
		else {

			result = await User.update(
				{ name: user.name, email: user.email, role: user.role, password: user.password },
				{ where: { id: user.id } }
			);

		}



		//  If user not found, throw error with name UserNotFound:
		if (result[0] == 0) {
			const err = new Err('User not found');
			err.name = "UserNotFound";
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
async function _getAllUsers() {
	try {
		// Try to find user.
		const users = await User.findAll();

		// Send output.
		return Promise.resolve([users]);
	}
	catch (error) {
		return Promise.reject(error);
	}
}

// Delete
async function _delete(user) {
	try {
		// Try to find user.
		const result = await User.destroy({ where: { id: user.id } });

		//  If user not found, throw error with name UserNotFound:
		if (result == 0) {
			const err = new Err('User not found');
			err.name = "UserNotFound";
			throw err;
		}

		// Send output.
		return Promise.resolve([result]);
	}
	catch (error) {
		return Promise.reject(error);
	}
}