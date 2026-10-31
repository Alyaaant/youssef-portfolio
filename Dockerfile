FROM node:22.16.0-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY package.json server.mjs ./
COPY index.html presentation.html app.js presentation.js styles.css presentation.css ./
COPY assets ./assets
RUN chown -R node:node /app
USER node
EXPOSE 3000
CMD ["node","server.mjs"]
