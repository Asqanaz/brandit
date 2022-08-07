from django.shortcuts import render
from rest_framework import generics
from .serializers import *
from .models import *

class PortfolioList(generics.ListCreateAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer

    def perform_create(self, serializer):
        serializer.save()

class PortfolioDetail(generics.RetrieveAPIView):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer

class ProjectTypeList(generics.ListCreateAPIView):
    queryset = ProjectType.objects.all()
    serializer_class = ProjectTypeSerializer

    def perform_create(self, serializer):
        serializer.save()

class ProjectTypeDetail(generics.RetrieveAPIView):
    queryset = ProjectType.objects.all()
    serializer_class = ProjectTypeSerializer
