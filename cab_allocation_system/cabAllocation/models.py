from django.db import models

# Create your models here.
"""
Create user field , name is unique
"""

class User(models.Model):
    user_name = models.CharField(max_length=200, unique=True, help_text='User name is unique')

    def __str__(self):
        return self.user_name
"""
Create driver field , name is unique
"""
class Driver(models.Model):
    driver_name = models.CharField(max_length=200, unique=True, help_text='Driver name is unique')
    def __str__(self):
        return self.driver_name

"""
Create rider , also show diver and user and his status
"""
class RideDetails(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    driver = models.ForeignKey(Driver,on_delete=models.CASCADE)
    ride_status = [
        ("rq", "Requested"),
        ("ac", "Accepted"),
        ("dn", "Done"),


]
    # creating a form

    ride_field = models.CharField(choices=ride_status, default = 'Requested', max_length=2,help_text = 'this field is choice field where default is Requested' )
    def __str__(self):
        return self.user