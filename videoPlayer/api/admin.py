from django.contrib import admin

# Register your models here.
from .models import History, Bookmarks
admin.site.register(History)
admin.site.register(Bookmarks)