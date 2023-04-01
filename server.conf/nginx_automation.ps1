# Define variables
$CONTAINER_NAME = "server"
$NEW_CONFIG_FILE = "default.conf"
$NEW_CONFIG_PATH = "C:\path\to\config\folder\$NEW_CONFIG_FILE"

# Copy new config file to container
echo "*** Copying $NEW_CONFIG_FILE to $CONTAINER_NAME container... ***"
docker cp ./$NEW_CONFIG_FILE server:/etc/nginx/conf.d/$NEW_CONFIG_FILE

# Restart nginx server
echo "*** Restarting nginx server in $CONTAINER_NAME container... ***"
docker exec $CONTAINER_NAME nginx -s reload

# Output contents of new config file in container
echo "*** Contents of new $NEW_CONFIG_FILE file in $CONTAINER_NAME container: ***"
docker exec $CONTAINER_NAME cat /etc/nginx/conf.d/$NEW_CONFIG_FILE

# Display error logs from nginx in container
echo "*** Error logs from nginx in $CONTAINER_NAME container: ***"
docker logs -f server 2>&1 | Select-String "error"