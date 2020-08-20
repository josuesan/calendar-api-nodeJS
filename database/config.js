const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(
      process.env.DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      }
    );
    console.log('DB connected')
  } catch (error) {
    console.log(error);
    throw new Error('Unable to connect to Database');
  }
}

module.exports = {
  dbConnection
}