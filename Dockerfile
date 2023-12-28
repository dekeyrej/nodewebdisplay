FROM node:lts
EXPOSE 3000
WORKDIR /home/node/app
COPY . .
RUN npm install
CMD ["npm", "start"]
# RUN npm run build
# RUN npm install -g serve
# CMD ["serve", "-s build"]
