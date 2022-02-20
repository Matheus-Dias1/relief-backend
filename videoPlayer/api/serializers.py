from rest_framework import serializers

from .models import History, Bookmarks

class HistorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = History
        fields = ('url', 'title')

class BookmarksSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Bookmarks
        fields = ('url', 'title')