-- phpMyAdmin SQL Dump
-- version 4.1.8
-- http://www.phpmyadmin.net
--
-- Host: engr-cpanel-mysql.engr.illinois.edu
-- Generation Time: May 04, 2014 at 01:32 PM
-- Server version: 5.1.73
-- PHP Version: 5.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `heng3_whosoutthere`
--

-- --------------------------------------------------------

--
-- Table structure for table `Itinerary`
--

CREATE TABLE IF NOT EXISTS `Itinerary` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

--
-- Table structure for table `Meeting`
--

CREATE TABLE IF NOT EXISTS `Meeting` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city` varchar(20) DEFAULT NULL,
  `location` varchar(20) DEFAULT NULL,
  `time` varchar(20) NOT NULL,
  `date` varchar(20) NOT NULL,
  `friend_id` int(11) NOT NULL,
  `friend_name` varchar(20) NOT NULL,
  `itinerary_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

--
-- Table structure for table `Users`
--

CREATE TABLE IF NOT EXISTS `Users` (
  `Id` bigint(20) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Id` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
