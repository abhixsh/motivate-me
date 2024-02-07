# Use a lightweight web server as a base image
FROM nginx:alpine

# Copy the HTML project files to the default web server directory
COPY . /usr/share/nginx/html
