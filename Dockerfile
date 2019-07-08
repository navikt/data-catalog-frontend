FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
COPY tsconfig*.json ./
COPY tslint.json ./

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]