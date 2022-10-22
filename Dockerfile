FROM node:16-alpine

WORKDIR /usr/app/

COPY package*.json ./

RUN apk --no-cache add --virtual .builds-deps build-base python3

RUN npm install && npm rebuild bcrypt --build-from-source && npm cache clean --force

COPY . .

RUN npm run prisma:generate

EXPOSE 3030

CMD [ "npm", "start" ]