
from fastapi import FastAPI
from pydantic import BaseModel
import tensorflow as tf
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from fastapi.middleware.cors import CORSMiddleware




app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class PredictionRequest(BaseModel):
    data: list

class UserData(BaseModel):
    user: str
    data: list[float]

class Frauds(BaseModel):
    users: list[UserData]

model = tf.keras.models.load_model('ann_model.keras')    

@app.post("/predict")
async def predict(request: PredictionRequest):
    
    # Preprocess the input data
    data = np.array(request.data)
    data = data.reshape(1, -1)
    
    # Make prediction
    prediction = model.predict(data)
    
    return {"prediction": prediction.tolist()}
    

@app.post("/frauds")
async def predict_frauds(request: Frauds):
    results = []
    for user_data in request.users:
        # Convert the user's data to a NumPy array and reshape it
        data = np.array(user_data.data).reshape(1, -1)
        
        # Make a prediction
        prediction = model.predict(data)
        
        # Determine if the user is a fraudster (assuming binary classification)
        is_fraudster = "Yes" if prediction[0][0] > 0.5 else "No"
        
        # Append the result to the results list
        results.append({
            "user": user_data.user,
            "is_fraudster": is_fraudster,
            "prediction_score": float(prediction[0][0])  # Optional: Include the raw prediction score
        })
    
    return {"results": results}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)