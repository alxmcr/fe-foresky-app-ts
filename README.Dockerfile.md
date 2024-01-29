# Shopdy app | Dockerfile

## Build an image from a `Dockerfile`

```bash
docker build -t <image_name>:<tab_image_name> .

## Example
docker build -t img_react_foresky_app:v0.0.1 .
```

## Create and run a new container from an image

Flags:

- `-d`: detached
- `-p`: ports (`HOST:CONTAINER`)
- **Change** the `your-secret-key`


```bash
docker run -d -p 7007:7007 \
    --name cont_react_foresky_app \
    -e VITE_APP_PORT='7007' \
    -e VITE_API_KEY_WEATHER='your_api_key' \
    img_react_foresky_app:v0.0.1
```

## Environment variables

- Container is **running**

```bash
docker exec <container_name_or_id> env

# example
docker exec cont_react_foresky_app env
```

- Container is **not running**

```bash
docker container inspect <container_name_or_id> --format='{{json .Config.Env}}'

# example
docker container inspect cont_react_foresky_app --format='{{json .Config.Env}}'
```