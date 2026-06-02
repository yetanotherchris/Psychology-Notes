# Stage 1: Build site with Zensical (no pip required)
FROM zensical/zensical AS zensical-builder
COPY . /docs
RUN zensical build

# Stage 2: Build cs2-flicker-paradigm React app
FROM node:20-alpine AS cs2-flicker-builder
WORKDIR /app
COPY tools/cs2-flicker-paradigm/package*.json ./
RUN npm ci
COPY tools/cs2-flicker-paradigm/ ./
RUN npm run build

# Production stage with nginx
FROM nginx:alpine

# Copy built site from Zensical builder
COPY --from=zensical-builder /docs/site /usr/share/nginx/html

# Copy static tools (pre-built HTML files committed to repo)
COPY tools /usr/share/nginx/html/tools

# Replace cs2-flicker-paradigm source with built static output
RUN rm -rf /usr/share/nginx/html/tools/cs2-flicker-paradigm
COPY --from=cs2-flicker-builder /app/dist /usr/share/nginx/html/tools/cs2-flicker-paradigm

# Copy nginx configuration with cache headers
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 8080 to match fly.toml
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]