from django.shortcuts import render
from rest_framework import viewsets

from .serializers import HistorySerializer, BookmarksSerializer
from .models import History, Bookmarks


class HistoryViewSet(viewsets.ModelViewSet):
    queryset = History.objects.all()
    serializer_class = HistorySerializer

class BookmarksViewSet(viewsets.ModelViewSet):
    queryset = Bookmarks.objects.all()
    serializer_class = BookmarksSerializer