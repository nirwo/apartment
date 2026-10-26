FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./
EXPOSE 8080
CMD ["yarn", "run", "serve"]
