-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 13, 2024 at 09:15 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eco_conscious_life`
--

-- --------------------------------------------------------

--
-- Table structure for table `companyinfo`
--

CREATE TABLE `companyinfo` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `mission` text DEFAULT NULL,
  `vision` text DEFAULT NULL,
  `history` text DEFAULT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `itinerary`
--

CREATE TABLE `itinerary` (
  `id` int(11) NOT NULL,
  `packageId` int(11) NOT NULL,
  `dayNumber` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `picture` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `itinerary`
--

INSERT INTO `itinerary` (`id`, `packageId`, `dayNumber`, `title`, `description`, `picture`) VALUES
(3, 11, 1, 'Pickup from Kigali – City Tour Transfer to Akagera national park – Boat trip at Lake Ihema', '3 Days in Akagera National ParkA Guide from Mission Africa Safaris will pick you up in the morning from the airport or your hotel in Kigali. After briefing you about the tour, you will have a tour of the Kigali city where you will visit the city markets, Kigali genocide museum, the former presidential palace, a few art shops and other landmarks. After completing the city tour, you will leave for Akagera national park. The journey to Akagera National Park takes between 2 to 3 hours.\n\nBefore reaching the park, you will have a brief stop at the Nyakarambi village to learn about the cow dung paintings by the Kakira women cooperative. Their unique style of decorating houses using cow 3 Days tour of Akagera National Parkdung has intrigued many a visitor since it was started by Prince Kakira. The cow dung is first dried and then mixed with different colors from natural material (including plants). The end product is a mixture of red and white paintings that are very eye-catching.\n\nOnce you arrive at the park, you will make all necessary clearances at the gate and then proceed to the center for visitors. From the center, you will then proceed to your hotel. After checking in at the hotel, you will prepare to be taken for a boat cruise at the Lake Ihema. The boat trip provides opportunities to spot crocodiles, hippos and other animals coming to bath or drink from the lake. Look out for the elusive Sitatunga (swamp antelope) and waterbucks.\n\nDinner and overnight at Ruzizi Tented Camp (Luxury) or Akagera Game Lodge (Mid-range)', NULL),
(4, 11, 2, 'Game drive in Akagera national park – Picnic Lunch – Night Game drive', 'Wake up early and take you breakfast as you wait for the Guide/Driver to pick you up. This day is all about games drives. Our Guide will pick up an experienced park Guide to move with you and take you to the best places for game drives. You will go to different parts of the park while exploring the parks landscape including woodland forest, savanna plains, riverine forests and wetlands. During the morning game drive, watch out for hippos, Impala, warthogs, Topi, Zebras, spotted hyenas, giraffes, buffaloes, crocodiles, elephants and birds. The park Guide will play an important role in helping locate the lions, Rhinos and other elusive creatures.\n\n3 Days safari to Akagera National ParkLunch will be a picnic in the open Savannah plains to allow you experience the unique feeling of dinning out in the African wild. After lunch, the driver will take you back to your hotel where you can relax and take a swim in the hotel swimming pool. You can choose to go for another afternoon game drive before the night game drive if you wish or go out specifically to spot the birds. Akagera is one of the top birding destinations in Rwanda with over 500 species recorded including the Papyrus Gonolek and Shoebill storks. The best place to spot the birds is at the vast wetlands found in the park.\n\nThe night game drive is designed to allow you spot the nocturnal animals like leopards, hyenas and mongooses, owls and primates\n\nDinner and overnight at Ruzizi Tented Camp (Luxury) or Akagera Game Lodge (Mid-range)', NULL),
(5, 11, 3, ' Morning Game drive – Return to Kigali', '3 Day Wildlife tour in Akagera National ParkWake up at your r leisure, take breakfast and prepare for one last game drive in the park just in case you didn’t see any of the animals. Our Guide/Driver will meet with the park guide and take you to another section of the park for yet more wildlife encounters. After you are done with this game drive, it’s time to start the journey back to Kigali. Lunch is taken while on the way back to Kigali. In case you missed the Kigali city tour or the cow dung paintings at the Nyakarambi village for some reason on the first day, this is the time to do it. Please note that a safari in Rwanda and the Akagera national park in particular can be combined with chimpanzee trekking in Nyungwe forest, hiking volcanoes, golden monkey trekking, biking along the Congo Nile Trail and gorilla trekking in the volcanoes national park.', NULL),
(6, 12, 1, 'Transfer from the airport to the hotel', 'Upon arrival at Kigali international airport and passing through the immigration process, you will be welcomed by our safari driver who will, brief you shortly and transfer you to the booked accommodation. Dinner and overnight stay at Serena Hotel Kigali (luxury hotel) or Chez Lando Hotel (Mid – range hotel) or Quiet Haven Hotel (Standard hotel).\n\nMeal Plan: Dinner.', NULL),
(7, 12, 2, 'Transfer to Volcanoes National Park. ', 'Begin your day with a delightful buffer breakfast before we later head for a city tour to visit Kigali genocide memorial ground where over 250000 victims of genocide incidence of 1994, were buried in a mass grave as a respect to their souls. There are short video clips to watch, as you as well move around and see some of the remains, and later being transferred to Musanze near Volcan0es National Park where you will your dinner and overnight stay. Dinner and overnight stay at Five Volcanoes Boutique Hotel (luxury hotel) or Le Bamboo Gorilla Lodge (Mid – range hotel) or The Garden Palace Hotel (Standard hotel).\n\nMeal Plan: Breakfast, lunch & dinner.', NULL),
(8, 12, 3, ' Gorilla Trekking Experience', 'Early morning cup of coffee, then prepare for the gorilla trekking briefing from the park headquarters and thereafter, you will enter the jungle with your packed lunch to search the shy mountain gorillas and enjoy their life style in their real home. After meeting the gorillas, you can sit around these great apes for a whole hour watching their social life as you take pictures. On a gorilla safari, a reasonable degree of fitness is required as well as walking shoes, packed food and mineral water, insect repellent, sun screen and hut. The gorilla tracking experience takes half or whole day depending on the movements of these primates. After this gorilla tracking experience you will return to your lodge for lunch. In the afternoon, you will spend the day just relaxed at you bungalow, enjoying a relaxed atmosphere overlong the volcanoes. Dinner and overnight stay at Five Volcanoes Boutique Hotel (luxury hotel) or Le Bamboo Gorilla Lodge (Mid – range hotel)or The Garden Palace Hotel (Standard hotel).\n\nMeal Plan: Breakfast, lunch & dinner.', NULL),
(9, 12, 4, 'Golden monkey trekking &Transfer to Kigali airport.', 'Today after you warm early morning breakfast, you will be picked by our safari driver guide who will transfer you to the park headquarters for briefing with your packed lunch and start off you day golden monkey trekking in search for these shy primates in the jungle. Just like the gorilla trekking experience, the same applies to golden monkey trekking though no so hectic like gorilla trekking. You will later return to the lodge for lunch and later transfer to Kigali to your lodge or to the airport to catch up with your evening flight to your home country.\n\n End of service!', NULL),
(10, 13, 1, 'Arrival at Kigali Airport', 'Upon arrival at Kigali International airport. Meet and greet by our company driver guide for briefing about your 5 Days Gorilla safari adventure about this safaris before transferring to your hotel in Kigali for dinner and overnight.', NULL),
(11, 13, 2, 'Kigali to Volcanoes National Park', 'Today after taking your early morning breakfast, you will checkout of the lodge and drive to visit the Kigali genocide memorial grounds, which honors the memory of the more than one million Rwandans killed in 1994 through education and peace-building. You will be able to watch and listen to some video clips from some of the survivors’ of the incident. Later after lunch you will proceed with a drive to Volcanoes NP through the magnificent route to your booked accommodation spend the rest of the afternoon relax and prepare for the next day’s trekking.', NULL),
(12, 13, 3, 'Gorilla Trekking at Volcanoes National Park', 'After an early morning breakfast, you will be transferred to the park headquarters. You will meet with your ranger who will brief you about the code of conduct while with the gorillas. You will then enter the forest in search of the gorillas. The trekking may take 2-6 hours depending on the movement of the gorillas in the jungle and your group speed as well. Meet and stay with the gorillas for a maximum of one hour.\n\nAfter a great experience you will walk back to the starting point and be transferred to your lodge for lunch, and after lunch, you can decide to relax at your lodge at your leisure or head for a cultural encounter at Iby’ Iwacu cultural site to get an insight of Rwandan culture . Dinner and overnight at the hotel.', NULL),
(13, 13, 4, 'Golden monkey & Transfer to Kigali.', 'Today after you warm early morning breakfast, you will be picked by our safari driver guide who will transfer you to the park headquarters for briefing and start off you day golden monkey trekking. Just like the gorilla trekking experience, the same applies to golden monkey trekking though no so hectic like gorilla trekking. You will later return to the lodge for lunch and later transfer to Kigali.', NULL),
(14, 14, 1, ' Pick up from Kigali international airport  ', 'Welcome! this day depending on your arrival, pick up from airport done by your guide, meet and greet with briefing, you will be taken to the hotel where you will have the rest of the time of the day depending on your arrival time, to rest after a long journey and prepare for the next trip', NULL),
(15, 14, 2, 'Kigali city tour', 'Rwanda  the country that you’re planning to visit it’s self is a history combination  known to a faster growing country compared to it’s Dark history of 1994 genocide against Tutsis that makes a lot of people travel to rwanda every year for understanding more of our embarked history and amazed by how far has the country come from! Kigali city tour gives you a whole image of the country you’re going to be traveling in for 14 days by visiting different sites including Kigali genocide memorial .', NULL),
(16, 14, 3, ' Birding at Nyandungu Eco Park', 'Nyandungu Eco Park is a restored wetland in Kigali that equips you a checklist of different birds species including white tailed olive back that is on our list and square tailed nightjar that’s likely to be spotted early morning hours at Nyandungu Eco Park birding excursion that we can start our birding trip going further east.\n\nLunch on the way to Akagera national park.\n\nCheck-in at the hotel in Akagera national and go a afternoon-evening game drive that is likely to benefit Us some savannah birds and wildlife sightings.', NULL),
(17, 14, 4, 'A full day birding and wildlife sightings and interpretation', 'Birding alongside the lake shores road and hilly roads for more birding challengesLunch at Mihindi lake picnic area.Boat ride in one the Ten lakes that that we’ve in Akagera national park and is the biggest one among them which is lake Ihema for more water birds sightings and of the wildlife around Luckily.\n\nBack at the hotel for a quick freshen up go a night game drive/night birding trial for owls and nightjars.', NULL),
(18, 14, 5, ' Half birding in the mountains of Akagera national park.', 'This time we’re birding three hours while exting the park and get ready for the long drive transfer to Nyungwe national park and lunch will be on the way.', NULL),
(19, 14, 6, 'Birding in nyungwe national park', 'Nyungwe national park is tropical rainforest located in Albertine lift valley that makes it special with Endeginous trees and shrubs, beautiful Flowers, Butterflies Mammal species that includes 13 species of monkeys,5 squirrel species and chimpanzees.\n\nAn interesting facts about our birding in a tropical rainforest like Nyungwe Also has more than 26 birds species Albertine lift valley endemics.\n\nPick from the hotel heading to a signed trail to use that day and looking forward to ask for an easy one after a long drive from the previous day and we will be birding for the whole day.\n\nDinner at the hotel and prepare for the next day trip', NULL),
(20, 14, 7, 'Chimpanzee trekking and birding.', 'Birding in the same direction as allocated for Chimpanzees trekking that is likely to be at cyamudongo forest that’s part of nyungwe national park and holds a nice birds list.\n\nLunch at the hotel getting ready for the afternoon-evening birding.\n\nDinner  back at the hotel.', NULL),
(21, 14, 8, 'Birding in Nyungwe national park .', 'This time we’re also going to do a full day birding in different trails regarding our spotting Urge.Lunch at  Uwinka visitor center  restaurant.Afternoon session and drive back to the hotel.\n\nDinner at the hotel.', NULL),
(22, 14, 9, 'Birding in Nyungwe national park', ' This morning after having breakfast at your Hotel, you shall prepare for a thrilling whole day birding that is going to include morning, afternoon and night birding session on alert that we’re going to come back at hotel a bit later than the previous days Lunch at Uwinka visitor center restaurant.\n\nDinner back at the hotel.', NULL),
(23, 14, 10, 'Half day birding.', ' Birding in nyungwe national park half day getting ready for the afternoon drive to Musanze town that is known to being a tourist town with the famous 5 volcanoes and home of the endangered Mountain gorillas.\n\nCheck in at the hotel in musanze and dinner at the hotel getting ready for the next day’s experience.', NULL),
(24, 14, 11, ' Gorilla trekking and nature walk while birding.', 'This morning after breakfast at the hotel,Your  Usual Tourguide will be thrilled to pick you up at 6:30am and head to the volcanoes headquarters, Allocate you to which Gorilla family that you are trekking  experience while gorilla trekking and for a briefing about the gorilla trekking escapade. In this briefing, you will be advised on how you should handle yourself on finding the gorilla, what to carry with you for the trekking and among these will be trekking-boots because the track takes you along the steep slippery grounds in the heart of the forests and the rain jacket. QYou will be permitted to spend an hour in the presence of beautiful gorillas, taking photos and observing there very impressive way of living. then after, you will be back for lunch at the lodge, and after noon Visit at the Diana fosey gorilla funds at the Ellen DeGeneres Campus .', NULL),
(25, 14, 12, ' Birding at Rugezi marshland.', ' After having breakfast from the hotel, your Tourguide will  delighted to drive to north-east birding at Rugezi marshland one of the wetland that’s listed to waterbirds excursions and we will give a try to Carruther’s cisticola and grauer’s swamp warbler if we don’t make it in kamiranzovu swamp in nyungwe national park And later of the day we will head back to Kigali . Lunch on the way likely to be in musanze.\n\nCheck in at hotel and be prepared for the next day’s trip to be continued.', NULL),
(26, 14, 13, ' Birding at Bugesera lakes swamp', 'Your guide will drive you to east but the outskirts of Kigali right after your early morning/packed breakfast birding alongside the lakes and swamps targeting papyrus gonolek and reed warblers and many more species on the line to expect.Lunch on the way back to Kigali , Minutes wrapp up of our whole day birding trip with consideration of our seen Birds,Heard and Missed .A relaxation evening at the hotel ', NULL),
(27, 14, 14, 'Day 14:Drop off by your guide', '...', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `package`
--

CREATE TABLE `package` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `duration` varchar(50) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `departureLocation` varchar(255) NOT NULL,
  `departureTime` varchar(255) NOT NULL,
  `thumbnail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `package`
--

INSERT INTO `package` (`id`, `title`, `description`, `price`, `duration`, `createdAt`, `updatedAt`, `departureLocation`, `departureTime`, `thumbnail`) VALUES
(11, '3 DAYS WILDLIFE SAFARIS IN AKAGERA NATIONAL PARK', 'Akagera national park 3 Days safari Akagera National Parkconsists of woodlands, Savannah, undulating plains, extensive papyrus swamps and sprawling water bodies. Akagera is home to all the big five mammals like lions, buffaloes, elephants, leopards and Rhinos. It also has Zebras, Hippos, giraffes, warthogs and several antelope species. Sadly, the park lost much of the wildlife during the Rwanda genocide in 1994. Thousands of displaced people encroached on the park land after the war and hunted down the animals for food or to get rid of the predators. The park had about 300 lions which were all killed by farmers who saw them as a danger to their domestic animals.', NULL, '3', '2024-09-10 11:37:42.877000', '2024-09-10 11:37:42.877000', 'Preferably in Kigali', '9:00 AM', '1725975462856.jpg'),
(12, '4 days Rwanda Gorilla trekking and Golden Monkeys.', '\r\nEco-conscious experience organize luxury safaris that takes explorers to authentic places in the unique attractions of East Africa with the highest level of custom service. We handle private trips to Rwandan destinations, to the thousand Hills of Rwanda for the gorilla trekking, and super adventures wildlife safaris, to the one any only savannah park of Rwanda, Akagera national park.', NULL, '4', '2024-09-10 11:41:33.413000', '2024-09-10 11:41:33.413000', ' Kigali international airport', '9:00 AM', '1725975693408.jpg'),
(13, 'Gorilla Tracking', 'The unique opportunity to see gorillas in their natural habitat is unforgettable, some even say life changing. Encounters with gorillas as they go about their daily lives are carefully managed, with expert trackers and guides leading small groups of tourists up bamboo-covered slopes to spend a precious and awe-inspiring hour just a few feet away from the gentle creatures.', NULL, '5', '2024-09-10 11:45:39.650000', '2024-09-10 11:45:39.650000', ' Kigali', '9:00 AM', '1725975939638.jpg'),
(14, '2 Weeks Bird watching experience in Rwanda', 'This is long trip of visit Rwanda, which combines Birding excursions and wildlife trekking (Gorillas and chimpanzees trekking) this tour will be done by local guide who knows all places and have enough information of every destination, this will give you great experience of your visit in Rwanda.', NULL, '14', '2024-09-10 11:53:55.337000', '2024-09-10 11:53:55.337000', ' Kigali', '9:00 AM', '1725976435331.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `packagebookmark`
--

CREATE TABLE `packagebookmark` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `packageId` int(11) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `partner`
--

CREATE TABLE `partner` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `websiteUrl` varchar(255) DEFAULT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permission`
--

CREATE TABLE `permission` (
  `id` int(11) NOT NULL,
  `permissionName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `thumbnail` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `userId`, `title`, `slug`, `createdAt`, `updatedAt`, `thumbnail`) VALUES
(7, 26, 'Introducing this amazing city, KIGALI', 'introducing-this-amazing-city-kigali', '2024-09-10 12:16:20.692000', '2024-09-10 12:16:20.692000', '1725977780680.jpeg'),
(8, 26, 'Connect with Volcanoes National park.', 'connect-with-volcanoes-national-park.', '2024-09-10 12:25:21.665000', '2024-09-10 12:25:21.665000', '1725978321655.jpg'),
(9, 26, 'Change your place and get the fresh air', 'change-your-place-and-get-the-fresh-air', '2024-09-10 12:29:43.510000', '2024-09-10 12:29:43.510000', '1725978583502.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `postcontentblock`
--

CREATE TABLE `postcontentblock` (
  `id` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  `contentType` varchar(50) NOT NULL,
  `contentData` text NOT NULL,
  `position` int(11) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `postcontentblock`
--

INSERT INTO `postcontentblock` (`id`, `postId`, `contentType`, `contentData`, `position`, `createdAt`, `updatedAt`) VALUES
(4, 7, 'h1', 'A historical city which is Clean, Green and Safe for all.', 1, '2024-09-10 12:16:20.692000', '2024-09-10 12:16:20.692000'),
(5, 7, 'text', 'The City of Kigali is the capital of Rwanda and is located at Rwanda’s geographical heart. Occupying an area of 730km2, the City is located at latitude 10o58’ S and a longitude 30o07’ E.The average annual precipitation rate is approximately, with an annual average high temperature of 27oC and annual average low temperature of 16 oC.', 2, '2024-09-10 12:16:20.692000', '2024-09-10 12:16:20.692000'),
(6, 7, 'text', 'The City of Kigali is composed of three Districts namely Gasabo, Kicukiro and Nyarugenge. Gasabo is the largest district by geographical area at 429.3km2, followed by Kicukiro (166.7km2) and Nyarugenge (134km2). The City of Kigali population is 1,745,555 the datsource is the fifth Rwanda Population and Housing Census (RPHC5).', 3, '2024-09-10 12:16:20.692000', '2024-09-10 12:16:20.692000'),
(7, 7, 'text', 'The districts are also divided into 35 administrative sectors which in turn are divided into 161 Cells.The smallest administrative unit is the village and the City is made up of 1,155 villages.The City boarders the Gicumbi and Rulindo Districts of Northern Province, Bugesera and Rwamagana Districts of Eastern Province and Kamonyi District of Southern Province. Kigali is the most visited area in Rwanda. It houses several tourism sites, hotels, and a centrally placed International Airport. ', 4, '2024-09-10 12:16:20.692000', '2024-09-10 12:16:20.692000'),
(8, 7, 'text', 'A new International Airport in Bugesera to serve Kigali is under construction about 15 km to the east of the City.The City of Kigali, the capital city of Rwanda has seen rapid growth for the last two and half decades. It is among the fastest growing cities in Africa with an urbanization annual growth rate of 4% and it contributes over 41% of the national GDP which indicates the primacy of Kigali to the Rwandan economy. ', 5, '2024-09-10 12:16:20.692000', '2024-09-10 12:16:20.692000'),
(9, 7, 'text', 'This growth has been driven by visionary leadership in Rwanda which has helped transform the country from a low scale agrarian economy to an active player within the regional economy. Kigali has been at the centre of the transformation in Rwanda and is on the threshold of rapid economic growth.', 6, '2024-09-10 12:16:20.692000', '2024-09-10 12:16:20.692000'),
(10, 8, 'text', 'Volcanoes National Park Rwanda is one of Africa’s most well-known national parks, the area is well-known for housing the rare, endemic, and critically endangered mountain gorillas. Rwanda’s Volcanoes National Park has established itself as one of the world’s most upscale locations for gorilla trekking. Are you a fan and a jokester of Visit Rwanda? The mountain gorillas in Rwanda’s Volcanoes National Park are where all the happiness is found. So go on a mountain gorilla hike and stay in resorts of your choices.', 1, '2024-09-10 12:25:21.665000', '2024-09-10 12:25:21.665000'),
(11, 8, 'text', 'Volcanoes National Park Rwanda is a portion of the vast Virunga Conservation Area, which is shared by three countries: the Democratic Republic of the Congo, Uganda, and Rwanda. It is located in northeastern area of Rwanda. The Virunga Massif, a chain of volcanoes that make up this region, is heavily defined by volcanic features. The park’s 160km2/s of land is covered in bamboo forests and tropical rain forests. There is a two and a half hour drive from Kigali.', 2, '2024-09-10 12:25:21.665000', '2024-09-10 12:25:21.665000'),
(12, 8, 'h1', 'Mountain Gorilla trekking', 3, '2024-09-10 12:25:21.665000', '2024-09-10 12:25:21.665000'),
(13, 8, 'text', 'most frequently considered and a top goal for many visitors to Volcanoes National Park. A total of ten habituated gorilla families are available for hiking in Volcanoes National Park. Nothing is more rewarding than bumping into the forest, getting exhausted in the quest, and relaxing into the 5-star hospitality. The park has continued to be the only upscale location to hike gorillas from. About half of the gorillas in the Virunga Mountains live in the Volcanoes Park, which is also where the majority of the Virunga Conservation is located. Having a permission from the Rwanda Development Board RDB is required to go gorilla trekking at Volcanoes. The cost of a trekking permit in Volcanoes National Park is $1500, and you may only spend up to an hour with the gorillas there.', 4, '2024-09-10 12:25:21.665000', '2024-09-10 12:25:21.665000'),
(14, 8, 'h1', 'Golden Monkey Tracking', 5, '2024-09-10 12:25:21.665000', '2024-09-10 12:25:21.665000'),
(15, 8, 'text', 'Beautiful, critically endangered golden monkeys are indigenous to the Virunga woodlands. Trekking is another popular activity in Volcanoes National Park that draws thousands of visitors to this jungle. Volcanoes National Park has made a significant contribution to this activity. Golden monkeys are magnificent animals that no traveler should overlook when on a safari in Rwanda. Travelers can only observe golden monkeys in their native habitats in the national parks of Volcanoes Rwanda and Mgahinga gorillas. Fortunately, golden monkey trekking only costs $100, making it more affordable than going in search of gorillas.', 6, '2024-09-10 12:25:21.665000', '2024-09-10 12:25:21.665000'),
(16, 8, 'h1', 'Visiting the Tomb of Dian Fossey', 7, '2024-09-10 12:25:21.665000', '2024-09-10 12:25:21.665000'),
(17, 8, 'text', 'One of the best primatologists of all time is Dian Fossey. Her tenacity and daring helped the Volcanoes National Park drastically cut down on animal poaching, especially that of mountain gorillas. Mountain gorillas would likely be gone by today if not for her efforts. She is also credited for developing novel techniques to accustom gorillas to human presence in Rwanda’s Volcanoes National Park by mimicking their calls and winning the trust of the dominant male. Today, hundreds of people travel to her burial, which is situated between Mount Karisimbi and Mount Bisoke, to pay respects to this outstanding conservationist. The three-hour, $75 guided hike lasts about\nOne will be able to understand what she went through, her tenacity, and her enthusiasm for the gorillas as they scale the volcanoes to her former base. Please view our 3 Day Dian Fossey Memorial Visit Package and Rwanda Gorilla Tour.', 8, '2024-09-10 12:25:21.665000', '2024-09-10 12:25:21.665000'),
(18, 8, 'h1', 'Experience beyond Trekking and hiking', 9, '2024-09-10 12:25:21.665000', '2024-09-10 12:25:21.665000'),
(19, 8, 'text', 'Without People, there is no destination, engaging community, surrounding tourism destination will not only boast well being of environment, but also village development. as parks are a choice of land use, and therefore local people must benefit from protected areas in order to value them. our tour always engages community activities through their cooperatives and we have community experience tours where you can join them in daily living routine, in entertainment, traditional wedding, banana beer preparation and testing as well as Rwandan art and crafts.', 10, '2024-09-10 12:25:21.665000', '2024-09-10 12:25:21.665000'),
(20, 9, 'text', 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.', 1, '2024-09-10 12:29:43.510000', '2024-09-10 12:29:43.510000'),
(21, 9, 'h1', 'When, while the lovely valley teems with', 2, '2024-09-10 12:29:43.510000', '2024-09-10 12:29:43.510000'),
(22, 9, 'text', 'vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath of that universal love which bears and sustains us, as it floats around us in an eternity of blist.', 3, '2024-09-10 12:29:43.510000', '2024-09-10 12:29:43.510000'),
(23, 9, 'h3', 'I sink under the weight of the splendour of these visions!A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which', 4, '2024-09-10 12:29:43.510000', '2024-09-10 12:29:43.510000'),
(24, 9, 'text', 'I sink under the weight of the splendour of these visions!A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquis', 5, '2024-09-10 12:29:43.510000', '2024-09-10 12:29:43.510000'),
(25, 9, 'h1', 'I throw myself down among the tall grass', 6, '2024-09-10 12:29:43.510000', '2024-09-10 12:29:43.510000'),
(26, 9, 'text', 'I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and', 7, '2024-09-10 12:29:43.510000', '2024-09-10 12:29:43.510000'),
(27, 9, 'h1', 'Text, that where it came from it', 8, '2024-09-10 12:29:43.510000', '2024-09-10 12:29:43.510000'),
(28, 9, 'text', 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Littl', 9, '2024-09-10 12:29:43.510000', '2024-09-10 12:29:43.510000'),
(29, 9, 'h3', 'Far far away, behind the word mountain\nWhen she reached the first hills\nA small river named Duden flows\nA small river named Duden flows by their plat.\nFar far away, behind the word mountain', 10, '2024-09-10 12:29:43.510000', '2024-09-10 12:29:43.510000'),
(30, 9, 'text', 'Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their projects again and again. And if she hasn’t been rewritten, then they are still using her.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their plate.', 11, '2024-09-10 12:29:43.510000', '2024-09-10 12:29:43.510000');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `roleName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `roleName`) VALUES
(1, 'admin'),
(2, 'visitor');

-- --------------------------------------------------------

--
-- Table structure for table `rolepermission`
--

CREATE TABLE `rolepermission` (
  `roleId` int(11) NOT NULL,
  `permissionId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `names` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `profilePicture` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `names`, `country`, `profilePicture`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(11, 'benise bagirinka', 'germany', '1723533431710.png', 'benise@gmail.com', '12345', '2024-08-13 05:17:11.734000', '2024-08-13 05:17:11.734000'),
(14, 'Uwimana anitha', 'Rwanda', '1725878867345.jpg', 'pacific@gmail.com', '12345', '2024-09-09 08:47:47.374000', '2024-09-09 08:47:47.374000'),
(15, 'Uwimana anitha', 'Rwanda', '1725879055404.jpg', 'pacifique@gmail.com', '12345', '2024-09-09 08:50:55.410000', '2024-09-09 08:50:55.410000'),
(26, 'mukiza', 'fabrice', '1725884369703.jpg', 'fabrice@gmail.com', '$2b$10$QvDP7eZ2sqKvNLLwdsDjlusHUPIohXpvxEzZJ/fB/lQrzwReN32hS', '2024-09-09 10:19:29.784000', '2024-09-09 10:19:29.784000');

-- --------------------------------------------------------

--
-- Table structure for table `userrole`
--

CREATE TABLE `userrole` (
  `userId` int(11) NOT NULL,
  `roleId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('002d2df3-9ab5-4fce-91b1-d3332a64c8ea', 'cd0bceffbc32f3ea7400051dee7282a87e39c17f21ba01a730a0edd69e5ce7d7', '2024-08-15 08:46:05.447', '20240815084605_init', NULL, NULL, '2024-08-15 08:46:05.424', 1),
('1aa9e11d-567b-4d4a-9ec6-2fd68c07def3', '5d7e065b41e0f9e94ea342bc24ea14e949a996bc5c3fec9a28cdd4aaf95f9286', '2024-08-15 17:25:29.310', '20240815172529_initial', NULL, NULL, '2024-08-15 17:25:29.286', 1),
('4babbfc1-af2c-4eac-975d-d0eb63c2354a', '50dcb8eec1e3658d51d88a332ff4776d8bc31730898ab1b15b179e7649bfa903', '2024-09-09 12:11:40.589', '20240909121139_initial', NULL, NULL, '2024-09-09 12:11:39.894', 1),
('5f3237ad-7504-4a7d-9885-da0190760863', 'b7cdd301bf7cb333173aa7e53da30dd8b0bc1909bdd1705028c511f38131269b', '2024-08-12 13:04:20.981', '20240812130420_init', NULL, NULL, '2024-08-12 13:04:20.949', 1),
('c6cfdd5a-a091-4420-8797-fa580cc0619a', 'e7a37eafa53e0abe707c09bea9160eda3758686dcbf3a1fec8bfe33d426bc0fd', '2024-08-15 09:05:11.598', '20240815090511_initial', NULL, NULL, '2024-08-15 09:05:11.551', 1),
('f735e7c2-763f-40b0-9e22-5d4d9d30204b', 'b3931d9c53b735db3920ba4b6fd0f42e9e3da3f92ca0b2006eac35f6f350e6a8', '2024-08-11 20:44:02.447', '20240811204401_init', NULL, NULL, '2024-08-11 20:44:01.377', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companyinfo`
--
ALTER TABLE `companyinfo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `itinerary`
--
ALTER TABLE `itinerary`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Itinerary_packageId_fkey` (`packageId`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `package`
--
ALTER TABLE `package`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `packagebookmark`
--
ALTER TABLE `packagebookmark`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PackageBookmark_userId_fkey` (`userId`),
  ADD KEY `PackageBookmark_packageId_fkey` (`packageId`);

--
-- Indexes for table `partner`
--
ALTER TABLE `partner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Post_slug_key` (`slug`),
  ADD KEY `Post_userId_fkey` (`userId`);

--
-- Indexes for table `postcontentblock`
--
ALTER TABLE `postcontentblock`
  ADD PRIMARY KEY (`id`),
  ADD KEY `PostContentBlock_postId_fkey` (`postId`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rolepermission`
--
ALTER TABLE `rolepermission`
  ADD PRIMARY KEY (`roleId`,`permissionId`),
  ADD KEY `RolePermission_permissionId_fkey` (`permissionId`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_email_key` (`email`);

--
-- Indexes for table `userrole`
--
ALTER TABLE `userrole`
  ADD PRIMARY KEY (`userId`,`roleId`),
  ADD KEY `UserRole_roleId_fkey` (`roleId`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `companyinfo`
--
ALTER TABLE `companyinfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `itinerary`
--
ALTER TABLE `itinerary`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `package`
--
ALTER TABLE `package`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `packagebookmark`
--
ALTER TABLE `packagebookmark`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `partner`
--
ALTER TABLE `partner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `permission`
--
ALTER TABLE `permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `postcontentblock`
--
ALTER TABLE `postcontentblock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `itinerary`
--
ALTER TABLE `itinerary`
  ADD CONSTRAINT `Itinerary_packageId_fkey` FOREIGN KEY (`packageId`) REFERENCES `package` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `packagebookmark`
--
ALTER TABLE `packagebookmark`
  ADD CONSTRAINT `PackageBookmark_packageId_fkey` FOREIGN KEY (`packageId`) REFERENCES `package` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `PackageBookmark_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `Post_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `postcontentblock`
--
ALTER TABLE `postcontentblock`
  ADD CONSTRAINT `PostContentBlock_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `rolepermission`
--
ALTER TABLE `rolepermission`
  ADD CONSTRAINT `RolePermission_permissionId_fkey` FOREIGN KEY (`permissionId`) REFERENCES `permission` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `RolePermission_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userrole`
--
ALTER TABLE `userrole`
  ADD CONSTRAINT `UserRole_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `UserRole_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
