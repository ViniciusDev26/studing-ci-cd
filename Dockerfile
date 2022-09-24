FROM node:16
WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN yarn prisma migrate deploy
RUN yarn build

EXPOSE ${PORT}

ENTRYPOINT [ "yarn", "start" ]