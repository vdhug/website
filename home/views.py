from django.shortcuts import render
from django.utils import translation
# Create your views here.
def index(request):
	# user_language = 'en-us'
	# translation.activate(user_language)
	# request.session[translation.LANGUAGE_SESSION_KEY] = user_language
	return render(request, "home/index.html")