from modeltranslation.translator import register, TranslationOptions
from .models import Project

# python manage.py update_translation_fields

@register(Project)
class ProjectTranslationOptions(TranslationOptions):
    fields = ('description_project', 'description_company')
