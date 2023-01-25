from django.shortcuts import render
from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse
from common.json import ModelEncoder
from .models import SalesRecord, AutomobileVO, SalesPerson, Customer


# Create your views here.
class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id",
        "vin"
    ]


class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id",
        "name",
        "employee_number"
    ]

class CustomerDetailEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone_number"
        ]


class SalesRecordEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "id",
        "price",
        "vin",
        "salesperson",
        "customer"
    ]
    encoders = {
        "salesPerson": SalesPersonEncoder(),
        "customer": CustomerDetailEncoder(),
        "vin": AutomobileVODetailEncoder()
    }

@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerDetailEncoder,
        )
    else:

        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerDetailEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_list_sales(request):
    if request.method == "GET":
        sales = SalesRecord.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SalesRecordEncoder,
        )
    else:
        content = json.loads(request.body)

        try:
            salesperson = content["salesperson"]
            salesperson = SalesPerson.objects.get(name=salesperson)
            content["salesperson"] = salesperson
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "salesperson does not exist"},
                status=400,
            )

        try:
            customer_name = content["customer"]
            customer = Customer.objects.get(name=customer_name)
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "customer does not exist"},
                status=400,
            )

        try:
            vin_number = content["vin"]
            vin = AutomobileVO.objects.get(vin=vin_number)
            content["vin"] = vin
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "automobile does not exist"}
            )

        salesrecord = SalesRecord.objects.create(**content)
        return JsonResponse(
            salesrecord,
            encoder=SalesRecordEncoder,
            safe=False,
        )

@require_http_methods(["GET", "POST"])
def api_list_automobiles(request):
    if request.method == "GET":
        available_automobiles = []
        automobiles = []
        vins = AutomobileVO.objects.all()
        for vin in vins:
            salesrecords = SalesRecord.objects.filter(vin=vin)
            for record in salesrecords:
                automobiles.append(record.vin)
        for vin in vins:
            if vin not in automobiles:
                available_automobiles.append(vin)
        return JsonResponse(
            available_automobiles,
            encoder=AutomobileVODetailEncoder,
             safe=False,
        )
    else:
        content = json.loads(request.body)
        automobile = AutomobileVO.objects.create(**content)
        return JsonResponse(
            automobile,
            encoder=AutomobileVODetailEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_list_salespeople(request):
    if request.method == "GET":
        salespeople = SalesPerson.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalesPersonEncoder,
        )
    else:
        content = json.loads(request.body)

        salesperson = SalesPerson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalesPersonEncoder,
            safe=False,
        )

@require_http_methods(["GET", "DELETE"])
def api_show_salesperson(request, pk):
    if request.method == "GET":
        try:
            salesperson = SalesPerson.objects.get(id=pk)
            return JsonResponse(
                salesperson,
                encoder=SalesPersonEncoder,
                safe=False
            )
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Salesperson does not exist"}
            )

    else:

        try:
            salesperson = SalesPerson.objects.get(id=pk)
            salesperson.delete()
            return JsonResponse(
                salesperson,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except SalesPerson.DoesNotExist:
            return JsonResponse({"message": "Salesperson does not exist"})


# @require_http_methods(["GET", "DELETE"])
# def api_show_salesperson_record(request, pk):
#     pass
