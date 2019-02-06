from django.template import Library

register = Library()

@register.filter
def getName(word):
	return word.split()[-1]


@register.filter
def getFirstString(string):
	if string:
		return string.split()[0]
	else:
		return ""


@register.filter
def getSecondString(string):
	if string:
		return string.split()[1]
	else:
		return ""


@register.filter
def getLen(techs):
	return len(techs)
