const authService = require("../services/jokes.service.js");

const fetchpublicAPI = async (req, res) => {
  try {
    const publicData = await authService.publicAPI();
    res.json(publicData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { fetchpublicAPI };