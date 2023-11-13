import mongoose from 'mongoose';

// Connection URI
const uri = 'mongodb://localhost:27017/mydatabase';

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Event handling for connection success
db.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

// Event handling for connection error
db.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

// Event handling for disconnection
db.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Close the Mongoose connection when the Node.js application is terminated
process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose connection closed due to application termination');
    process.exit(0);
  });
});

export default mongoose;
