# Use the official Node.js image from Docker Hub with a specific version
FROM node:20.11.1-alpine3.19

# Create a new group named 'khai' and a new user 'khai' in that group
RUN addgroup khai && adduser -S -G khai khai

# Set the working directory for the container
WORKDIR /app

# Copy package files first for caching optimization
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Create the 'data' directory and change ownership to 'khai'
RUN chown -R khai:khai /app

# Switch to 'khai' user
USER khai

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
