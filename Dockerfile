FROM node:16.14.2-alpine as build-stage
COPY package*.json ./
RUN npm ci
COPY ./ ./
RUN npm run build

# Copy the build folde inside ngnix 
FROM nginx:alpine as prod
COPY --from=build-stage ./build/ /usr/share/nginx/html
#CMD ["nginx", "-g", "daemon off;"]
ENTRYPOINT ["nginx", "-g", "daemon off;"]
