set -e
for f in $(find /usr/share/nginx/html/static/js -name "*.js"); do
  for v in $(env | grep REACT_APP); do
    sed -i "s|$(echo $v | cut -d'=' -f1)|$(echo $v | cut -d'=' -f2)|g" "/usr/share/nginx/html/static/js/$(basename $f)"
  done
done
nginx -g 'daemon off;'
