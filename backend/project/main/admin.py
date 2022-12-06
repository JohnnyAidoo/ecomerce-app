from django.contrib import admin
from .models import Posts

# Register your models here.
class PostAdmin(admin.ModelAdmin):
    postitems = ('postAuthur','postAuthurId','postImage','postTitle','postPrice','postCategory')
    admin.site.register(Posts)