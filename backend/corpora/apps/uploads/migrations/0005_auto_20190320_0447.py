# Generated by Django 2.1.7 on 2019-03-20 04:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('languages', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('uploads', '0004_auto_20190320_0446'),
    ]

    operations = [
        migrations.AddField(
            model_name='fileupload',
            name='language',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='languages.Language'),
        ),
        migrations.AddField(
            model_name='fileupload',
            name='title',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='fileupload',
            name='uploaded_by',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='fileupload',
            name='file',
            field=models.FileField(upload_to='media/'),
        ),
    ]
