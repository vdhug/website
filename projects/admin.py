from django.contrib import admin
from .models import Project, Tech

class TechInline(admin.StackedInline):
    model = Tech

class ProjectAdmin(admin.ModelAdmin):
    inlines = [
        TechInline,
    ]

# Register your models here.
admin.site.register(Project, ProjectAdmin)
admin.site.register(Tech)
