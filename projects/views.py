from django.shortcuts import render
from .models import Project, Tech

import pdb
# Create your views here.
def projects(request):
	context = {
        "projects": Project.objects.all()
    }

	p = Project.objects.all()
	#pdb.set_trace()
	return render(request, "projects/projects.html", context)
