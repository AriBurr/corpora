# Generated by Django 2.1.7 on 2019-03-27 16:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('languages', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Grapheme',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('letter', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Phoneme',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sound', models.CharField(max_length=255)),
                ('language', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='languages.Language')),
            ],
        ),
        migrations.AddField(
            model_name='grapheme',
            name='phoneme',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='phonemes.Phoneme'),
        ),
    ]
