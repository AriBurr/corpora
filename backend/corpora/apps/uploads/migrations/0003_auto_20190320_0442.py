# Generated by Django 2.1.7 on 2019-03-20 04:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('uploads', '0002_mattupload'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='fileupload',
            name='language',
        ),
        migrations.RemoveField(
            model_name='fileupload',
            name='title',
        ),
        migrations.RemoveField(
            model_name='fileupload',
            name='uploaded_by',
        ),
    ]
