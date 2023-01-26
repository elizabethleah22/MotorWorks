from django.db import models

# Create your models here.

class AutomobileVO(models.Model):
    color = models.CharField(max_length=50, null=True)
    year = models.PositiveSmallIntegerField(null=True)
    vin = models.CharField(max_length=17, unique=True, null=True)

    def __str__(self):
        return self.vin



class SalesPerson(models.Model):
    name = models.CharField(max_length=200, null=True)
    employee_number = models.PositiveSmallIntegerField(unique=True, null=True)

    def __str__(self):
        return self.name


class Customer(models.Model):
    name = models.CharField(max_length=200, null=True)
    address = models.CharField(max_length=200, null=True)
    phone_number = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.name


class SalesRecord(models.Model):
    salesperson =  models.ForeignKey(
        SalesPerson,
        related_name="salesrecords",
        on_delete=models.PROTECT
        )
    customer = models.ForeignKey(
        Customer,
        related_name="salesrecords",
        on_delete=models.PROTECT
        )
    vin = models.ForeignKey(
        AutomobileVO,
        related_name="salesrecords",
        on_delete=models.PROTECT
        )
    price = models.PositiveIntegerField(null=True)
