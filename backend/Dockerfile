FROM node:16.14-alpine
WORKDIR /backend
COPY ./backend/package.json . 
RUN npm install
EXPOSE 5000
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]