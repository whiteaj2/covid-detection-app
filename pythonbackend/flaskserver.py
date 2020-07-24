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

    returnData = {}

    if(email != confirmEmail):
        returnData["status"] = "failure"
        return json.dumps(returnData)

    cursor = cnx.cursor()

    try:
        args = [uname, fname, lname, address, phone, email, password]
        cursor.callproc("InsertUser", args)
        cnx.commit()
        cursor.close()

    except mysql.connector.Error as e:
        print("Error: ", e)
        sys.stdout.flush()

    returnData["status"] = "success"
    return json.dumps(returnData)

@app.route("/handleTest", methods=["POST"])
def handleTest():
    data = json.loads(request.data.decode("utf-8"))
    age_18 = data["age_18"]
    age_65 = data["age_65"]
    official_consent = data["official_consent"]
    close_contact = data["close_contact"]
    fever = data["fever"]
    cough = data["cough"]
    breathing = data["breathing"]
    chills = data["chills"]
    shaking_chills = data["shaking_chills"]
    muscle_pain = data["muscle_pain"]
    headache = data["headache"]
    sore_throat = data["sore_throat"]
    taste_smell = data["taste_smell"]
    vomiting = data["vomiting"]
    diarrhea = data["diarrhea"]
    asthma_lung = data["asthma_lung"]
    diabetes = data["diabetes"]
    obesity = data["obesity"]
    cirrhosis = data["cirrhosis"]
    heart_condition = data["heart_condition"]
    harder_cough_disease = data["harder_cough_disease"]
    kidney_renal_disease = data["kidney_renal_disease"]
    weakened_immune_system = data["weakened_immune_system"]
    pregnant = data["pregnant"]
    essential_healthcare_worker = data["essential_healthcare_worker"]
    address1 = data["address1"]
    address2 = data["address2"]
    city = data["city"]
    state = data["state"]
    zip = data["zip"]
    loc_1_name = data["loc_1_name"]
    loc_1_address1 = data["loc_1_address1"]
    loc_1_address2 = data["loc_1_address2"]
    loc_1_city = data["loc_1_city"]
    loc_1_state = data["loc_1_state"]
    loc_1_zip = data["loc_1_zip"]
    loc_2_name = data["loc_2_name"]
    loc_2_address1 = data["loc_2_address1"]
    loc_2_address2 = data["loc_2_address2"]
    loc_2_city = data["loc_2_city"]
    loc_2_state = data["loc_2_state"]
    loc_2_zip = data["loc_2_zip"]
    loc_3_name = data["loc_3_name"]
    loc_3_address1 = data["loc_3_address1"]
    loc_3_address2 = data["loc_3_address2"]
    loc_3_city = data["loc_3_city"]
    loc_3_state = data["loc_3_state"]
    loc_3_zip = data["loc_3_zip"]
    score=int(data["score"])
    authenticatedEmail=data["authenticatedEmail"]
    

    returnData = {}


    if zip=="":
        zip=int("0000")

    if loc_1_zip=="":
        loc_1_zip=int("0000")

    if loc_2_zip=="":
        loc_2_zip=int("0000")

    if  loc_3_zip=="":
        loc_3_zip=int("0000")


    cursor = cnx.cursor()
    try:
        args = [age_18, age_65, official_consent, close_contact, fever, cough, breathing, chills, shaking_chills, muscle_pain, headache, sore_throat, taste_smell, vomiting, diarrhea, asthma_lung, diabetes, obesity, cirrhosis, heart_condition, harder_cough_disease, kidney_renal_disease, weakened_immune_system, pregnant, essential_healthcare_worker, address1, address2, city, state, zip, loc_1_name, loc_1_address1, loc_1_address2, loc_1_city, loc_1_state, loc_1_zip, loc_2_name, loc_2_address1, loc_2_address2, loc_2_city, loc_2_state, loc_2_zip, loc_3_name, loc_3_address1, loc_3_address2, loc_3_city, loc_3_state, loc_3_zip, score,authenticatedEmail]
        cursor.callproc("InsertPrescreening", args)

        cnx.commit()
        cursor.close()

    except mysql.connector.Error as e:
        print("Error: ", e)
        sys.stdout.flush()


    returnData["status"] = "success"
    return json.dumps(returnData)

#Testing results
@app.route("/handleRes", methods=["POST"])
def handleRes():
    data = json.loads(request.data.decode("utf-8"))
    test_res=data["test_res"]
    authenticatedEmail=data["authenticatedEmail"]

    #print(test_res)
    #sys.stdout.flush()

    returnData = {}

    cursor = cnx.cursor()
    try:
        args=[test_res, authenticatedEmail]
        cursor.callproc("InsertResult", args) #Need to create this proc to insert testResult
        
        cnx.commit()
        cursor.close()

    except mysql.connector.Error as e:
        print("Error: ", e)
        sys.stdout.flush()


    returnData["status"] = "success"
    return json.dumps(returnData)



if __name__ == '__main__':
    app.run(debug=True, host="127.0.0.1", port=3000)