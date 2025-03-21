from django.contrib import admin
from django.urls import path, include
import epicbox
from recommendation import views
from rest_framework.authtoken.views import obtain_auth_token
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path('generate_recommendations/', views.make_recommendation,
         name="generate_recommendations"),
    path('get_student_recommendations/', views.get_student_recommendation,
         name="get_student_recommendations"),
    path('get_society_recommendations/', views.get_society_recommendation,
         name="get_society_recommendations"),
    path('get_games/', views.get_games,
         name="get_games"),
]
