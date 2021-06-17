# stage1 as builder
FROM node:10-alpine as builder
RUN mkdir /react-ui
WORKDIR /react-ui

# copy the package.json to install dependencies
COPY package.json /react-ui


# Build the project and copy the files
RUN npm install -g npm@7.13.0
RUN ls -al
COPY . .
RUN ls -al
#RUN npm run build
RUN npm install
RUN ls -al
RUN npm run build
COPY . /react-ui


FROM nginx:alpine

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /react-ui/build /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
