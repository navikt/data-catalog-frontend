FROM navikt/common:0.1 AS navikt-common
FROM nginx

COPY --from=navikt-common /init-scripts /init-scripts
COPY --from=navikt-common /entrypoint.sh /entrypoint.sh
COPY --from=navikt-common /dumb-init /dumb-init

COPY run-nginx.sh /run-script.sh
RUN chmod +x /entrypoint.sh /run-script.sh

ADD build /usr/share/nginx/html/

EXPOSE 80
ENTRYPOINT ["/dumb-init", "--", "/entrypoint.sh"]