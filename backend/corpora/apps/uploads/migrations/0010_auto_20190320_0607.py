# Generated by Django 2.1.7 on 2019-03-20 06:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('uploads', '0009_auto_20190320_0606'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='fileupload',
            name='title',
        ),
        migrations.AlterField(
            model_name='fileupload',
            name='file',
            field=models.FileField(upload_to='media/'),
        ),
    ]