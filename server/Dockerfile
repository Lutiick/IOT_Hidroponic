FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine AS production
WORKDIR /app
COPY package*.json ./
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
RUN npm install 
COPY --from=build /app/dist ./dist
COPY --from=build /app/.sequelizerc ./.sequelizerc
COPY --from=build /app/migrations ./migrations
EXPOSE 5000
CMD ["sh", "-c", "npm run migration:up && npm run seed:all && npm run start:prod"]



