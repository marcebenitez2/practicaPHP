-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-10-2023 a las 02:29:37
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `concesionaria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `autos`
--

CREATE TABLE `autos` (
  `id` int(11) NOT NULL,
  `marca` varchar(30) DEFAULT NULL,
  `modelo` varchar(30) DEFAULT NULL,
  `anio` int(11) DEFAULT NULL,
  `color` varchar(30) DEFAULT NULL,
  `precioVenta` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `autos`
--

INSERT INTO `autos` (`id`, `marca`, `modelo`, `anio`, `color`, `precioVenta`) VALUES
(1, 'Chevrolet', 'Cruze', 2022, 'Rojo', 25000),
(2, 'Chevrolet', 'Malibu', 2021, 'Gris', 23500),
(3, 'Chevrolet', 'Equinox', 2020, 'Plata', 20800),
(4, 'Audi', 'A4', 2021, 'Plateado', 35000),
(5, 'Audi', 'Q5', 2022, 'Azul', 40500),
(6, 'Audi', 'A3', 2020, 'Blanco', 32900),
(7, 'BMW', 'X5', 2020, 'Negro', 40000),
(8, 'BMW', '3 Series', 2021, 'Gris', 38500),
(9, 'BMW', 'X3', 2019, 'Rojo', 36200),
(10, 'Mercedes', 'E-Class', 2019, 'Azul', 38000),
(11, 'Mercedes', 'C-Class', 2020, 'Plata', 36500),
(12, 'Mercedes', 'GLE', 2021, 'Negro', 45000),
(13, 'Honda', 'Civic', 2022, 'Blanco', 22000),
(14, 'Honda', 'Accord', 2021, 'Gris', 24500),
(15, 'Honda', 'CR-V', 2020, 'Rojo', 27800);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `autos`
--
ALTER TABLE `autos`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
