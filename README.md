# Data-Driven Customer Segmentation and Game Recommendations for SFU

This project involves analyzing survey data to segment customers and recommend Nintendo Switch games based on gameplay preferences, using clustering and NLP techniques.

## 🧠 Overview

- Scraped game data from Wikipedia using BeautifulSoup.
- Collected and processed survey data using Google Forms.
- Engineered an end-to-end pipeline to clean, preprocess, and analyze game data.
- Built a recommendation engine using NLP techniques like TF-IDF, cosine similarity, and hierarchical clustering.
- Deployed a web-based interface using Django (backend) and React (frontend).

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

## 📌 Key Insight

Achieved over **89% recommendation accuracy** by aligning student preferences with game genres and storytelling depth.

---

🎮 Built with a passion for blending data and gaming.
