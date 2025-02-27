# Use Node.js LTS version
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy rest of the app files
COPY . .

# Expose port
EXPOSE 5000

# Start the application
CMD ["node", "server.js"]
