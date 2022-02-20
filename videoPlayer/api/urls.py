from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'history', views.HistoryViewSet)
router.register(r'bookmarks', views.BookmarksViewSet)

urlpatterns = [
    path('', include(router.urls)),
]