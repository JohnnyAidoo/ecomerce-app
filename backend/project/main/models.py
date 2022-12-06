from django.db import models

# Create your models here.
class Posts(models.Model):
    postAuthur = models.CharField(max_length=200)
    postAuthurId = models.IntegerField()
    postImage = models.ImageField(max_length=10000)
    postTitle = models.CharField(max_length=200)
    postPrice = models.IntegerField()
    postCategory = models.CharField(max_length=200)

    def __str__(self):
        return self.name