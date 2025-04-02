# Redis with Docker

Redis is an open-source, in-memory data structure store that can be used as a database, cache, message broker, and queue. It supports various data structures such as strings, hashes, lists, sets, and more.

## Quick Start with Docker

### Pull Redis Image
```bash
docker pull redis
```

### Start Redis Container
```bash
docker run --name my-redis -p 6379:6379 -d redis
```

### Connect to Redis CLI
```bash
docker exec -it my-redis redis-cli
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| REDIS_PORT | 6379 | Redis port |
| REDIS_PASSWORD | - | Redis password (optional) |

## Features
- In-memory data storage
- Support for multiple data structures
- Built-in replication
- Automatic partitioning
- High availability

## Persistence Options
- RDB (Redis Database)
- AOF (Append Only File)

## Additional Resources
- [Redis Official Documentation](https://redis.io/documentation)
- [Redis Docker Hub](https://hub.docker.com/_/redis)