FROM node:16-alpine as development


WORKDIR /usr/app/
# Copy package and package-lock
COPY package*.json ./

RUN npm install

# Dependenci to rebuild bcrypt
# RUN apk --no-cache add --virtual .builds-deps build-base python3
# Rebuild bcrypt
# RUN npm rebuild bcrypt --build-from-source

#  Copy source code
COPY . ./

# # Copy prisma
# COPY prisma prisma

# Copy tsconfig
# COPY tsconfig*.json ./

# Generate prisma client
RUN npm run prisma:generate

# Build code
RUN npm run build

FROM node:16-alpine as production

WORKDIR /usr/app/

# Copy package and package-lock files
COPY package*.json ./

# Copy prisma schemes 
COPY prisma prisma

COPY .env ./

# Install production deps
RUN npm ci --omit=dev

# Copy source code from develop
COPY --from=development /usr/app/dist ./dist


# Exposing port 3030
EXPOSE 3030

CMD ["node", "./dist/index.js" ]