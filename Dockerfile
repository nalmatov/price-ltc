FROM node:20-alpine

WORKDIR /app

RUN npm install -g npm@11.2.0

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]