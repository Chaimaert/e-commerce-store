FROM node:latest as frontend-build
WORKDIR /app/Web
COPY ./Web/package.json ./Web/package-lock.json ./
RUN npm install
COPY Web .
FROM nginx:alpine
COPY --from=frontend-build /app/Web/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]