FROM node:16-alpine as build-stage
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build


FROM nginx:latest
COPY --from=build-stage /app/build/ /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
# COPY ssl.csr /etc/nginx/ssl.csr
# COPY ssl.key /etc/nginx/ssl.key