const authService = require('../services/auth.service.js');

const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    await authService.registerUser({ username, email, password });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { token } = await authService.loginUser({ email, password });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const logout = (req, res) => {
  res.status(200).json({ message: 'Logout successful' });
};

const activeUser = (req, res) => {
  const { email, username } = req.user; 
  res.json({ email, username }); 
};

const fetchpublicAPI = async (req, res) => {
  try {
    const publicData = await authService.publicAPI();
    res.json(publicData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {register, login, logout, activeUser, fetchpublicAPI};
