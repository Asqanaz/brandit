from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    #path('', views.apiOverview, name="api-overview"),
    path('portfolio-list/', views.PortfolioList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)