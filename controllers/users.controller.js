const userService = require("../services/users.service.js");

const getDetails = async(req,res) => {
	try{
		const {id} = req.params;
		const result = await userService.getUser(id);
		res.status(200).json({result});
	}catch (error){
		console.error("Getting user error", error);
        res.status(404).json({ error: "Getting user failed" });
	}
};

module.exports = { getDetails };