const user = require('../models/users.model.js');

async function getUser (id){
	const userDetails = user.findById(id);

	if(!userDetails){
		throw new Error(`User with ${id} doesn't exist.`)
	}

	return userDetails;
}

module.exports = { getUser };