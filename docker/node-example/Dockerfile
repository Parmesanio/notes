# Specify base image
FROM node:alpine

# Specify working directory in container
WORKDIR /user/app

# Copy package.json into image's WORKDIR
COPY ./package.json ./

# Install any dependencies
# Will only rerun if package.json changes from above COPY
RUN npm install

# Copy anything else into image's WORKDIR
COPY ./ ./

# Default command
CMD ["npm", "start"]