// server.js

const express = require("express");
const cors = require("cors");

const userRoutes = require('./routes/userRoutes');
const impotRoutes = require('./routes/impotRoutes');
const { User, sequelize } = require('./models/user'); // Updated import
const { Impot } = require('./models/impot'); // Updated import

const app = express();

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


sequelize.sync().then(() => {
  console.log('Database synced.');
}).catch(err => {
  console.error('Error syncing database:', err);
});



app.use('/users', userRoutes);
app.use('/impots', impotRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

