FROM node:16-alpine

WORKDIR /usr/app/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3030

CMD [ "npm", "start" ]