const app = require('./app');
const { connectDatabase } = require('./config/database');

connectDatabase();

app.listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`);
})