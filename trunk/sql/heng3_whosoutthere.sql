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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=95 ;

--
-- Dumping data for table `Itinerary`
--

INSERT INTO `Itinerary` (`id`, `title`, `user_id`) VALUES
(1, 'test title', 541),
(2, 'test title', 541),
(3, 'test title', 541),
(4, 'test title', 541),
(5, 'test title', 541),
(6, 'test title', 541),
(7, 'test title', 541),
(8, 'test title', 541),
(9, 'test title', 541),
(10, 'test title', 541),
(11, 'test title', 541),
(12, 'test title', 0),
(13, 'test title', 0),
(14, 'test title', 541),
(15, '', 0),
(16, '', 0),
(17, '', 750914204),
(18, '', 750914204),
(19, '', 0),
(20, '', 0),
(21, 'Road trip 1', 648903173),
(22, 'Road trip 2', 648903173),
(23, 'Road trip 3', 648903173),
(24, 'Road trip 4', 648903173),
(25, 'Multiple cities', 648903173),
(26, 'New Trip', 648903173),
(27, 'Summer Trip', 648903173),
(28, 'Grad trip', 648903173),
(29, 'Google trip', 648903173),
(30, 'My road trip', 2147483647),
(31, 'Google trip', 648903173),
(32, 'My road trip', 2147483647),
(33, 'New Trip', 648903173),
(34, 'chicago with carrie', 2147483647),
(35, 'This is a test', 2147483647),
(36, 'This is a test', 2147483647),
(37, 'Winter trip', 648903173),
(38, 'This is a test', 2147483647),
(39, 'This is a test', 2147483647),
(40, 'summer', 2147483647),
(41, 'summer', 2147483647),
(42, 'RP', 1004706554),
(43, 'Road Trip', 1004706554),
(44, 'Road Trip', 1004706554),
(45, 'spring trip', 648903173),
(46, 'Road Trip', 1004706554),
(47, 'Road Trip', 1004706554),
(48, 'dfsd', 598633341),
(49, 'Reading day trip', 648903173),
(50, 'Road Trip', 1004706554),
(51, 'Road Trip', 1004706554),
(52, 'Road Trip', 1004706554),
(53, 'Road Trip', 1004706554),
(54, 'Summer trip', 1004706554),
(55, 'Summer trip', 1004706554),
(56, 'Summer trip', 1004706554),
(57, 'summer trip', 2147483647),
(58, 'Summer trip', 1004706554),
(59, 'summer trip', 2147483647),
(60, 'ST', 1004706554),
(61, 'ST', 1004706554),
(62, 'ST', 1004706554),
(63, 'seattle', 2147483647),
(64, 'Herp Derp', 750914204),
(65, 'seatle', 2147483647),
(66, 'sdf', 2147483647),
(67, 'seatle', 2147483647),
(68, 'summer', 2147483647),
(69, 'ghjgh', 2147483647),
(70, 'Hello world', 1004706554),
(71, 'hello world', 598633341),
(72, 'hjkh', 2147483647),
(73, 'hjkh', 2147483647),
(74, 'hello world', 598633341),
(75, 'hjkhjk', 2147483647),
(76, 'Chicago', 1553327995),
(77, 'test', 2147483647),
(78, 'Test', 2147483647),
(79, 'TEst with new date', 648903173),
(80, 'Road Trip!', 750914204),
(81, 'Road Trip!', 750914204),
(82, 'Road Trip!', 750914204),
(83, 'Road Trip!', 750914204),
(84, 'Road Trip!', 750914204),
(85, 'Road Trip 2', 750914204),
(86, 'Road Trip 3', 750914204),
(87, 'New Trip', 750914204),
(88, 'New Trip 2', 750914204),
(89, 'New Trip 2', 750914204),
(90, 'Trip 1', 750914204),
(91, 'Trip 2', 750914204),
(92, 'Trip 3', 750914204),
(93, 'Trip 4', 750914204),
(94, 'road trip', 648903173);

-- --------------------------------------------------------

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
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=118 ;

--
-- Dumping data for table `Meeting`
--

INSERT INTO `Meeting` (`id`, `city`, `location`, `time`, `date`, `friend_id`, `friend_name`, `itinerary_id`) VALUES
(1, 'Chicago, IL', 'Starbucks on Adams s', '04/31/14', '9pm', 123456, 'John', 11),
(2, 'Chicago, IL', 'Starbucks on Adams s', '04/31/14', '9pm', 4354353, 'Tim', 11),
(3, 'Chicago, IL', 'Starbucks on Adams s', '04/31/14', '9pm', 0, 'John', 12),
(4, 'Chicago, IL', 'Starbucks on Adams s', '04/31/14', '9pm', 0, 'Tim', 12),
(5, 'Chicago, IL', 'Starbucks on Adams s', '04/31/14', '9pm', 0, 'John', 13),
(6, 'Chicago, IL', 'Starbucks on Adams s', '04/31/14', '9pm', 0, 'Tim', 13),
(7, 'Chicago, IL', 'Starbucks on Adams s', '04/31/14', '9pm', 0, 'John', 14),
(8, 'Chicago, IL', 'Starbucks on Adams s', '04/31/14', '9pm', 0, 'Tim', 14),
(9, 'Sfewaf', 'eerahfe', '12/05/2014', '12:43', 0, '', 18),
(10, 'Chicago', 'Starbucks', '08/22/2014', '12:00', 0, 'John, Chris', 19),
(11, 'Champaign', 'Starbucks', '07/06/2014', '12:11', 0, 'John, John', 20),
(12, 'gdfgf', 'dfgdfg', '12/12/2011', '12:00', 0, 'dsfsdf', 21),
(13, 'Chicago', 'Sears tower', '07/08/2014', '12:00', 0, 'John', 22),
(14, 'Chicago', 'dsfs', '08/07/2014', '12:00', 0, 'John, Chris', 23),
(15, 'Madison, WI', 'dfs', '01/01/2014', '12:00', 0, 'Chris', 24),
(16, 'Seattle', 'Starbucks', '08/07/2014', '12:00', 0, 'John', 25),
(17, 'San Francisco', 'Googleplex', '08/06/2014', '12:00', 0, 'Tim', 25),
(18, 'Champaign', 'Radio Maria', '08/07/2014', '12:00', 0, 'Drew', 26),
(19, 'Detroit', 'Somewhere', '08/07/2014', '12:00', 0, 'Cam', 27),
(20, 'Anchorage', 'Beach', '01/23/2014', '12:00', 0, 'Tom', 28),
(21, 'Mountain View', 'Googleplex', '02/12/2014', '12:00', 0, 'Jon', 29),
(22, 'Chicago', 'bean', '06/01/2014', '07:30', 0, 'Joe, Justin', 30),
(23, 'Mountain View', 'Googleplex', '02/12/2014', '12:00', 0, 'Jon', 31),
(24, 'Chicago', 'Starbucks', '06/23/2014', '06:35', 0, 'Joe, Sue', 32),
(25, 'Champaign', 'Siebel', '06/01/2014', '04:33', 0, 'Joe, Justin', 32),
(26, 'Urbana', 'Il', '02/12/2014', '12:00', 0, 'Jim', 33),
(27, 'chicago', 'Millenium Park', '05/31/2014', '12:00', 0, 'Carrie', 34),
(28, 'Chicago', 'Starbucks', '06/01/2014', '08:03', 0, 'Joe, Justin', 35),
(29, 'Chicago', 'Starbucks', '06/01/2014', '08:03', 0, 'Joe, Justin', 36),
(30, 'Champaign', 'Bobo', '06/02/2014', '05:16', 0, 'Paul, Jack', 36),
(31, 'Montana', 'Big Sky', '12/11/2014', '12:00', 0, 'Tom', 37),
(32, 'Chicago', 'Starbucks', '06/01/2014', '08:03', 0, 'Joe, Justin', 38),
(33, 'Champaign', 'Bobo', '06/02/2014', '05:16', 0, 'Paul, Jack', 38),
(34, 'Chicago', 'Starbucks', '06/01/2014', '08:03', 0, 'Joe, Justin', 39),
(35, 'Champaign', 'Bobo', '06/02/2014', '05:16', 0, 'Paul, Jack', 39),
(36, 'Seattle', 'Starbucks', '07/01/2014', '24:00', 0, 'Carrie', 40),
(37, 'Seattle', 'Starbucks', '07/01/2014', '24:00', 0, 'Carrie', 41),
(38, 'Chicago', 'Water Tower', '07/04/2014', '08:00', 0, 'Yan Feng', 41),
(39, 'Champaign', 'Illini Union', '04/25/2014', '15:00', 0, 'Steve Jobs', 42),
(40, 'Seattle', 'Starbucks', '04/25/2014', '16:00', 0, 'Steve Jobs', 43),
(41, 'Chicago', 'Water Tower', '04/28/2014', '18:00', 0, 'Bill Gates', 43),
(42, 'Seattle', 'Starbucks', '04/25/2014', '16:00', 0, 'Steve Jobs', 44),
(43, 'Chicago', 'Water Tower', '04/28/2014', '18:00', 0, 'Bill Gates', 44),
(44, 'Seattle', 'Starrbucks', '05/02/2014', '12:00', 0, 'Tim', 45),
(45, 'Seattle', 'Starbucks', '04/25/2014', '16:00', 0, 'Steve Jobs', 46),
(46, 'Chicago', 'Water Tower', '04/28/2014', '18:00', 0, 'Bill Gates', 46),
(47, 'Seattle', 'Starbucks', '04/25/2014', '16:00', 0, 'Steve Jobs', 47),
(48, 'Chicago', 'Water Tower', '04/28/2014', '18:00', 0, 'Bill Gates', 47),
(49, 'fs', 'urban', '03/20/2014', '09:00', 0, 'dsf', 48),
(50, 'Chicago', 'Sears Tower', '08/08/2014', '12:00', 0, 'John', 49),
(51, 'Detroit', 'Some building', '08/09/2014', '11:00', 0, 'James', 49),
(52, 'Seattle', 'Starbucks', '04/25/2014', '16:00', 0, 'Steve Jobs', 50),
(53, 'Chicago', 'Water Tower', '04/28/2014', '18:00', 0, 'Bill Gates', 50),
(54, 'Seattle', 'Starbucks', '04/25/2014', '16:00', 0, 'Steve Jobs', 51),
(55, 'Chicago', 'Water Tower', '04/28/2014', '18:00', 0, 'Bill Gates', 51),
(56, 'Seattle', 'Starbucks', '04/25/2014', '16:00', 0, 'Steve Jobs', 52),
(57, 'Chicago', 'Water Tower', '04/28/2014', '18:00', 0, 'Bill Gates', 52),
(58, 'Seattle', 'Starbucks', '04/25/2014', '16:00', 0, 'Steve Jobs', 53),
(59, 'Chicago', 'Water Tower', '04/28/2014', '18:00', 0, 'Bill Gates', 53),
(60, 'Seattle', 'Starbucks', '05/25/2014', '18:00', 0, 'Bill Gates', 54),
(61, 'San Jose', 'Coffee Bene', '05/27/2014', '14:00', 0, 'Tim Cook', 54),
(62, 'Seattle', 'Starbucks', '05/25/2014', '18:00', 0, 'Bill Gates', 55),
(63, 'Seattle', 'Starbucks', '05/25/2014', '18:00', 0, 'Bill Gates', 56),
(64, 'San Jose', 'Coffee Bene', '05/27/2014', '14:00', 0, 'Tim Cook', 56),
(65, 'chicago', 'Sears', '05/20/2014', '08:20', 0, 'Yan Feng', 57),
(66, 'Indianapolis', 'Cinema', '05/20/2014', '02:50', 0, 'Yan Fu', 57),
(67, 'Seattle', 'Starbucks', '05/25/2014', '18:00', 0, 'Bill Gates', 58),
(68, 'chicago', 'Sears', '05/20/2014', '08:20', 0, 'Yan Feng', 59),
(69, 'Indianapolis', 'Cinema', '05/20/2014', '02:50', 0, 'Yan Fu', 59),
(70, 'Champagin', 'Starbucks', '04/19/2014', '15:00', 0, 'Josh', 60),
(71, 'Champagin', 'Starbucks', '04/19/2014', '15:00', 0, 'Josh', 61),
(72, 'Champagin', 'Starbucks', '04/19/2014', '15:00', 0, 'Josh', 61),
(73, 'Champagin', 'Starbucks', '04/19/2014', '15:00', 0, 'Josh', 62),
(74, 'Champagin', 'Starbucks', '04/19/2014', '15:00', 0, 'Josh', 62),
(75, 'Champagin', 'Starbucks', '04/19/2014', '15:00', 0, 'Josh', 62),
(76, 'seattle', 'ferry', '05/20/2014', '08:20', 0, 'Yan Feng', 63),
(77, 'Seattle', 'Starbucks', '01/12/2014', '10:01', 0, 'Derp, Herp', 64),
(78, 'seattle', 'ferry', '05/20/2014', '08:20', 0, 'madison', 65),
(79, 'sdfsdf', 'starbucks', '05/20/2014', '05:20', 0, 'madison', 66),
(80, 'seattle', 'ferry', '05/20/2014', '08:20', 0, 'madison', 67),
(81, 'seattle', 'starbucks', '07/22/2014', '03:33', 0, 'joe', 68),
(82, 'ghjg', 'fghfhg', '07/08/2014', '09:33', 0, 'joe', 69),
(83, 'aaa', 'bbb', '02/02/2025', '19:00', 0, 'ccc', 70),
(84, 'chicago', 'chinatown', '03/20/2013', '08:00', 0, 'Jack', 71),
(85, 'gfgf', 'ffhg', '07/09/2014', '09:08', 0, 'fdgfdg', 72),
(86, 'gfgf', 'ffhg', '07/09/2014', '09:08', 0, 'fdgfdg', 73),
(87, 'chicago', 'chinatown', '03/20/2013', '08:00', 0, 'Jack', 74),
(88, 'urbana', 'sibel center', '04/29/2014', '10:00', 0, 'Professor Li, Ammy', 74),
(89, 'gfhfh', 'fghf', '08/09/2014', '08:09', 0, 'fghf', 75),
(90, 'Chicago', 'Starbucks', '04/19/2014', '19:00', 0, 'Bill Gates', 76),
(91, 'Chicago', 'Starbucks', '08/01/2014', '08:33', 0, 'Joe', 77),
(92, 'Chicago', 'Starbucks', '09/01/2014', '09:33', 0, 'Joe', 78),
(93, 'San Diego, CA, Unite', 'Beach', '12:00', '04/14/2014', 0, 'John', 79),
(94, 'Somewhere Road, Port', 'Dunno', '12:01', '04/01/2014', 0, 'Derp', 80),
(95, 'Somewhere Road, Port', 'Dunno', '12:01', '04/01/2014', 0, 'Derp', 81),
(96, 'Urbana, IL, United S', 'Siebel Center', '15:10', '04/25/2014', 0, 'Edric Sebastian Kwok', 81),
(97, 'Somerville, MA, Unit', 'Dunno', '00:01', '04/04/2014', 0, 'Alex Ang, ', 82),
(98, 'Somerville, MA, Unit', 'Dunno', '00:01', '04/04/2014', 0, 'Alex Ang, ', 83),
(99, 'D.S.C. on Clark (Eas', 'fewa', '12:12', '04/28/2014', 0, 'Quan Hui Lai, ', 83),
(100, 'Somerville, MA, Unit', 'Dunno', '00:01', '04/04/2014', 0, 'Alex Ang, ', 84),
(101, 'D.S.C. on Clark (Eas', 'fewa', '12:12', '04/28/2014', 0, 'Quan Hui Lai, ', 84),
(102, 'Seattle, WA, United ', 'Starbucks', '10:01', '04/26/2014', 0, 'Derp', 85),
(103, 'Los Angeles, CA, Uni', 'Somewhere', '10:02', '04/28/2014', 0, 'Derp', 86),
(104, 'Louisville, KY, Unit', 'Somewhere', '00:21', '04/29/2014', 0, 'Danial Matin, Shouvi', 87),
(105, 'Nashville, TN, Unite', 'Somewhere Else', '11:12', '04/30/2014', 0, 'Wong Jia Min, Qhh Ho', 87),
(106, 'Louisville, KY, Unit', 'Somewhere', '00:21', '04/29/2014', 0, 'Danial Matin, Shouvi', 88),
(107, 'Nashville, TN, Unite', 'Somewhere Else', '11:12', '04/30/2014', 0, 'Wong Jia Min, Qhh Ho', 88),
(108, 'Los Angeles', 'Somewhere Again', '12:00', '04/30/2014', 0, 'Derp', 88),
(109, 'Louisville, KY, Unit', 'Somewhere', '00:21', '04/29/2014', 0, 'Danial Matin, Shouvi', 89),
(110, 'Nashville, TN, Unite', 'Somewhere Else', '11:12', '04/30/2014', 0, 'Wong Jia Min, Qhh Ho', 89),
(111, 'Los Angeles', 'Somewhere Again', '12:00', '04/30/2014', 0, 'Derp', 89),
(112, 'Washington', 'Somewhere', '00:00', '04/26/2014', 0, 'Derp', 90),
(113, 'Somewhere Road, Port', '1234', '12:23', '04/29/2014', 0, 'Udbhav Sahai, ', 90),
(114, 'Dallas, TX, United S', 'qwerty', '12:34', '04/29/2014', 0, 'derp1, derp2', 91),
(115, 'Illinois, United Sta', '1234', '12:34', '04/30/2014', 0, 'Derp1, Derp2', 92),
(116, 'Houston, TX, United ', '1234', '12:34', '04/28/2014', 0, 'Derp', 93),
(117, 'Seattle, WA, United ', 'dfds', '12:00', '05/30/2014', 0, 'Joseph Moormann, Shu', 94);

-- --------------------------------------------------------

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

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`Id`, `Name`, `Email`) VALUES
(557854904, 'Cheryl Cheong', ''),
(598633341, 'Zoey Feng', ''),
(648903173, 'Joshua Heng', 'joshua.hyk@gmail.com'),
(750914204, 'Shuotian Chen', ''),
(1004706554, 'Xiaojie Zhang', ''),
(100001398383931, 'Yanyan Lucia Zhang', 'zhang.yanyan.lucia@gmail.com'),
(100001801609755, 'Weijian Zhou', 'zhou86@illinois.edu');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
