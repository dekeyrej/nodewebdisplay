# FROM node:lts-alpine
# EXPOSE 3001
# WORKDIR /home/node/app
# COPY . .
# RUN npm install
# # CMD ["npm", "start"]
# RUN npm run build
# RUN npm install -g serve
# CMD ["serve", "build", "-s", "-l", "3001"]

FROM node:lts-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 3001
CMD ["nginx", "-g", "daemon off;"]