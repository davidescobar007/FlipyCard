#!/bin/bash

# Copy default.conf file to the nginx container
docker cp default.conf server:/etc/nginx/conf.d/default.conf

# Restart the nginx server
docker exec server nginx -s reload

# Output the contents of the new default.conf file inside the container
docker exec server cat /etc/nginx/conf.d/default.conf

# Display the error logs from nginx inside the container
docker logs -f server 2>&1 | grep error

