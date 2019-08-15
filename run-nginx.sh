for f in $(find /usr/share/nginx/html/static/js -name "*.js"); do envsubst < $f > "/usr/share/nginx/html/static/js/$(basename $f)"; done && \
  nginx -g 'daemon off;'
