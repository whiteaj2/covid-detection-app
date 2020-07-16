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

    cursor = cnx.cursor()

    res = cursor.callproc("auth", [email, password, 0])
    cursor.close()

    flag = res[2]
    returnData = {}
    returnData["flag"] = flag
    
    return json.dumps(returnData)

@app.route("/handleSignup", methods=["POST"])
def handleSignup():
    data = json.loads(request.data.decode("utf-8"))
    lname = data["lname"]
    fname = data["fname"]
    uname = data["uname"]
    password = data["password"]
    email = data["email"]
    confirmEmail = data["confirmEmail"]
    address = data["address"]
    phone = data["phone"]

    if(email != confirmEmail):
        return json.dumps("{'status': 'failure'}")

    cursor = cnx.cursor()

    try:
        args = [uname, fname, lname, address, phone, email, password]
        cursor.callproc("InsertUser", args)
        cnx.commit()
        cursor.close()

    except mysql.connector.Error as e:
        print("Error: ", e)
        sys.stdout.flush()


    return json.dumps("{'status': 'success'}")


if __name__ == '__main__':
    app.run(debug=True, host="127.0.0.1", port=3000)