# base image
FROM node:14.15.0-alpine3.12

# Set working directory
WORKDIR /var/www/frontend

ENV PATH /var/www/frontend/node_modules/.bin:$PATH

COPY ./frontend/package.json /var/www/frontend
COPY ./frontend/yarn.lock /var/www/frontend

# Install dependencies
RUN npm install

COPY ./frontend/ /var/www/frontend
