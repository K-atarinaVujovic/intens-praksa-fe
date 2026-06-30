# syntax=docker/dockerfile:1

ARG NODE_VERSION=24.18.0

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production


WORKDIR /usr/src/app

USER node

COPY . .

EXPOSE 3000

# Run the application.
CMD npx serve .
