-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-10-2023 a las 03:42:53
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
-- Base de datos: `telefonia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `consumos`
--

CREATE TABLE `consumos` (
  `numlin` int(11) DEFAULT NULL,
  `feccon` date DEFAULT NULL,
  `cancon` decimal(10,2) DEFAULT NULL,
  `concon` char(1) DEFAULT NULL,
  `doct` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `consumos`
--

INSERT INTO `consumos` (`numlin`, `feccon`, `cancon`, `concon`, `doct`) VALUES
(101, '2023-01-01', 50.00, 'T', 1),
(101, '2023-01-02', 30.00, 'D', 1),
(102, '2023-01-01', 40.00, 'T', 2),
(102, '2023-01-02', 60.00, 'D', 2),
(103, '2023-01-01', 70.00, 'T', 3),
(103, '2023-01-02', 80.00, 'D', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `titulares`
--

CREATE TABLE `titulares` (
  `doct` int(11) NOT NULL,
  `nomt` varchar(255) DEFAULT NULL,
  `demas` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `titulares`
--

INSERT INTO `titulares` (`doct`, `nomt`, `demas`) VALUES
(1, 'Juan Pérez', 'Otros datos de Juan Pérez'),
(2, 'Marcelo Aguirre', 'Otros datos de Marcelo Aguirre'),
(3, 'María Creusa', 'Otros datos de María Creusa');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `consumos`
--
ALTER TABLE `consumos`
  ADD KEY `doct` (`doct`);

--
-- Indices de la tabla `titulares`
--
ALTER TABLE `titulares`
  ADD PRIMARY KEY (`doct`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `consumos`
--
ALTER TABLE `consumos`
  ADD CONSTRAINT `consumos_ibfk_1` FOREIGN KEY (`doct`) REFERENCES `titulares` (`doct`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
