-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-10-2023 a las 04:41:03
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
-- Base de datos: `callcenter`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agentes`
--

CREATE TABLE `agentes` (
  `age_codigo` int(11) NOT NULL,
  `age_nombre` varchar(30) DEFAULT NULL,
  `age_cantidadatendida` int(11) DEFAULT NULL,
  `age_cantidadrecibida` int(11) DEFAULT NULL,
  `age_activo` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entrantes`
--

CREATE TABLE `entrantes` (
  `ent_id` int(11) NOT NULL,
  `ent_origen` varchar(15) DEFAULT NULL,
  `ent_destino` int(11) DEFAULT NULL,
  `ent_duracion` int(11) DEFAULT NULL,
  `age_codigo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salientes`
--

CREATE TABLE `salientes` (
  `sal_id` int(11) NOT NULL,
  `sal_origen` int(11) DEFAULT NULL,
  `sal_destino` varchar(15) DEFAULT NULL,
  `sal_duracion` int(11) DEFAULT NULL,
  `age_codigo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `agentes`
--
ALTER TABLE `agentes`
  ADD PRIMARY KEY (`age_codigo`);

--
-- Indices de la tabla `entrantes`
--
ALTER TABLE `entrantes`
  ADD PRIMARY KEY (`ent_id`),
  ADD KEY `age_codigo` (`age_codigo`);

--
-- Indices de la tabla `salientes`
--
ALTER TABLE `salientes`
  ADD PRIMARY KEY (`sal_id`),
  ADD KEY `age_codigo` (`age_codigo`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `entrantes`
--
ALTER TABLE `entrantes`
  ADD CONSTRAINT `entrantes_ibfk_1` FOREIGN KEY (`age_codigo`) REFERENCES `agentes` (`age_codigo`);

--
-- Filtros para la tabla `salientes`
--
ALTER TABLE `salientes`
  ADD CONSTRAINT `salientes_ibfk_1` FOREIGN KEY (`age_codigo`) REFERENCES `agentes` (`age_codigo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
