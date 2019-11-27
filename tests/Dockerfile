FROM bearstech/node-dev:12 AS dev

COPY package.json yarn.lock /tests/
WORKDIR /tests
RUN yarn install

FROM bearstech/node:12

RUN set -eux \
    &&  apt-get update \
    &&  apt-get install -y --no-install-recommends \
                wait-for-it \
    &&  apt-get clean \
    &&  rm -rf /var/lib/apt/lists/*

ARG UID=501
RUN adduser --system --disabled-password --uid ${UID} test

WORKDIR /tests

COPY entrypoint.sh /entrypoint.sh
COPY --from=dev /tests /tests
ENV PATH=/tests/node_modules/.bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

COPY *.js /tests/

ENTRYPOINT /entrypoint.sh
USER test
CMD mocha test.js
