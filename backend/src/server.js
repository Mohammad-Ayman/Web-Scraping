
import express from 'express';
import mongoose from 'mongoose';
import apiRoutes from './routes/apiRoutes.js';
import fetchRoute from './routes/fetchRoute.js';

const app = express();
const port = process.env.PORT || 3000;

// mongoose.connect('mongodb://localhost/instagramApp', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api', apiRoutes);
app.use('/fetch', fetchRoute);
const server = app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

export default server;