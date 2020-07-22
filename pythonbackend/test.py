import mysql.connector


cnx = mysql.connector.connect(user="application", password="Covid1234@@", host="SG-MySQLDatabase-2698-master.servers.mongodirector.com", port=3306, database="testing")


cursor = cnx.cursor()


#Calling a sproc => CALL stored_procedure_name(argument_list);


#cursor.execute(""" DROP PROCEDURE InsertUser; """)
#cursor.execute(""" CREATE PROCEDURE InsertUser(
#						IN uname_in VARCHAR(255), 
#						IN fname_in VARCHAR(255), 
#						IN lname_in VARCHAR(255),
#						IN address_in VARCHAR(255),
#						IN phone_in VARCHAR(10), 
#						IN email_in VARCHAR(255), 
#						IN password_in VARCHAR(255))
#				   BEGIN
#
#				   		DECLARE flag INT DEFAULT 0;
#
#				   		IF phone_in NOT REGEXP '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]' THEN
#				   			SET flag = 1;
#				   		END IF;
#
#				   		IF email_in NOT REGEXP '^[a-zA-Z0-9][+a-zA-Z0-9._-]*@[a-zA-Z0-9][a-zA-Z0-9._-]*[a-zA-Z0-9]*\\.[a-zA-Z]{2,4}$' THEN
#				   			SET flag = 1;
#				   		END IF;
#
#				   	    IF flag <> 1 THEN
#				   			INSERT INTO Users (uname,fname,lname,address,phone,email,password)
#				   			VALUES (uname_in, fname_in, lname_in, address_in, phone_in, email_in, password_in);
#				   		END IF;
#
#				   END;""")
#cnx.commit()


#cursor.execute("""

#CREATE Procedure auth(
#	IN email_in VARCHAR(255),
#	IN pass_in VARCHAR(255),
#	INOUT flag INT)
#
#this_proc: BEGIN
#
#	DECLARE checkPass VARCHAR(255) DEFAULT NULL;
#	SET flag = 0;
#
#	SELECT password
#	INTO checkPass
#	FROM Users
#	WHERE email = email_in;
#
#
#	IF checkPass IS NULL THEN
#		SET flag = 1;
#		LEAVE this_proc;
#	END IF;
#
#	IF checkPass <> pass_in THEN
#		SET flag = 2;
#		LEAVE this_proc;
#	END IF;
#
#END""")

#cnx.commit()

#args = ["testuser212", "John", "Doe", "1234 Fake Street", "123456789", "newemail4@something.com", "password"]
#cursor.callproc("InsertUser", args)
#cnx.commit()

#uname = "newemail4@something.com"
#password = "password"
#args = (uname, password, 0)


#cursor.execute("DROP TABLE testingCenter;")
#cnx.commit()
#cursor.execute("""
#CREATE TABLE testingCenter (
#	centerID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
#	name VARCHAR(100),
#	latitude DECIMAL(10, 8) NOT NULL,
#	longitude DECIMAL(10, 8) NOT NULL,
#	address VARCHAR(255) NOT NULL,
#	scheduling VARCHAR(255),
#	hours VARCHAR(255),
#	requiresPreScreening BIT(1) NOT NULL,
#	eighteenAndOver BIT(1) NOT NULL,
#	symptomatic BIT(1) NOT NULL,
#	doctorsNote BIT(1) NOT NULL,
#	exposure BIT(1) NOT NULL,
#	essentialWorker BIT(1) NOT NULL,
#	pregnant BIT(1) NOT NULL,
#	over65 BIT(1) NOT NULL,
#	highRisk BIT(1) NOT NULL,
#	payment VARCHAR(255) NOT NULL,
#	contactInfo VARCHAR(255) NOT NULL,
#	testResults VARCHAR(255) NOT NULL
#);
#	""")
#cnx.commit()

queryString = """INSERT INTO testingCenter(name,
										   latitude,
										   longitude,
										   address,
										   scheduling,
										   hours,
										   requiresPreScreening,
										   eighteenAndOver,
										   symptomatic,
										   doctorsNote,
										   exposure,
										   essentialWorker,
										   pregnant,
										   over65,
										   highRisk,
										   payment,
										   contactInfo,
										   testResults
										   )
				VALUES ('{}',{},{},'{}','{}','{}',{},{},{},{},{},{},{},{},{},'{}','{}','{}');"""

cursor.execute(queryString.format("CVS Pharmacy",
		39.8112378,
		-86.3105394,
		"8330 Crawfordsville Road, Indianapolis, IN 46234",
		"by appointment via web",
		"starts Friday May 22",
		1, #requiresPreScreening
		1, #eighteenAndOver
		0, #symptomatic
		0, #doctorsNote
		0, #exposure
		0, #essentialWorker
		0, #pregnant
		0, #over65
		0, #highRisk
		"""bring insurance info
		should not have out-of-pocket costs, check with your health plan to confirm
		if not insurance, social security number, license or state ID""",
		"No contact Info available",
		"emailed to link in MyChart"))
cnx.commit()

#cursor.execute("SELECT name FROM testingCenter;")
#records = cursor.fetchall()
#for row in records:
#	print(row)

#res = cursor.callproc("auth", args)
#for thing in res:
#	print(thing)
#cursor.execute("""SELECT * FROM Users;""")
#records = cursor.fetchall()

#for row in records:
#	print(row)

cursor.close()