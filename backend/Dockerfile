FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]