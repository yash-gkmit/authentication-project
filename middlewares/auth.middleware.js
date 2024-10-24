const jwt = require('jsonwebtoken');

const jwt_secret_key = process.env.JWT_SECRET || 'yashgupta';

function tokenAuthentication(req,res,next){
	const token = req.headers['authorization']?.split(' ')[1];

	if(!token) return res.sendStatus(401);

	jwt.verify(token, jwt_secret_key, (err,user) => {
		if(err) res.sendStatus(403);
		req.user = user;
		next();
	});
}

module.exports = { tokenAuthentication };