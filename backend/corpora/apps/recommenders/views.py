from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from.serializers import RecommenderSerializer
from .services import RecommenderService

class RecommenderView(APIView):
    def post(self, request):
        substrings = RecommenderService.get_all_permutations(request.data)
        response = RecommenderService.search_substrings(substrings, request.data)
        return Response(response, status=status.HTTP_201_CREATED)

class PhonemeRecommenderView(APIView):
    def post(self, request):
        response = RecommenderService.recommendations_by_phonemes(request.data)
        return Response(response, status=status.HTTP_201_CREATED)

