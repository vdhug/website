from django.db import models


class Strength(models.Model):
    name_icon = models.CharField(max_length=64)
    title = models.CharField(max_length=50)
    description = models.TextField()
    special_class = models.CharField(max_length=64, blank=True, default='', null=True)

    def __str__(self):
        return f"{self.title}"
