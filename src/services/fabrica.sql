-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-10-2023 a las 23:51:18
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
-- Base de datos: `fabrica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `Nombre` varchar(30) DEFAULT NULL,
  `Documento` varchar(8) DEFAULT NULL,
  `EstadoCivil` varchar(15) DEFAULT NULL,
  `CantidadDeHijos` int(11) DEFAULT NULL,
  `NumeroDeEmpleado` int(11) NOT NULL,
  `ValorHora` float DEFAULT NULL,
  `Actualizado` varchar(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`Nombre`, `Documento`, `EstadoCivil`, `CantidadDeHijos`, `NumeroDeEmpleado`, `ValorHora`, `Actualizado`) VALUES
('Juan Pérez', '12345678', 'Soltero', 0, 101, 15, 'NO'),
('María López', '87654321', 'Casado', 2, 102, 14.5, 'NO'),
('Juan Pérez', '12345678', 'Soltero', 0, 103, 10.5, 'NO'),
('María García', '98765432', 'Casado', 2, 104, 12.3, 'NO'),
('Carlos López', '56789012', 'Soltero', 1, 105, 11.7, 'NO'),
('Laura Rodríguez', '34567890', 'Casado', 3, 106, 14.2, 'NO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajo`
--

CREATE TABLE `trabajo` (
  `NumeroDeEmpleado` int(11) DEFAULT NULL,
  `FechaTrabajo` datetime DEFAULT NULL,
  `CantidadHorasTrabajadas` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `trabajo`
--

INSERT INTO `trabajo` (`NumeroDeEmpleado`, `FechaTrabajo`, `CantidadHorasTrabajadas`) VALUES
(101, '2023-10-09 08:00:00', 8),
(102, '2023-10-09 09:00:00', 7),
(101, '2023-10-10 08:00:00', 7),
(102, '2023-10-11 09:00:00', 6),
(103, '2023-10-12 10:00:00', 8),
(104, '2023-10-13 08:00:00', 7),
(105, '2023-10-14 09:00:00', 6),
(106, '2023-10-15 10:00:00', 8);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`NumeroDeEmpleado`);

--
-- Indices de la tabla `trabajo`
--
ALTER TABLE `trabajo`
  ADD KEY `NumeroDeEmpleado` (`NumeroDeEmpleado`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `trabajo`
--
ALTER TABLE `trabajo`
  ADD CONSTRAINT `trabajo_ibfk_1` FOREIGN KEY (`NumeroDeEmpleado`) REFERENCES `empleado` (`NumeroDeEmpleado`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
