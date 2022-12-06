from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Posts
from .serializers import PostsSerializer
# Create your views here.

@api_view(['GET','POST'])
def index(request):
    postsItems = Posts.objects.all()
    serializer = PostsSerializer(postsItems, many=True)
    return Response(serializer.data)
    if request.method == 'POST':
        serializer = PostsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.data)