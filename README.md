
# Cab Allocation System
 A User Interaction is designed where Customers are provided with a feature to book and end the rides on this service and Drivers that are not involved in any ongoing ride are provided with a choice to accept the Customer’s ride or not.

### Further explanation and assumptions:
1. Request to make a ride can only be done one at a time by the Customer
2. Authority to Accept or serve the Customer’s Request is enabled by the Driver. 
3. Customer is also provided an option to end the ongoing ride.
4. The Status of every ride can be identified by three states i.e Requested,Accepted and Completed.

### Prerequisites

You need to install the following packages for backend:

```
asgiref==3.2.3
Django==3.0.1
django-cors-headers==3.2.0
django-jsonfield==1.4.0
djangorestframework==3.11.0
pkg-resources==0.0.0
pytz==2019.3
six==1.13.0
sqlparse==0.3.0
psycopg2==2.7.4

```
### Installation

Clone the repository

```
https://github.com/Pramod0215/Cab-allocation-system/
```

Setting up your virtual environment:

```
python3 -m venv .env
```

Activating Virtual  Environment

```
source .env/bin/activate
```
Once the repository is cloned and virtual environment set up, go to the directory where the requirements.txt(Catalogue-management-system/backend/) is and type the following code in your terminal:

```
pip install requirements.txt
```

### Database setup

If all requirements are installed, then Postgres database must be set up as per stated below.

Activating postgres
```
sudo su postgres

```
Get in to postgres shell
```
psql

```
To create a database for our Django project
```
CREATE DATABASE cabride;

```
Create a database user which we will use to connect to and interact with the database. Set the password.
```
CREATE USER admin WITH PASSWORD 'admin';

```
Now, all we need to do is give our database user access rights to the database we created
```
GRANT ALL PRIVILEGES ON DATABASE tripcontrol TO admin;

```
Before running server make sure all migrations done. To exucute all migration
```
python3 manage.py migrate
python3 manage.py makemigrations

```

## Overall detail
```
Database Name: cabride
Username: myprojectuser
Password: pa$$word

```

Then to run the server, go to the directory 'tarzen/Cab-allocation-system/cab_allocation_system/' and type the following code in terminal:

```
python3 manage.py runserver
```

For Frontend which is ReactJS,
Dependencies are: 
```
"nodejs":"^v8.10.0",
"npm":"^6.13.4",
"react": "^16.12.0",
"react-dom": "^16.12.0",
"react-router-dom": "^5.1.2",
"react-scripts": "0.9.5"

```

Go to '/Cab-allocation-system/frontend' and type the following code in the terminal:
```
"sudo apt install nodejs",
"node --version",
"npm install", 
"npm -v",

```
Then to run the react server, type the code:
```
npm start
```
# images
![alt Home Page](https://github.com/Pramod0215/Cab-allocation-system/blob/master/cab_allocation_system/image/Screenshot%20from%202020-01-31%2017-47-26.png)<br>
![alt User Page](https://github.com/Pramod0215/Catalog-Product-Management/blob/master/image/Screenshot%20from%202020-01-31%2017-17-37.png)<br>
![alt Driver Page](https://github.com/Pramod0215/Catalog-Product-Management/blob/master/image/Screenshot%20from%202020-01-31%2017-21-03.png)<br>
![alt setting Page](https://github.com/Pramod0215/Catalog-Product-Management/blob/master/image/Screenshot%20from%202020-01-31%2017-21-08.png)


 
