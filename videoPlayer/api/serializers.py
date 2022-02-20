from rest_framework import serializers

from .models import History, Bookmarks

class HistorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = History
        fields = '__all__'

class BookmarksSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Bookmarks
        fields = '__all__'