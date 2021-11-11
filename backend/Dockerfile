FROM creepinson/alpine-pnpm

WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm run build

EXPOSE 8080

CMD ["pnpm", "run", "start"]
