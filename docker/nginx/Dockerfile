FROM nginx
RUN apt-get update
RUN apt-get install software-properties-common -y
RUN apt-get install gnupg -y
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 8C47BE8E75BCA694
RUN add-apt-repository ppa:certbot/certbot -y
RUN apt-get install certbot python-certbot-nginx -y

ARG ENVIRONMENT
ARG API_DOMAIN
ARG APP_DOMAIN

RUN mkdir -p /var/www/_letsencrypt
ADD ./docker/nginx/scripts/configure-$ENVIRONMENT.sh /configure.sh

# Copy Optimized Nginx Config
ADD ./docker/nginx/conf/nginx.conf /etc/nginx/nginx.conf
ADD ./docker/nginx/conf/general.conf /etc/nginx/general.conf
ADD ./docker/nginx/conf/security.conf /etc/nginx/security.conf
ADD ./docker/nginx/conf/php_fastcgi.conf /etc/nginx/php_fastcgi.conf
ADD ./docker/nginx/conf/letsencrypt.conf /etc/nginx/letsencrypt.conf

# Update Nginx server block with correct domains for API and APP
ADD ./docker/nginx/$ENVIRONMENT.conf /etc/nginx/conf.d/default.conf
RUN ["chmod", "+x", "/configure.sh"]
RUN /configure.sh
