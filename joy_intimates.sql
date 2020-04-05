-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-04-2020 a las 23:17:04
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `joy_intimates`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL,
  `id_prodcuto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `subtotal` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `ticket_carrito` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `id_compra` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `monto` int(11) NOT NULL,
  `estado` int(11) NOT NULL,
  `forma_de_pago` int(11) NOT NULL,
  `forma_de_envio` int(11) NOT NULL,
  `ticket` int(11) NOT NULL,
  `fecha` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

CREATE TABLE `contacto` (
  `id_consulta` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `mail` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `telefono` int(11) NOT NULL,
  `consulta` varchar(255) COLLATE utf16_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL,
  `imagen` varchar(255) COLLATE utf16_spanish2_ci DEFAULT NULL,
  `titulo` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `categoria` int(3) NOT NULL DEFAULT 1 COMMENT '1.conjuntos, 2.bodys, 3. bikinis',
  `precio` text COLLATE utf16_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_producto`, `imagen`, `titulo`, `descripcion`, `categoria`, `precio`) VALUES
(1, '84000275_526158621365489_459115951324307781_n.jpg', 'ᴀᴛᴇɴᴇᴀ', 'Diseño común de color blanco', 1, '0'),
(2, '82345774_638316250277289_4356687613373073963_n.jpg', 'New In', 'Súper original y canchero. Conjunto de microfibra', 1, '0'),
(3, '87328537_816842315494911_6952748635663263158_n.jpg', 'Francine', 'Salmón Pink', 1, ''),
(4, '82772337_3192701507410184_8735096028246774819_n.jpg', 'Pontevedra', 'Puntilla bicolor con forrería de seda fría.', 1, '0'),
(5, '84311243_855291618269842_2212523862315407483_n.jpg', 'Katina', 'Conjunto de color pastel', 1, '0'),
(6, '89393857_103642827859717_7748094966102185865_n.jpg', 'Catalunia', 'Body simple con algunas decoraciones', 2, ''),
(7, '82941587_2553853454902048_8428931951023365177_n.jpg', 'Marruecos', 'Body de color frutilla con detalles muy finos y simples', 2, ''),
(8, '71329445_469844947076349_2401234612285164119_n.jpg', 'Aragon', 'Body negro, transparente en el centro pero con detalles y decoraciones en los costados y hombros', 2, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `nombre` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `mail` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `telefono` int(11) NOT NULL,
  `password` varchar(255) COLLATE utf16_spanish2_ci NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `Permisos` int(11) NOT NULL DEFAULT 0 COMMENT '0: usuario, 1: admin'
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish2_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nombre`, `mail`, `direccion`, `telefono`, `password`, `fecha_nacimiento`, `Permisos`) VALUES
(1, 'Gonzalo', 'a', '', 1162841404, 'b59c67bf196a4758191e42f76670ceba', '1999-04-14', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`id_compra`);

--
-- Indices de la tabla `contacto`
--
ALTER TABLE `contacto`
  ADD PRIMARY KEY (`id_consulta`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_producto`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `id_compra` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `contacto`
--
ALTER TABLE `contacto`
  MODIFY `id_consulta` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
