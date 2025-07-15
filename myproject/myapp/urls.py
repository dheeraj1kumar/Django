from django.urls import path
from .views import register_user, login_user,  logout_user, user_profile

urlpatterns = [
    path('api/register/', register_user, name='register'),
    path('api/login/', login_user, name='login'),
    path('api/logout/', logout_user, name='logout'),
    path('api/profile/', user_profile, name='user-profile'),
]
