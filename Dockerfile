# Multi-stage build: Build stage
FROM python:3.11-slim as builder

# Set working directory
WORKDIR /app

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

# Install system dependencies including Node.js
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# If no requirements.txt exists, install common MkDocs dependencies
RUN pip install --no-cache-dir \
    mkdocs \
    mkdocs-material \
    mkdocs-mermaid2-plugin \
    mkdocs-roamlinks-plugin \
    mkdocs-git-revision-date-localized-plugin \
    pymdown-extensions

# Copy the entire project
COPY . .

# Build the MkDocs site (this will only process the docs directory)
RUN mkdocs build

# Build ask-llamas static pages
WORKDIR /app/ask-llamas
RUN npm install && npm run build
WORKDIR /app

# Production stage with nginx
FROM nginx:alpine

# Copy built site from builder stage
COPY --from=builder /app/site /usr/share/nginx/html

# Copy static applications directly to web root
COPY --from=builder /app/ask-llamas /usr/share/nginx/html/ask-llamas
COPY --from=builder /app/academic-search /usr/share/nginx/html/academic-search
COPY --from=builder /app/questionnaires /usr/share/nginx/html/questionnaires

# Copy nginx configuration with cache headers
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 8080 to match fly.toml
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]