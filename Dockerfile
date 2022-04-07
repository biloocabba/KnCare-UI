FROM node:14.18-alpine as build-stage
WORKDIR /app
COPY package*.json .
RUN npm install
COPY ./ /app/
RUN npm run build

# Copy the build folde inside ngnix 
FROM nginx:alpine as prod
#RUN rm -rf ./*
COPY --from=build-stage /app/build/ /usr/share/nginx/html
#CMD ["nginx", "-g", "daemon off;"]
ENTRYPOINT ["nginx", "-g", "daemon off;"]