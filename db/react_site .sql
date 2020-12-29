-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2020 at 09:00 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_site`
--

-- --------------------------------------------------------

--
-- Table structure for table `chart_data`
--

CREATE TABLE `chart_data` (
  `id` int(255) NOT NULL,
  `technology` varchar(1000) NOT NULL,
  `projects` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chart_data`
--

INSERT INTO `chart_data` (`id`, `technology`, `projects`) VALUES
(1, 'Java', '45'),
(2, 'Kotlin', '34'),
(3, 'PHP', '80'),
(4, 'Laravel', '50'),
(5, 'Python', '20'),
(6, 'Django', '56'),
(7, 'React JS', '23'),
(8, 'React Native', '27');

-- --------------------------------------------------------

--
-- Table structure for table `client_review`
--

CREATE TABLE `client_review` (
  `id` int(255) NOT NULL,
  `client_img` varchar(1000) NOT NULL,
  `client_title` varchar(1000) NOT NULL,
  `cliet_des` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `client_review`
--

INSERT INTO `client_review` (`id`, `client_img`, `client_title`, `cliet_des`) VALUES
(1, 'https://avatars2.githubusercontent.com/u/65160577?s=400&u=0dd478746329a20f82f37665b5602c8b5fa25356&v=4', 'Arman Ullah', 'Xoss..!keep it up!'),
(2, 'https://avatars2.githubusercontent.com/u/65160577?s=400&u=0dd478746329a20f82f37665b5602c8b5fa25356&v=4', 'Md Arman', 'Great..!keep it up!'),
(3, 'https://avatars2.githubusercontent.com/u/65160577?s=400&u=0dd478746329a20f82f37665b5602c8b5fa25356&v=4', 'R-maan', 'Amazing..!keep it up!'),
(4, 'https://avatars2.githubusercontent.com/u/65160577?s=400&u=0dd478746329a20f82f37665b5602c8b5fa25356&v=4', 'Mr.ARman', 'Nice..!keep it up!');

-- --------------------------------------------------------

--
-- Table structure for table `contact_table`
--

CREATE TABLE `contact_table` (
  `id` int(255) NOT NULL,
  `name` varchar(1000) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `message` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contact_table`
--

INSERT INTO `contact_table` (`id`, `name`, `email`, `message`) VALUES
(1, 'Arman', 'assf@gmail.com', 'Test Message'),
(2, 'MD. ARMAN ULLAH', 'hunterjico@gmail.com', ''),
(3, 'MD. ARMAN ULLAH', 'hunterjico@gmail.com', 'dvsxv');

-- --------------------------------------------------------

--
-- Table structure for table `courses_table`
--

CREATE TABLE `courses_table` (
  `id` int(255) NOT NULL,
  `short_title` varchar(1000) NOT NULL,
  `short_des` varchar(1000) NOT NULL,
  `small_img` varchar(1000) NOT NULL,
  `long_title` varchar(1000) NOT NULL,
  `long_des` text NOT NULL,
  `total_lecture` varchar(1000) NOT NULL,
  `total_student` varchar(1000) NOT NULL,
  `skill_all` text NOT NULL,
  `video_url` varchar(1000) NOT NULL,
  `courses_link` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `courses_table`
--

INSERT INTO `courses_table` (`id`, `short_title`, `short_des`, `small_img`, `long_title`, `long_des`, `total_lecture`, `total_student`, `skill_all`, `video_url`, `courses_link`) VALUES
(1, 'Web Development', 'I build native and cross platfrom mobile app for your business app for your business.', 'https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962__480.jpg', 'Web Development', '<p>I build native and cross platfrom mobile app for your business app for you business.I build native and cross platfrom mobile app for your business app for your business.</p>', '100', '100', '<ul>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n</ul>', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', 'https://www.youtube.com/watch?v=pr-4GbR4DpQ'),
(9, 'Web Development', 'I build native and cross platfrom mobile app for your business app for your business.', 'https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962__480.jpg', 'Web Development', '<p>I build native and cross platfrom mobile app for your business app for you business.I build native and cross platfrom mobile app for your business app for your business.</p>', '100', '100', '<ul>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n</ul>', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', 'https://www.youtube.com/watch?v=pr-4GbR4DpQ'),
(10, 'Web Development', 'I build native and cross platfrom mobile app for your business app for your business.', 'https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962__480.jpg', 'Web Development', '<p>I build native and cross platfrom mobile app for your business app for you business.I build native and cross platfrom mobile app for your business app for your business.</p>', '100', '100', '<ul>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n</ul>', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', 'https://www.youtube.com/watch?v=pr-4GbR4DpQ'),
(11, 'Web Development', 'I build native and cross platfrom mobile app for your business app for your business.', 'https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962__480.jpg', 'Web Development', '<p>I build native and cross platfrom mobile app for your business app for you business.I build native and cross platfrom mobile app for your business app for your business.</p>', '100', '100', '<ul>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n</ul>', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', 'https://www.youtube.com/watch?v=pr-4GbR4DpQ'),
(12, 'Web Development', 'I build native and cross platfrom mobile app for your business app for your business.', 'https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962__480.jpg', 'Web Development', '<p>I build native and cross platfrom mobile app for your business app for you business.I build native and cross platfrom mobile app for your business app for your business.</p>', '100', '100', '<ul>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n</ul>', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', 'https://www.youtube.com/watch?v=pr-4GbR4DpQ'),
(13, 'Web Development', 'I build native and cross platfrom mobile app for your business app for your business.', 'https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962__480.jpg', 'Web Development', '<p>I build native and cross platfrom mobile app for your business app for you business.I build native and cross platfrom mobile app for your business app for your business.</p>', '100', '100', '<ul>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n</ul>', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', 'https://www.youtube.com/watch?v=pr-4GbR4DpQ'),
(14, 'Web Development', 'I build native and cross platfrom mobile app for your business app for your business.', 'https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962__480.jpg', 'Web Development', '<p>I build native and cross platfrom mobile app for your business app for you business.I build native and cross platfrom mobile app for your business app for your business.</p>', '100', '100', '<ul>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n</ul>', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', 'https://www.youtube.com/watch?v=pr-4GbR4DpQ'),
(15, 'Web Development', 'I build native and cross platfrom mobile app for your business app for your business.', 'https://cdn.pixabay.com/photo/2016/01/19/17/53/writing-1149962__480.jpg', 'Web Development', '<p>I build native and cross platfrom mobile app for your business app for you business.I build native and cross platfrom mobile app for your business app for your business.</p>', '100', '100', '<ul>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n<li>Web designing.</li>\r\n<li>We developing.</li>\r\n</ul>', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', 'https://www.youtube.com/watch?v=pr-4GbR4DpQ');

-- --------------------------------------------------------

--
-- Table structure for table `footer_table`
--

CREATE TABLE `footer_table` (
  `id` int(255) NOT NULL,
  `address` varchar(1000) NOT NULL,
  `email` varchar(1000) NOT NULL,
  `phone` varchar(1000) NOT NULL,
  `facebook` varchar(1000) NOT NULL,
  `youtube` varchar(1000) NOT NULL,
  `footer_credit` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `footer_table`
--

INSERT INTO `footer_table` (`id`, `address`, `email`, `phone`, `facebook`, `youtube`, `footer_credit`) VALUES
(1, ' West Dewannagar,Hathazari,Chattogram', 'amd55077@gmail.com', '+8801787281564', 'www.facebook.com/mdarmancse', 'www,youtube.com/mdarman', 'Md Arman Ullah © 2020-2021'),
(2, ' West Dewannagar,Hathazari,Chattogram', 'amd55077@gmail.com', '+8801787281564', 'www.facebook.com/mdarmancse', 'www,youtube.com/mdarman', 'Md Arman Ullah © 2020-2021');

-- --------------------------------------------------------

--
-- Table structure for table `home_etc`
--

CREATE TABLE `home_etc` (
  `id` int(255) NOT NULL,
  `home_title` varchar(1000) NOT NULL,
  `home_subtitle` varchar(1000) NOT NULL,
  `tech_des` text NOT NULL,
  `total_project` varchar(1000) NOT NULL,
  `total_client` varchar(1000) NOT NULL,
  `video_des` text NOT NULL,
  `video_url` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `home_etc`
--

INSERT INTO `home_etc` (`id`, `home_title`, `home_subtitle`, `tech_des`, `total_project`, `total_client`, `video_des`, `video_url`) VALUES
(1, 'Software Engineer', 'Mobile & Web Application', '<p> To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. </p>\r\n<p> I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities. </p>\r\n<p>I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section. Application security is a big deal for commercial application.I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.<p/>', '100', '100', 'First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project.', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4');

-- --------------------------------------------------------

--
-- Table structure for table `information_etc`
--

CREATE TABLE `information_etc` (
  `id` int(255) NOT NULL,
  `about` text NOT NULL,
  `refund` text NOT NULL,
  `terms` text NOT NULL,
  `privacy` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `information_etc`
--

INSERT INTO `information_etc` (`id`, `about`, `refund`, `terms`, `privacy`) VALUES
(1, '<h1 className=\"serviceName\">Who i am</h1>\r\n<hr/>\r\n<p className=\"serviceDes text-justify\">I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects.</p>\r\n<h1 className=\"serviceName\">My Mission</h1>\r\n<hr/>\r\n<p className=\"serviceDes text-justify\">My mission is to develop unique idea and quality software that will secure top ranking in marketplace,\r\npeople\'s system and people\'s heart. Develop robust, secure, dynamic, responsive software for all platform (computer, tab, mobile phone).\r\n Provide top notch customer service, customization of our product according to customer demand and current technology. Planning advanced techniques for optimization, user experience and satisfaction of customer for our software. Planning flexible software that will not be bounded by any linguistic or regional restriction.\r\nI want to flourish software that can blow people\'s heart and soul.</p>\r\n\r\n<h1 className=\"serviceName\">My Vision</h1>\r\n<hr/>\r\n<p className=\"serviceDes text-justify\">My vision is to brand our firm as the best firm in the world.\r\n Secure the top place among software providers for both local and international market. Brand our country as the best software provider country. \r\n Create employment for youth on the field of both software and corporate level.Provide our country and world with superior software. Nurture youths to be highly skilled software engineers.</p>', ' <ul>\r\n                                <li className=\"serviceDes\">First 30 Days Money Back!</li>\r\n                                <li className=\"serviceDes\">THIS IS NOT A BUY-AND-TRY PRODUCT</li>\r\n                                <li className=\"serviceDes\">Refund is applicable for software and plugins, if the products aren\'t functioning, producing errors or you haven\'t received access to them at any time during the first 30 days after purchase, please get in touch with our support team immediately. If we are unable to provide you a working solution within 3 business days, simply delete all digital files and license keys you obtained from us, and ask for a full refund. You will get your refund processed within 30 days or early. That\'s a firm promise and commitment.</li>\r\n                                <li className=\"serviceDes\">After 30 Days : There is no refund offered after the first 30 days.</li>\r\n                                <li className=\"serviceDes\">To serve you and others better in the future, we require that you tell us why you want a refund and provide us with an opportunity to help you fix the issue. We want satisfied customers.</li>\r\n                                <li className=\"serviceDes\">Please remember that asking for a refund but continuing to use products purchased from us is the same thing as stealing and also violate applicable intellectual property rights law.</li>\r\n\r\n\r\n                                <li className=\"serviceDes\">First 30 Days Money Back!</li>\r\n                                <li className=\"serviceDes\">THIS IS NOT A BUY-AND-TRY PRODUCT</li>\r\n                                <li className=\"serviceDes\">Refund is applicable for software and plugins, if the products aren\'t functioning, producing errors or you haven\'t received access to them at any time during the first 30 days after purchase, please get in touch with our support team immediately. If we are unable to provide you a working solution within 3 business days, simply delete all digital files and license keys you obtained from us, and ask for a full refund. You will get your refund processed within 30 days or early. That\'s a firm promise and commitment.</li>\r\n<li className=\"serviceDes\">After 30 Days : There is no refund offered after the first 30 days.</li>\r\n<li className=\"serviceDes\">To serve you and others better in the future, we require that you tell us why you want a refund and provide us with an opportunity to help you fix the issue. We want satisfied customers.</li>\r\n<li className=\"serviceDes\">Please remember that asking for a refund but continuing to use products purchased from us is the same thing as stealing and also violate applicable intellectual property rights law.</li>\r\n </ul>', '                            <p className=\"serviceDes text-justify\">BY ACCESSING OR USING THIS SITE YOU REPRESENT THAT YOU HAVE THE FULL AUTHORITY TO ACT TO BIND YOURSELF, ANY THIRD PARTY, COMPANY, OR LEGAL ENTITY, AND THAT YOUR USE AND/OR INTERACTION, AS WELL AS CONTINUING TO USE OR INTERACT, WITH THE SITE CONSTITUTES YOUR HAVING READ AND AGREED TO THESE TERMS OF USE AS WELL AS OTHER AGREEMENTS THAT WE MAY POST ON THE SITE.</p>\r\n\r\n\r\n                            <hr/>\r\n                            <p className=\"serviceDes text-justify\">BY ACCESSING OR USING THIS SITE YOU REPRESENT THAT YOU HAVE THE FULL AUTHORITY TO ACT TO BIND YOURSELF, ANY THIRD PARTY, COMPANY, OR LEGAL ENTITY, AND THAT YOUR USE AND/OR INTERACTION, AS WELL AS CONTINUING TO USE OR INTERACT, WITH THE SITE CONSTITUTES YOUR HAVING READ AND AGREED TO THESE TERMS OF USE AS WELL AS OTHER AGREEMENTS THAT WE MAY POST ON THE SITE.</p>\r\n\r\n                            <hr/>\r\n                            <p className=\"serviceDes text-justify\">BY ACCESSING OR USING THIS SITE YOU REPRESENT THAT YOU HAVE THE FULL AUTHORITY TO ACT TO BIND YOURSELF, ANY THIRD PARTY, COMPANY, OR LEGAL ENTITY, AND THAT YOUR USE AND/OR INTERACTION, AS WELL AS CONTINUING TO USE OR INTERACT, WITH THE SITE CONSTITUTES YOUR HAVING READ AND AGREED TO THESE TERMS OF USE AS WELL AS OTHER AGREEMENTS THAT WE MAY POST ON THE SITE.</p>', '   <p className=\"serviceDes text-justify\">Unless you have entered into an express written contract with this website to the contrary, visitors, viewers, subscribers, members, affiliates, or customers have no right to use this information in a commercial or public setting; they have no right to broadcast it, copy it, save it, print it, sell it, or publish any portions of the content of this website. By accessing the contents of this website, you agree to this condition of access and you acknowledge that any unauthorized use is unlawful and may subject you to civil or criminal penalties. Again, Visitor has no rights whatsoever to use the content of, or portions thereof, including its databases, invisible pages, linked pages, underlying code, or other intellectual property the site may contain, for any reason or for any use whatsoever. In recognition of the fact that it may be difficult to quantify the exact damages arising from infringement of this provision, Visitor agrees to compensate the owners of this site with liquidated damages in the amount of U.S. $100,000, or, if it can be calculated, the actual costs and actual damages for breach of this provision, whichever is greater. Visitor warrants that he or she understands that accepting this provision is a condition of accessing this site and that accessing this site constitutes acceptance.</p>\r\n                            <hr/>\r\n                            <p className=\"serviceDes text-justify\">Unless you have entered into an express written contract with this website to the contrary, visitors, viewers, subscribers, members, affiliates, or customers have no right to use this information in a commercial or public setting; they have no right to broadcast it, copy it, save it, print it, sell it, or publish any portions of the content of this website. By accessing the contents of this website, you agree to this condition of access and you acknowledge that any unauthorized use is unlawful and may subject you to civil or criminal penalties. Again, Visitor has no rights whatsoever to use the content of, or portions thereof, including its databases, invisible pages, linked pages, underlying code, or other intellectual property the site may contain, for any reason or for any use whatsoever. In recognition of the fact that it may be difficult to quantify the exact damages arising from infringement of this provision, Visitor agrees to compensate the owners of this site with liquidated damages in the amount of U.S. $100,000, or, if it can be calculated, the actual costs and actual damages for breach of this provision, whichever is greater. Visitor warrants that he or she understands that accepting this provision is a condition of accessing this site and that accessing this site constitutes acceptance.</p>\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `projects_table`
--

CREATE TABLE `projects_table` (
  `id` int(255) NOT NULL,
  `img_one` varchar(1000) NOT NULL,
  `img_two` varchar(1000) NOT NULL,
  `project_name` varchar(1000) NOT NULL,
  `short_des` varchar(1000) NOT NULL,
  `project_feature` text NOT NULL,
  `live_preview` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `projects_table`
--

INSERT INTO `projects_table` (`id`, `img_one`, `img_two`, `project_name`, `short_des`, `project_feature`, `live_preview`) VALUES
(1, 'https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg', 'Foll Bazar', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', '<p className=\"serviceDes\">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>\r\n<ul>\r\n<li className=\"serviceDes\">Unlimited Dynamic Product Category</li>\r\n <li className=\"serviceDes\">Admin Can Add, Edit, Delete Product Dynamically</li>\r\n <li className=\"serviceDes\">Dynamic shipping point facilities</li>\r\n<li className=\"serviceDes\">Admin can send special offer for special user</li>\r\n<li className=\"serviceDes\">App force update system form server</li>\r\n<li className=\"serviceDes\">App can receive push notification anytime also after the app is closed.</li>\r\n <li className=\"serviceDes\">Admin can send free message in app inbox</li>\r\n</ul>\r\n', 'https://www.youtube.com/watch?v=PzmNssVLcLQ'),
(9, 'https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg', 'Foll Bazar', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', '<p className=\"serviceDes\">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>\r\n<ul>\r\n<li className=\"serviceDes\">Unlimited Dynamic Product Category</li>\r\n <li className=\"serviceDes\">Admin Can Add, Edit, Delete Product Dynamically</li>\r\n <li className=\"serviceDes\">Dynamic shipping point facilities</li>\r\n<li className=\"serviceDes\">Admin can send special offer for special user</li>\r\n<li className=\"serviceDes\">App force update system form server</li>\r\n<li className=\"serviceDes\">App can receive push notification anytime also after the app is closed.</li>\r\n <li className=\"serviceDes\">Admin can send free message in app inbox</li>\r\n</ul>\r\n', 'https://www.youtube.com/watch?v=PzmNssVLcLQ'),
(10, 'https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg', 'Foll Bazar', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', '<p className=\"serviceDes\">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>\r\n<ul>\r\n<li className=\"serviceDes\">Unlimited Dynamic Product Category</li>\r\n <li className=\"serviceDes\">Admin Can Add, Edit, Delete Product Dynamically</li>\r\n <li className=\"serviceDes\">Dynamic shipping point facilities</li>\r\n<li className=\"serviceDes\">Admin can send special offer for special user</li>\r\n<li className=\"serviceDes\">App force update system form server</li>\r\n<li className=\"serviceDes\">App can receive push notification anytime also after the app is closed.</li>\r\n <li className=\"serviceDes\">Admin can send free message in app inbox</li>\r\n</ul>\r\n', 'https://www.youtube.com/watch?v=PzmNssVLcLQ'),
(11, 'https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg', 'Foll Bazar', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', '<p className=\"serviceDes\">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>\r\n<ul>\r\n<li className=\"serviceDes\">Unlimited Dynamic Product Category</li>\r\n <li className=\"serviceDes\">Admin Can Add, Edit, Delete Product Dynamically</li>\r\n <li className=\"serviceDes\">Dynamic shipping point facilities</li>\r\n<li className=\"serviceDes\">Admin can send special offer for special user</li>\r\n<li className=\"serviceDes\">App force update system form server</li>\r\n<li className=\"serviceDes\">App can receive push notification anytime also after the app is closed.</li>\r\n <li className=\"serviceDes\">Admin can send free message in app inbox</li>\r\n</ul>\r\n', 'https://www.youtube.com/watch?v=PzmNssVLcLQ'),
(12, 'https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg', 'Foll Bazar', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', '<p className=\"serviceDes\">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>\r\n<ul>\r\n<li className=\"serviceDes\">Unlimited Dynamic Product Category</li>\r\n <li className=\"serviceDes\">Admin Can Add, Edit, Delete Product Dynamically</li>\r\n <li className=\"serviceDes\">Dynamic shipping point facilities</li>\r\n<li className=\"serviceDes\">Admin can send special offer for special user</li>\r\n<li className=\"serviceDes\">App force update system form server</li>\r\n<li className=\"serviceDes\">App can receive push notification anytime also after the app is closed.</li>\r\n <li className=\"serviceDes\">Admin can send free message in app inbox</li>\r\n</ul>\r\n', 'https://www.youtube.com/watch?v=PzmNssVLcLQ'),
(13, 'https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg', 'Foll Bazar', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', '<p className=\"serviceDes\">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>\r\n<ul>\r\n<li className=\"serviceDes\">Unlimited Dynamic Product Category</li>\r\n <li className=\"serviceDes\">Admin Can Add, Edit, Delete Product Dynamically</li>\r\n <li className=\"serviceDes\">Dynamic shipping point facilities</li>\r\n<li className=\"serviceDes\">Admin can send special offer for special user</li>\r\n<li className=\"serviceDes\">App force update system form server</li>\r\n<li className=\"serviceDes\">App can receive push notification anytime also after the app is closed.</li>\r\n <li className=\"serviceDes\">Admin can send free message in app inbox</li>\r\n</ul>\r\n', 'https://www.youtube.com/watch?v=PzmNssVLcLQ'),
(14, 'https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg', 'Foll Bazar', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', '<p className=\"serviceDes\">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>\r\n<ul>\r\n<li className=\"serviceDes\">Unlimited Dynamic Product Category</li>\r\n <li className=\"serviceDes\">Admin Can Add, Edit, Delete Product Dynamically</li>\r\n <li className=\"serviceDes\">Dynamic shipping point facilities</li>\r\n<li className=\"serviceDes\">Admin can send special offer for special user</li>\r\n<li className=\"serviceDes\">App force update system form server</li>\r\n<li className=\"serviceDes\">App can receive push notification anytime also after the app is closed.</li>\r\n <li className=\"serviceDes\">Admin can send free message in app inbox</li>\r\n</ul>\r\n', 'https://www.youtube.com/watch?v=PzmNssVLcLQ'),
(15, 'https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg', 'https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_960_720.jpg', 'Foll Bazar', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.', '<p className=\"serviceDes\">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one</p>\r\n<ul>\r\n<li className=\"serviceDes\">Unlimited Dynamic Product Category</li>\r\n <li className=\"serviceDes\">Admin Can Add, Edit, Delete Product Dynamically</li>\r\n <li className=\"serviceDes\">Dynamic shipping point facilities</li>\r\n<li className=\"serviceDes\">Admin can send special offer for special user</li>\r\n<li className=\"serviceDes\">App force update system form server</li>\r\n<li className=\"serviceDes\">App can receive push notification anytime also after the app is closed.</li>\r\n <li className=\"serviceDes\">Admin can send free message in app inbox</li>\r\n</ul>\r\n', 'https://www.youtube.com/watch?v=PzmNssVLcLQ');

-- --------------------------------------------------------

--
-- Table structure for table `services_table`
--

CREATE TABLE `services_table` (
  `id` int(11) NOT NULL,
  `service_name` varchar(1000) NOT NULL,
  `service_des` varchar(1000) NOT NULL,
  `service_logo` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `services_table`
--

INSERT INTO `services_table` (`id`, `service_name`, `service_des`, `service_logo`) VALUES
(1, 'Graphics Design', 'I desing modern user interface and other graphical components for your business and instiution.', 'http://localhost:3000/static/media/graphics.c111184b.svg'),
(2, 'Mobile Development', 'I build native and cross platfrom mobile app for your business and instiution as per as your requirements.', 'http://localhost:3000/static/media/mobile.b3cc87c3.svg'),
(3, 'Web Development', 'I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.', 'http://localhost:3000/static/media/web.d45e6fbf.svg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chart_data`
--
ALTER TABLE `chart_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `client_review`
--
ALTER TABLE `client_review`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_table`
--
ALTER TABLE `contact_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses_table`
--
ALTER TABLE `courses_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `footer_table`
--
ALTER TABLE `footer_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home_etc`
--
ALTER TABLE `home_etc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `information_etc`
--
ALTER TABLE `information_etc`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `projects_table`
--
ALTER TABLE `projects_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services_table`
--
ALTER TABLE `services_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chart_data`
--
ALTER TABLE `chart_data`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `client_review`
--
ALTER TABLE `client_review`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `contact_table`
--
ALTER TABLE `contact_table`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `courses_table`
--
ALTER TABLE `courses_table`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `footer_table`
--
ALTER TABLE `footer_table`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `home_etc`
--
ALTER TABLE `home_etc`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `information_etc`
--
ALTER TABLE `information_etc`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `projects_table`
--
ALTER TABLE `projects_table`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `services_table`
--
ALTER TABLE `services_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
