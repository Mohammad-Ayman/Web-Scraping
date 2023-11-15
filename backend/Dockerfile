# Use an official Node runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

ENV PORT=3030

# Expose the port that your Express app will run on
EXPOSE 3030

# Define the command to run your app
CMD ["npm", "start"]
