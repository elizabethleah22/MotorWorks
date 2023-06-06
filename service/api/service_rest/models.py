from django.db import models
from django.urls import reverse


class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.PositiveSmallIntegerField()

    def __str__(self):
        return self.name


class ManufacturerVO(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def get_api_url(self):
        return reverse("api_manufacturer", kwargs={"pk": self.id})


class VehicleModelVO(models.Model):
    name = models.CharField(max_length=100)
    picture_url = models.URLField()

    manufacturer = models.ForeignKey(
        ManufacturerVO,
        related_name="models",
        on_delete=models.CASCADE,
    )

    def get_api_url(self):
        return reverse("api_vehicle_model", kwargs={"pk": self.id})


class SalesRecordVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)


class AutomobileVO(models.Model):
    color = models.CharField(max_length=50, null=True)
    year = models.PositiveSmallIntegerField(null=True)
    vin = models.CharField(max_length=17, unique=True, null=True)



class ServiceAppointment(models.Model):
    vin = models.CharField(max_length=17)
    customer_name = models.CharField(max_length=200)
    time = models.TimeField(null=True, auto_now_add=False)
    date = models.DateField(null=True, auto_now_add=False)
    reason = models.TextField()
    vip_status = models.BooleanField(default=False)
    technician = models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.CASCADE
    )
