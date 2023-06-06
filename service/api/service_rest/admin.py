from django.contrib import admin
from .models import Technician, ManufacturerVO, VehicleModelVO, AutomobileVO

@admin.register(Technician)
class TechnicianAdmin(admin.ModelAdmin):
    pass

@admin.register(ManufacturerVO)
class ManufacturerVOAdmin(admin.ModelAdmin):
    pass

@admin.register(VehicleModelVO)
class VehicleModelVOAdmin(admin.ModelAdmin):
    pass

@admin.register(AutomobileVO)
class AutomobileVOAdmin(admin.ModelAdmin):
    pass
