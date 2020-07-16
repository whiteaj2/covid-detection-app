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

uname = "newemail4@something.com"
password = "password"
args = (uname, password, 0)

res = cursor.callproc("auth", args)
for thing in res:
	print(thing)
#cursor.execute("""SELECT * FROM Users;""")
#records = cursor.fetchall()

#for row in records:
#	print(row)

cursor.close()