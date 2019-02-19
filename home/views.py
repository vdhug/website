from django.shortcuts import render
from django.utils import translation
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt

import pdb

# Create your views here.
def index(request):
	return render(request, "home/index.html")

# Change language.
@csrf_exempt
def change_language(request):
	user_language = request.POST["language"]
	translation.activate(user_language)
	request.session[translation.LANGUAGE_SESSION_KEY] = user_language

	return JsonResponse({"success": True})
