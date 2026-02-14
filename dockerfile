From node:18
WORKDIR /app
COPY . /app
EXPOSE 4000
CMD ["node", "app.js"]


