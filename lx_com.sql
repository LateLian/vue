-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2021-03-27 20:23:01
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `lx.com`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL COMMENT '商品id',
  `title` varchar(255) NOT NULL COMMENT '商品标题',
  `price` float NOT NULL COMMENT '商品价格',
  `subtitle` varchar(255) NOT NULL COMMENT '商品数量',
  `picture` text NOT NULL COMMENT '商品图片',
  `details` text NOT NULL COMMENT '商品详情',
  `specbig` text NOT NULL,
  `tit` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `subtitle`, `picture`, `details`, `specbig`, `tit`) VALUES
(1, 'AIO 520C-24IIL 十代英特尔酷睿i7 23.8英寸一体台式机 白色', 5999, '窄边框高色域低蓝光', '[{\"src\": \"img/levo2-1.jpg\",\"alt\": \"small\"}, {\"src\": \"img/detail1-2.jpg\",\"alt\": \"details-1\"}, {\"src\": \"img/detail1-3.jpg\",\"alt\": \"details-2\"}, {\"src\": \"img/detail1-1.jpg\",\"alt\": \"details-2\"}, {\"src\": \"img/detail1-4.jpg\",\"alt\": \"details-2\"}, {\"src\": \"img/detail1-5.jpg\",\"alt\": \"details-2\"}]', '404', 'i5-10400T/16G/1T+256G SSD/独显/...,i5-10210U/16G/512G SSD/集显/黑色,i5-1035G4/16G/512G SSD/集显/黑色,i5-10400T/16G/1T+256G SSD/独立...,i7-1065G7/16G/512G SSD/集显/黑色,i7-1065G7/16G/512G SSD/集显/白色,i5-1035G4/16G/512G SSD/集显/白色,i3-10110U/8G/256G SSD/集显/黑色, i5-1035G4/16GB/512G SSD/集显/黑...,i5-1035G4/16GB/512G SSD/集显/白...,i7-1065G7/16GB/512G SSD/集显/白...,i7-1065G7/16GB/512G SSD/集显/黑...', 'AIO 520C-24IIL 十代英特尔酷睿i7 23.8英寸一体台式机 白色'),
(2, '天逸510S-07IMB 分体式台式机', 4299, '双硬盘 大存储', '[{ \"src\": \"img/levo2-2.jpg\", \"alt\": \"small\" }, {\"src\": \"img/detail1-2.jpg\",\"alt\": \"details-1\"}, {\"src\": \"img/detail1-3.jpg\",\"alt\": \"details-2\"}, {\"src\": \"img/detail1-1.jpg\",\"alt\": \"details-2\"}, {\"src\": \"img/detail1-4.jpg\",\"alt\": \"details-2\"}]', '12746', 'i7-9700/16GB/2T+256 SSD, i5-9400F/8GB/1T+256 增强型SSD, i3-9100/8GB/1T, i5-10400F/i5-10400/8GB/1TB+256 ..., i5-10400F/i5-10400/8GB/1T+256 S..., i3-10100/8GB/1T, i7-10700F/i7-10700/16GB/2T+256 ..., i7-10700F/i7-10700/16GB/2TB+256...', '天逸510Pro-14IMB 英特尔酷睿i5 分体式台式机 灰色'),
(3, '天逸510Pro-14IMB 十代英特尔酷睿i7 分体式台式机 黑色', 6699, '家用性能优选', '[{ \"src\": \"img/levo2-3.jpg\", \"alt\": \"small\" }, {\"src\": \"img/detail1-2.jpg\",\"alt\": \"details-1\"}, {\"src\": \"img/detail1-3.jpg\",\"alt\": \"details-2\"}, {\"src\": \"img/detail1-1.jpg\",\"alt\": \"details-2\"}, {\"src\": \"img/detail1-4.jpg\",\"alt\": \"details-2\"}]', '3877', 'i7-9700/16GB/2T+256 SSD, i5-9400F/8GB/1T+256 增强型SSD, i3-9100/8GB/1T, i5-10400F/i5-10400/8GB/1TB+256 ..., i5-10400F/i5-10400/8GB/1T+256 S..., i3-10100/8GB/1T, i7-10700F/i7-10700/16GB/2T+256 ..., i5-10400/8GB/1T, i7-10700F/i7-10700/16GB/2TB+256...', '天逸510Pro-14IMB 十代英特尔酷睿i7 分体式台式机 黑色'),
(4, 'AIO 520C-24IMB 酷睿版 十代英特尔酷睿i5 23.8英寸一体机 白色', 4999, '家用视频优选', '[{ \"src\": \"img/levo2-1.jpg\", \"alt\": \"small\" }, {\"src\": \"img/detail1-2.jpg\",\"alt\": \"details-1\"}, {\"src\": \"img/detail1-3.jpg\",\"alt\": \"details-2\"}, {\"src\": \"img/detail1-1.jpg\",\"alt\": \"details-2\"}, {\"src\": \"img/detail1-4.jpg\",\"alt\": \"details-2\"}]', '404', 'i5-10400T/16G/1T+256G SSD/独显/..., i5-10210U/16G/512G SSD/集显/黑色, i5-1035G4/16G/512G SSD/集显/黑色, i5-10400T/16G/1T+256G SSD/独立..., i7-1065G7/16G/512G SSD/集显/黑色, i7-1065G7/16G/512G SSD/集显/白色, i5-1035G4/16G/512G SSD/集显/白色, i3-10110U/8G/256G SSD/集显/黑色,  i5-1035G4/16GB/512G SSD/集显/黑...,  i5-1035G4/16GB/512G SSD/集显/白...,  i7-1065G7/16GB/512G SSD/集显/白...,  i7-1065G7/16GB/512G SSD/集显/黑...', 'AIO 520C-24IIL 酷睿版十代英特尔酷睿i5 23.8英寸一体机 黑色'),
(5, 'AIO 520C-24IIL 酷睿版十代英特尔酷睿i5 23.8英寸一体机 黑色', 4799, '高内存 大存储', '[{\"src\": \"img/levo2-1.jpg\",\"alt\": \"small\"}, {\"src\": \"img/detail1-2.jpg\",\"alt\": \"details-1\"}, {\"src\": \"img/detail1-3.jpg\",\"alt\": \"details-2\"}, {\"src\": \"img/detail1-1.jpg\",\"alt\": \"details-2\"}, {\"src\": \"img/detail1-4.jpg\",\"alt\": \"details-2\"}, {\"src\": \"img/detail1-5.jpg\",\"alt\": \"details-2\"}]', '12746', 'i3-8100/8GB/1T, i3-10100/8G/1T, i5-10400/8GB/1T, i5-10400/ 16G/2T+256G, i5-10400/16G/1T+256, i5-10400/8GB/512G, i5-10400/8GB/512GB', '天逸510S-Mini 分体式台式机 矿石灰'),
(6, '天逸510S-07IMB 分体式台式机 银灰', 3899, '家用性价比优选', '[{\"src\": \"img/levo2-2.jpg\",\"alt\": \"small\"}, {\"src\": \"img/detail1-2.jpg\",\"alt\": \"details-1\"}, {\"src\": \"img/detail1-3.jpg\",\"alt\": \"details-2\"}, {\"src\": \"img/detail1-1.jpg\",\"alt\": \"details-2\"}, {\"src\": \"img/detail1-4.jpg\",\"alt\": \"details-2\"}, {\"src\": \"img/detail1-5.jpg\",\"alt\": \"details-2\"}]', '509', 'i3-8145U/8G/512GB SSD/集显/黑色,i5-1035G4/8G/512G SSD/集显/黑色, i3-10110U/8GB/512G SSD/集显/白色, i3-10110U/8GB/512G SSD/集显/黑色, i5-1035G4/8G/512G SSD/集显/白色, i5-1035G4/8GB/512G SSD/集显/黑色, i3-10110U/8GB/512GB SSD/集显/黑..., i3-10110U/8GB/512GB SSD/集显/白..., i5-1035G4/8GB/512G SSD/集显/白色', '联想 YOGA 27可旋转27英寸4K屏一体机台式电脑'),
(7, '联想 YOGA 27可旋转27英寸4K屏一体机台式电脑', 5699, '一指可轻松旋转4K屏', '[{\"src\": \"img/levo2-4.jpg\",\"alt\": \"small\"}, {\"src\": \"img/detail1-2.jpg\",\"alt\": \"details-1\"}, {\"src\": \"img/detail1-3.jpg\",\"alt\": \"details-2\"}, {\"src\": \"img/detail1-1.jpg\",\"alt\": \"details-2\"}, {\"src\": \"img/detail1-4.jpg\",\"alt\": \"details-2\"}, {\"src\": \"img/detail1-5.jpg\",\"alt\": \"details-2\"}]', '193', 'R5_4600H/16G/2T+256G SSD/集成..., R7_4800H/16G/2T+512G SSD/集成..., R7_4800H/32G/2T+512G SSD/独立...', '网课 AIO 逸-24IWL 十代英特尔酷睿i3 23.8英寸一体台式机 黑色'),
(8, '天逸510S-Mini 分体式台式机 矿石灰', 3999, '小巧机身 随心摆放', '[{\"src\": \"img/levo2-5.jpg\",\"alt\": \"small\"}, {\"src\": \"img/detail1-2.jpg\",\"alt\": \"details-1\"}, {\"src\": \"img/detail1-3.jpg\",\"alt\": \"details-2\"}, {\"src\": \"img/detail1-1.jpg\",\"alt\": \"details-2\"}, {\"src\": \"img/detail1-4.jpg\",\"alt\": \"details-2\"}, {\"src\": \"img/detail1-5.jpg\",\"alt\": \"details-2\"}]', '509', 'i3-8100/8GB/1T, i3-10100/8G/1T, i5-10400/8GB/1T, i5-10400/ 16G/2T+256G, i5-10400/16G/1T+256,i5-10400/8GB/512G, i5-10400/8GB/512GB', '联想 YOGA 27可旋转27寸量子点广色域4K屏一体机台式电脑');

-- --------------------------------------------------------

--
-- 表的结构 `username`
--

CREATE TABLE `username` (
  `id` int(11) NOT NULL COMMENT '用户id',
  `phone` bigint(20) NOT NULL COMMENT '手机号',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '用户密码'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- 转存表中的数据 `username`
--

INSERT INTO `username` (`id`, `phone`, `password`) VALUES
(1, 13546912311, 'admin'),
(2, 13546912322, 'admin'),
(3, 13645897569, '123456789a'),
(17, 13645987561, '123456789a'),
(16, 13546987512, '123456789a'),
(15, 13564875614, '123456789a'),
(14, 13564978451, '123456789a');

--
-- 转储表的索引
--

--
-- 表的索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `username`
--
ALTER TABLE `username`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=9;

--
-- 使用表AUTO_INCREMENT `username`
--
ALTER TABLE `username`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id', AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
