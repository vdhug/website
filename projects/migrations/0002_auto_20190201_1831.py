# Generated by Django 2.0.3 on 2019-02-01 20:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='background_photo',
            field=models.ImageField(upload_to='projects/static/projects/img'),
        ),
    ]
