
export default function handler(req, res) {

  const quotes = [
    "Lorem",
    "Ipsum",
    "Dolor"
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.status(200).json({ quote: quotes[randomIndex] })
}