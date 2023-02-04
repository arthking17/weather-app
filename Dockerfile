# Stage 1
FROM node:19.6.0-alpine3.17 AS build
WORKDIR /app
#allow node to use app folder
RUN chown -R node:node /app
#switch to node user
#USER node
COPY package.json package-lock.json .
RUN npm ci
COPY . .
RUN npm run build --prod

# Stage 2
FROM nginx:alpine
## add permissions for nginx user
RUN chown -R nginx:nginx /var/cache/nginx && \
        chown -R nginx:nginx /var/log/nginx && \
        chown -R nginx:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
        chown -R nginx:nginx /var/run/nginx.pid
#switch to nginx user        
USER nginx
COPY --from=build /app/dist/weather-app /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]