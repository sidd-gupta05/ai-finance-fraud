#!/bin/bash
# Start the Python server
uvicorn main:app --host 0.0.0.0 --port 5000 --reload &

# Start the Next.js app
cd app 
npm run dev &

# Wait for both processes to finish
wait