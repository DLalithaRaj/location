# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Expose the port on which your NestJS application will run (change it to your actual port)
EXPOSE 3000

# Define the command to run your application
CMD [ "npm", "run", "start:dev" ]
