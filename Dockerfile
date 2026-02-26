# Stage 1: Build llm-consensus-answers and copy all tools
FROM node:20-alpine AS node-builder
WORKDIR /app
COPY tools ./tools
WORKDIR /app/tools/llm-consensus-answers
RUN npm install && npm run build

# Stage 2: Build site with Zensical (no pip required)
FROM zensical/zensical AS zensical-builder
COPY . /docs
RUN zensical build

# Production stage with nginx
FROM nginx:alpine

# Copy built site from Zensical builder
COPY --from=zensical-builder /docs/site /usr/share/nginx/html

# Copy static tools (includes llm-consensus-answers generated HTML)
COPY --from=node-builder /app/tools /usr/share/nginx/html/tools

# Copy nginx configuration with cache headers
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 8080 to match fly.toml
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]