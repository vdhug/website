from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponse, HttpResponseRedirect
from django.core.mail import EmailMessage

# Create your views here.
def contact(request):
	context = {}
	if request.session.has_key('message'):
		context['message'] = request.session['message']
		del request.session['message']

	if request.session.has_key('erro'):
		context['erro'] = request.session['erro']
		del request.session['erro']

	return render(request, "contact/contact.html", context)


def send_message(request):
	if request.method == "POST":

		if request.POST["name"] == "" or request.POST["email"] == "" or request.POST["message"] == "" or request.POST["r_name"] != "" or request.POST["r_email"] != "":
			 request.session['erro'] = "Fill all fields correctly please."
		else:
			body = "Name: "+ request.POST["name"] + "\n" + "Email: "+ request.POST["email"] + "\n" + "Message: "+ request.POST["message"]
			email = EmailMessage('Contact from personal website', body, to=['vitorhug97@gmail.com'])
			email.send()
			request.session['message'] = "Thank you for showing interest for my work, I will soon be in touch with you."
		return HttpResponseRedirect(reverse("contact"))
