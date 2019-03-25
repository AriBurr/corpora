from django.urls import path
from . import views

urlpatterns = [
    path('generate_recommendations/', views.RecommenderView.as_view(), name='recommender_view'),
]