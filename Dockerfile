FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
COPY tsconfig*.json ./
COPY tslint.json ./

# Bundle app source
COPY . .

# Install npm packages
RUN npm install

# Run the test
RUN CI=true npm test

# Make a build
RUN npm run build
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 3000
CMD [ "npm", "start" ]