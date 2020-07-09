import mysql.connector


cnx = mysql.connector.connect(user="application", password="Covid1234@@", host="SG-MySQLDatabase-2698-master.servers.mongodirector.com", port=3306, database="testing")


cursor = cnx.cursor()

cursor.execute("CREATE TABLE Users(userID int NOT NULL AUTO_INCREMENT PRIMARY KEY, uname varchar(20),fname varchar(30),lname varchar(30),address varchar(100),phone varchar(10),email varchar(100),CONSTRAINT UC_Username UNIQUE (uname),CONSTRAINT UC_email UNIQUE (email));")