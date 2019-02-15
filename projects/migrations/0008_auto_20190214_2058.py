# Generated by Django 2.0.3 on 2019-02-14 22:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0007_auto_20190213_1417'),
    ]

    operations = [
        migrations.AddField(
            model_name='tech',
            name='description_en',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='tech',
            name='description_es',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='tech',
            name='description_pt',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='tech',
            name='title_en',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='tech',
            name='title_es',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='tech',
            name='title_pt',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
