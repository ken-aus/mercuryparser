const Mercury = require('@postlight/mercury-parser');
const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    res.status(400).json({ error: 'Missing URL parameter' });
    return;
  }

  const result = await Mercury.parse(url);
  res.status(200).json(result);
};
