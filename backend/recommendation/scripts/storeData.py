import sqlite3
from nltk.stem.snowball import SnowballStemmer
import re
import pandas as pd
# For user top 5 recommneded
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

import nltk
nltk.download('punkt')
# nltk.download('punkt')


def get_recommendation():
    df = pd.read_csv("./finalData.csv")

    df['price'] = df['price'].str.replace('£', '').astype(float)
    indexes = df.index[df['rating'].apply(np.isnan)]
    for x in indexes:
        df['rating'][x] = df[df['Publisher'] ==
                             df['Publisher'][x]]['rating'].mean()
    df['rating'].fillna((df['rating'].mean()), inplace=True)

    ind = df.index[df['rating'].apply(np.isnan)]
    for x in ind:
        df['price'][x] = df[df['Publisher'] ==
                            df['Publisher'][x]]['price'].mean()

    df['price'].fillna((df['price'].mean()), inplace=True)

    df = df.reset_index(drop=True)
    games_df = df

    # Create an English language SnowballStemmer object
    stemmer = SnowballStemmer("english")

    # Define a function to perform both stemming and tokenization

    def tokenize_and_stem(text):
        tokens = []
        sentences = nltk.sent_tokenize(text)
        i = 0
        while i < len(sentences):
            words = nltk.word_tokenize(sentences[i])
            j = 0
            while j < len(words):
                tokens.append(words[j])
                j += 1
            i += 1

        i = 0
        filtered_tokens = []
        while i < len(tokens):
            if re.search('[a-zA-Z]', tokens[i]):
                filtered_tokens.append(tokens[i])
            i += 1

        stems = []
        i = 0
        while i < len(filtered_tokens):
            stems.append(stemmer.stem(filtered_tokens[i]))
            i += 1

        return stems

    # Create a TfidfVectorizer object with parameters
    tfidf_vectorizer = TfidfVectorizer(max_df=0.8, max_features=5000,
                                       min_df=0.3, stop_words='english',
                                       use_idf=True, tokenizer=tokenize_and_stem,
                                       ngram_range=(1, 3))

    # Fit and transform the tfidf_vectorizer
    tfidf_matrix = tfidf_vectorizer.fit_transform(
        [x for x in games_df["Plots"]])

    # Get the game titles from the dataframe
    game_titles = games_df['Title'].values

    final_recommendations = pd.DataFrame()
    final_recommendations["Title"] = games_df["Title"]
    final_recommendations["price"] = games_df["price"]

    # Loop through each game title
    for i, title in enumerate(game_titles):
        # Compute the cosine similarity between the plot of the game title and the plots of all games in the dataframe
        cos_similarities = cosine_similarity(tfidf_matrix[i], tfidf_matrix)[0]

        # Get the indices of the top 5 similar games
        similar_games_indices = cos_similarities.argsort()[::-1][1:6]

        for i in range(5):
            final_recommendations["game" +
                                  str(i+1)] = games_df["Title"][similar_games_indices[i]]

    return final_recommendations
