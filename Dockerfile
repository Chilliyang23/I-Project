FROM node:22-slim

WORKDIR /app

COPY pacakage*.json ./

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "node", "app.js" ]