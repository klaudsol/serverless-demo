import AWS from 'aws-sdk';



export default function handler(req, res) {
  const {
    AURORA_AWS_ACCESS_KEY_ID,
    AURORA_AWS_SECRET_ACCESS_KEY,
    AURORA_RESOURCE_ARN,
    AURORA_SECRET_ARN,
    AURORA_DATABASE
  } = process.env;

  const quotes = [
    "Lorem",
    "Ipsum",
    "Dolor"
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.status(200).json({ quote: quotes[randomIndex] })
}