import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Aos from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);
export const Hot = () => {
	useEffect(() => {
		Aos.init();
	}, []);
	const data = [
		{
			img: "https://cdn2.ivivu.com/2022/10/20/13/ivivu-bukchon-hanok-village-360x225.gif",
			title: "Tour Hàn Quốc 5N4Đ",
			sub: "Seoul - Nami - Everland",
			price: "14.990.000 VND",
		},
		{
			img: "https://cdn2.ivivu.com/2019/01/22/08/ivivu-tour-nhat-ban-chua-kinkaku-1-360x225.jpg",
			title: "Tour Nhật Bản 5N5Đ",
			sub: "Núi phú Tây - Làng Oshino Hakkai - Công viên Nai Nara",
			price: "27.890.000 VND",
		},
		{
			img: "https://cdn2.ivivu.com/2022/09/13/15/ivivu-mua-thu-chau-au-204x153.gif",
			title: "Tour Châu Âu 9N8Đ",
			sub: "Đức - Hà Lan - Bỉ - Pháp - Thụy Sỹ ",
			price: "55.990.000 VND",
		},
		{
			img: "https://cdn2.ivivu.com/2018/09/26/15/thap-namsan-204x153.jpg",
			title: "Tour Cao Cấp Hàn Quốc 5N4Đ",
			sub: "Seoul - Nami - Everland Mùa Thu",
			price: "12.890.000 VND",
		},
		{
			img: "https://cdn2.ivivu.com/2022/06/08/09/ivivu-thu-han-quoc-204x153.gif",
			title: "Tour Hàn Quốc 4N4Đ",
			sub: "Nami - Everland - Bukchon Hanok",
			price: "12.990.000 VND",
		},
		{
			img: "https://cdn2.ivivu.com/2023/09/15/10/ivivu-nhat-ban-ashi-mua-thu-204x153.jpg",
			title: "Tour Nhật Bản 6N5Đ",
			sub: "Tokyo - Yamanashi - Toyohashi - Osaka - Kansai Mùa Lá Đỏ",
			price: "28.888.000 VND",
		},
	];

	return (
		<div className="hot" data-aos="fade-up">
			<p className="hot_title">Các Tour du lịch đang hot:</p>
			<div className="hot_container" data-aos="fade-up">
				{data.map((e) => {
					return (
						<div className="card" key={e.title}>
							<img src={e.img} className="card_img" />
							<p className="card_title">{e.title}</p>
							<p className="card_sub">{e.sub}</p>
							<p className="card_price">{e.price}</p>
							<div className="card_button">
								<p>Thông tin chi tiết</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
