import mysql.connector
from flask_cors import CORS
import json
from flask import Flask
from flask import request
import sys

app = Flask(__name__)
CORS(app)

cnx = mysql.connector.connect(user="application", password="Covid1234@@", host="SG-MySQLDatabase-2698-master.servers.mongodirector.com", port=3306, database="testing")
@app.route("/handleSearch", methods=["POST"])
def handleSearch():
    jsonString = "{'key': 'value'}"
    return json.dumps(jsonString)

@app.route("/handleSubmit", methods=["POST"])
def handleSubmit():
    data = json.loads(request.data.decode("utf-8"))
    email = data["email"]
    password = data["password"]
    print(email)
    print(password)
    
    return json.dumps("{}")

@app.route("/handleSignup", methods=["POST"])
def handleSignup():
    data = json.loads(request.data.decode("utf-8"))
    lname = data["lname"]
    fname = data["fname"]
    uname = data["uname"]
    password = data["password"]
    email = data["email"]
    confirmEmail = data["confirmEmail"]

    if(email != confirmEmail):
        return json.dumps("{}")

    cursor = cnx.cursor()

    queryString = "INERST INTO users VALUES (" + uname + "," + fname + "," + lname + "," + "testaddress," + "testphone," + email + ");" 
    cursor.execute(queryString)
    cursor.close()


if __name__ == '__main__':
    app.run(debug=True, host="127.0.0.1", port=3000)