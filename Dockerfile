FROM navikt/node-express:12.2.0

WORKDIR /app
COPY package.json /app

RUN npm install

EXPOSE 3000