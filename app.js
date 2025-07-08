const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Homepage
app.get('/', (req, res) => {
  res.render('index', { title: 'Companion Site' });
});

// Data download endpoint (replace with your own logic)
app.get('/download', (req, res) => {
  // Example: send a file called 'data.json' from the 'data' directory
  res.download(path.join(__dirname, 'data', 'data.json'), 'data.json');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});