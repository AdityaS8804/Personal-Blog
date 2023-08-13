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
