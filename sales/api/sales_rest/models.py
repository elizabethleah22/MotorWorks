from django.db import models

# Create your models here.

class AutomobileVO(models.Model):
    vin = models.CharField(max_length=200)


class SalesPerson(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    employee_number = models.PositiveSmallIntegerField(null=True, blank=True)
    def __str__(self):
        return self.name

class Customer(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    phone_number = models.CharField(max_length=200, null=True, blank=True)



class SalesRecord(models.Model):
    salesperson =  models.ForeignKey(
        SalesPerson,
        related_name="salesperson",
        on_delete=models.CASCADE
        )
    customer = models.ForeignKey(
        Customer,
        related_name="customer",
        on_delete=models.CASCADE
        )
    vin = models.ForeignKey(
        AutomobileVO,
        related_name="automobile",
        on_delete=models.CASCADE
        )
    price = models.PositiveSmallIntegerField(null=True, blank=True)
