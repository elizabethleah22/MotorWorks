# CarCar

CarCar is an application for managing aspects of an automobile dealership. It manages the inventory, automobile sales, and automobile services.

Team:

* Liz Gonzalez - Auto Sales
* Donald Powell - Auto Services

# Getting Started

- Make sure you have Docker, Git, and Node.js 18.2 or above

1. Fork this repository

2. Clone the forked repository onto your local computer:
git clone <<respository.url.here>>

3. Build and run the project using Docker with these commands:
docker volume create beta-data
docker-compose build
docker-compose up

- After running these commands, make sure all of your Docker containers are running

- View the project in the browser: http://localhost:3000/

## Design

CarCar is made up of 3 microservices which interact with each other.

- Inventory
- Services
- Sales

![Diagram](/project-beta/diagrams/CarCarDiagram.png)

# Accessing Endpoints to Send and View Data: Access through Insomina & Your Browser

MANUFACTURERS:

Action	                        Method	                  URL

List manufacturers	              GET	       http://localhost:8100/api/manufacturers/
Create a manufacturer	          POST	       http://localhost:8100/api/manufacturers/
Get a specific manufacturer	      GET	       http://localhost:8100/api/manufacturers/:id/
Update a specific manufacturer	  PUT	       http://localhost:8100/api/manufacturers/:id/
Delete a specific manufacturer	  DELETE	   http://localhost:8100/api/manufacturers/:id/

JSON body to send data:

Create and Update a manufacturer (SEND THIS JSON BODY):

{
  "name": "Chrysler"
}

The return value of creating, viewing, updating a single manufacturer:

{
	"href": "/api/manufacturers/2/",
	"id": 2,
	"name": "Chrysler"
}

Getting a list of manufacturers return value:

{
  "manufacturers": [
    {
      "href": "/api/manufacturers/1/",
      "id": 1,
      "name": "Daimler-Chrysler"
    }
  ]
}

VEHICLE MODELS:


Action	                           Method	         URL
List vehicle models	              GET	    http://localhost:8100/api/models/
Create a vehicle model	          POST	    http://localhost:8100/api/models/
Get a specific vehicle model	  GET	    http://localhost:8100/api/models/:id/
Update a specific vehicle model	  PUT	    http://localhost:8100/api/models/:id/
Delete a specific vehicle model	  DELETE	http://localhost:8100/api/models/:id/


Create and Update a vehicle model (SEND THIS JSON BODY):

{
  "name": "Sebring",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
  "manufacturer_id": 1
}

Updating a vehile model can take the name and/or picture URL:

{
  "name": "Sebring",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg"
}

Return value of creating or updating a vehicle model:
- this returns the manufacturer's information as well -

{
  "href": "/api/models/1/",
  "id": 1,
  "name": "Sebring",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
  "manufacturer": {
    "href": "/api/manufacturers/1/",
    "id": 1,
    "name": "Daimler-Chrysler"
  }
}

Getting a List of Vehicle Models Return Value:

{
  "models": [
    {
      "href": "/api/models/1/",
      "id": 1,
      "name": "Sebring",
      "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
      "manufacturer": {
        "href": "/api/manufacturers/1/",
        "id": 1,
        "name": "Daimler-Chrysler"
      }
    }
  ]
}

AUTOMOBILE INFORMTION:
- the 'vin' at the end of the detail urls represents the VIN for the specific automobile you want to access. This is not an integer ID. -

Action	                       Method	              URL
List automobiles	            GET	     http://localhost:8100/api/automobiles/
Create an automobile	        POST	 http://localhost:8100/api/automobiles/
Get a specific automobile	    GET	     http://localhost:8100/api/automobiles/:vin/
Update a specific automobile	PUT	     http://localhost:8100/api/automobiles/:vin/
Delete a specific automobile	DELETE	 http://localhost:8100/api/automobiles/:vin/

Create an automobile (SEND THIS JSON BODY):

{
  "color": "red",
  "year": 2012,
  "vin": "1C3CC5FB2AN120174",
  "model_id": 1
}

Return Value of Creating an Automobile:

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
		"picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
		"manufacturer": {
			"href": "/api/manufacturers/1/",
			"id": 1,
			"name": "Audi"
		}
	}
}

To get the details of a specific automobile, you can query by its VIN:
example url: http://localhost:8100/api/automobiles/1C3CC5FB2AN120174/

Return Value:

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
    "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
    "manufacturer": {
      "href": "/api/manufacturers/1/",
      "id": 1,
      "name": "Daimler-Chrysler"
    }
  }
}

You can update the color and/or year of an automobile (SEND THIS JSON BODY):

{
  "color": "red",
  "year": 2012
}

Getting a list of Automobile Return Value:

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
        "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
        "manufacturer": {
          "href": "/api/manufacturers/1/",
          "id": 1,
          "name": "Daimler-Chrysler"
        }
      }
    }
  ]
}


## Service microservice

Explain your models and integration with the inventory
microservice, here.


## Sales microservice



# SALES: Accessing Endpoints to Send and View Data: Access through Insomina

CUSTOMERS:

Action               Method            URL
Create a customer    POST      http://localhost:8090/api/customers/
List Customers       GET       http://localhost:8090/api/customers/

To create a Customer (SEND THIS JSON BODY):

{
	"name": "John Johns",
	"address": "1212 Ocean Street",
	"phone_number": 9804357878
}

Return Value of Creating a Customer:

{
	"name": "John Johns",
	"address": "1212 Ocean Street",
	"phone_number": 9804357878
}

Return value of Listing all Customers:

{
	"customers": [
		{
			"name": "Martha Stewart",
			"address": "1313 Baker Street",
			"phone_number": "980720890"
		},
		{
			"name": "John Johns",
			"address": "1212 Ocean Street",
			"phone_number": "9804357878"
		}
	]
}

SALESPEOPLE:

Action                Method                  URL
Create a salesperson   POST     http://localhost:8090/api/salespeople/
Salesperson details    GET      http://localhost:8090/api/salesperson/int:id/
List salespeople       GET      http://localhost:8090/api/salespeople/
Delete a salesperson   DELETE   http://localhost:8090/api/salesperson/int:id/

To create a salesperson (SEND THIS JSON BODY):

{
	"name": "Jane Doe",
	"employee_number": 1
}

Return Value of creating a salesperson:

{
	"id": 1,
	"name": "Liz",
	"employee_number": 1
}

List all salespeople Return Value:

{
	"salespeople": [
		{
			"id": 1,
			"name": "Jane Doe",
			"employee_number": 1
		}
	]
}

SALESRECORDS:
- the id value to show a salesperson's salesrecord is the "id" value tied to a salesperson

Action                             Method            URL
List all salesrecords               GET     http://localhost:8090/api/salesrecords/
Create a New Sale                   POST    http://localhost:8090/api/salesrecords/
Show a salesperson's salesrecords   GET     http://localhost:8090/api/salesrecords/int:id/

List all Salesrecords Return Value:

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

Create a New Sale (SEND THIS JSON BODY):

{
	"salesperson": "Liz",
	"customer": "John Johns",
	"vin": "888",
	"price": 40000
}

Return Value of Creating a New Sale:

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
		"name": "John Johns",
		"address": "1212 Ocean Street",
		"phone_number": "9804357878"
	}
}

Show a Salesperson's Salesrecord Return Value:

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
