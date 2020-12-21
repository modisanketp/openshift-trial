FROM docker.io/node:10

WORKDIR /usr/src/app

EXPOSE 3000

COPY . .

RUN npm build

CMD ["node", "app.js"]
