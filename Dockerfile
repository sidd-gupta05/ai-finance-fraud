# Stage 1: Build the Next.js app
FROM node:18-alpine AS builder  

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps  # Keep legacy-peer-deps if required
COPY . .
RUN npm run build

# Stage 2: Final image
FROM python:3.9-slim
WORKDIR /app

# Copy Python requirements and install dependencies
COPY model/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt
RUN pip install tensorflow

# Copy the Python app
COPY model/* .

# Copy the start script
COPY start.sh /start.sh
RUN chmod +x /start.sh



# Expose ports
EXPOSE 3000 5000

FROM node:18-alpine 
WORKDIR /app

COPY --from=builder /app . 

# Start both services
CMD ["/start.sh"]