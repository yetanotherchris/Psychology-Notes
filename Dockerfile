# Multi-stage build: Build stage
FROM python:3.11-slim as builder

# Set working directory
WORKDIR /app

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
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

# Copy additional folders into docs directory for MkDocs
RUN cp -r ask-llamas docs/ && cp -r academic-search docs/

# Build the MkDocs site
RUN mkdocs build

# Production stage with nginx
FROM nginx:alpine

# Copy built site from builder stage
COPY --from=builder /app/site /usr/share/nginx/html

# Copy nginx configuration with cache headers
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 8080 to match fly.toml
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]