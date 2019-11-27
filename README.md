# Demo Browserless

Functional tests with [docker](https://en.wikipedia.org/wiki/Docker_%28software%29), [browserless](https://github.com/browserless/chrome), [mocha](https://mochajs.org/) and [chai](https://www.chaijs.com).

Browserless is a wrapped Chrome, with all the bells and whistles, handling the [webdriver](https://w3c.github.io/webdriver/) protocol, and a cute debugging UI.

Functional tests are written in js, because most target web ui uses js too.
Mocha + Chai, because they are well documented.

Webdriver can be used from python, ruby, php, it's your choice.

This demo is truly headless, you should put it in a CI.

## Demo

Build the images

    make build

Launch tests

    make test

## Licence

3 terms BSD Licence, ©2019 Bearstech
