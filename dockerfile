FROM nginx:1.15
#COPY nginx.conf /etc/nginx/conf.d/nginx.conf

WORKDIR /usr/share/nginx/html
COPY dist/ToDoList .

CMD ["nginx", "-g", "daemon off;"]
