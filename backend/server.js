require('dotenv').config();
const express = require("express");
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/db');



connectDB();

const app = express();

app.use(express.json());
/* app.get("/", (req, res) => {
    res.json({ message: "API running..."})
}) */

app.use('/menu', productRoutes);


const PORT = process.env.PORT || 8000

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
};

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));