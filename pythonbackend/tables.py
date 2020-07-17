import mysql.connector
cnx = mysql.connector.connect(user="application", password="Covid1234@@", host="SG-MySQLDatabase-2698-master.servers.mongodirector.com", port=3306, database="testing")
cursor = cnx.cursor()
#cursor.execute("CREATE TABLE User (user_id INT(10) NOT NULL AUTO_INCREMENT,user_name VARCHAR(35) NOT NULL UNIQUE,first_name varchar(35) NOT NULL,last_name varchar(35) NOT NULL,address VARCHAR(100) NOT NULL,u_email VARCHAR(100) NOT NULL UNIQUE ,u_phone INT(10) NOT NULL,insurance varchar(40) NOT NULL,test_results varchar(10) NOT NULL,breathing BOOLEAN,chills BOOLEAN ,shaking_chills BOOLEAN,muscle_pain BOOLEAN,headache BOOLEAN,sore_throat BOOLEAN ,taste_smell BOOLEAN fever BOOLEAN,PRIMARY KEY (user_id));")
#cursor.execute("CREATE TABLE Prescreening (	pre_id INT(10) NOT NULL AUTO_INCREMENT,	parent BOOLEAN NOT NULL,	official_consent BOOLEAN NOT NULL,	close_contact VARCHAR(15) NOT NULL,	facilities VARCHAR(20) NOT NULL,	age_factor BOOLEAN NOT NULL,	employment VARCHAR(10) NOT NULL,	others VARCHAR(40) NOT NULL,	race varchar(20) NOT NULL,	ethnicity varchar(20) NOT NULL,	places varchar(35) NOT NULL,user_insurance BOOLEAN	PRIMARY KEY (pre_id));")
#cursor.execute("CREATE TABLE Location (	location_id INT(10) NOT NULL AUTO_INCREMENT,	location_name VARCHAR(50) NOT NULL,	zip_code INT(15) NOT NULL UNIQUE,	infected_region BOOLEAN NOT NULL,	testing_site BOOLEAN NOT NULL,	PRIMARY KEY (location_id));")
#sql="CREATE TABLE User_pre (	u_p_id INT(10) NOT NULL AUTO_INCREMENT,	user_id INT(10) NOT NULL,	pre_id INT(10) NOT NULL,	PRIMARY KEY (u_p_id));"
#sql="CREATE TABLE User_location (	l_c_id INT(10) NOT NULL AUTO_INCREMENT,	user_id INT(10) NOT NULL,	location_id INT(10) NOT NULL,	PRIMARY KEY (l_c_id));"
#sql="ALTER TABLE User_pre ADD CONSTRAINT User_pre_fk0 FOREIGN KEY (user_id) REFERENCES User(user_id);"
#sql="ALTER TABLE User_pre ADD CONSTRAINT User_pre_fk1 FOREIGN KEY (pre_id) REFERENCES Prescreening(pre_id);"
#sql="ALTER TABLE User_location ADD CONSTRAINT User_location_fk0 FOREIGN KEY (user_id) REFERENCES User(user_id);"
#sql="ALTER TABLE User_location ADD CONSTRAINT User_location_fk1 FOREIGN KEY (location_id) REFERENCES Location(location_id);"
#sql="ALTER TABLE User ADD city VARCHAR(20); "
#sql="ALTER TABLE User ADD state VARCHAR(20);"
#sql="ALTER TABLE User ADD zip_code INT(15) NOT NULL UNIQUE;"
#sql="ALTER TABLE User DROP (insurance,test_results ,breathing ,chills ,shaking_chills,muscle_pain,headache,sore_throat ,taste_smell, fever);"

#sql="ALTER TABLE User_pre DROP User_pre_fk0;"
#sql="DROP TABLE User_pre;"
#sql="DROP TABLE User_location;"
sql="DROP TABLE User;"


#sql="CREATE TABLE User_pre (	u_p_id INT(10) NOT NULL AUTO_INCREMENT,	user_id INT(10) NOT NULL,	pre_id INT(10) NOT NULL,	PRIMARY KEY (u_p_id));"
#sql="CREATE TABLE User_location (	l_c_id INT(10) NOT NULL AUTO_INCREMENT,	user_id INT(10) NOT NULL,	location_id INT(10) NOT NULL,	PRIMARY KEY (l_c_id));"
#sql="ALTER TABLE User_pre ADD CONSTRAINT User_pre_fk0 FOREIGN KEY (user_id) REFERENCES User(user_id);"
#sql="ALTER TABLE User_pre ADD CONSTRAINT User_pre_fk1 FOREIGN KEY (pre_id) REFERENCES Prescreening(pre_id);"
#sql="ALTER TABLE User_location ADD CONSTRAINT User_location_fk0 FOREIGN KEY (user_id) REFERENCES User(user_id);"
#sql="ALTER TABLE User_location ADD CONSTRAINT User_location_fk1 FOREIGN KEY (location_id) REFERENCES Location(location_id);"

cursor.execute(sql)