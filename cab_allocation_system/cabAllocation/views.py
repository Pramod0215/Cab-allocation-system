from django.shortcuts import render
from django.http import HttpRequest
from rest_framework.generics import get_object_or_404

from .models import *
from rest_framework import viewsets, status
from rest_framework.response import Response

from .serializer import UserSerializers, DriverSerializers, RideDetailsSerializers


# def index(request):
#     return HttpRequest('cab')

# Create your views here.

class UserViewSet(viewsets.ViewSet):
    """
    Example empty viewset demonstrating the standard
    actions that will be handled by a router class.

    If you're using format suffixes, make sure to also include
    the `format=None` keyword argument for each action.
    """

    def list(self, request):
        queryset = User.objects.all()
        serializer = UserSerializers(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = UserSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = UserSerializers(user)
        return Response(serializer.data)

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass

class DriverViewSet(viewsets.ViewSet):
    """
    Example empty viewset demonstrating the standard
    actions that will be handled by a router class.

    If you're using format suffixes, make sure to also include
    the `format=None` keyword argument for each action.
    """

    def list(self, request):
        queryset = Driver.objects.all()
        serializer = DriverSerializers(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = DriverSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):
        queryset = Driver.objects.all()
        driver = get_object_or_404(queryset, pk=pk)
        serializer = DriverSerializers(driver)
        return Response(serializer.data)

    def update(self, request, pk=None):
        pass



class RiderViewSet(viewsets.ViewSet):
    """
    Example empty viewset demonstrating the standard
    actions that will be handled by a router class.

    If you're using format suffixes, make sure to also include
    the `format=None` keyword argument for each action.
    """

    def list(self, request):
        queryset = RideDetails.objects.all()
        user = request.GET.get('user',None)
        driver = request.GET.get('driver', None)
        status = request.GET.get('status', None)
        if user is not None:
            queryset = queryset.filter(user__user_name = user)
        if driver is not None:
            queryset = queryset.filter(driver__driver_name = driver)
        if status is not None:
            queryset = queryset.filter(ride_field=status)
        serializer = RideDetailsSerializers(queryset, many=True)
        return Response(serializer.data)


    def create(self, request):
        serializer = RideDetailsSerializers(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):
        queryset = Driver.objects.all()
        rider = get_object_or_404(queryset, pk=pk)
        serializer = RideDetailsSerializers(rider)
        return Response(serializer.data)

    def update(self, request, pk=None):
        pass