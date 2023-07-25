-- MySQL dump 10.13  Distrib 8.0.33, for macos13 (arm64)
--
-- Host: localhost    Database: schoolms
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `student_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `level` enum('1st','2nd') DEFAULT NULL,
  `cohort_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `dob` datetime DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `sex` enum('male','female') DEFAULT NULL,
  `created_at` varchar(255) DEFAULT NULL,
  `upadated_at` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES ('0c4a2efe-588f-4704-a17e-faeaadec3167','Daisy','1st',NULL,'2000-02-01 00:00:00','Obili','Cameroon','237670716777','Daisy@gmail.com','female',NULL,NULL,'2023-07-21 12:08:46','2023-07-21 12:08:46'),('15e316fb-3ac9-43bb-834d-77ba20bd7191','Ricardo','1st',NULL,'1999-02-01 00:00:00','Etoug-Ebe','Cameroon','237670716777','ricardo@mail.com','male',NULL,NULL,'2023-07-21 12:07:22','2023-07-21 12:07:22'),('26696ad6-390e-4928-9285-45b0de7c51d3','Gmarvis','1st',NULL,'2000-02-01 00:00:00','Nkolbisson','Cameroon','237670716777','marvis@gmail.com','male',NULL,NULL,'2023-07-21 12:09:26','2023-07-21 12:09:26'),('309d3ef1-83fc-4a3a-84a2-faba407ac734','foudaevan','2nd',NULL,'2000-02-01 00:00:00','Mile 10','Cameroon','237670716777','emma@gmail.com','male',NULL,NULL,'2023-07-21 12:12:16','2023-07-21 12:12:16'),('8afab356-91bf-4a06-b077-769f457a64ea','Alaric','2nd',NULL,'2000-02-01 00:00:00','Mile 5','Cameroon','237670716777','Alaric@gmail.com','male',NULL,NULL,'2023-07-21 12:11:18','2023-07-21 12:11:18'),('b816d191-c750-4316-a290-380bf92b2dc8','ngam Taryll','1st',NULL,'1999-02-01 00:00:00','simbock','Cameroon','237670716777','taryllngam@mail.com','male',NULL,NULL,'2023-07-21 12:06:21','2023-07-21 12:06:21'),('be1a3e77-e1bd-4dc0-9849-9d3d9f8bd947','chriss','2nd',NULL,'2000-02-01 00:00:00','Mile 4','Cameroon','237670716777','chriss@gmail.com','male',NULL,NULL,'2023-07-21 12:10:58','2023-07-21 12:10:58'),('c4ad0ba6-d8f1-4d8d-b437-cd7556f377ac','Batch 3',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-07-21 12:18:39','2023-07-21 12:18:39'),('c617da9f-2ecb-46cc-a905-b274f8eded67','Batch 2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-07-21 12:18:20','2023-07-21 12:18:20'),('c6e06512-86fc-4005-8d4a-4f41f436cab3','Gael','1st',NULL,'1999-02-01 00:00:00','Nsam','Cameroon','237670716777','gael@mail.com','male',NULL,NULL,'2023-07-21 12:07:57','2023-07-21 12:07:57'),('c6f044d8-9352-4314-98e1-75334008cad0','Batch 3',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-07-21 12:25:36','2023-07-21 12:25:36'),('db261edf-2ce2-4bfb-a808-479dbeb65f0e','Batch 1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2023-07-21 12:18:01','2023-07-21 12:18:01'),('dbaccbce-3696-4f4f-9f84-110340d3af23','Brice','1st',NULL,'2000-02-01 00:00:00','NkolEton','Cameroon','237670716777','brice@gmail.com','male',NULL,NULL,'2023-07-21 12:10:03','2023-07-21 12:10:03'),('f2421aa0-0036-420c-8d48-532724813378','Emma','2nd',NULL,'2000-02-01 00:00:00','Mile 10','Cameroon','237670716777','emma@gmail.com','male',NULL,NULL,'2023-07-21 12:11:41','2023-07-21 12:11:41');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-21 15:14:27
