FROM creepinson/alpine-pnpm as build

WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm run build

FROM caddy:alpine as http

COPY ./Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /var/www/html
