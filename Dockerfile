FROM node

WORKDIR /usr/etc/app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "start:dev" ]