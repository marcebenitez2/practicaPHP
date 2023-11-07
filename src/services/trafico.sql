-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-11-2023 a las 15:06:16
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
-- Base de datos: `trafico`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ciudades`
--

CREATE TABLE `ciudades` (
  `codLoc` int(11) NOT NULL,
  `nomLoc` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ciudades`
--

INSERT INTO `ciudades` (`codLoc`, `nomLoc`) VALUES
(1, 'Rafaela'),
(2, 'Rosario'),
(3, 'Ramallo'),
(4, 'Chascomus'),
(5, 'Bigand'),
(6, 'San Nicolas'),
(7, 'Chascomus'),
(8, 'Perez');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viajes`
--

CREATE TABLE `viajes` (
  `locOrigen` int(11) DEFAULT NULL,
  `locDestino` int(11) DEFAULT NULL,
  `cantKg` float DEFAULT NULL,
  `fecViaje` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `viajes`
--

INSERT INTO `viajes` (`locOrigen`, `locDestino`, `cantKg`, `fecViaje`) VALUES
(1, 2, 1254.3, '2022-05-01'),
(3, 1, 999, '2022-05-03'),
(1, 4, 5642.25, '2022-05-05'),
(1, 5, 2543.32, '2022-05-03'),
(6, 1, 111, '2022-05-06'),
(1, 4, 1758.33, '2022-05-01'),
(1, 8, 200, '2022-05-03');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ciudades`
--
ALTER TABLE `ciudades`
  ADD PRIMARY KEY (`codLoc`);

--
-- Indices de la tabla `viajes`
--
ALTER TABLE `viajes`
  ADD KEY `locOrigen` (`locOrigen`),
  ADD KEY `locDestino` (`locDestino`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `viajes`
--
ALTER TABLE `viajes`
  ADD CONSTRAINT `viajes_ibfk_1` FOREIGN KEY (`locOrigen`) REFERENCES `ciudades` (`codLoc`),
  ADD CONSTRAINT `viajes_ibfk_2` FOREIGN KEY (`locDestino`) REFERENCES `ciudades` (`codLoc`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
