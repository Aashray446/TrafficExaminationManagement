// Facades.
const usersFacade = require('#facades/users');


module.exports = {
	run: _run
}

async function _run() {
	try {
		const exampleUserData = [
			{
				email: "aashray446@gmail.com",
				password: "12345678",
				role: 'Admin'
			},
			{
				name: "Mid Officer",
				email: "mid@gmail.com",
				password: "12345678",
				role: "MidLevelOfficer"
			}
		]

		for (const element of exampleUserData) {
			await usersFacade.register(element)
		}

		// exampleUserData.forEach(async element => {
		// 	await usersFacade.register(element);
		// });

	}
	catch (error) {
		return Promise.reject(error);
	}
}
