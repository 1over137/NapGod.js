FROM node:carbon
ENV NODE_ENV=production
WORKDIR /usr/src/napgodjs-build

COPY package.json /usr/src/napgodjs-build
COPY package-lock.json /usr/src/napgodjs-build
RUN npm install nodemon -g
COPY . /usr/src/napgodjs-build
RUN mkdir /napcharts
CMD ["nodemon", "app.js"]
