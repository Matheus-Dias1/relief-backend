from django.shortcuts import render
from rest_framework import viewsets

from .serializers import HistorySerializer, BookmarksSerializer
from .models import History, Bookmarks


class HistoryViewSet(viewsets.ModelViewSet):
    queryset = History.objects.all().order_by('title')
    serializer_class = HistorySerializer

class BookmarksViewSet(viewsets.ModelViewSet):
    queryset = Bookmarks.objects.all().order_by('title')
    serializer_class = BookmarksSerializer