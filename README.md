# SuperheroesAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Superhero API
You will need an access token for API and you can get it on [SuperHero API](https://superheroapi.com/) . Create a file named ".env" and insert your API token, eg.:  ` ACCESS_TOKEN=your token ` .

## Development server

Open your browser without security, to not block the CORS. Eg.: `"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --user-data-dir="C:/Chrome dev session" --disable-web-security`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io). You will need to open the browser without security to follow the test results.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Docker

To execute the application using the Node in a Docker container, you can use the docker-compose. Eg.:

```

docker-compose -f "docker-compose.yml"  build
docker-compose up
google-chrome --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp

```
