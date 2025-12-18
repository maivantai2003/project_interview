FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
ARG VITE_URL_API
ARG VITE_APP_HUB_URL
ENV VITE_URL_API=${VITE_URL_API}
ENV VITE_APP_HUB_URL=${VITE_APP_HUB_URL}
RUN npm run build
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]