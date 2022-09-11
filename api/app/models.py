from django.db import models

class ProjectType(models.Model):
    title_english = models.CharField(blank=True,max_length=50, unique=True)
    title_russian = models.CharField(blank=True,max_length=50, unique=True)
    title_armenian = models.CharField(blank=True,max_length=50, unique=True)

    def __str__(self):
        return self.title_english

class ProjectDesign(models.Model):
    title = models.CharField(blank=True, max_length=100)
    image = models.FileField(blank=True, upload_to='images/portfolio/project-design')

    def __str__(self):
        return self.title

class Portfolio(models.Model):
    title = models.CharField(blank=True, max_length=100)
    div_image = models.FileField(blank=True, upload_to='images/portfolio')
    info_image = models.FileField(blank=True, upload_to='images/portfolio')
    client = models.CharField(blank=True, max_length=50)
    designer = models.CharField(blank=True, max_length=100)
    brief_english = models.TextField(default='')
    brief_russian = models.TextField(default='')
    brief_armenian = models.TextField(default='')
    project_type_english = models.ForeignKey(to=ProjectType, on_delete=models.CASCADE, default='', to_field='title_english')
    # project_type_russian = models.ForeignKey(to=ProjectType, on_delete=models.CASCADE, default='', to_field='title_russian')
    # project_type_armenian = models.ForeignKey(to=ProjectType, on_delete=models.CASCADE, default='', to_field='title_armenian')
    project_design = models.ManyToManyField(ProjectDesign)

    def __str__(self):
        return self.title

class WhatOurClientsSay(models.Model):
    description_english = models.TextField(default='')
    description_russian = models.TextField(default='')
    description_armenian = models.TextField(default='')
    image = models.FileField(blank=True, upload_to='images/what-our-clients-say')
    username = models.CharField(blank=True, max_length=50) 

    def __str__(self):
        return self.username

class ContactUs(models.Model):
    name = models.CharField(blank=True, max_length=50)
    email = models.CharField(blank=True, max_length=50) 
    message = models.TextField(default='')  

    def __str__(self):
        return self.email

class PriceOffer(models.Model):
    project_type = models.ForeignKey(to=ProjectType, on_delete=models.CASCADE, default='', to_field='title_english')
    company_name = models.CharField(blank=True, max_length=50)
    about_project = models.TextField(default='')
    file = models.FileField(blank=True, upload_to='project-files/price-offer')
    firstname = models.CharField(blank=True, max_length=50)
    surname = models.CharField(blank=True, max_length=50)
    email = models.CharField(blank=True, max_length=50)
    phone = models.CharField(blank=True, max_length=50)

    def __str__(self):
        return self.company_name

class ScheduleACall(models.Model):
    project_type = models.ForeignKey(to=ProjectType, on_delete=models.CASCADE, default='', to_field='title_english')
    firstname = models.CharField(blank=True, max_length=50)
    surname = models.CharField(blank=True, max_length=50)
    email = models.CharField(blank=True, max_length=50)
    phone = models.CharField(blank=True, max_length=50)
    date = models.DateField()
    time = models.TimeField(auto_now=False, auto_now_add=False)

    def __str__(self):
        return self.email

class OurWork(models.Model):
    title = models.CharField(blank=True, max_length=100)
    image = models.FileField(blank=True, upload_to='images/our-works')

    def __str__(self):
        return self.title