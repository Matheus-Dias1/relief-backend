from django.db import models
from uuid import uuid4

# Create your models here.


class History(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    url = models.CharField(max_length=255)
    embed_url = models.CharField(max_length=255)
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title


class Bookmarks(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    url = models.CharField(max_length=255)
    embed_url = models.CharField(max_length=255)
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title
