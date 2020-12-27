FROM node:14

ENV LANG C.UTF-8
ENV TZ Asia/Tokyo

RUN apt-get update && \
    apt-get install -y vim less

WORKDIR /src

RUN npm install -g npm && \
    npm install -g create-nuxt-app@latest


ENV HOST 0.0.0.0
EXPOSE 3000
CMD ["npm", "run", "dev"]