# Generated by Django 4.0.2 on 2022-02-21 23:46

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_bookmarks_embed_url_history_embed_url_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookmarks',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False),
        ),
    ]
