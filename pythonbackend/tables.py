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
#sql="DROP TABLE User;"
#sql="ALTER TABLE Users ADD userID INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY ;"
#sql="DROP TABLE User_pre;"
#---sql="ALTER TABLE User_pre ADD FOREIGN KEY (userID) REFERENCES Users(userID);"
#sql="CREATE TABLE User_pre (u_p_id INT(10) NOT NULL AUTO_INCREMENT,	userID INT NOT NULL,	pre_id INT(10) NOT NULL,	PRIMARY KEY (u_p_id));"
#sql="CREATE TABLE User_location (	l_c_id INT(10) NOT NULL AUTO_INCREMENT,	userID INT NOT NULL,	location_id INT(10) NOT NULL,	PRIMARY KEY (l_c_id));"
#sql="ALTER TABLE User_pre ADD CONSTRAINT User_pre_fk0 FOREIGN KEY (userID) REFERENCES Users(userID);"
##sql="ALTER TABLE User_pre ADD CONSTRAINT User_pre_fk1 FOREIGN KEY (pre_id) REFERENCES Prescreening(pre_id);"
##sql="ALTER TABLE User_location ADD CONSTRAINT User_location_fk0 FOREIGN KEY (userID) REFERENCES Users(userID);"
#sql="ALTER TABLE User_location ADD CONSTRAINT User_location_fk1 FOREIGN KEY (location_id) REFERENCES Location(location_id);"
#sql="DESCRIBE User_pre;"
#sql="DROP TABLE User_pre;" 

#sql="CREATE TABLE User_pre (u_p_id INT(10) NOT NULL AUTO_INCREMENT,	userID INT NOT NULL, pre_id INT(10) NOT NULL, PRIMARY KEY (u_p_id), FOREIGN KEY (userID) REFERENCES Users(userID),	FOREIGN KEY (pre_id) REFERENCES Prescreening(pre_id)) ;"
#sql="DROP TABLE User_location;"

#sql="CREATE TABLE User_location (u_l_id INT(10) NOT NULL AUTO_INCREMENT,	userID INT NOT NULL, location_id INT(10) NOT NULL, PRIMARY KEY (u_l_id), FOREIGN KEY (userID) REFERENCES Users(userID),	FOREIGN KEY (location_id) REFERENCES Location(location_id)) ;"
#sql="ALTER TABLE Prescreening ;"
#ADD in PRESCREENING test_results ,breathing ,chills ,shaking_chills,muscle_pain,headache,sore_throat ,taste_smell, fever

#sql="ALTER TABLE Prescreening DROP parent, DROP facilities,DROP age_factor,DROP employment,DROP others,DROP user_insurance;"
#sql="ALTER TABLE Prescreening DROP close_contact, DROP ethnicity, DROP race, DROP places;"
#sql="DESC Users;"
#sql="ALTER TABLE Prescreening ADD age_18 BOOLEAN, ADD age_65 BOOLEAN, ADD close_contact BOOLEAN, ADD fever BOOLEAN, ADD cough BOOLEAN, ADD breathing BOOLEAN, ADD chills BOOLEAN, ADD shaking_chills BOOLEAN, ADD muscle_pain BOOLEAN, ADD headache BOOLEAN, ADD sore_throat BOOLEAN, ADD taste_smell BOOLEAN, ADD vomiting BOOLEAN, ADD diarrhea BOOLEAN, ADD asthma_lung BOOLEAN, ADD diabetes BOOLEAN, ADD obesity BOOLEAN, ADD cirrhosis BOOLEAN, ADD heart_condition BOOLEAN, ADD harder_cough_disease BOOLEAN, ADD weakened_immune_system BOOLEAN, ADD pregnant BOOLEAN, ADD essential_healthcare_worker BOOLEAN, ADD address1 varchar(255), ADD address2 varchar(255), ADD city varchar(50), ADD state varchar(50), ADD zip int(15), ADD loc_1_name varchar(100), ADD loc_1_address1 varchar(255), ADD loc_1_address2 varchar(255), ADD loc_1_city varchar(50), ADD loc_1_state varchar(50), ADD loc_1_zip int(15), ADD loc_2_name varchar(100), ADD loc_2_address1 varchar(255), ADD loc_2_address2 varchar(255), ADD loc_2_city varchar(50), ADD loc_2_state varchar(50), ADD loc_2_zip int(15), ADD loc_3_name varchar(100), ADD loc_3_address1 varchar(255), ADD loc_3_address2 varchar(255), ADD loc_3_city varchar(50), ADD loc_3_state varchar(50), ADD loc_3_zip int(15) ;"

####sql="ALTER TABLE Prescreening DROP age_18 BOOLEAN, ADD age_65 BOOLEAN, ADD close_contact BOOLEAN, ADD fever BOOLEAN, ADD cough BOOLEAN, ADD breathing BOOLEAN, ADD chills BOOLEAN, ADD shaking_chills BOOLEAN, ADD muscle_pain BOOLEAN, ADD headache BOOLEAN, ADD sore_throat BOOLEAN, ADD taste_smell BOOLEAN, ADD vomiting BOOLEAN, ADD diarrhea BOOLEAN, ADD asthma_lung BOOLEAN, ADD diabetes BOOLEAN, ADD obesity BOOLEAN, ADD cirrhosis BOOLEAN, ADD heart_condition BOOLEAN, ADD harder_cough_disease BOOLEAN, ADD weakened_immune_system BOOLEAN, ADD pregnant BOOLEAN, ADD essential_healthcare_worker "

#sql="ALTER TABLE Prescreening DROP age_18 ,DROP age_65 ,DROP  close_contact ,DROP  fever ,DROP  cough ,DROP  breathing,DROP  chills ,DROP  shaking_chills,DROP  muscle_pain ,DROP  headache ,DROP  sore_throat ,DROP  taste_smell ,DROP  vomiting ,DROP  diarrhea ,DROP  asthma_lung ,DROP  diabetes ,DROP  obesity ,DROP  cirrhosis ,DROP heart_condition ,DROP  harder_cough_disease ,DROP weakened_immune_system ,DROP pregnant ,DROP essential_healthcare_worker ;"
#sql="ALTER TABLE Prescreening DROP official_consent;"



#sql="ALTER TABLE Prescreening ADD age_18  VARCHAR(10), ADD age_65  VARCHAR(10),ADD official_consent  VARCHAR(10), ADD close_contact  VARCHAR(10), ADD fever  VARCHAR(10), ADD cough  VARCHAR(10), ADD breathing  VARCHAR(10), ADD chills  VARCHAR(10), ADD shaking_chills  VARCHAR(10), ADD muscle_pain  VARCHAR(10), ADD headache  VARCHAR(10), ADD sore_throat  VARCHAR(10), ADD taste_smell  VARCHAR(10), ADD vomiting  VARCHAR(10), ADD diarrhea  VARCHAR(10), ADD asthma_lung  VARCHAR(10), ADD diabetes  VARCHAR(10), ADD obesity  VARCHAR(10), ADD cirrhosis  VARCHAR(10), ADD heart_condition  VARCHAR(10), ADD harder_cough_disease  VARCHAR(10), ADD kidney_renal_disease  VARCHAR(10), ADD weakened_immune_system  VARCHAR(10), ADD pregnant  VARCHAR(10), ADD essential_healthcare_worker VARCHAR(10) ;"
#sql="ALTER TABLE Prescreening ADD score INT;"
#sql="DESC Prescreening;"
sql="SELECT * FROM Prescreening;"
cursor.execute(sql)
rec=cursor.fetchall()

print(rec)