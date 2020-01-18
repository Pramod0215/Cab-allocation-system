from django.shortcuts import render
from django.http import HttpRequest

def index(request):
    return HttpRequest('cab')

# Create your views here.
