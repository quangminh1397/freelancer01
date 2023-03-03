FROM node:14-buster
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "start"]