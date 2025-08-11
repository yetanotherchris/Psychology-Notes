# Use Python 3.11 slim image as base
FROM python:3.11-slim

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

# Expose the port that MkDocs will serve on
EXPOSE 8000

# Command to serve the built site
CMD ["mkdocs", "serve", "--dev-addr=0.0.0.0:8000"]