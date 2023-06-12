# CarCar

CarCar is an application for managing the aspects of an automobile dealership. It manages the inventory, automobile sales, and automobile services.

Team:

- **Liz Gonzalez** - Auto Sales
- **Donald Powell** - Auto Services

## Getting Started

**Make sure you have Docker, Git, and Node.js 18.2 or above**

1. Fork this repository

2. Clone the forked repository onto your local computer:
   git clone <<respository.url.here>>

3. Build and run the project using Docker with these commands:

```
docker volume create beta-data
docker-compose build
docker-compose up
```

- After running these commands, make sure all of your Docker containers are running

- View the project in the browser: http://localhost:3000/

## Design

CarCar is made up of 3 microservices which interact with one another.

- **Inventory**
- **Services**
- **Sales**

![Img](/images/CarCarDiagram.png)

## Accessing Endpoints to Send and View Data: Access Through Insomnia & Your Browser

### Manufacturers:

| Action                         | Method | URL                                         |
| ------------------------------ | ------ | ------------------------------------------- |
| List manufacturers             | GET    | http://localhost:8100/api/manufacturers/    |
| Create a manufacturer          | POST   | http://localhost:8100/api/manufacturers/    |
| Get a specific manufacturer    | GET    | http://localhost:8100/api/manufacturers/id/ |
| Update a specific manufacturer | PUT    | http://localhost:8100/api/manufacturers/id/ |
| Delete a specific manufacturer | DELETE | http://localhost:8100/api/manufacturers/id/ |

JSON body to send data:

Create and Update a manufacturer (SEND THIS JSON BODY):

- You cannot make two manufacturers with the same name

```
{
  "name": "Chrysler"
}
```

The return value of creating, viewing, updating a single manufacturer:

```
{
	"href": "/api/manufacturers/2/",
	"id": 2,
	"name": "Chrysler"
}
```

Getting a list of manufacturers return value:

```
{
  "manufacturers": [
    {
      "href": "/api/manufacturers/1/",
      "id": 1,
      "name": "Daimler-Chrysler"
    }
  ]
}
```

### Vehicle Models:

| Action                          | Method | URL                                  |
| ------------------------------- | ------ | ------------------------------------ |
| List vehicle models             | GET    | http://localhost:8100/api/models/    |
| Create a vehicle model          | POST   | http://localhost:8100/api/models/    |
| Get a specific vehicle model    | GET    | http://localhost:8100/api/models/id/ |
| Update a specific vehicle model | PUT    | http://localhost:8100/api/models/id/ |
| Delete a specific vehicle model | DELETE | http://localhost:8100/api/models/id/ |

Create and update a vehicle model (SEND THIS JSON BODY):

```
{
  "name": "Sebring",
  "picture_url": "image.yourpictureurl.com"
  "manufacturer_id": 1
}
```

Updating a vehicle model can take the name and/or picture URL:

```
{
  "name": "Sebring",
  "picture_url": "image.yourpictureurl.com"
}
```

Return value of creating or updating a vehicle model:

- This returns the manufacturer's information as well

```
{
  "href": "/api/models/1/",
  "id": 1,
  "name": "Sebring",
  "picture_url": "image.yourpictureurl.com",
  "manufacturer": {
    "href": "/api/manufacturers/1/",
    "id": 1,
    "name": "Daimler-Chrysler"
  }
}
```

Getting a List of Vehicle Models Return Value:

```
{
  "models": [
    {
      "href": "/api/models/1/",
      "id": 1,
      "name": "Sebring",
      "picture_url": "image.yourpictureurl.com",
      "manufacturer": {
        "href": "/api/manufacturers/1/",
        "id": 1,
        "name": "Daimler-Chrysler"
      }
    }
  ]
}
```

### Automobiles:

- The **'vin'** at the end of the detail urls represents the VIN for the specific automobile you want to access. This is not an integer ID. This is a string value so you can use numbers and/or letters.

| Action                       | Method | URL                                        |
| ---------------------------- | ------ | ------------------------------------------ |
| List automobiles             | GET    | http://localhost:8100/api/automobiles/     |
| Create an automobile         | POST   | http://localhost:8100/api/automobiles/     |
| Get a specific automobile    | GET    | http://localhost:8100/api/automobiles/vin/ |
| Update a specific automobile | PUT    | http://localhost:8100/api/automobiles/vin/ |
| Delete a specific automobile | DELETE | http://localhost:8100/api/automobiles/vin/ |

Create an automobile (SEND THIS JSON BODY):

- You cannot make two automobiles with the same vin

```
{
  "color": "red",
  "year": 2012,
  "vin": "1C3CC5FB2AN120174",
  "model_id": 1
}
```

Return Value of Creating an Automobile:

```
{
	"href": "/api/automobiles/1C3CC5FB2AN120174/",
	"id": 1,
	"color": "red",
	"year": 2012,
	"vin": "777",
	"model": {
		"href": "/api/models/1/",
		"id": 1,
		"name": "R8",
		"picture_url": "image.yourpictureurl.com",
		"manufacturer": {
			"href": "/api/manufacturers/1/",
			"id": 1,
			"name": "Audi"
		}
	}
}
```

To get the details of a specific automobile, you can query by its VIN:
example url: http://localhost:8100/api/automobiles/1C3CC5FB2AN120174/

Return Value:

```
{
  "href": "/api/automobiles/1C3CC5FB2AN120174/",
  "id": 1,
  "color": "green",
  "year": 2011,
  "vin": "1C3CC5FB2AN120174",
  "model": {
    "href": "/api/models/1/",
    "id": 1,
    "name": "Sebring",
    "picture_url": "image.yourpictureurl.com",
    "manufacturer": {
      "href": "/api/manufacturers/1/",
      "id": 1,
      "name": "Daimler-Chrysler"
    }
  }
}
```

You can update the color and/or year of an automobile (SEND THIS JSON BODY):

```
{
  "color": "red",
  "year": 2012
}
```

Getting a list of Automobile Return Value:

```
{
  "autos": [
    {
      "href": "/api/automobiles/1C3CC5FB2AN120174/",
      "id": 1,
      "color": "yellow",
      "year": 2013,
      "vin": "1C3CC5FB2AN120174",
      "model": {
        "href": "/api/models/1/",
        "id": 1,
        "name": "Sebring",
        "picture_url": "image.yourpictureurl.com",
        "manufacturer": {
          "href": "/api/manufacturers/1/",
          "id": 1,
          "name": "Daimler-Chrysler"
        }
      }
    }
  ]
}
```

# Sales Microservice

On the backend, the sales microservice has 4 models: AutomobileVO, Customer, SalesPerson, and SalesRecord. SalesRecord is the model that interacts with the other three models. This model gets data from the three other models.

The AutomobileVO is a value object that gets data about the automobiles in the inventory using a poller. The sales poller automatically polls the inventory microservice for data, so the sales microservice is constantly getting the updated data.

The reason for integration between these two microservices is that when recording a new sale, you'll need to choose which car is being sold and that information lives inside of the inventory microservice.

## Accessing Endpoints to Send and View Data - Access through Insomnia:

### Customers:

| Action                   | Method | URL                                     |
| ------------------------ | ------ | --------------------------------------- |
| List customers           | GET    | http://localhost:8090/api/customers/    |
| Create a customer        | POST   | http://localhost:8090/api/customers/    |
| Show a specific customer | GET    | http://localhost:8090/api/customers/id/ |

To create a Customer (SEND THIS JSON BODY):

```
{
	"name": "John Johns",
	"address": "1212 Ocean Street",
	"phone_number": 9804357878
}
```

Return Value of Creating a Customer:

```
{
	"id: "1",
	"name": "John Johns",
	"address": "1212 Ocean Street",
	"phone_number": 9804357878
}
```

Return value of Listing all Customers:

```
{
	"customers": [
		{
			"id",
			"name": "Martha Stewart",
			"address": "1313 Baker Street",
			"phone_number": "980720890"
		},
		{
			"id",
			"name": "John Johns",
			"address": "1212 Ocean Street",
			"phone_number": "9804357878"
		}
	]
}
```

### Salespeople:

| Action               | Method | URL                                       |
| -------------------- | ------ | ----------------------------------------- |
| List salespeople     | GET    | http://localhost:8090/api/salespeople/    |
| Salesperson details  | GET    | http://localhost:8090/api/salesperson/id/ |
| Create a salesperson | POST   | http://localhost:8090/api/salespeople/    |
| Delete a salesperson | DELETE | http://localhost:8090/api/salesperson/id/ |

To create a salesperson (SEND THIS JSON BODY):

```
{
	"name": "Jane Doe",
	"employee_number": 1
}
```

Return Value of creating a salesperson:

```
{
	"id": 1,
	"name": "Liz",
	"employee_number": 1
}
```

List all salespeople Return Value:

```
{
	"salespeople": [
		{
			"id": 1,
			"name": "Jane Doe",
			"employee_number": 1
		}
	]
}
```

### Salesrecords:

- the id value to show a salesperson's salesrecord is the **"id" value tied to a salesperson.**

| Action                          | Method | URL                                        |
| ------------------------------- | ------ | ------------------------------------------ |
| List all salesrecords           | GET    | http://localhost:8090/api/salesrecords/    |
| Create a new sale               | POST   | http://localhost:8090/api/salesrecords/    |
| Show salesperson's salesrecords | GET    | http://localhost:8090/api/salesrecords/id/ |

List all Salesrecords Return Value:

```
{
	"sales": [
		{
			"id": 1,
			"price": 111000,
			"vin": {
				"vin": "111"
			},
			"salesperson": {
				"id": 1,
				"name": "Liz",
				"employee_number": 1
			},
			"customer": {
				"name": "Martha Stewart",
				"address": "1313 Baker Street",
				"phone_number": "980720890"
			}
		}
	]
}
```

Create a New Sale (SEND THIS JSON BODY):

```
{
	"salesperson": "Liz",
	"customer": "John Johns",
	"vin": "888",
	"price": 40000
}
```

Return Value of Creating a New Sale:

```
{
	"id": 4,
	"price": 40000,
	"vin": {
		"vin": "888"
	},
	"salesperson": {
		"id": 1,
		"name": "Liz",
		"employee_number": 1
	},
	"customer": {
		"id",
		"name": "John Johns",
		"address": "1212 Ocean Street",
		"phone_number": "9804357878"
	}
}
```

Show a Salesperson's Salesrecord Return Value:

```
{
	"id": 1,
	"price": 111000,
	"vin": {
		"vin": "111"
	},
	"salesperson": {
		"id": 1,
		"name": "Liz",
		"employee_number": 1
	},
	"customer": {
		"id",
		"name": "Martha Stewart",
		"address": "1313 Baker Street",
		"phone_number": "980720890"
	}
}
```

# Service microservice

On the backend, the service microservice has 3 models: AutomobileVO, Technician, and ServiceAppointment. ServiceAppointment is the model that interacts with the other two models. This model gets data from the two other models.

The AutomobileVO is a value object that gets data about the automobiles in the inventory using a poller. The service poller automatically polls the inventory microservice for data, so the service microservice is constantly getting the updated data.

The reason for integration between these two microservices is that when recording a new service, you'll need to choose which car is being serviced and that information lives inside of the inventory microservice.

## Accessing Endpoints to Send and View Data - Access through Insomnia:

### Technicians:

| Action              | Method | URL                                             |
| ------------------- | ------ | ----------------------------------------------- |
| List technicians    | GET    | http://localhost:8080/api/technicians/          |
| Technician detail   | GET    | http://localhost:8080/api/technicians/<int:pk>/ |
| Create a technician | POST   | http://localhost:8080/api/technicians/          |
| Delete a technician | DELETE | http://localhost:8080/api/technicians/<int:pk>/ |

LIST TECHNICIANS: Following this endpoint will give you a list of all technicians.

```
Example:
{
	"technicians": [
		{
			"name": "Donald",
			"employee_number": 1,
			"id": 1
		},
	]
}
```

TECHNICIAN DETAIL: Shows the details of a specific technician based on their id. http://localhost:8080/api/technicians/1/ would return the following JSON response:

```
{
	"name": "Donald",
	"employee_number": 1,
	"id": 1
}
```

CREATE TECHNICIAN - (SEND THIS JSON BODY):

```
{
	"name": "Liz",
	"employee_number": 2
}
```

Which returns the following JSON response:

```
{
    "name": "Liz",
    "employee_number": 2,
    "id": 2
}
```

DELETE TECHNICIAN - Deletes a technician from the database based on their id. http://localhost:8080/api/technicians/1/ would return the following JSON response:

```
{
    "deleted": true
}
```

### Service Appointments:

| Action                      | Method | URL                                                   |
| --------------------------- | ------ | ----------------------------------------------------- |
| List service appointments   | GET    | http://localhost:8080/api/serviceappointment/         |
| Service appointment detail  | GET    | http://localhost:8080/api/serviceappointment/<int:id> |
| Service appointment history | GET    | http://localhost:8080/api/servicehistory/<int:vin>    |
| Create service appointment  | POST   | http://localhost:8080/api/serviceappointment/         |
| Delete service appointment  | DELETE | http://localhost:8080/api/serviceappointment/<int:id> |

LIST SERVICE APPOINTMENT: This will return a list of all current service appointment.

```
{
	"service_appointment": [
		{
			"id": 1,
			"vin": "1222",
			"customer_name": "Barry",
			"time": "12:30:00",
			"date": "2021-07-14",
			"reason": "flat tires",
			"vip_status": false,
			"technician": "Liz"
		},
        {
			"id": 2,
			"vin": "14234",
			"customer_name": "Pauly",
			"time": "14:20:00",
			"date": "2022-08-12",
			"reason": "broken windshield",
			"vip_status": false,
			"technician": "Caleb"
		},
	]
}
```

SERVICE APPOINTMENT DETAIL: This will return the detail of a specific service appointment by id. http://localhost:8080/api/serviceappointment/1/ would return the following JSON response:

```
{
	"id": 1,
	"vin": "1222",
	"customer_name": "Barry",
	"time": "12:30:00",
	"date": "2021-07-14",
	"reason": "flat tires",
	"vip_status": false,
	"technician": "Liz"
}
```

SERVICE APPOINTMENT HISTORY: This will show the detail based on the "VIN" that is input. You will return all service appointments with the associated vin. http://localhost:8080/api/servicehistory/1222/ would return the following JSON response:

```
{
	"service_history": [
		{
			"id": 1,
			"vin": "1222",
			"customer_name": "Barry",
			"time": "12:30:00",
			"date": "2021-07-14",
			"reason": "mah tires",
			"vip_status": false,
			"technician": "Liz"
		},
		{
			"id": 6,
			"vin": "1222",
			"customer_name": "Gary",
			"time": "12:30:00",
			"date": "2021-07-11",
			"reason": "new car",
			"vip_status": false,
			"technician": "Caleb"
		}
	]
}
```

CREATE SERVICE APPOINTMENT - (SEND THIS JSON BODY):

```
{
    "vin": "1222",
    "customer_name": "Gary",
    "time": "12:30:00",
    "date": "2021-07-11",
    "reason": "new car",
    "vip_status": false,
    "technician": "Caleb"
}

```

Which returns the following JSON response:

```
{
    "id": 6
    "vin": "1222",
    "customer_name": "Gary",
    "time": "12:30:00",
    "date": "2021-07-11",
    "reason": "new car",
    "vip_status": false,
    "technician": "Caleb"
}
```

DELETE SERVICE APPOINTMENT - Deletes a service appointment from the database based on its id. http://localhost:8080/api/serviceappointment/1/ would return the following JSON response:

```
{
    "deleted": true
}
```
