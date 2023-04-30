FROM alpine:latest 

WORKDIR /app 
RUN apk add python3
RUN apk add php 
RUN apk add --no-cache git make musl-dev go curl bash
RUN apk add --no-cache nodejs npm 
RUN npm install -g typescript

COPY ./backend/package*.json ./

# USER node

RUN npm install

COPY --chown=node:node ./backend .

EXPOSE 3000

CMD [ "npm","run", "dev" ]

