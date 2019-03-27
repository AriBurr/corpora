from django.urls import path
from . import views

urlpatterns = [
    path('generate_recommendations/', views.RecommenderView.as_view(), name='recommender_view'),
    path('generate_phoneme_recommendations/', views.PhonemeRecommenderView.as_view(), name='phoneme_recommender_view')
]