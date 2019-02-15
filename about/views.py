from django.shortcuts import render
from .models import Strength

# Create your views here.
def about(request):
	context = {
        "strengths": Strength.objects.all()
    }

	return render(request, "about/about.html", context)
