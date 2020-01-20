from rest_framework import serializers
from .models import User, Driver, RideDetails


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'user_name',)

class DriverSerializers(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = ('id', 'driver_name',)

class RideDetailsSerializers(serializers.ModelSerializer):
    user = UserSerializers()
    driver = DriverSerializers()
    class Meta:
        model = RideDetails
        fields = ('id','user','driver','ride_field')