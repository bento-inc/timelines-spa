# Build
FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# RUNTIME
FROM node:24-alpine AS run
WORKDIR /app
COPY --from=build /app/node_modules /app/node_modules
COPY . .
EXPOSE 5173
CMD ["npm", "run", "build"]
