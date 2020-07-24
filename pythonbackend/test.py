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

#res = cursor.callproc("auth", args)
#for thing in res:
#	print(thing)
###args = (uname, password, 0)

####res = cursor.callproc("auth", args)
####for thing in res:
####	print(thing)

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


#cursor.execute(""" DROP PROCEDURE InsertPrescreening; """)

"""cursor.execute( CREATE PROCEDURE InsertPrescreening(
					IN age_18_in VARCHAR(10),
						IN age_65_in VARCHAR(10),
						IN official_consent_in VARCHAR(10),
						IN close_contact_in VARCHAR(10),
						IN fever_in VARCHAR(10),
						IN cough_in VARCHAR(10),
						IN breathing_in VARCHAR(10),
						IN chills_in VARCHAR(10),
						IN shaking_chills_in VARCHAR(10),
						IN muscle_pain_in VARCHAR(10),
						IN headache_in VARCHAR(10),
						IN sore_throat_in VARCHAR(10),
						IN taste_smell_in VARCHAR(10),
						IN vomiting_in VARCHAR(10),
						IN diarrhea_in VARCHAR(10),
						IN asthma_lung_in VARCHAR(10),
						IN diabetes_in VARCHAR(10),
						IN obesity_in VARCHAR(10),
						IN cirrhosis_in VARCHAR(10),
						IN heart_condition_in VARCHAR(10),
						IN harder_cough_disease_in VARCHAR(10),
						IN kidney_renal_disease_in VARCHAR(10),
						IN weakened_immune_system_in VARCHAR(10),
						IN pregnant_in VARCHAR(10),
						IN essential_healthcare_worker_in VARCHAR(10),
						IN address1_in VARCHAR(255),
						IN address2_in VARCHAR(255),
						IN city_in VARCHAR(50),
						IN state_in VARCHAR(50),
						IN zip_in INT(15),
						IN loc_1_name_in VARCHAR(100),
						IN loc_1_address1_in VARCHAR(255),
						IN loc_1_address2_in VARCHAR(255),
						IN loc_1_city_in VARCHAR(50),
						IN loc_1_state_in VARCHAR(50),
						IN loc_1_zip_in INT(15),
						IN loc_2_name_in VARCHAR(100),
						IN loc_2_address1_in VARCHAR(255),
						IN loc_2_address2_in VARCHAR(255),
						IN loc_2_city_in VARCHAR(50),
						IN loc_2_state_in VARCHAR(50),
						IN loc_2_zip_in INT(15),
						IN loc_3_name_in VARCHAR(100),
						IN loc_3_address1_in VARCHAR(255),
						IN loc_3_address2_in VARCHAR(255),
						IN loc_3_city_in VARCHAR(50),
						IN loc_3_state_in VARCHAR(50),
						IN loc_3_zip_in INT(15),
						IN score_in INT,
						IN authenticatedEmail_in VARCHAR(100))
					BEGIN
						
							
							
							
				   			INSERT INTO Prescreening (age_18, age_65, official_consent, close_contact, fever, cough, breathing, chills, shaking_chills, muscle_pain, headache, sore_throat, taste_smell, vomiting, diarrhea, asthma_lung, diabetes, obesity, cirrhosis, heart_condition, harder_cough_disease, kidney_renal_disease, weakened_immune_system, pregnant, essential_healthcare_worker, address1, address2, city, state, zip, loc_1_name, loc_1_address1, loc_1_address2, loc_1_city, loc_1_state, loc_1_zip, loc_2_name, loc_2_address1, loc_2_address2, loc_2_city, loc_2_state, loc_2_zip, loc_3_name, loc_3_address1, loc_3_address2, loc_3_city, loc_3_state, loc_3_zip,score)
				   			VALUES (age_18_in, age_65_in, official_consent_in, close_contact_in, fever_in, cough_in, breathing_in, chills_in, shaking_chills_in, muscle_pain_in, headache_in, sore_throat_in, taste_smell_in, vomiting_in, diarrhea_in, asthma_lung_in, diabetes_in, obesity_in, cirrhosis_in, heart_condition_in, harder_cough_disease_in, kidney_renal_disease_in, weakened_immune_system_in, pregnant_in, essential_healthcare_worker_in, address1_in, address2_in, city_in, state_in, zip_in, loc_1_name_in, loc_1_address1_in, loc_1_address2_in, loc_1_city_in, loc_1_state_in, loc_1_zip_in, loc_2_name_in, loc_2_address1_in, loc_2_address2_in, loc_2_city_in, loc_2_state_in, loc_2_zip_in, loc_3_name_in, loc_3_address1_in, loc_3_address2_in, loc_3_city_in, loc_3_state_in, loc_3_zip_in,score_in);
			
							SET @LID = LAST_INSERT_ID();			
							SELECT userID INTO @userIDin FROM Users where email= authenticatedEmail_in;

							INSERT INTO User_pre(userID, pre_id)
							VALUES(@userIDin,@LID);   
 
END;)
"""

"""cursor.execute( CREATE PROCEDURE InsertResult(
					IN test_res_in VARCHAR(10),
					IN authenticatedEmail_in VARCHAR(100))

				BEGIN
							INSERT INTO Result (test_res)
							VALUES (test_res_in);
							SET @LID = LAST_INSERT_ID();


							SELECT userID INTO @userIDin FROM Users where email= authenticatedEmail_in;

				   			INSERT INTO User_res (userID, res_id)
							VALUES (@userIDin,@LID);

					END;)
					"""
		

							


#cursor.execute(""" DROP PROCEDURE InsertUser_pre; """)

##################################



cursor.close()