from django.db import models

# Create your models here.
class Project(models.Model):
	name = models.CharField(max_length=64)
	description_project = models.TextField()
	background_photo = models.ImageField(upload_to='projects/img')
	description_company = models.CharField(max_length=80)
	link_for_project_site = models.CharField(max_length=64)

	def __str__(self):
		return f"{self.name}: {self.description_company}"


class Tech(models.Model):
	name_icon = models.CharField(max_length=64)
	title = models.CharField(max_length=64)
	description = models.TextField()
	project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='techs')

	def __str__(self):
		return f"{self.name_icon}: {self.title}"
