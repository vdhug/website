from django.template import Library

register = Library()

@register.filter
def getName(word):
	return word.split()[-1]


@register.filter
def getLen(techs):
	return len(techs)
