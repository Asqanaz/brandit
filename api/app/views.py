from django.shortcuts import render
from rest_framework import generics
from .serializers import *
from .models import *
from validate_email import validate_email
from rest_framework import status
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings

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
        if validate_email(serializer['email'], check_mx=True):
            subject = 'Contact Us'
            message = f'Ողջույն, ես {serializer["name"].value}ն եմ: Իմ էլ. փոստը - {serializer["email"].value}: Նամակ - {serializer["email"].value}'
            print(subject)
        else:
            print('No')
        #send_mail_message(subject, message)


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

class ScheduleACallList(generics.ListCreateAPIView):
    queryset = ScheduleACall.objects.all()
    serializer_class = ScheduleACallSerializer

    def perform_create(self, serializer):
        serializer.save()

class ScheduleACallDetail(generics.RetrieveAPIView):
    queryset = ScheduleACall.objects.all()
    serializer_class = ScheduleACallSerializer

def send_mail_message(subject, message):
    email_from = settings.EMAIL_HOST_USER
    print(email_from)
    recipient_list = [email_from]
    send_mail(subject, message , email_from ,recipient_list )