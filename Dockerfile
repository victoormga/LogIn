#Use an official Node image
FROM node:18-alpine

#Set the working directory
WORKDIR /app

#Copy neccesary files
COPY package*.json ./

#Install dependencies
RUN npm install

#Copy the rest of the files
COPY . .

#Expose the port the app runs on
EXPOSE 3000 8080

#Command to run the application
CMD ["node", "server.js"]
