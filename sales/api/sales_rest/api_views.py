from django.shortcuts import render
from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse
from common.json import ModelEncoder
from .models import SalesRecord, AutomobileVO, SalesPerson, Customer


class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
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
        "id",
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
        "customer": CustomerDetailEncoder(),
        "salesperson": SalesPersonEncoder(),
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

            customer_name = content["customer"]
            customer = Customer.objects.get(name=customer_name)
            content["customer"] = customer

            vin_number = content["vin"]
            vin = AutomobileVO.objects.get(vin=vin_number)
            content["vin"] = vin

        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "automobile does not exist"},
                status=400,
            )

        salesrecord = SalesRecord.objects.create(**content)
        return JsonResponse(
            salesrecord,
            encoder=SalesRecordEncoder,
            safe=False,
        )

@require_http_methods(["GET", "DELETE", "PUT"])
def api_show_salesrecord(request, id):
    if request.method == "GET":
        try:
            salesrecords = SalesRecord.objects.get(id=id)
            return JsonResponse(
                salesrecords,
                encoder=SalesRecordEncoder,
                safe=False
            )
        except SalesRecord.DoesNotExist:
            return JsonResponse(
                {"message": "salesrecord does not exist"}
            )

    elif request.method == "DELETE":
        count, _ = SalesRecord.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})

    else:
        content = json.loads(request.body)

        try:

            salesperson = content["salesperson"]
            salesperson = SalesPerson.objects.get(name=salesperson)
            content["salesperson"] = salesperson

            customer_name = content["customer"]
            customer = Customer.objects.get(name=customer_name)
            content["customer"] = customer

            vin_number = content["vin"]
            vin = AutomobileVO.objects.get(vin=vin_number)
            content["vin"] = vin

        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "automobile does not exist"},
                status=400,
            )

        salesrecord = SalesRecord.objects.create(**content)
        return JsonResponse(
            salesrecord,
            encoder=SalesRecordEncoder,
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

@require_http_methods(["GET"])
def api_show_customer(request, id):
    try:
        customer = Customer.objects.get(id=id)
        return JsonResponse(
            customer,
            encoder=CustomerDetailEncoder,
            safe=False
        )
    except Customer.DoesNotExist:
        return JsonResponse(
            {"message": "customer does not exist"}
        )
