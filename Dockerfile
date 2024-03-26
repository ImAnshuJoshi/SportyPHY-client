FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# DOCKER_BUILDKIT=0 docker build -t clientapp .
# Successfully built 9aa52fd4e21d
# Successfully tagged clientapp:latest