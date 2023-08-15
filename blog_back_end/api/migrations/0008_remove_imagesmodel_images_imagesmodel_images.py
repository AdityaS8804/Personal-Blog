# Generated by Django 4.2.4 on 2023-08-15 18:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0007_alter_imagemodel_image_alter_imagesmodel_images"),
    ]

    operations = [
        migrations.RemoveField(model_name="imagesmodel", name="images",),
        migrations.AddField(
            model_name="imagesmodel",
            name="images",
            field=models.ManyToManyField(default="", to="api.imagemodel"),
        ),
    ]