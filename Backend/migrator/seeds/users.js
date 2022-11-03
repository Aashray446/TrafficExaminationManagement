// Facades.
const usersFacade = require('#facades/users');


module.exports = {
	run: _run
}

async function _run() {
	try {
		const exampleUserData = {
			email: "aashray446@gmail.com",
			password: "12345678"
		}

		const user = await usersFacade.register(exampleUserData);
	}
	catch (error) {
		return Promise.reject(error);
	}
}
