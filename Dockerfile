FROM node
WORKDIR /app
# only install dependencies first, appropriate for image system
COPY package.json .
RUN npm install
# then copy source files
COPY . . 
EXPOSE 3000
CMD ["node", "server.js"]