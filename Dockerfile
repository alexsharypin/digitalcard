FROM node:24-alpine AS base
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable && corepack prepare pnpm@10.29.3 --activate
WORKDIR /app

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM deps AS build
COPY . .
RUN pnpm build

FROM node:24-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
# prisma CLI и tsx нужны в рантайме для миграций и seed при старте
ENV PATH=/app/node_modules/.bin:$PATH
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/src/prisma/generated ./src/prisma/generated
COPY package.json prisma7.config.ts ./
COPY prisma ./prisma
USER node
EXPOSE 3000
CMD ["sh", "-c", "prisma migrate deploy && prisma db seed && node dist/main.js"]
