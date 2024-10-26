const axios = require("axios");

async function publicAPI() {
	try {
		const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
		return response.data;
	} catch (error) {
		throw new Error("Error fetching public API data");
	}
}

module.exports = { publicAPI };
