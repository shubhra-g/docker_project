FROM node:16.14-alpine
WORKDIR /frontend
COPY ./frontend/package.json .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]