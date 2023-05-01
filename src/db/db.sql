-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-05-2023 a las 03:53:58
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fixpress`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `providers`
--

CREATE TABLE `providers` (
  `id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `description` varchar(300) NOT NULL,
  `experience` varchar(300) NOT NULL,
  `imageReference` varchar(100) NOT NULL,
  `especificacion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `providers`
--

INSERT INTO `providers` (`id`, `username`, `lastname`, `password`, `description`, `experience`, `imageReference`, `especificacion`) VALUES
(1, 'sebastian', 'gabriel', '$2b$10$l7KC9w.6f6.VmK4IO5sMsu1WFNXZEAb39VkBlmc63BzLrzsJoxf0y', 'a developer', '3 years', 'http://blob.imagehhjshdjk.jpeg', 'web developer');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `correo` varchar(30) NOT NULL,
  `contraseña` varchar(100) NOT NULL,
  `tipo_usuario` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `apellido`, `correo`, `contraseña`, `tipo_usuario`) VALUES
(1, 'hiram', 'gabriel', 'rusty4041@gmail.com', 'javascript', 'pornosabner'),
(2, 'hiram', 'gabriel', 'rusty4041@gmail.com', '$2b$10$/ur1Got./JtA2lQTx4IZSOny7yF7BWlbJpO.aQopelZ8nzk10Lq/2', 'pornosabner'),
(3, 'hiram', 'gabriel', 'rusty4041@gmail.com', '$2b$10$WoFVP8bwBzcPpSCuNUJ0w.S7x1G.onx6v0ccZh2jTda7FK1WlIsVq', 'vendedor'),
(4, 'hiram', 'gabriel', 'rusty4041@gmail.com', '$2b$10$RvkBqG8VKGN6D39/xQspGeg7EWlS6FpX11BCHNLN1x63OZuQPoSya', 'vendedor'),
(5, 'sebastian', 'de la puta', 'rusty4041@gmail.com', '$2b$10$Xgav2plvv60h3CPZyy90U.CnEuPGXp.n/73h0bJG7mulWtCRQIGKK', 'prostituto');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `providers`
--
ALTER TABLE `providers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `providers`
--
ALTER TABLE `providers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
