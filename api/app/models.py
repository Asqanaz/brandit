from django.db import models

class ProjectType(models.Model):
    title = models.CharField(blank=True,max_length=50, unique=True)

    def __str__(self):
        return self.title

class ProjectDesign(models.Model):
    image = models.FileField(blank=True, upload_to='images/portfolio/project-design')

class Portfolio(models.Model):
    title = models.CharField(blank=True, max_length=100)
    div_image = models.FileField(blank=True, upload_to='images/portfolio')
    info_image = models.FileField(blank=True, upload_to='images/portfolio')
    client = models.CharField(blank=True, max_length=50)
    designer = models.CharField(blank=True, max_length=100)
    brief = models.TextField(default='')
    project_type = models.ForeignKey(to=ProjectType, on_delete=models.CASCADE, default='', to_field='title')
    project_design = models.ManyToManyField(ProjectDesign)

    def __str__(self):
        return self.title

class WhatOurClientsSay(models.Model):
    description = models.TextField(default='')
    image = models.FileField(blank=True, upload_to='images/what-our-clients-say')
    username = models.CharField(blank=True, max_length=50) 

    def __str__(self):
        return self.username