# syntax=docker/dockerfile:1
FROM node:17-alpine3.12 as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install -g npm@8.1.4
RUN npm install --force
COPY . /app
RUN npm run build --prod

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/front-end /usr/share/nginx/html