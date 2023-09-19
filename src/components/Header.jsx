import React, { useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);
export const Header = () => {
	const headerRef = useRef();

	useEffect(() => {
		gsap.to(headerRef.current, {
			scrollTrigger: {
				trigger: headerRef.current,
				start: "105% 100px",
				end: "105% 100px",
				onEnter: () => {
					headerRef.current.classList.add("active");
				},
				onEnterBack: () => {
					headerRef.current.classList.remove("active");
				},
				markers: false,
			},
		});
	}, []);
	return (
		<div className="header" id="header" ref={headerRef}>
			<div className="header_left">
				<a href="#">
					<img src={logo} className="header_left_logo" />
				</a>
			</div>
			<div className="header_center">
				<p className="header_center_option">Trang chủ</p>
				<p className="header_center_option">Các loại Tour</p>
				<p className="header_center_option">Tips</p>
				<p className="header_center_option">Liên hệ</p>
				<p className="header_center_option">Ưu đãi</p>
				<p className="header_center_option">Giới thiệu</p>
			</div>
			<div className="header_right">
				<p>Đăng nhập</p>
				<div className="header_menu">
					<div className="header_menu_line"></div>
					<div className="header_menu_line"></div>
					<div className="header_menu_line"></div>
				</div>
			</div>
		</div>
	);
};
