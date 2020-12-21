FROM docker.io/node:10

WORKDIR /usr/src/app

COPY app.js .

CMD ["node", "app.js"]
