from django.urls import path
from .views import register_user, login_user,  logout_user, user_profile,  create_course, list_courses
# from django.conf import settings
# from django.conf.urls.static import static

# # urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


urlpatterns = [
    path('api/register/', register_user, name='register'),
    path('api/login/', login_user, name='login'),
    path('api/logout/', logout_user, name='logout'),
    path('api/profile/', user_profile, name='user-profile'),
     path('api/courses/create/', create_course, name='create-course'),
    path('api/courses/', list_courses, name='list-courses'),
]
