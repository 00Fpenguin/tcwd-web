FROM nginx

# Update and install required dependencies
RUN apt-get update && apt-get install -y \
    software-properties-common \
    gnupg \
    curl

# Add Certbot's repository and install Certbot and Nginx plugin
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 8C47BE8E75BCA694 \
    && apt-get update \
    && apt-get install -y certbot python3-certbot-nginx

# Define arguments
ARG ENVIRONMENT
ARG API_DOMAIN
ARG APP_DOMAIN

# Create directory for Let's Encrypt temporary files
RUN mkdir -p /var/www/_letsencrypt

# Add configuration and scripts
ADD ./docker/nginx/scripts/configure-$ENVIRONMENT.sh /configure.sh

# Add Nginx configuration files
ADD ./docker/nginx/conf/nginx.conf /etc/nginx/nginx.conf
ADD ./docker/nginx/conf/general.conf /etc/nginx/general.conf
ADD ./docker/nginx/conf/security.conf /etc/nginx/security.conf
ADD ./docker/nginx/conf/php_fastcgi.conf /etc/nginx/php_fastcgi.conf
ADD ./docker/nginx/conf/letsencrypt.conf /etc/nginx/letsencrypt.conf
ADD ./docker/nginx/$ENVIRONMENT.conf /etc/nginx/conf.d/default.conf

# Make the configuration script executable
RUN chmod +x /configure.sh

# Run the configuration script
RUN /configure.sh
