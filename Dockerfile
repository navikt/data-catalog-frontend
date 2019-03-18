FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
COPY tsconfig*.json ./
COPY tslint.json ./

# Bundle app source
COPY . .

RUN npm install
RUN npm run build
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 3000
CMD [ "npm", "start" ]