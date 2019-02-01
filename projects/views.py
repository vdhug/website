from django.shortcuts import render

# Create your views here.
def projects(request):
	context = {
        "projects": Project.objects.all()
    }
	return render(request, "projects/projects.html", context)
