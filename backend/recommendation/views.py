from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from recommendation.scripts.storeData import get_recommendation
import pandas as pd
# Create your views here.


@api_view(['GET', ])
def make_recommendation(request):
    data = get_recommendation()
    data.to_csv('Recommendations.csv')
    return Response("Added successfully")


@api_view(['GET', ])
def get_games(request):
    df = pd.read_csv('Recommendations.csv')
    games = df["Title"].values
    return Response({'games': games})


@api_view(['POST', ])
def get_student_recommendation(request):
    df = pd.read_csv('Recommendations.csv')
    t = df[df["Title"] == request.data["Title"]]
    l = {}
    l["game1"] = t["game1"]
    l["game2"] = t["game2"]
    l["game3"] = t["game3"]
    l["game4"] = t["game4"]
    l["game5"] = t["game5"]
    
    return Response(l)


@api_view(['POST', ])
def get_society_recommendation(request):
    df = pd.read_csv('Recommendations.csv')
    l = ["game1", "game2", "game3", "game4", "game5"]
    title = request.data["Title"]
    games = df[df["Title"] == title][l].values[0]
    print(games[0])
    game = games[0]
    price = df[df["Title"] == game]['price'].values
    for x in games:
        if df[df["Title"] == x]['price'].values < price:
            price = df[df["Title"] == x]['price'].values
            game = x

    return Response({"Game": game, "Price": price})
