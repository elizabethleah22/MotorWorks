from django.contrib import admin
from .models import Customer, AutomobileVO, SalesPerson, SalesRecord
# Register your models here.
admin.register(Customer)
admin.register(AutomobileVO)
admin.register(SalesPerson)
admin.register(SalesRecord)
