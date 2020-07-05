import mysql.connector
from flask_cors import CORS
import json
from flask import Flask
from flask import request
import sys

app = Flask(__name__)
CORS(app)

mydb = mysql.connector.connect(host="127.0.0.1", user="root", password="root", database="TEST")

@app.route("/handleSearch", methods=["POST"])
def handleSearch():
    jsonString = "{'key': 'value'}"
    return json.dumps(jsonString)

@app.route("/handleSubmit", methods=["POST"])
def handleSubmit():
	data = request.data.decode("utf-8")
	print(data)


	return json.dumps("{}")


if __name__ == '__main__':
    app.run(debug=True, host="127.0.0.1", port=3000)