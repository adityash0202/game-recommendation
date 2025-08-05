# Data-Driven Customer Segmentation and Game Recommendations for SFU

This project analyzes survey data and large-scale scraped game data to segment users and recommend Nintendo Switch games based on gameplay preferences, using clustering, NLP, and machine learning techniques.

## 🧠 Overview

- Scraped **~8,000 game records** from Wikipedia and SwitchScores using BeautifulSoup.  
- Collected and processed student survey data via Google Forms.  
- Built an **end-to-end pipeline** for cleaning, preprocessing, and integrating multi-source datasets.  
- Developed a **recommendation engine** using TF-IDF, cosine similarity, and hierarchical clustering (Ward linkage).  
- Trained a **decision tree classifier** to predict game success (**F1-score: 0.84, Recall: 0.97**).  
- Deployed a **full-stack web application** with Django (backend) and React (frontend) for real-time recommendations.

## ⚙️ Tech Stack

- Python  
- Django  
- React  
- SQLite3  
- BeautifulSoup  
- Scikit-learn  
- Pandas, NumPy, Matplotlib  
- TF-IDF, PCA, Cosine Similarity  

## 📊 Notebooks Included

- `EDA.ipynb` – Exploratory data analysis of survey/game data.  
- `WikipediaWebScraping.ipynb` – Game data scraping logic.  
- `Model.ipynb` – Game recommender engine logic.  
- `data_preparation.ipynb` – Preprocessing and merging datasets.  
- `SwitchScoresWebScraping.ipynb` – Additional scraping logic.  

## 📂 Folders

- `backend/` – Django backend with recommendation model and API.  
- `gui/` – React frontend for user interaction and game suggestions.  

## 📄 Files

- `finalData.csv` – Final merged game + survey dataset.  
- `SwitchScores.csv`, `wikipedia.csv` – Raw datasets.  
- `Survey_ Data-Driven Customer Segmentation and Game Recommendations for SFU.pdf` – Project report.  

## 📌 Key Results

- Achieved **1.34 recommendation accuracy** (intra/inter similarity ratio).  
- Built well-defined clusters (**Silhouette Score: 0.62**) for optimized cost-effective game selections.  
- Achieved **F1-score of 0.84** and **recall of 0.97** in predicting successful games.  

---

🎮 Built with a passion for blending data and gaming.
