from rest_framework import serializers
from .models import *

class ProjectDesignSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectDesign
        fields = '__all__'

class PortfolioSerializer(serializers.ModelSerializer):
    project_design = ProjectDesignSerializer(many=True, read_only=True)

    class Meta:
        model = Portfolio
        fields = '__all__'

class ProjectTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectType
        fields = '__all__'