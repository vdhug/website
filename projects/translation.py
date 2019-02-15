from modeltranslation.translator import register, TranslationOptions
from .models import Project, Tech
from about.models import Strength
# python manage.py update_translation_fields

@register(Project)
class ProjectTranslationOptions(TranslationOptions):
    fields = ('description_project', 'description_company')


@register(Tech)
class TechTranslationOptions(TranslationOptions):
    fields = ('title', 'description')


@register(Strength)
class StrengthTranslationOptions(TranslationOptions):
    fields = ('title', 'description')
