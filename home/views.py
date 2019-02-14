from django.shortcuts import render
from django.utils import translation
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse

# Create your views here.
def index(request):
	return render(request, "home/index.html")


# Set language to English.
def english(request):
	user_language = 'en'
	translation.activate(user_language)
	request.session[translation.LANGUAGE_SESSION_KEY] = user_language
	return HttpResponseRedirect(reverse("index"))


# Set language to Spanish.
def spanish(request):
	user_language = 'es'
	translation.activate(user_language)
	request.session[translation.LANGUAGE_SESSION_KEY] = user_language
	return HttpResponseRedirect(reverse("index"))


# Set language to English.
def portuguese(request):
	user_language = 'pt'
	translation.activate(user_language)
	request.session[translation.LANGUAGE_SESSION_KEY] = user_language
	return HttpResponseRedirect(reverse("index"))
