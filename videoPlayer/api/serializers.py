from rest_framework import serializers

from .models import History, Bookmarks


class HistorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = History
        fields = ('id', 'url', 'title', 'embed_url')


class BookmarksSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Bookmarks
        fields = ('id', 'url', 'title', 'embed_url')
