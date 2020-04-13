# Specify base image
FROM node:alpine

# Specify working directory in container
WORKDIR '/app';

# Copy package.json if any changes are made to it
COPY ./package.json .

# Install dependencies if package.json changes
RUN npm install

# Copy the rest into the WORKDIR
COPY . .

# Default start command
CMD ["npm", "start"]