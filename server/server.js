// server.js

const express = require("express");
const cors = require("cors");

const userRoutes = require('./routes/userRoutes');
const impotRoutes = require('./routes/impotRoutes');
const { User, sequelize } = require('./models/user'); 
const { Impot } = require('./models/impot'); 


const app = express();

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  check if database is connected
sequelize.sync().then(() => {
  console.log('Database synced.');
}).catch(err => {
  console.error('Error syncing database:', err);
});


// Routes
app.use('/users', userRoutes);
app.use('/impots', impotRoutes);


// server configuration
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

