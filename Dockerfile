FROM navikt/node-express:12.2.0

COPY . /src
WORKDIR /src

RUN npm install

RUN npm run bild

EXPOSE 3000