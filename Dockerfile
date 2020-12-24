FROM docker.io/node:10

WORKDIR /usr/src/app

RUN chgrp -R 0 /usr/src & chmod -R u=g /usr/src

RUN touch /tmp/live

EXPOSE 3000

COPY . .

RUN npm install

CMD ["node", "app.js"]
