# Generated by Django 4.2.4 on 2023-08-15 18:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0004_alter_imagemodel_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="imagemodel",
            name="image",
            field=models.ForeignKey(
                default="",
                on_delete=django.db.models.deletion.PROTECT,
                to="api.imagesmodel",
            ),
        ),
        migrations.AlterField(
            model_name="imagesmodel",
            name="images",
            field=models.ImageField(default="", upload_to="api/"),
        ),
    ]
