# Stage 1
FROM node:15.1.0 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
# Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/weather-app /usr/share/nginx/html