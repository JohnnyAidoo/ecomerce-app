# Generated by Django 4.1.3 on 2022-12-03 12:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_posts_postimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='posts',
            name='postImage',
            field=models.CharField(max_length=9999999),
        ),
    ]
