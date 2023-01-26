from django.urls import path
from .views import api_list_technicians, api_technician_detail, api_service_appointment_list
from .views import api_service_appointment_detail, api_service_history


urlpatterns = [
    path("technicians/", api_list_technicians, name="list_technicians"),
    path("technicians/<int:pk>/", api_technician_detail, name="technician_detail"),
    path("serviceappointment/", api_service_appointment_list, name="service_appointment"),
    path("serviceappointment/<int:pk>/", api_service_appointment_detail, name="service_appointment_detail"),
    path("servicehistory/<int:vin>/", api_service_history, name="service_history")
]
