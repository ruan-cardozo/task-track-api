FROM node:20

WORKDIR /app

COPY package*.json ./

RUN yarn global add @nestjs/cli 

RUN yarn install

COPY . .

CMD [ "yarn", "run", "start:dev" ]