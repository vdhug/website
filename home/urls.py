from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("english", views.english, name="english"),
    path("spanish", views.spanish, name="spanish"),
    path("portuguese", views.portuguese, name="portuguese")
]
