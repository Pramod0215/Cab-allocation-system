# Generated by Django 3.0.2 on 2020-01-20 08:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cabAllocation', '0002_auto_20200120_0816'),
    ]

    operations = [
        migrations.AddField(
            model_name='ridedetails',
            name='ride_created',
            field=models.DateTimeField(auto_now_add=True, default=0),
            preserve_default=False,
        ),
    ]
