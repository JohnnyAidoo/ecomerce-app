from django.db import models

# Create your models here.
class Users(models.Model):
    userName = models.CharField(max_length=200 , unique=True)
    userContact = models.IntegerField()
    userEmail = models.EmailField(default='null', unique=True)
    userPassword = models.CharField(max_length=200)
    
class Posts(models.Model):
    postImage = models.ImageField(max_length=10000, default='null')
    postTitle = models.CharField(max_length=200, default='null')
    postPrice = models.IntegerField()
    postCategory = models.CharField(max_length=200,default='null')
