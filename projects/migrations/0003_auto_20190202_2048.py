# Generated by Django 2.0.3 on 2019-02-02 22:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_auto_20190201_1831'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='background_photo',
            field=models.ImageField(upload_to='projects/static/projects/img'),
        ),
    ]
