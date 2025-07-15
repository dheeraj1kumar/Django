
# Register your models here.
from django.contrib import admin
from .models import CustomUser, Course, Lecture, Enrollment, Certificate, Comment, Payment
from django.contrib.auth.admin import UserAdmin

admin.site.register(CustomUser, UserAdmin)
admin.site.register(Course)
admin.site.register(Lecture)
admin.site.register(Enrollment)
admin.site.register(Certificate)
admin.site.register(Comment)
admin.site.register(Payment)
