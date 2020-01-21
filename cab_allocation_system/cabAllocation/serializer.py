from rest_framework import serializers
from .models import User, Driver, RideDetails


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', "user_name",)


class DriverSerializers(serializers.ModelSerializer):
    class Meta:
        model = Driver
        fields = ("id", "driver_name",)


class RideSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.user_name')
    driver = serializers.ReadOnlyField(source="driver.driver_name")
    class Meta:
        model = RideDetails
        fields = ("id", "user", "driver",'ride_created', "ride_status")

class RideCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = RideDetails
        fields = ("user",'ride_created',"ride_status",)

class RideUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = RideDetails
        fields = ("driver",'ride_created',"ride_status",)