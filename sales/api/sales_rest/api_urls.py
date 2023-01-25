from django.urls import path
from .api_views import (
    api_list_sales,
    api_list_salespeople,
    api_list_customers,
    api_show_salesperson
)

urlpatterns = [
    path('salesrecords/', api_list_sales, name="api_list_sales"),
    path('salespeople/', api_list_salespeople, name="api_list_salespeople"),
    path("customers/", api_list_customers, name="api_list_customers"),
    path("salesperson/<int:pk>/", api_show_salesperson, name="api_show_salesperson"),
]
