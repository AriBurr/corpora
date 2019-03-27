from django.db import models

from apps.languages.models import Language

class Phoneme(models.Model):
    sound = models.CharField(max_length=255)
    language = models.ForeignKey(Language, on_delete=models.CASCADE, null=True)
    
    objects = models.Manager()

class Grapheme(models.Model):
    phoneme = models.ForeignKey(Phoneme, on_delete=models.CASCADE, null=True) 
    letter = models.CharField(max_length=255)
    
    objects = models.Manager()