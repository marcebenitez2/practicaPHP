-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-10-2023 a las 18:48:31
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
-- Base de datos: `colegio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `AluLegajo` int(11) NOT NULL,
  `AluNombre` varchar(30) DEFAULT NULL,
  `AluOtrosDatos` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`AluLegajo`, `AluNombre`, `AluOtrosDatos`) VALUES
(1, 'Juan Perez', 'Datos de Juan Perez'),
(2, 'José Tuduri', 'Datos de José Tuduri'),
(3, 'Mikael Joki', 'Datos de Mikael Joki');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignaturas`
--

CREATE TABLE `asignaturas` (
  `AsiAsignatura` int(11) NOT NULL,
  `AsiNombre` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `asignaturas`
--

INSERT INTO `asignaturas` (`AsiAsignatura`, `AsiNombre`) VALUES
(1, 'Matematicas'),
(2, 'Lengua');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docentes`
--

CREATE TABLE `docentes` (
  `DocDocente` varchar(8) NOT NULL,
  `DocNombre` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `docentes`
--

INSERT INTO `docentes` (`DocDocente`, `DocNombre`) VALUES
('44232238', 'Romina'),
('55343349', 'Jorgita');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `examenes`
--

CREATE TABLE `examenes` (
  `ExaFecha` datetime DEFAULT NULL,
  `AluLegajo` int(11) DEFAULT NULL,
  `DocDocente` varchar(8) DEFAULT NULL,
  `ExaNota` float DEFAULT NULL,
  `AsiAsignatura` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `examenes`
--

INSERT INTO `examenes` (`ExaFecha`, `AluLegajo`, `DocDocente`, `ExaNota`, `AsiAsignatura`) VALUES
('2023-01-01 08:00:00', 1, '44232238', 8.5, 1),
('2023-01-02 09:00:00', 1, '44232238', 7, 2),
('2023-01-03 10:00:00', 2, '55343349', 6.5, 1),
('2023-01-04 11:00:00', 2, '44232238', 9, 2),
('2023-01-05 12:00:00', 3, '55343349', 9.5, 1),
('2023-01-06 13:00:00', 3, '55343349', 9.5, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`AluLegajo`);

--
-- Indices de la tabla `asignaturas`
--
ALTER TABLE `asignaturas`
  ADD PRIMARY KEY (`AsiAsignatura`);

--
-- Indices de la tabla `docentes`
--
ALTER TABLE `docentes`
  ADD PRIMARY KEY (`DocDocente`);

--
-- Indices de la tabla `examenes`
--
ALTER TABLE `examenes`
  ADD KEY `AluLegajo` (`AluLegajo`),
  ADD KEY `DocDocente` (`DocDocente`),
  ADD KEY `AsiAsignatura` (`AsiAsignatura`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `AluLegajo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `examenes`
--
ALTER TABLE `examenes`
  ADD CONSTRAINT `examenes_ibfk_1` FOREIGN KEY (`AluLegajo`) REFERENCES `alumnos` (`AluLegajo`),
  ADD CONSTRAINT `examenes_ibfk_2` FOREIGN KEY (`DocDocente`) REFERENCES `docentes` (`DocDocente`),
  ADD CONSTRAINT `examenes_ibfk_3` FOREIGN KEY (`AsiAsignatura`) REFERENCES `asignaturas` (`AsiAsignatura`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
