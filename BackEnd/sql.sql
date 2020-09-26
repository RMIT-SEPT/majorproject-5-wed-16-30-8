
use SEPT;
DROP TABLE IF EXISTS `person`;
DROP TABLE IF EXISTS `business`;
DROP TABLE IF EXISTS `bookings`;

create table `person` (
`account_type` varchar(255) NOT NULL,
`name` varchar(255) NOT NULL,
`person_identifier` varchar(255) NOT NULL,
`password` varchar(255) NOT NULL,
`ph_Num` varchar(255) NOT NULL,
`address` varchar(255) NOT NULL,
`created_At` datetime NOT NULL,
`end_date` datetime,
`updated_At` datetime,
primary KEY(`person_identifier`));

CREATE TABLE `business`(
`business_name` varchar(255) NOT NULL,
`business_identifier` varchar(255) NOT NULL,
`created_At` datetime NOT NULL,
`updated_At` datetime,
primary KEY(`business_identifier`));

CREATE TABLE `bookings`(
`booking_identifier` int NOT NULL AUTO_INCREMENT,
`business_identifier` varchar(255) NOT NULL,
`booking_Date` datetime NOT NULL,
`created_At` datetime NOT NULL,
`updated_At` datetime,
`service` varchar(255),
`employee_Id` varchar(255),
primary KEY(`booking_identifier`));



INSERT INTO `person` VALUES('user','Luke','1Luke', '1234', '0412345678', '10 something st somewhere 3000', '2020-09-20 09:00:00', '2020-09-20 09:00:00', '2020-09-20 09:00:00'),
('user', 'Mike','0002Mike','1234', '0423546345','11 something st somewhere 3000', '2020-09-19 08:00:00', null, null),
('employee','Oscar','0003Oscar','1234','0443225676', '12 something st somewhere 3000', '2020-09-18 07:00:00', null, null);

-- INSERT INTO `business` VALUES('Hairdressers', '0001Hairdressers', '2020-09-18 07:00:00', null);
INSERT INTO `business` VALUES('Hairdressers', '0001Hairdressers', '2020-09-18 07:00:00', null),
('Restaurant', '0002Restaurant', '2020-09-18 07:00:00', null),
('NailSalon', '0003NailSalons', '2020-09-18 07:00:00', null);

INSERT INTO `bookings` VALUES(1,'0002Restaurant', '2020-10-20 07:00:00', '2020-09-18 07:00:00', null, null,null);
