FROM node:latest

MAINTAINER frez70

COPY . /var/www
WORKDIR /var/www

RUN npm install

ENTRYPOINT [ "npm", "start"]''''''''''''''''''''''''