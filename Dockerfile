# build environment
FROM node:14-alpine as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY . ./
RUN yarn install
RUN npm run build

# Heroku

# production environment
FROM nginx:1.18.0-alpine
RUN rm -rf /etc/nginx/conf.d
RUN mkdir -p /etc/nginx/conf.d
COPY ./default.conf /etc/nginx/conf.d/

COPY --from=builder /app/build /usr/share/nginx/html/

CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'

# production environment
#FROM nginx:stable-alpine
#COPY --from=build /app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]