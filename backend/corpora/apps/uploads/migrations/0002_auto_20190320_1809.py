# Generated by Django 2.1.7 on 2019-03-20 18:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('uploads', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='fileupload',
            name='file_type',
            field=models.CharField(default='text', max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='fileupload',
            name='title',
            field=models.CharField(max_length=255),
        ),
    ]
