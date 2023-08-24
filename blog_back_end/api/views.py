from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from . import models
# Create your views here.


@api_view(['GET'])
def aboutMe(request):
    try:
        me = models.AboutMeModel.objects.all()[0]
        return Response({
            'body': me.content,
            'logo': me.img_url.url,
            'email_id': me.email_id,
            'ig_url': me.ig_url,
            'twitter_url': me.twitter_url,
            'linkdin_url': me.linkdin_url
        }, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({
            "Exception": str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def postsHomePage(request):
    try:
        posts = {}
        me = models.PostModel.objects.all()
        tags = []
        for x in me:
            tagsQ = x.tags.all()
            for i in tagsQ:
                tags.append(i.tag)
            img = models.ImagesModel.objects.get(post__id=x.id)
            posts[x.id] = {
                "heading": x.heading,
                "sub-heading": x.subHeading,
                "date": x.date,
                "tags": tags,
                "logo": img.mainPic.image.url,
            }
            tags = []
        return Response(posts, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({
            'Exception': str(e)
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
@api_view(['GET'])
def post(request,id):
    posts={}
    l=[]
    try:
        p=models.PostModel.objects.get(id=id)
        imgs=models.ImagesModel.objects.get(post__id=id)
        for i in imgs.images.all():
            l.append(i.image.url)
        posts['content']=p.content
        posts['images']=l
        return Response(posts, status=status.HTTP_200_OK)

    except Exception as e:
        return Response({
            "Exception" : str(e)
        },status=status.HTTP_500_INTERNAL_SERVER_ERROR)