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

class ProjectDesignList(generics.ListCreateAPIView):
    queryset = ProjectDesign.objects.all()
    serializer_class = ProjectDesignSerializer

    def perform_create(self, serializer):
        serializer.save()

class ProjectDesignDetail(generics.RetrieveAPIView):
    queryset = ProjectDesign.objects.all()
    serializer_class = ProjectDesignSerializer

class WhatOurClientsSayList(generics.ListCreateAPIView):
    queryset = WhatOurClientsSay.objects.all()
    serializer_class = WhatOurClientsSaySerializer

    def perform_create(self, serializer):
        serializer.save()

class WhatOurClientsSayDetail(generics.RetrieveAPIView):
    queryset = WhatOurClientsSay.objects.all()
    serializer_class = WhatOurClientsSaySerializer

class ContactUsList(generics.ListCreateAPIView):
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsSerializer

    def perform_create(self, serializer):
        serializer.save()

class ContactUsDetail(generics.RetrieveAPIView):
    queryset = ContactUs.objects.all()
    serializer_class = ContactUsSerializer

class PriceOfferList(generics.ListCreateAPIView):
    queryset = PriceOffer.objects.all()
    serializer_class = PriceOfferSerializer

    def perform_create(self, serializer):
        serializer.save()

class PriceOfferDetail(generics.RetrieveAPIView):
    queryset = PriceOffer.objects.all()
    serializer_class = PriceOfferSerializer