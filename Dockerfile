
# Use an official Node.js runtime as the base image. alpine version is the light version
FROM node:alpine

# Set the working directory in the container to /usr/src/app
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . /usr/src/app

# Make port 4200 available to the world outside this container
RUN npm install -g @angular/cli

# Install any needed packages specified in package.json
RUN npm install

# Make port 4200 available to the world outside this container
CMD ["ng", "serve", "--host", "0.0.0.0"]