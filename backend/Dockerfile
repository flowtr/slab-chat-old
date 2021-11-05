FROM creepinson/alpine-pnpm

WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm run build

CMD ["pnpm", "run", "start"]
