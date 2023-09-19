import React, { useEffect, useRef } from "react";
import window from "../assets/window.mp4";
import flag from "../assets/flag.png";
import thailand from "../assets/thailand.png";
import thailandFlag from "../assets/flag_tl.gif";
import tl1 from "../assets/tl_1.webp";
import tl2 from "../assets/tl_2.jpeg";
import tl3 from "../assets/tl_3.webp";
import camera from "../assets/view.png";
import korea from "../assets/korea.png";
import koreaFlag from "../assets/flag_kr.gif";
import kr1 from "../assets/kr_1.webp";
import kr2 from "../assets/kr_2.jpeg";
import kr3 from "../assets/kr_3.jpeg";
import japan from "../assets/japan.png";
import japanFlag from "../assets/flag_jp.gif";
import jp1 from "../assets/jp_1.webp";
import jp2 from "../assets/jp_2.jpeg";
import jp3 from "../assets/jp_3.webp";
import singapo from "../assets/singapo.png";
import singapoFlag from "../assets/flag_sg.gif";
import sg1 from "../assets/sg_1.webp";
import sg2 from "../assets/sg_2.jpeg";
import sg3 from "../assets/sg_3.jpeg";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

export const Heros = () => {
	const imgContainerRef = useRef(null);

	useEffect(() => {
		gsap.utils
			.toArray(document.querySelectorAll(".hero_img_container"))
			.forEach((section) => {
				gsap.to(section, {
					scrollTrigger: {
						trigger: section,
						start: "top bottom",
						scrub: true,
					},
					opacity: 1,
					y: -80,
					duration: 800,
				});
			});
		gsap.utils
			.toArray(document.querySelectorAll(".even"))
			.forEach((section) => {
				gsap.to(section, {
					scrollTrigger: {
						trigger: section,
						start: "30% bottom",
						end: "20% 50%",
						scrub: true,
					},
					opacity: 1,
					y: -80,
					x: -80,
					duration: 500,
				});
			});
		gsap.utils.toArray(document.querySelectorAll(".odd")).forEach((section) => {
			gsap.to(section, {
				scrollTrigger: {
					trigger: section,
					start: "30% bottom",
					end: "20% 50%",
					scrub: true,
				},
				opacity: 1,
				y: -80,
				x: 50,
				duration: 200,
			});
		});
	}, []);
	return (
		<div className="heros">
			<div className="window_container">
				<div className="slogan">
					<p>Hành trình của bạn, trải nghiệm của chúng tôi</p>
					<p>
						Hãy cùng chúng tôi ghi lại những kỷ niệm trên hành trình của bạn
					</p>
				</div>

				<video src={window} muted autoPlay loop />
			</div>
			<div className="hero one">
				<div className="hero_imgs">
					<div className="hero_img_container" ref={imgContainerRef}>
						<img src={tl1} className="hero_img_container_main" />
						<img src={camera} className="hero_img_container_view" />
					</div>
					<div className="hero_img_container" ref={imgContainerRef}>
						<img src={tl2} className="hero_img_container_main" />
						<img src={camera} className="hero_img_container_view" />
					</div>
					<div className="hero_img_container" ref={imgContainerRef}>
						<img src={tl3} className="hero_img_container_main" />
						<img src={camera} className="hero_img_container_view" />
					</div>
				</div>
				<div className="hero_flag even">
					<div className="hero_flag_container">
						<img src={thailand} className="img_word" />
						<img src={thailandFlag} className="img_flagC" />
					</div>
					<img src={flag} className="img_flag" />
				</div>
			</div>
			<div className="hero two">
				<div className="hero_imgs">
					<div className="hero_img_container" ref={imgContainerRef}>
						<img src={kr1} className="hero_img_container_main" />
						<img src={camera} className="hero_img_container_view" />
					</div>
					<div className="hero_img_container" ref={imgContainerRef}>
						<img src={kr2} className="hero_img_container_main" />
						<img src={camera} className="hero_img_container_view" />
					</div>
					<div className="hero_img_container" ref={imgContainerRef}>
						<img src={kr3} className="hero_img_container_main" />
						<img src={camera} className="hero_img_container_view" />
					</div>
				</div>
				<div className="hero_flag odd">
					<div className="hero_flag_container">
						<img src={korea} className="img_word" />
						<img src={koreaFlag} className="img_flagC" />
					</div>
					<img src={flag} className="img_flag" />
				</div>
			</div>
			<div className="hero three">
				<div className="hero_imgs">
					<div className="hero_img_container" ref={imgContainerRef}>
						<img src={jp1} className="hero_img_container_main" />
						<img src={camera} className="hero_img_container_view" />
					</div>
					<div className="hero_img_container" ref={imgContainerRef}>
						<img src={jp2} className="hero_img_container_main" />
						<img src={camera} className="hero_img_container_view" />
					</div>
					<div className="hero_img_container" ref={imgContainerRef}>
						<img src={jp3} className="hero_img_container_main" />
						<img src={camera} className="hero_img_container_view" />
					</div>
				</div>
				<div className="hero_flag even">
					<div className="hero_flag_container">
						<img src={japan} className="img_word" />
						<img src={japanFlag} className="img_flagC" />
					</div>
					<img src={flag} className="img_flag" />
				</div>
			</div>
			<div className="hero four">
				<div className="hero_imgs">
					<div className="hero_img_container" ref={imgContainerRef}>
						<img src={sg1} className="hero_img_container_main" />
						<img src={camera} className="hero_img_container_view" />
					</div>
					<div className="hero_img_container" ref={imgContainerRef}>
						<img src={sg2} className="hero_img_container_main" />
						<img src={camera} className="hero_img_container_view" />
					</div>
					<div className="hero_img_container" ref={imgContainerRef}>
						<img src={sg3} className="hero_img_container_main" />
						<img src={camera} className="hero_img_container_view" />
					</div>
				</div>
				<div className="hero_flag odd">
					<div className="hero_flag_container">
						<img src={singapo} className="img_word" />
						<img src={singapoFlag} className="img_flagC" />
					</div>
					<img src={flag} className="img_flag" />
				</div>
			</div>
		</div>
	);
};
