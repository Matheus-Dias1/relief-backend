FROM node:lts

WORKDIR /app

COPY package.json /app
RUN npm i --only=production && npm cache clean --force

COPY . /app

EXPOSE 3000

CMD ["node", "src/index.js"]