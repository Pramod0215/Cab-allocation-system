from django.contrib import admin
from .models import *
# Register your models here.
""" create user  """
class UserAdmin(admin.ModelAdmin):
    list_display = ('user_name',)


class DriverAdmin(admin.ModelAdmin):
    list_display = ('driver_name',)

admin.site.register(User, UserAdmin)
admin.site.register(Driver, DriverAdmin)


class RideAdmin(admin.ModelAdmin):
    list_display = ('user','driver','ride_field',)
admin.site.register(RideDetails, RideAdmin)
