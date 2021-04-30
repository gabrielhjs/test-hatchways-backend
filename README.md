# Hatchways Backend Test
## API developed for Hatchways backend testing

This API is developed in NodeJs, Express and Typescript, using SOLID principles to increase scalability and facilitate the reading of the project code.

# Instructions

## Setup
Run:
```
yarn install
```

## Environments
The [.env](.env) file has the project's environment variables.
- REDIS_PORT: port where the redis server is running;
- HATCHWAYS_API_URL: url to fetch data from Hatchway API;
- CACHE_EXPIRE_TIME_IN_SECONDS: time to expire the requests cache, in seconds.

## Start Typescript code server
Run:
```
yarn dev
```
The server starts at:
[http://localhost:3333/](http://localhost:3333/api/ping)


## Transpile to Javascript
Run:
```
yarn build
```

## Start Javascript server
Run:
```
yarn start
```
The server starts at:
[http://localhost:3333/](http://localhost:3333/api/ping)

## Tests
To run the tests: 
```
yarn test
```

# Comments

## Cache
The project has two cache providers, [Node-cache](https://www.npmjs.com/package/node-cache) and [Redis](https://www.npmjs.com/package/redis), natively. By default the project is using Node-cache for caching, to change to Redis just change:
```javascript
const cacheProvider = new NodeCacheProvider()
```
> at file: [src/index.ts](./src/index.ts)

to:
```javascript
const cacheProvider = new RedisCacheProvider()
```
> at file: [src/index.ts](./src/index.ts)

> ### ***However***, to use Redis it is necessary to have a Redis server running in your environment on the same port as the [REDIS_PORT](.env) environment variable.

## Tests
If you don't have a Redis server in your local environment, the Redis provider's unit tests will fail.


---

by **[Gabriel Sá](https://github.com/gabrielhjs)** | Software Developer :smile:
