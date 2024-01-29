ARG NODE_VERSION=20.10.0

FROM node:${NODE_VERSION}-alpine

# Arguments
ARG VITE_APP_PORT
ARG VITE_API_KEY_WEATHER

# Environment variables
ENV VITE_APP_PORT=${VITE_APP_PORT}
ENV VITE_API_KEY_WEATHER=${VITE_API_KEY_WEATHER}

WORKDIR /fe-foresky-app

# copies the contents of the current directory (where the Dockerfile is located) 
# into the /fe-foresky-app directory in the container.
COPY . .

RUN npm install

# Expose the port specified by the environment variable
# - (January 2024): Vite + React (for default): `5173`
EXPOSE ${API_PORT}

CMD ["npm", "run", "dev"]