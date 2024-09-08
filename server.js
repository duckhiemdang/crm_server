const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());
app.use(express.json());

// Replace with your actual API endpoint
const apiBaseUrl = 'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles';

// Proxy endpoint
app.post('/api/vehicles', async (req, res) => {
  try {
    const response = await axios.post(apiBaseUrl, req.body, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'oUyMd56WoN6xUUkLemMfB3HFAve2Pucc1dqZ4tPe', // Your API key
      },
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Error fetching data from the API.' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running on port ${port}`);
});
