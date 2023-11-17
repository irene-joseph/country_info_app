const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/country', async (req, res) => {
  try {
    const { name } = req.query; // Retrieve the 'name' parameter from the query string
    const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
    const countryInfo = response.data[0]; // Assuming the first item contains the desired country info
    res.json(countryInfo);
  } catch (error) {
    console.error('Error fetching country information:', error);
    res.status(500).json({ error: 'Failed to fetch country information' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
