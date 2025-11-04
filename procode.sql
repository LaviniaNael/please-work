-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 28, 2025 at 03:57 PM
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
-- Database: `procode`
--

-- --------------------------------------------------------

--
-- Table structure for table `ai_capabilities`
--

CREATE TABLE `ai_capabilities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `icon` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('laravel_cache_356a192b7913b04c54574d18c28d46e6395428ab', 'i:1;', 1761589677),
('laravel_cache_356a192b7913b04c54574d18c28d46e6395428ab:timer', 'i:1761589674;', 1761589677),
('laravel_cache_livewire-rate-limiter:16d36dff9abd246c67dfac3e63b993a169af77e6', 'i:1;', 1761586794),
('laravel_cache_livewire-rate-limiter:16d36dff9abd246c67dfac3e63b993a169af77e6:timer', 'i:1761586794;', 1761586794),
('laravel_cache_spatie.permission.cache', 'a:3:{s:5:\"alias\";a:4:{s:1:\"a\";s:2:\"id\";s:1:\"b\";s:4:\"name\";s:1:\"c\";s:10:\"guard_name\";s:1:\"r\";s:5:\"roles\";}s:11:\"permissions\";a:77:{i:0;a:4:{s:1:\"a\";i:1;s:1:\"b\";s:11:\"ViewAny:FAQ\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:1;a:4:{s:1:\"a\";i:2;s:1:\"b\";s:8:\"View:FAQ\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:2;a:4:{s:1:\"a\";i:3;s:1:\"b\";s:10:\"Create:FAQ\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:3;a:4:{s:1:\"a\";i:4;s:1:\"b\";s:10:\"Update:FAQ\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:4;a:4:{s:1:\"a\";i:5;s:1:\"b\";s:10:\"Delete:FAQ\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:5;a:4:{s:1:\"a\";i:6;s:1:\"b\";s:11:\"Restore:FAQ\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:6;a:4:{s:1:\"a\";i:7;s:1:\"b\";s:15:\"ForceDelete:FAQ\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:7;a:4:{s:1:\"a\";i:8;s:1:\"b\";s:18:\"ForceDeleteAny:FAQ\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:8;a:4:{s:1:\"a\";i:9;s:1:\"b\";s:14:\"RestoreAny:FAQ\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:9;a:4:{s:1:\"a\";i:10;s:1:\"b\";s:13:\"Replicate:FAQ\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:10;a:4:{s:1:\"a\";i:11;s:1:\"b\";s:11:\"Reorder:FAQ\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:11;a:4:{s:1:\"a\";i:12;s:1:\"b\";s:15:\"ViewAny:Feature\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:12;a:4:{s:1:\"a\";i:13;s:1:\"b\";s:12:\"View:Feature\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:13;a:4:{s:1:\"a\";i:14;s:1:\"b\";s:14:\"Create:Feature\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:14;a:4:{s:1:\"a\";i:15;s:1:\"b\";s:14:\"Update:Feature\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:15;a:4:{s:1:\"a\";i:16;s:1:\"b\";s:14:\"Delete:Feature\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:16;a:4:{s:1:\"a\";i:17;s:1:\"b\";s:15:\"Restore:Feature\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:17;a:4:{s:1:\"a\";i:18;s:1:\"b\";s:19:\"ForceDelete:Feature\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:18;a:4:{s:1:\"a\";i:19;s:1:\"b\";s:22:\"ForceDeleteAny:Feature\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:19;a:4:{s:1:\"a\";i:20;s:1:\"b\";s:18:\"RestoreAny:Feature\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:20;a:4:{s:1:\"a\";i:21;s:1:\"b\";s:17:\"Replicate:Feature\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:21;a:4:{s:1:\"a\";i:22;s:1:\"b\";s:15:\"Reorder:Feature\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:22;a:4:{s:1:\"a\";i:23;s:1:\"b\";s:15:\"ViewAny:Project\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:23;a:4:{s:1:\"a\";i:24;s:1:\"b\";s:12:\"View:Project\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:24;a:4:{s:1:\"a\";i:25;s:1:\"b\";s:14:\"Create:Project\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:25;a:4:{s:1:\"a\";i:26;s:1:\"b\";s:14:\"Update:Project\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:26;a:4:{s:1:\"a\";i:27;s:1:\"b\";s:14:\"Delete:Project\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:27;a:4:{s:1:\"a\";i:28;s:1:\"b\";s:15:\"Restore:Project\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:28;a:4:{s:1:\"a\";i:29;s:1:\"b\";s:19:\"ForceDelete:Project\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:29;a:4:{s:1:\"a\";i:30;s:1:\"b\";s:22:\"ForceDeleteAny:Project\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:30;a:4:{s:1:\"a\";i:31;s:1:\"b\";s:18:\"RestoreAny:Project\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:31;a:4:{s:1:\"a\";i:32;s:1:\"b\";s:17:\"Replicate:Project\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:32;a:4:{s:1:\"a\";i:33;s:1:\"b\";s:15:\"Reorder:Project\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:33;a:4:{s:1:\"a\";i:34;s:1:\"b\";s:15:\"ViewAny:Section\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:34;a:4:{s:1:\"a\";i:35;s:1:\"b\";s:12:\"View:Section\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:35;a:4:{s:1:\"a\";i:36;s:1:\"b\";s:14:\"Create:Section\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:36;a:4:{s:1:\"a\";i:37;s:1:\"b\";s:14:\"Update:Section\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:37;a:4:{s:1:\"a\";i:38;s:1:\"b\";s:14:\"Delete:Section\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:38;a:4:{s:1:\"a\";i:39;s:1:\"b\";s:15:\"Restore:Section\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:39;a:4:{s:1:\"a\";i:40;s:1:\"b\";s:19:\"ForceDelete:Section\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:40;a:4:{s:1:\"a\";i:41;s:1:\"b\";s:22:\"ForceDeleteAny:Section\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:41;a:4:{s:1:\"a\";i:42;s:1:\"b\";s:18:\"RestoreAny:Section\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:42;a:4:{s:1:\"a\";i:43;s:1:\"b\";s:17:\"Replicate:Section\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:43;a:4:{s:1:\"a\";i:44;s:1:\"b\";s:15:\"Reorder:Section\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:44;a:4:{s:1:\"a\";i:45;s:1:\"b\";s:15:\"ViewAny:Service\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:45;a:4:{s:1:\"a\";i:46;s:1:\"b\";s:12:\"View:Service\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:46;a:4:{s:1:\"a\";i:47;s:1:\"b\";s:14:\"Create:Service\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:47;a:4:{s:1:\"a\";i:48;s:1:\"b\";s:14:\"Update:Service\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:48;a:4:{s:1:\"a\";i:49;s:1:\"b\";s:14:\"Delete:Service\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:49;a:4:{s:1:\"a\";i:50;s:1:\"b\";s:15:\"Restore:Service\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:50;a:4:{s:1:\"a\";i:51;s:1:\"b\";s:19:\"ForceDelete:Service\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:51;a:4:{s:1:\"a\";i:52;s:1:\"b\";s:22:\"ForceDeleteAny:Service\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:52;a:4:{s:1:\"a\";i:53;s:1:\"b\";s:18:\"RestoreAny:Service\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:53;a:4:{s:1:\"a\";i:54;s:1:\"b\";s:17:\"Replicate:Service\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:54;a:4:{s:1:\"a\";i:55;s:1:\"b\";s:15:\"Reorder:Service\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:55;a:4:{s:1:\"a\";i:56;s:1:\"b\";s:12:\"ViewAny:User\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:56;a:4:{s:1:\"a\";i:57;s:1:\"b\";s:9:\"View:User\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:57;a:4:{s:1:\"a\";i:58;s:1:\"b\";s:11:\"Create:User\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:58;a:4:{s:1:\"a\";i:59;s:1:\"b\";s:11:\"Update:User\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:59;a:4:{s:1:\"a\";i:60;s:1:\"b\";s:11:\"Delete:User\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:60;a:4:{s:1:\"a\";i:61;s:1:\"b\";s:12:\"Restore:User\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:61;a:4:{s:1:\"a\";i:62;s:1:\"b\";s:16:\"ForceDelete:User\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:62;a:4:{s:1:\"a\";i:63;s:1:\"b\";s:19:\"ForceDeleteAny:User\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:63;a:4:{s:1:\"a\";i:64;s:1:\"b\";s:15:\"RestoreAny:User\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:64;a:4:{s:1:\"a\";i:65;s:1:\"b\";s:14:\"Replicate:User\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:65;a:4:{s:1:\"a\";i:66;s:1:\"b\";s:12:\"Reorder:User\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:66;a:4:{s:1:\"a\";i:67;s:1:\"b\";s:12:\"ViewAny:Role\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:67;a:4:{s:1:\"a\";i:68;s:1:\"b\";s:9:\"View:Role\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:68;a:4:{s:1:\"a\";i:69;s:1:\"b\";s:11:\"Create:Role\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:69;a:4:{s:1:\"a\";i:70;s:1:\"b\";s:11:\"Update:Role\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:70;a:4:{s:1:\"a\";i:71;s:1:\"b\";s:11:\"Delete:Role\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:71;a:4:{s:1:\"a\";i:72;s:1:\"b\";s:12:\"Restore:Role\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:72;a:4:{s:1:\"a\";i:73;s:1:\"b\";s:16:\"ForceDelete:Role\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:73;a:4:{s:1:\"a\";i:74;s:1:\"b\";s:19:\"ForceDeleteAny:Role\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:74;a:4:{s:1:\"a\";i:75;s:1:\"b\";s:15:\"RestoreAny:Role\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:75;a:4:{s:1:\"a\";i:76;s:1:\"b\";s:14:\"Replicate:Role\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}i:76;a:4:{s:1:\"a\";i:77;s:1:\"b\";s:12:\"Reorder:Role\";s:1:\"c\";s:3:\"web\";s:1:\"r\";a:1:{i:0;i:1;}}}s:5:\"roles\";a:1:{i:0;a:3:{s:1:\"a\";i:1;s:1:\"b\";s:11:\"super_admin\";s:1:\"c\";s:3:\"web\";}}}', 1761673142);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `status_item_id` bigint(20) UNSIGNED NOT NULL,
  `notes` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `features`
--

CREATE TABLE `features` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `title_ar` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `slug_ar` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `description_ar` text NOT NULL,
  `is_published` tinyint(1) NOT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`images`)),
  `icon` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `features`
--

INSERT INTO `features` (`id`, `title`, `title_ar`, `slug`, `slug_ar`, `description`, `description_ar`, `is_published`, `images`, `icon`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Custom-Built Software', 'برامج مخصصة بالكامل', 'custom-built-software', 'bramg-mkhss-balkaml', 'We don’t use templates — every system is built from the ground up to match your business logic and goals.', 'لا نعتمد على القوالب الجاهزة، بل نبني كل نظام من الصفر ليتناسب مع منطق وأهداف عملك بدقة.', 1, '[]', 'code', '2025-10-23 04:32:46', '2025-10-23 04:32:46', NULL),
(2, 'High Performance & Speed', 'أداء وسرعة فائقة', 'high-performance-speed', 'adaaa-osraa-fayk', 'Our apps load instantly, handle heavy traffic, and deliver a flawless experience to every user.', 'تطبيقاتنا تعمل بسرعة فائقة وتتحمل الضغط العالي لتوفير تجربة مثالية لكل مستخدم.', 1, '[]', 'zap', '2025-10-23 04:33:34', '2025-10-23 04:33:34', NULL),
(3, 'Modern UI/UX Design', 'تصميم واجهات حديثة وتجربة مستخدم مميزة', 'modern-uiux-design', 'tsmym-oaghat-hdyth-otgrb-mstkhdm-mmyz', 'We design interfaces that look stunning and feel effortless — blending creativity with usability.', 'نصمم واجهات جذابة وسهلة الاستخدام تجمع بين الإبداع والبساطة لتجربة مستخدم فريدة.', 1, '[]', 'palette', '2025-10-23 04:34:25', '2025-10-23 04:34:25', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `f_a_qs`
--

CREATE TABLE `f_a_qs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `question` varchar(255) NOT NULL,
  `question_ar` varchar(255) DEFAULT NULL,
  `answer` text NOT NULL,
  `answer_ar` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `f_a_qs`
--

INSERT INTO `f_a_qs` (`id`, `question`, `question_ar`, `answer`, `answer_ar`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'What services do you offer?', 'ما هي الخدمات التي تقدمونها؟', 'We offer web and mobile app development, custom software solutions, cloud integration, and IT consulting — from concept to full deployment.', 'نقدم خدمات تطوير المواقع والتطبيقات، والحلول البرمجية المخصصة، وتكامل الأنظمة السحابية، والاستشارات التقنية من الفكرة حتى التنفيذ الكامل.', '2025-10-26 10:46:21', '2025-10-26 10:46:21', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_09_18_143325_create_permission_tables', 1),
(5, '2025_09_21_085435_create_services_table', 1),
(6, '2025_09_28_082740_create_features_table', 1),
(7, '2025_09_28_084816_create_f_a_qs_table', 1),
(9, '2025_10_01_000000_create_ai_capabilities_table', 1),
(10, '2025_10_07_092050_create_sections_table', 1),
(11, '2025_10_12_081926_create_projects_table', 1),
(12, '2025_10_16_140313_add_slug_to_sections_table', 1),
(13, '2025_10_19_085519_add_type_to_sections_table', 1),
(15, '2025_10_19_101250_add_service_items_to_sections_table', 2),
(16, '2025_09_28_095029_create_contacts_table', 3),
(17, '2025_10_28_090539_create_status_items_table', 3);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'ViewAny:FAQ', 'web', '2025-10-19 07:24:01', '2025-10-19 07:24:01'),
(2, 'View:FAQ', 'web', '2025-10-19 07:24:02', '2025-10-19 07:24:02'),
(3, 'Create:FAQ', 'web', '2025-10-19 07:24:02', '2025-10-19 07:24:02'),
(4, 'Update:FAQ', 'web', '2025-10-19 07:24:02', '2025-10-19 07:24:02'),
(5, 'Delete:FAQ', 'web', '2025-10-19 07:24:03', '2025-10-19 07:24:03'),
(6, 'Restore:FAQ', 'web', '2025-10-19 07:24:03', '2025-10-19 07:24:03'),
(7, 'ForceDelete:FAQ', 'web', '2025-10-19 07:24:03', '2025-10-19 07:24:03'),
(8, 'ForceDeleteAny:FAQ', 'web', '2025-10-19 07:24:03', '2025-10-19 07:24:03'),
(9, 'RestoreAny:FAQ', 'web', '2025-10-19 07:24:03', '2025-10-19 07:24:03'),
(10, 'Replicate:FAQ', 'web', '2025-10-19 07:24:04', '2025-10-19 07:24:04'),
(11, 'Reorder:FAQ', 'web', '2025-10-19 07:24:04', '2025-10-19 07:24:04'),
(12, 'ViewAny:Feature', 'web', '2025-10-19 07:24:05', '2025-10-19 07:24:05'),
(13, 'View:Feature', 'web', '2025-10-19 07:24:05', '2025-10-19 07:24:05'),
(14, 'Create:Feature', 'web', '2025-10-19 07:24:05', '2025-10-19 07:24:05'),
(15, 'Update:Feature', 'web', '2025-10-19 07:24:05', '2025-10-19 07:24:05'),
(16, 'Delete:Feature', 'web', '2025-10-19 07:24:05', '2025-10-19 07:24:05'),
(17, 'Restore:Feature', 'web', '2025-10-19 07:24:05', '2025-10-19 07:24:05'),
(18, 'ForceDelete:Feature', 'web', '2025-10-19 07:24:06', '2025-10-19 07:24:06'),
(19, 'ForceDeleteAny:Feature', 'web', '2025-10-19 07:24:06', '2025-10-19 07:24:06'),
(20, 'RestoreAny:Feature', 'web', '2025-10-19 07:24:06', '2025-10-19 07:24:06'),
(21, 'Replicate:Feature', 'web', '2025-10-19 07:24:06', '2025-10-19 07:24:06'),
(22, 'Reorder:Feature', 'web', '2025-10-19 07:24:06', '2025-10-19 07:24:06'),
(23, 'ViewAny:Project', 'web', '2025-10-19 07:24:07', '2025-10-19 07:24:07'),
(24, 'View:Project', 'web', '2025-10-19 07:24:07', '2025-10-19 07:24:07'),
(25, 'Create:Project', 'web', '2025-10-19 07:24:07', '2025-10-19 07:24:07'),
(26, 'Update:Project', 'web', '2025-10-19 07:24:07', '2025-10-19 07:24:07'),
(27, 'Delete:Project', 'web', '2025-10-19 07:24:07', '2025-10-19 07:24:07'),
(28, 'Restore:Project', 'web', '2025-10-19 07:24:07', '2025-10-19 07:24:07'),
(29, 'ForceDelete:Project', 'web', '2025-10-19 07:24:08', '2025-10-19 07:24:08'),
(30, 'ForceDeleteAny:Project', 'web', '2025-10-19 07:24:08', '2025-10-19 07:24:08'),
(31, 'RestoreAny:Project', 'web', '2025-10-19 07:24:08', '2025-10-19 07:24:08'),
(32, 'Replicate:Project', 'web', '2025-10-19 07:24:08', '2025-10-19 07:24:08'),
(33, 'Reorder:Project', 'web', '2025-10-19 07:24:08', '2025-10-19 07:24:08'),
(34, 'ViewAny:Section', 'web', '2025-10-19 07:24:09', '2025-10-19 07:24:09'),
(35, 'View:Section', 'web', '2025-10-19 07:24:09', '2025-10-19 07:24:09'),
(36, 'Create:Section', 'web', '2025-10-19 07:24:09', '2025-10-19 07:24:09'),
(37, 'Update:Section', 'web', '2025-10-19 07:24:09', '2025-10-19 07:24:09'),
(38, 'Delete:Section', 'web', '2025-10-19 07:24:09', '2025-10-19 07:24:09'),
(39, 'Restore:Section', 'web', '2025-10-19 07:24:10', '2025-10-19 07:24:10'),
(40, 'ForceDelete:Section', 'web', '2025-10-19 07:24:10', '2025-10-19 07:24:10'),
(41, 'ForceDeleteAny:Section', 'web', '2025-10-19 07:24:10', '2025-10-19 07:24:10'),
(42, 'RestoreAny:Section', 'web', '2025-10-19 07:24:10', '2025-10-19 07:24:10'),
(43, 'Replicate:Section', 'web', '2025-10-19 07:24:10', '2025-10-19 07:24:10'),
(44, 'Reorder:Section', 'web', '2025-10-19 07:24:10', '2025-10-19 07:24:10'),
(45, 'ViewAny:Service', 'web', '2025-10-19 07:24:11', '2025-10-19 07:24:11'),
(46, 'View:Service', 'web', '2025-10-19 07:24:11', '2025-10-19 07:24:11'),
(47, 'Create:Service', 'web', '2025-10-19 07:24:11', '2025-10-19 07:24:11'),
(48, 'Update:Service', 'web', '2025-10-19 07:24:11', '2025-10-19 07:24:11'),
(49, 'Delete:Service', 'web', '2025-10-19 07:24:11', '2025-10-19 07:24:11'),
(50, 'Restore:Service', 'web', '2025-10-19 07:24:11', '2025-10-19 07:24:11'),
(51, 'ForceDelete:Service', 'web', '2025-10-19 07:24:12', '2025-10-19 07:24:12'),
(52, 'ForceDeleteAny:Service', 'web', '2025-10-19 07:24:12', '2025-10-19 07:24:12'),
(53, 'RestoreAny:Service', 'web', '2025-10-19 07:24:12', '2025-10-19 07:24:12'),
(54, 'Replicate:Service', 'web', '2025-10-19 07:24:12', '2025-10-19 07:24:12'),
(55, 'Reorder:Service', 'web', '2025-10-19 07:24:12', '2025-10-19 07:24:12'),
(56, 'ViewAny:User', 'web', '2025-10-19 07:24:13', '2025-10-19 07:24:13'),
(57, 'View:User', 'web', '2025-10-19 07:24:13', '2025-10-19 07:24:13'),
(58, 'Create:User', 'web', '2025-10-19 07:24:13', '2025-10-19 07:24:13'),
(59, 'Update:User', 'web', '2025-10-19 07:24:13', '2025-10-19 07:24:13'),
(60, 'Delete:User', 'web', '2025-10-19 07:24:13', '2025-10-19 07:24:13'),
(61, 'Restore:User', 'web', '2025-10-19 07:24:13', '2025-10-19 07:24:13'),
(62, 'ForceDelete:User', 'web', '2025-10-19 07:24:14', '2025-10-19 07:24:14'),
(63, 'ForceDeleteAny:User', 'web', '2025-10-19 07:24:14', '2025-10-19 07:24:14'),
(64, 'RestoreAny:User', 'web', '2025-10-19 07:24:14', '2025-10-19 07:24:14'),
(65, 'Replicate:User', 'web', '2025-10-19 07:24:14', '2025-10-19 07:24:14'),
(66, 'Reorder:User', 'web', '2025-10-19 07:24:14', '2025-10-19 07:24:14'),
(67, 'ViewAny:Role', 'web', '2025-10-19 07:24:15', '2025-10-19 07:24:15'),
(68, 'View:Role', 'web', '2025-10-19 07:24:15', '2025-10-19 07:24:15'),
(69, 'Create:Role', 'web', '2025-10-19 07:24:15', '2025-10-19 07:24:15'),
(70, 'Update:Role', 'web', '2025-10-19 07:24:15', '2025-10-19 07:24:15'),
(71, 'Delete:Role', 'web', '2025-10-19 07:24:15', '2025-10-19 07:24:15'),
(72, 'Restore:Role', 'web', '2025-10-19 07:24:15', '2025-10-19 07:24:15'),
(73, 'ForceDelete:Role', 'web', '2025-10-19 07:24:16', '2025-10-19 07:24:16'),
(74, 'ForceDeleteAny:Role', 'web', '2025-10-19 07:24:16', '2025-10-19 07:24:16'),
(75, 'RestoreAny:Role', 'web', '2025-10-19 07:24:16', '2025-10-19 07:24:16'),
(76, 'Replicate:Role', 'web', '2025-10-19 07:24:16', '2025-10-19 07:24:16'),
(77, 'Reorder:Role', 'web', '2025-10-19 07:24:16', '2025-10-19 07:24:16'),
(78, 'ViewAny:Contact', 'web', '2025-10-28 11:56:50', '2025-10-28 11:56:50'),
(79, 'View:Contact', 'web', '2025-10-28 11:56:50', '2025-10-28 11:56:50'),
(80, 'Create:Contact', 'web', '2025-10-28 11:56:50', '2025-10-28 11:56:50'),
(81, 'Update:Contact', 'web', '2025-10-28 11:56:50', '2025-10-28 11:56:50'),
(82, 'Delete:Contact', 'web', '2025-10-28 11:56:50', '2025-10-28 11:56:50'),
(83, 'Restore:Contact', 'web', '2025-10-28 11:56:50', '2025-10-28 11:56:50'),
(84, 'ForceDelete:Contact', 'web', '2025-10-28 11:56:50', '2025-10-28 11:56:50'),
(85, 'ForceDeleteAny:Contact', 'web', '2025-10-28 11:56:50', '2025-10-28 11:56:50'),
(86, 'RestoreAny:Contact', 'web', '2025-10-28 11:56:50', '2025-10-28 11:56:50'),
(87, 'Replicate:Contact', 'web', '2025-10-28 11:56:50', '2025-10-28 11:56:50'),
(88, 'Reorder:Contact', 'web', '2025-10-28 11:56:50', '2025-10-28 11:56:50'),
(89, 'ViewAny:StatusItem', 'web', '2025-10-28 11:56:50', '2025-10-28 11:56:50'),
(90, 'View:StatusItem', 'web', '2025-10-28 11:56:50', '2025-10-28 11:56:50'),
(91, 'Create:StatusItem', 'web', '2025-10-28 11:56:50', '2025-10-28 11:56:50'),
(92, 'Update:StatusItem', 'web', '2025-10-28 11:56:50', '2025-10-28 11:56:50'),
(93, 'Delete:StatusItem', 'web', '2025-10-28 11:56:51', '2025-10-28 11:56:51'),
(94, 'Restore:StatusItem', 'web', '2025-10-28 11:56:51', '2025-10-28 11:56:51'),
(95, 'ForceDelete:StatusItem', 'web', '2025-10-28 11:56:51', '2025-10-28 11:56:51'),
(96, 'ForceDeleteAny:StatusItem', 'web', '2025-10-28 11:56:51', '2025-10-28 11:56:51'),
(97, 'RestoreAny:StatusItem', 'web', '2025-10-28 11:56:51', '2025-10-28 11:56:51'),
(98, 'Replicate:StatusItem', 'web', '2025-10-28 11:56:51', '2025-10-28 11:56:51'),
(99, 'Reorder:StatusItem', 'web', '2025-10-28 11:56:51', '2025-10-28 11:56:51'),
(100, 'View:Backups', 'web', '2025-10-28 11:56:51', '2025-10-28 11:56:51');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `title_ar` varchar(255) NOT NULL,
  `subtitle` varchar(255) DEFAULT NULL,
  `subtitle_ar` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `description_ar` text DEFAULT NULL,
  `is_published` tinyint(1) NOT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`images`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `title_ar`, `subtitle`, `subtitle_ar`, `description`, `description_ar`, `is_published`, `images`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'E-Commerce Platform', 'منصة التجارة الإلكترونية', NULL, NULL, 'Modern online shopping platform with advanced features', 'منصة تسوق إلكترونية حديثة بميزات متقدمة', 1, '[\"projects/01K80A4D0HW8TZYK48N40SB55G.jpg\", \"projects/01K80ACJSFSYAQ75RBKCZ0MC4V.png\"]', '2025-10-19 11:44:10', '2025-10-20 05:05:56', '2025-10-20 05:05:56'),
(2, 'E-Commerce Platform', 'منصة التجارة الإلكترونية', NULL, NULL, 'Modern online shopping platform with advanced features', 'منصة تسوق إلكترونية حديثة بميزات متقدمة', 1, '[\"projects/01K80ASNH68C77PKK6W0S947PY.png\", \"projects/01K80ASNNQ0G0R74BND895XKJ8.png\", \"projects/01K80ASNNTE7NXQCTFVAJN74GS.png\", \"projects/01K80ASNNYT0C981NP0ZZ70SD0.png\", \"projects/01K80ASNNWWYY6RZHQTZVC444T.png\"]', '2025-10-20 05:11:58', '2025-10-27 15:06:22', '2025-10-27 15:06:22'),
(3, 'Portfolio Website', 'موقع إلكتروني شخصي', NULL, NULL, 'A creative and responsive personal website to showcase skills, projects, and experience with modern design.', 'موقع شخصي إبداعي ومتجاوب لعرض المهارات والمشاريع والخبرات بتصميم عصري وجذاب.', 1, '[\"projects/01K80CP16NKFS5THPGTPFDTXM0.webp\"]', '2025-10-20 05:44:56', '2025-10-20 05:44:56', NULL),
(4, 'Mobile Booking App', 'تطبيق الحجز عبر الجوال', NULL, NULL, 'A mobile app that allows users to book appointments and services easily, with notifications and payment integration.', 'تطبيق جوال يتيح للمستخدمين حجز المواعيد والخدمات بسهولة، مع إشعارات مدمجة وخيارات دفع آمنة.', 1, '[\"projects/01K80F2VB3XP354CX2SE5PYHZ4.jpg\"]', '2025-10-20 06:23:33', '2025-10-20 06:26:53', NULL),
(5, 'E-Commerce Platform', 'منصة التجارة الإلكترونية', NULL, NULL, 'A modern e-commerce platform with advanced features', 'منصة تسوق إلكترونية حديثة بميزات متقدمة', 1, '[\"projects/01K8KDYFBJYFHR3ARWSAWX67SG.jpg\"]', '2025-10-27 15:09:36', '2025-10-27 15:12:35', NULL),
(6, 'ClientConnect CRM', 'إدارة علاقات العملاء (CRM)', NULL, NULL, 'A comprehensive system for businesses to manage customer interactions, track sales leads, automate marketing campaigns, and manage customer support tickets.', 'نظام شامل للشركات لإدارة تفاعلات العملاء، وتتبع عملاء المبيعات، وأتمتة الحملات التسويقية، وإدارة تذاكر دعم العملاء.', 1, '[\"projects/01K8KESF2ENRNAD1KRRYWN4HMQ.jpg\"]', '2025-10-27 15:27:20', '2025-10-27 15:27:20', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'super_admin', 'web', '2025-10-19 07:24:04', '2025-10-19 07:24:04');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 1),
(17, 1),
(18, 1),
(19, 1),
(20, 1),
(21, 1),
(22, 1),
(23, 1),
(24, 1),
(25, 1),
(26, 1),
(27, 1),
(28, 1),
(29, 1),
(30, 1),
(31, 1),
(32, 1),
(33, 1),
(34, 1),
(35, 1),
(36, 1),
(37, 1),
(38, 1),
(39, 1),
(40, 1),
(41, 1),
(42, 1),
(43, 1),
(44, 1),
(45, 1),
(46, 1),
(47, 1),
(48, 1),
(49, 1),
(50, 1),
(51, 1),
(52, 1),
(53, 1),
(54, 1),
(55, 1),
(56, 1),
(57, 1),
(58, 1),
(59, 1),
(60, 1),
(61, 1),
(62, 1),
(63, 1),
(64, 1),
(65, 1),
(66, 1),
(67, 1),
(68, 1),
(69, 1),
(70, 1),
(71, 1),
(72, 1),
(73, 1),
(74, 1),
(75, 1),
(76, 1),
(77, 1),
(78, 1),
(79, 1),
(80, 1),
(81, 1),
(82, 1),
(83, 1),
(84, 1),
(85, 1),
(86, 1),
(87, 1),
(88, 1),
(89, 1),
(90, 1),
(91, 1),
(92, 1),
(93, 1),
(94, 1),
(95, 1),
(96, 1),
(97, 1),
(98, 1),
(99, 1),
(100, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sections`
--

CREATE TABLE `sections` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `title_ar` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'page',
  `subtitle` varchar(255) DEFAULT NULL,
  `subtitle_ar` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `description_ar` text DEFAULT NULL,
  `service_items` text DEFAULT NULL,
  `service_items_ar` text DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sections`
--

INSERT INTO `sections` (`id`, `title`, `title_ar`, `slug`, `type`, `subtitle`, `subtitle_ar`, `description`, `description_ar`, `service_items`, `service_items_ar`, `icon`, `img`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Welcome to Procode', 'مرحبا بك في Procode', 'hero', 'page', NULL, NULL, 'We build modern digital experiences that bring ideas to life.', 'نحن نبني تجارب رقمية حديثة تجلب الأفكار إلى الحياة.', NULL, NULL, NULL, NULL, '2025-10-19 07:38:00', '2025-10-19 07:40:04', NULL),
(2, 'About Us', 'من نحن؟', 'about', 'page', 'Grow Your Business with Procode', 'نَمِّ عملك مع Procode', 'At Procode, we deliver comprehensive IT management solutions for your business. From basic web development and robust network security to unlimited technical support and strategic social media management, we\'re your committed partner in digital excellence.', 'في Procode، نقدم مجموعة كاملة من خدمات متخصصة مصممة لبناء، حماية، ودعم اكتمال البنية التحتية الرقمية لشركتك. من تطوير الويب الأساسي وحماية الشبكة القوية إلى الدعم الفني غير محدود وإدارة وسائل التواصل الاجتماعي الاستراتيجية، نحن شريكك الملتزم في تحقيق التميز الرقمي.', 'Expert Web Development\nComprehensive IT Management', 'تطوير ويب متخصص\nإدارة تقنية معلومات شاملة', 'circle-check-big', NULL, '2025-10-19 10:44:30', '2025-10-19 10:59:25', NULL),
(3, 'Our Services', 'خدماتنا', 'services', 'page', 'Comprehensive IT Management for Your Business', 'إدارة تكنولوجيا المعلومات الشاملة لشركتك', 'At Procode, we deliver a complete suite of specialized services designed to build, protect, and support your business\'s digital infrastructure.', 'في Procode، نقدم مجموعة كاملة من خدمات متخصصة مصممة لبناء، حماية، ودعم البنية التحتية الرقمية لشركتك.', NULL, NULL, NULL, NULL, '2025-10-19 11:06:24', '2025-10-19 11:06:45', NULL),
(4, 'Our Projects', 'مشاريعنا', 'projects', 'page', 'Check out our latest projects', 'تحقق من أحدث مشاريعنا', NULL, NULL, NULL, NULL, NULL, NULL, '2025-10-19 11:42:22', '2025-10-19 11:42:35', NULL),
(5, 'Why Choose Us', 'لماذا تختارنا', 'whyus', 'page', 'What Makes Us Different?', 'ما الذي يجعلنا مختلفين؟', 'Discover why clients trust us to bring their ideas to life. We deliver high-quality digital solutions powered by creativity, innovation, and reliability.', 'اكتشف لماذا يثق العملاء بنا لتحقيق أفكارهم. نقدم حلولاً رقمية عالية الجودة مدعومة بالإبداع والابتكار والموثوقية.', NULL, NULL, NULL, NULL, '2025-10-23 04:47:35', '2025-10-23 04:47:59', NULL),
(6, 'AI-Powered Solutions', 'حلول مدعومة بالذكاء الاصطناعي', 'ai', 'page', 'Next-gen technology for your business', 'تكنولوجيا الجيل القادم لأعمالك', NULL, NULL, NULL, NULL, NULL, NULL, '2025-10-26 11:38:32', '2025-10-26 11:47:18', NULL),
(7, 'Predictive Analytics', 'التحليلات التنبؤية', 'predictive-analytics', 'ai-feature', NULL, NULL, 'Advanced AI algorithms to forecast trends', 'خوارزميات الذكاء الاصطناعي المتقدمة للتنبؤ بالاتجاهات', NULL, NULL, 'TrendingUp', NULL, '2025-10-26 11:40:49', '2025-10-26 11:40:49', NULL),
(8, 'Computer Vision', 'الرؤية الحاسوبية', 'computer-vision', 'ai-feature', NULL, NULL, 'Intelligent image recognition and visual data analysis', 'التعرف الذكي على الصور وتحليل البيانات المرئية', NULL, NULL, 'Eye', NULL, '2025-10-26 11:44:56', '2025-10-26 11:48:48', NULL),
(9, 'Deep Learning Models', 'نماذج التعلم العميق', 'deep-learning-models', 'ai-feature', NULL, NULL, 'Custom neural networks trained for your specific needs', 'شبكات عصبية مخصصة تم تدريبها لتلبية احتياجاتك المحددة', NULL, NULL, 'Brain', NULL, '2025-10-26 11:46:04', '2025-10-26 11:49:14', NULL),
(10, 'Intelligent Search', 'البحث الذكي', 'intelligent-search', 'ai-feature', NULL, NULL, 'Semantic search powered by machine learning algorithms', 'البحث الدلالي مدعوم بخوارزميات التعلم الآلي', NULL, NULL, 'Search', NULL, '2025-10-26 11:51:49', '2025-10-26 11:51:49', NULL),
(11, 'Contact Us', 'اتصل بنا', 'contact', 'page', 'Get In Touch', 'تواصل معنا', 'Have a project in mind or just want to explore the possibilities? We\'d love to connect. Fill out the form, and we\'ll get back to you.', 'هل لديك مشروع في ذهنك أو تريد استكشاف الإمكانيات؟ يسعدنا التواصل معك. املأ النموذج وسنتواصل معك قريباً.', NULL, NULL, NULL, NULL, '2025-10-26 12:13:36', '2025-10-26 12:14:06', NULL),
(12, 'Frequently Asked Questions', 'الأسئلة شائعة', 'faq', 'page', 'Ask Our AI Assistant', 'اسأل مساعد الذكاء الاصطناعي الخاص بنا', NULL, NULL, NULL, NULL, NULL, NULL, '2025-10-28 05:46:14', '2025-10-28 05:47:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `title_ar` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `slug_ar` varchar(255) NOT NULL,
  `subtitle` varchar(255) DEFAULT NULL,
  `subtitle_ar` varchar(255) DEFAULT NULL,
  `description` text NOT NULL,
  `description_ar` text NOT NULL,
  `is_published` tinyint(1) NOT NULL,
  `images` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`images`)),
  `icon` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `title`, `title_ar`, `slug`, `slug_ar`, `subtitle`, `subtitle_ar`, `description`, `description_ar`, `is_published`, `images`, `icon`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Web Development', 'تطوير المواقع الإلكترونية', 'web-development', 'ttoyr-almoakaa-alalktrony', NULL, NULL, 'We design and build fast, responsive, and visually stunning websites that deliver a seamless user experience across all devices.\n<li>Responsive and modern website design optimized for all devices.\n<li>High-performance front-end with smooth animations and fast loading times.\n<li>Scalable back-end solutions built for security and reliability.\n<li>SEO-friendly structure to improve search visibility and rankings.', 'وم بتصميم وتطوير مواقع إلكترونية سريعة الاستجابة وجذابة بصريًا لتوفير تجربة مستخدم سلسة على جميع الأجهزة.', 1, '[]', 'Globe', '2025-10-19 11:12:12', '2025-10-28 08:57:15', NULL),
(2, 'Mobile App Development', 'تطوير تطبيقات الجوال', 'mobile-app-development', 'ttoyr-ttbykat-algoal', NULL, NULL, 'We create powerful and user-friendly mobile apps for iOS and Android, tailored to your business goals and audience needs.\n<li>Cross-platform apps for iOS and Android using modern frameworks.\n<li>Intuitive UI/UX design focused on user engagement and retention.\n<li>Robust architecture ensuring performance and scalability.\n<li>Integration with APIs, push notifications, and real-time databases.', 'نقوم بإنشاء تطبيقات جوال قوية وسهلة الاستخدام لأنظمة iOS وAndroid، مصممة خصيصًا لتناسب أهداف عملك واحتياجات جمهورك.', 1, '[]', 'smartphone', '2025-10-19 11:37:41', '2025-10-28 08:59:02', NULL),
(3, 'Custom Software Solutions', 'حلول برمجية مخصصة', 'custom-software-solutions', 'hlol-brmgy-mkhss', NULL, NULL, 'We develop scalable and secure software systems that streamline operations and boost business efficiency.', 'نقوم بتطوير أنظمة برمجية آمنة وقابلة للتوسع لتحسين كفاءة العمل وتسهيل العمليات.', 1, '[]', 'cpu', '2025-10-19 11:39:03', '2025-10-19 11:39:03', NULL),
(4, 'IT Consulting & Support', 'الاستشارات والدعم التقني', 'it-consulting-support', 'alastsharat-oaldaam-altkny', NULL, NULL, 'We offer expert IT consulting and technical support to help your business implement the right technologies and stay ahead of challenges.', 'نقدم استشارات تقنية ودعمًا فنيًا متخصصًا لمساعدة عملك في تطبيق التقنيات المناسبة ومواكبة التحديات الحديثة.', 1, '[]', 'headphones', '2025-10-19 11:40:24', '2025-10-19 11:40:24', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('2PiGBx3s3G0z4LOQySMDy26pyuRE5epINVKcmOUw', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36', 'YTo5OntzOjY6Il90b2tlbiI7czo0MDoidkM3M29Eakg3WU1KTkRUSmQ0RnJGb2lDUnpsUVd0Y3VSREZDbmhKSiI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTtzOjk6Il9wcmV2aW91cyI7YToxOntzOjM6InVybCI7czo0MzoiaHR0cDovLzEyNy4wLjAuMTo4MDAwL2FkbWluL3NlcnZpY2VzLzIvZWRpdCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6MTc6InBhc3N3b3JkX2hhc2hfd2ViIjtzOjYwOiIkMnkkMTIkZFpVY3ZHRENxeDV5bFpwQ2kzSEF4dThrUENBM1d0em5VSE9KcC4yYXFGL3FyNHV5SWVMV1MiO3M6NjoidGFibGVzIjthOjM6e3M6NDA6IjUyY2VmMzg4MGNjOWE0ODI1YzgxNWQyY2VjMTNhOGIwX2NvbHVtbnMiO2E6ODp7aTowO2E6Nzp7czo0OiJ0eXBlIjtzOjY6ImNvbHVtbiI7czo0OiJuYW1lIjtzOjU6InRpdGxlIjtzOjU6ImxhYmVsIjtzOjU6IlRpdGxlIjtzOjg6ImlzSGlkZGVuIjtiOjA7czo5OiJpc1RvZ2dsZWQiO2I6MTtzOjEyOiJpc1RvZ2dsZWFibGUiO2I6MDtzOjI0OiJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiO047fWk6MTthOjc6e3M6NDoidHlwZSI7czo2OiJjb2x1bW4iO3M6NDoibmFtZSI7czo4OiJ0aXRsZV9hciI7czo1OiJsYWJlbCI7czo4OiJUaXRsZSBhciI7czo4OiJpc0hpZGRlbiI7YjowO3M6OToiaXNUb2dnbGVkIjtiOjE7czoxMjoiaXNUb2dnbGVhYmxlIjtiOjA7czoyNDoiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjtOO31pOjI7YTo3OntzOjQ6InR5cGUiO3M6NjoiY29sdW1uIjtzOjQ6Im5hbWUiO3M6MTE6InN1YnRpdGxlX2FyIjtzOjU6ImxhYmVsIjtzOjExOiJTdWJ0aXRsZSBhciI7czo4OiJpc0hpZGRlbiI7YjowO3M6OToiaXNUb2dnbGVkIjtiOjE7czoxMjoiaXNUb2dnbGVhYmxlIjtiOjA7czoyNDoiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjtOO31pOjM7YTo3OntzOjQ6InR5cGUiO3M6NjoiY29sdW1uIjtzOjQ6Im5hbWUiO3M6NDoiaWNvbiI7czo1OiJsYWJlbCI7czo0OiJJY29uIjtzOjg6ImlzSGlkZGVuIjtiOjA7czo5OiJpc1RvZ2dsZWQiO2I6MTtzOjEyOiJpc1RvZ2dsZWFibGUiO2I6MDtzOjI0OiJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiO047fWk6NDthOjc6e3M6NDoidHlwZSI7czo2OiJjb2x1bW4iO3M6NDoibmFtZSI7czozOiJpbWciO3M6NToibGFiZWwiO3M6MzoiSW1nIjtzOjg6ImlzSGlkZGVuIjtiOjA7czo5OiJpc1RvZ2dsZWQiO2I6MTtzOjEyOiJpc1RvZ2dsZWFibGUiO2I6MDtzOjI0OiJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiO047fWk6NTthOjc6e3M6NDoidHlwZSI7czo2OiJjb2x1bW4iO3M6NDoibmFtZSI7czoxMDoiY3JlYXRlZF9hdCI7czo1OiJsYWJlbCI7czoxMDoiQ3JlYXRlZCBhdCI7czo4OiJpc0hpZGRlbiI7YjowO3M6OToiaXNUb2dnbGVkIjtiOjA7czoxMjoiaXNUb2dnbGVhYmxlIjtiOjE7czoyNDoiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjtiOjE7fWk6NjthOjc6e3M6NDoidHlwZSI7czo2OiJjb2x1bW4iO3M6NDoibmFtZSI7czoxMDoidXBkYXRlZF9hdCI7czo1OiJsYWJlbCI7czoxMDoiVXBkYXRlZCBhdCI7czo4OiJpc0hpZGRlbiI7YjowO3M6OToiaXNUb2dnbGVkIjtiOjA7czoxMjoiaXNUb2dnbGVhYmxlIjtiOjE7czoyNDoiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjtiOjE7fWk6NzthOjc6e3M6NDoidHlwZSI7czo2OiJjb2x1bW4iO3M6NDoibmFtZSI7czoxMDoiZGVsZXRlZF9hdCI7czo1OiJsYWJlbCI7czoxMDoiRGVsZXRlZCBhdCI7czo4OiJpc0hpZGRlbiI7YjowO3M6OToiaXNUb2dnbGVkIjtiOjA7czoxMjoiaXNUb2dnbGVhYmxlIjtiOjE7czoyNDoiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjtiOjE7fX1zOjQwOiJlNDcyOTJmODI4YjI2MTY1MWZhMmQ1YzEwYzY2OGVmNl9jb2x1bW5zIjthOjEwOntpOjA7YTo3OntzOjQ6InR5cGUiO3M6NjoiY29sdW1uIjtzOjQ6Im5hbWUiO3M6NToidGl0bGUiO3M6NToibGFiZWwiO3M6NToiVGl0bGUiO3M6ODoiaXNIaWRkZW4iO2I6MDtzOjk6ImlzVG9nZ2xlZCI7YjoxO3M6MTI6ImlzVG9nZ2xlYWJsZSI7YjowO3M6MjQ6ImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI7Tjt9aToxO2E6Nzp7czo0OiJ0eXBlIjtzOjY6ImNvbHVtbiI7czo0OiJuYW1lIjtzOjg6InRpdGxlX2FyIjtzOjU6ImxhYmVsIjtzOjg6IlRpdGxlIGFyIjtzOjg6ImlzSGlkZGVuIjtiOjA7czo5OiJpc1RvZ2dsZWQiO2I6MTtzOjEyOiJpc1RvZ2dsZWFibGUiO2I6MDtzOjI0OiJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiO047fWk6MjthOjc6e3M6NDoidHlwZSI7czo2OiJjb2x1bW4iO3M6NDoibmFtZSI7czo0OiJzbHVnIjtzOjU6ImxhYmVsIjtzOjQ6IlNsdWciO3M6ODoiaXNIaWRkZW4iO2I6MDtzOjk6ImlzVG9nZ2xlZCI7YjoxO3M6MTI6ImlzVG9nZ2xlYWJsZSI7YjowO3M6MjQ6ImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI7Tjt9aTozO2E6Nzp7czo0OiJ0eXBlIjtzOjY6ImNvbHVtbiI7czo0OiJuYW1lIjtzOjc6InNsdWdfYXIiO3M6NToibGFiZWwiO3M6NzoiU2x1ZyBhciI7czo4OiJpc0hpZGRlbiI7YjowO3M6OToiaXNUb2dnbGVkIjtiOjE7czoxMjoiaXNUb2dnbGVhYmxlIjtiOjA7czoyNDoiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjtOO31pOjQ7YTo3OntzOjQ6InR5cGUiO3M6NjoiY29sdW1uIjtzOjQ6Im5hbWUiO3M6MTQ6ImRlc2NyaXB0aW9uX2FyIjtzOjU6ImxhYmVsIjtzOjE0OiJEZXNjcmlwdGlvbiBhciI7czo4OiJpc0hpZGRlbiI7YjowO3M6OToiaXNUb2dnbGVkIjtiOjE7czoxMjoiaXNUb2dnbGVhYmxlIjtiOjA7czoyNDoiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjtOO31pOjU7YTo3OntzOjQ6InR5cGUiO3M6NjoiY29sdW1uIjtzOjQ6Im5hbWUiO3M6MTE6ImlzX3B1bGlzaGVkIjtzOjU6ImxhYmVsIjtzOjExOiJJcyBwdWxpc2hlZCI7czo4OiJpc0hpZGRlbiI7YjowO3M6OToiaXNUb2dnbGVkIjtiOjE7czoxMjoiaXNUb2dnbGVhYmxlIjtiOjA7czoyNDoiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjtOO31pOjY7YTo3OntzOjQ6InR5cGUiO3M6NjoiY29sdW1uIjtzOjQ6Im5hbWUiO3M6NDoiaWNvbiI7czo1OiJsYWJlbCI7czo0OiJJY29uIjtzOjg6ImlzSGlkZGVuIjtiOjA7czo5OiJpc1RvZ2dsZWQiO2I6MTtzOjEyOiJpc1RvZ2dsZWFibGUiO2I6MDtzOjI0OiJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiO047fWk6NzthOjc6e3M6NDoidHlwZSI7czo2OiJjb2x1bW4iO3M6NDoibmFtZSI7czoxMDoiY3JlYXRlZF9hdCI7czo1OiJsYWJlbCI7czoxMDoiQ3JlYXRlZCBhdCI7czo4OiJpc0hpZGRlbiI7YjowO3M6OToiaXNUb2dnbGVkIjtiOjA7czoxMjoiaXNUb2dnbGVhYmxlIjtiOjE7czoyNDoiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjtiOjE7fWk6ODthOjc6e3M6NDoidHlwZSI7czo2OiJjb2x1bW4iO3M6NDoibmFtZSI7czoxMDoidXBkYXRlZF9hdCI7czo1OiJsYWJlbCI7czoxMDoiVXBkYXRlZCBhdCI7czo4OiJpc0hpZGRlbiI7YjowO3M6OToiaXNUb2dnbGVkIjtiOjA7czoxMjoiaXNUb2dnbGVhYmxlIjtiOjE7czoyNDoiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjtiOjE7fWk6OTthOjc6e3M6NDoidHlwZSI7czo2OiJjb2x1bW4iO3M6NDoibmFtZSI7czoxMDoiZGVsZXRlZF9hdCI7czo1OiJsYWJlbCI7czoxMDoiRGVsZXRlZCBhdCI7czo4OiJpc0hpZGRlbiI7YjowO3M6OToiaXNUb2dnbGVkIjtiOjA7czoxMjoiaXNUb2dnbGVhYmxlIjtiOjE7czoyNDoiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjtiOjE7fX1zOjQwOiIxNWMxYTIzYjg2NmY0NTA0MjU4ODExY2MyMjJmYjliMF9jb2x1bW5zIjthOjg6e2k6MDthOjc6e3M6NDoidHlwZSI7czo2OiJjb2x1bW4iO3M6NDoibmFtZSI7czo1OiJ0aXRsZSI7czo1OiJsYWJlbCI7czo1OiJUaXRsZSI7czo4OiJpc0hpZGRlbiI7YjowO3M6OToiaXNUb2dnbGVkIjtiOjE7czoxMjoiaXNUb2dnbGVhYmxlIjtiOjA7czoyNDoiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjtOO31pOjE7YTo3OntzOjQ6InR5cGUiO3M6NjoiY29sdW1uIjtzOjQ6Im5hbWUiO3M6NDoic2x1ZyI7czo1OiJsYWJlbCI7czo0OiJTbHVnIjtzOjg6ImlzSGlkZGVuIjtiOjA7czo5OiJpc1RvZ2dsZWQiO2I6MTtzOjEyOiJpc1RvZ2dsZWFibGUiO2I6MDtzOjI0OiJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiO047fWk6MjthOjc6e3M6NDoidHlwZSI7czo2OiJjb2x1bW4iO3M6NDoibmFtZSI7czo4OiJzdWJ0aXRsZSI7czo1OiJsYWJlbCI7czo4OiJTdWJ0aXRsZSI7czo4OiJpc0hpZGRlbiI7YjowO3M6OToiaXNUb2dnbGVkIjtiOjE7czoxMjoiaXNUb2dnbGVhYmxlIjtiOjA7czoyNDoiaXNUb2dnbGVkSGlkZGVuQnlEZWZhdWx0IjtOO31pOjM7YTo3OntzOjQ6InR5cGUiO3M6NjoiY29sdW1uIjtzOjQ6Im5hbWUiO3M6MTI6ImlzX3B1Ymxpc2hlZCI7czo1OiJsYWJlbCI7czoxMjoiSXMgcHVibGlzaGVkIjtzOjg6ImlzSGlkZGVuIjtiOjA7czo5OiJpc1RvZ2dsZWQiO2I6MTtzOjEyOiJpc1RvZ2dsZWFibGUiO2I6MDtzOjI0OiJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiO047fWk6NDthOjc6e3M6NDoidHlwZSI7czo2OiJjb2x1bW4iO3M6NDoibmFtZSI7czo0OiJpY29uIjtzOjU6ImxhYmVsIjtzOjQ6Ikljb24iO3M6ODoiaXNIaWRkZW4iO2I6MDtzOjk6ImlzVG9nZ2xlZCI7YjoxO3M6MTI6ImlzVG9nZ2xlYWJsZSI7YjowO3M6MjQ6ImlzVG9nZ2xlZEhpZGRlbkJ5RGVmYXVsdCI7Tjt9aTo1O2E6Nzp7czo0OiJ0eXBlIjtzOjY6ImNvbHVtbiI7czo0OiJuYW1lIjtzOjEwOiJjcmVhdGVkX2F0IjtzOjU6ImxhYmVsIjtzOjEwOiJDcmVhdGVkIGF0IjtzOjg6ImlzSGlkZGVuIjtiOjA7czo5OiJpc1RvZ2dsZWQiO2I6MDtzOjEyOiJpc1RvZ2dsZWFibGUiO2I6MTtzOjI0OiJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiO2I6MTt9aTo2O2E6Nzp7czo0OiJ0eXBlIjtzOjY6ImNvbHVtbiI7czo0OiJuYW1lIjtzOjEwOiJ1cGRhdGVkX2F0IjtzOjU6ImxhYmVsIjtzOjEwOiJVcGRhdGVkIGF0IjtzOjg6ImlzSGlkZGVuIjtiOjA7czo5OiJpc1RvZ2dsZWQiO2I6MDtzOjEyOiJpc1RvZ2dsZWFibGUiO2I6MTtzOjI0OiJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiO2I6MTt9aTo3O2E6Nzp7czo0OiJ0eXBlIjtzOjY6ImNvbHVtbiI7czo0OiJuYW1lIjtzOjEwOiJkZWxldGVkX2F0IjtzOjU6ImxhYmVsIjtzOjEwOiJEZWxldGVkIGF0IjtzOjg6ImlzSGlkZGVuIjtiOjA7czo5OiJpc1RvZ2dsZWQiO2I6MDtzOjEyOiJpc1RvZ2dsZWFibGUiO2I6MTtzOjI0OiJpc1RvZ2dsZWRIaWRkZW5CeURlZmF1bHQiO2I6MTt9fX1zOjg6ImZpbGFtZW50IjthOjA6e31zOjY6ImxvY2FsZSI7czoyOiJlbiI7czoyMjoiUEhQREVCVUdCQVJfU1RBQ0tfREFUQSI7YTowOnt9fQ==', 1761660760);

-- --------------------------------------------------------

--
-- Table structure for table `status_items`
--

CREATE TABLE `status_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'admin', 'admin@admin.com', NULL, '$2y$12$dZUcvGDCqx5ylZpCi3HAxu8kPCA3WtznUHOJp.2aqF/qr4uyIeLWS', 'ASD6cEyftYegWvReIkm5qaGpVnsP7m1r2awYqteWRQxvfo4Rba7WrDfePidH', '2025-10-19 07:25:19', '2025-10-19 07:25:19', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ai_capabilities`
--
ALTER TABLE `ai_capabilities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `features`
--
ALTER TABLE `features`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `f_a_qs`
--
ALTER TABLE `f_a_qs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `sections`
--
ALTER TABLE `sections`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sections_slug_unique` (`slug`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `status_items`
--
ALTER TABLE `status_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ai_capabilities`
--
ALTER TABLE `ai_capabilities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `features`
--
ALTER TABLE `features`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `f_a_qs`
--
ALTER TABLE `f_a_qs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sections`
--
ALTER TABLE `sections`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `status_items`
--
ALTER TABLE `status_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
