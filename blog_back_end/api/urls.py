from django.urls import path
from . import views
urlpatterns = [
    path('aboutme/', views.aboutMe),
    path('posts/', views.postsHomePage),
    path('posts/<int:id>/',views.post)
]
