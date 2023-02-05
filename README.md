# WeatherApp⛈️

[![Docker Image CI](https://github.com/arthking17/weather-app/actions/workflows/docker-image.yml/badge.svg)](https://github.com/arthking17/weather-app/actions/workflows/docker-image.yml)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.
Display weather information by region🌧️☀️☔⛈️🌈

## Live app

Found the link in about section on top right of the page

## Screenshot

![App Screenshot](src/assets/app-screenshot.png)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## BUild and push the docker image
```sh
docker build -t wi11i4m/weather-app:1.0 .
docker push wi11i4m/weather-app:1.0
```

## RUn the docker image
```sh
docker run --rm -d --name weather-app -p 4200:80 weather-app:1.0
```