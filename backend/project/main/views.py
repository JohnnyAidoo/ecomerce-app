from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import viewsets , generics
from .models import Posts, Users
from .serializers import PostsSerializer ,UserSerializer
# Create your views here.

class PostViewset(viewsets.ModelViewSet):
    serializer_class = PostsSerializer
    queryset = Posts.objects.all()

class RegisterViewset(generics.CreateAPIView):
    serializer_class = UserSerializer
    queryset = Users.objects.all()
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data = request.data)
        serializer.is_valid()
        self.perform_create(serializer)
        return Response(serializer.data)
    