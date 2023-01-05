# creating a layer
FROM node:alpine AS builder

WORKDIR /app

# copy dependencies list and install
COPY package.json .

RUN npm install --silent
# copy app files
COPY . .

# build
RUN npm run build

# production environment
FROM nginx:stable-alpine

# just copying important files from build folder to nginx
COPY --from=builder /app/build /usr/share/nginx/html

# listening on port 80

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
