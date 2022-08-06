from django.db import models

class Portfolio(models.Model):
    title = models.CharField(blank=True, max_length=100)
    div_image = models.FileField(blank=True, upload_to='images/portfolio')
    info_image = models.FileField(blank=True, upload_to='images/portfolio')
    client = models.CharField(blank=True, max_length=50)
    designer = models.CharField(blank=True, max_length=100)
    brief = models.TextField(default='')
