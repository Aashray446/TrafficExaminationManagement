const bcrypt = require('bcryptjs');

module.exports = {
	hashPassword: (user) => {
		const salt = bcrypt.genSaltSync();
		const hash = bcrypt.hashSync(user.password, salt);

		return hash;
	},
	comparePasswords: (password, hash) => bcrypt.compareSync(password, hash)
};