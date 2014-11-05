# micro-client

I have recently been trying to learn more about [microservices](http://shop.oreilly.com/product/0636920033158.do). This is a simple angular app that makes two external calls to small ruby apps running on heroku.

## "microservices"
- [micro-users](https://github.com/gogogarrett/micro-api-users)
- [micro-subscriptions](https://github.com/gogogarrett/micro-api-subscriptions)

These small ruby apps just return small _mostly_ static json that is then just manipulated on the client.

## Goals
- [x] learn basic angular
- [x] build an api with [grape](https://github.com/intridea/grape) and [roar](https://github.com/apotonick/roar)
- [ ] build a microservice that calls out to other microservices
- [ ] learn how to deploy using [docker](https://www.docker.com/) instead of [heroku](http://heroku.com/)
- [ ] look into contract testing - maybe with something like [pact](https://github.com/realestate-com-au/pact)

## How to help
- Please tell me what I'm doing wrong! I'd love to hear feedback from others who have more experience.
- Suggest ideas of things to build
