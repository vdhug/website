from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("change_language", views.change_language, name="change_language"),
    path("portuguese", views.portuguese, name="portuguese")
]
