from django.contrib import admin
from .models import *
# Register your models here.
""" create user admin """
class UserAdmin(admin.ModelAdmin):
    list_display = ('user_name',)

""" create Driver admin """
class DriverAdmin(admin.ModelAdmin):
    list_display = ('driver_name',)



""" create user Rider Admin """
class RideAdmin(admin.ModelAdmin):
    list_display = ('user','driver','ride_field',)

admin.site.register(User, UserAdmin)
admin.site.register(Driver, DriverAdmin)
admin.site.register(RideDetails, RideAdmin)
