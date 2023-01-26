import django
import os
import sys
import time
import json
import requests


sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()
from service_rest.models import AutomobileVO

def poll():
    while True:
        print('Service poller polling for data')
        try:
            url = "http://inventory-api:8000/api/automobiles/"
            print("url", url)
            response = requests.get(url)
            print("response", response)
            content = json.loads(response.content)
            print("content", content)
            for automobile in content["autos"]:
                AutomobileVO.objects.update_or_create(
                   vin=automobile["vin"],
                    defaults={"vin": automobile["vin"]}
                    )
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(30)


if __name__ == "__main__":
    poll()
