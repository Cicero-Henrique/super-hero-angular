FROM node:alpine as angular
WORKDIR /app
COPY package.json /app
COPY .env ./app
RUN npm uninstall -g @angular/cli
RUN npm install -g @angular/cli --silent
RUN ng update
RUN npm update
COPY . .
CMD [ "ng", "serve", "--host", "0.0.0.0"]

# docker build -t superhero-angular .
# docker run -p 8081:80