from django.shortcuts import render
from .models import Technician, VehicleModelVO, ManufacturerVO
from .models import ServiceAppointment, AutomobileVO
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_number",
        "id",
    ]


class ManufacturerVODetailEncoder(ModelEncoder):
    model = ManufacturerVO
    properties = [
        "name",
    ]


class VehicleModelVODetailEncoder(ModelEncoder):
    model = VehicleModelVO
    properties = [
        "name",
        "picture_url",
        "manufacturer",
    ]

    def get_extra_data(self, o):
        return {"manufacturer": o.manufacturer.id}


class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "color",
        "year",
        "vin",
        "model",
    ]

    def get_extra_data(self, o):
        return {"model": o.model.id}


class ServiceAppointmentListEncoder(ModelEncoder):
    model = ServiceAppointment
    properties = [
        "id",
        "vin",
        "customer_name",
        "time",
        "date",
        "reason",
        "vip_status",
        "technician"
    ]

    def get_extra_data(self, o):
        return {"technician": o.technician.name}


@require_http_methods(['GET', 'POST'])
def api_list_technicians(request):

    if request.method == 'GET':
        technicians = Technician.objects.all()
        return JsonResponse(
            {'technicians': technicians},
            encoder=TechnicianEncoder
        )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def api_technician_detail(request, pk):

    if request.method == "GET":
        technician = Technician.objects.get(id=pk)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False
        )
    else:
        count, _ = Technician.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_service_appointment_list(request):
    if request.method == "GET":
        service_appointment = ServiceAppointment.objects.all()
        return JsonResponse(
            {'service_appointment': service_appointment},
            encoder=ServiceAppointmentListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            technician_name = content["technician"]
            technician = Technician.objects.get(name=technician_name)
            content["technician"] = technician
            try:
                automobile = AutomobileVO.objects.get(vin=content["vin"])
                if automobile:
                    content["vip_status"] = True
            except AutomobileVO.DoesNotExist:
                pass
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Technician"},
                status=400
            )
        service_appointment = ServiceAppointment.objects.create(**content)
        return JsonResponse(
            service_appointment,
            encoder=ServiceAppointmentListEncoder,
            safe=False
        )


@require_http_methods(["GET", "DELETE"])
def api_service_appointment_detail(request, pk):
    if request.method == "GET":
        service_appointment = ServiceAppointment.objects.get(pk=pk)
        return JsonResponse(
            service_appointment,
            encoder=ServiceAppointmentListEncoder,
            safe=False
        )
    else:
        count, _ = ServiceAppointment.objects.filter(pk=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_service_history(request, vin):
    if request.method == "GET":
        try:
            service_history = ServiceAppointment.objects.filter(vin=vin)
            return JsonResponse(
                {"service_history": service_history},
                encoder=ServiceAppointmentListEncoder,
            )
        except ServiceAppointment.DoesNotExist:
            return JsonResponse(
                {"message": "service_history does not exist"},
                status=400,
            )


@require_http_methods(['GET', 'POST'])
def api_list_technicians(request):

    if request.method == 'GET':
        technicians = Technician.objects.all()
        return JsonResponse(
            {'technicians': technicians},
            encoder=TechnicianEncoder
        )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE"])
def api_technician_detail(request, pk):

    if request.method == "GET":
        technician = Technician.objects.get(id=pk)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False
        )
    else:
        count, _ = Technician.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_service_history_list(request):
    if request.method == "GET":
        history = ServiceAppointment.objects.all()
        return JsonResponse(
            history,
            encoder=ServiceAppointmentListEncoder,
            safe=False
        )
