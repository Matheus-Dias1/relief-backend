# Generated by Django 4.0.2 on 2022-02-20 19:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='History',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(max_length=200)),
                ('title', models.CharField(max_length=100)),
            ],
        ),
        migrations.RenameModel(
            old_name='Hero',
            new_name='Bookmarks',
        ),
    ]
