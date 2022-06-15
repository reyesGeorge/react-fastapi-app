FROM node:17

WORKDIR /react_fastapi_app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]