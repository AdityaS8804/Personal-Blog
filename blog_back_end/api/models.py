from django.db import models
# Create your models here.


class AboutMeModel(models.Model):
    content = models.CharField(max_length=500)
    img_url = models.ImageField(upload_to='api/')
    email_id = models.EmailField()
    ig_url = models.URLField()
    twitter_url = models.URLField()
    linkdin_url = models.URLField()


class TagsModel(models.Model):
    tag = models.CharField(max_length=20)


class PostModel(models.Model):
    heading = models.CharField(max_length=75)
    subHeading = models.CharField(max_length=200)
    date = models.DateField()
    tags = models.ManyToManyField(TagsModel)
    content = models.CharField(max_length=10000)


class imageModel(models.Model):
    image = models.ImageField(upload_to='api/', default="")


class ImagesModel(models.Model):
    post = models.OneToOneField(
        PostModel, on_delete=models.CASCADE, default="")
    images = models.ManyToManyField(
        imageModel, default="",related_name="post_images") 
    mainPic=models.ForeignKey(imageModel,on_delete=models.CASCADE, default="")    
