# Use official Node image
#It pulls the official Node.js image,
FROM node:18-alpine  

# Set working directory
#This creates the /app directory inside the image if it doesn't exist 
#and sets it as the default location for all subsequent instructions
WORKDIR /app

# Copy package files and install
COPY package*.json ./
#The --only=production flag ensures that only the packages listed 
#under dependencies in package.json are installed, skipping devDependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Run app
CMD ["node", "server.js"]
