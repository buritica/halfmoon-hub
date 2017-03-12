FROM node:7.7

# install yarn
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy app dependency files
ADD package.json yarn.lock /tmp/

# install packages and link to tmp file
RUN cd /tmp && yarn
RUN cd /usr/src/app && ln -s /tmp/node_modules

# bundle app
COPY . /usr/src/app

EXPOSE 3000

CMD [ "yarn", "start" ]
