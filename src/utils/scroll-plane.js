import gsap from "gsap";

export const scrollPlane = (pos, tar, isMobile, updatePlane) => {
	const tl = gsap.timeline();

	tl.to(pos, {
		x: !isMobile ? -11.23 : -5.62,
		y: !isMobile ? 5.89 : 14.7,
		z: !isMobile ? 4.0 : 11.28,
		duration: 3,
		scrollTrigger: {
			trigger: ".one",
			start: "top bottom",
			end: "top top",
			scrub: 1,
			duration: 3,
			immediateRender: false,
		},
		onUpdate: updatePlane,
	})
		.to(tar, {
			x: !isMobile ? -0.973 : 0.072,
			y: !isMobile ? 0.1795 : -0.0979,
			z: !isMobile ? -2.024 : -0.1716,
			duration: 3,
			scrollTrigger: {
				trigger: ".one",
				start: "top bottom",
				end: "top top",
				scrub: 1,
				duration: 3,
				immediateRender: false,
			},
			onUpdate: updatePlane,
		})
		.to(pos, {
			x: !isMobile ? 9.47 : 5.1343,
			y: !isMobile ? 5.62 : 16.7275,
			z: !isMobile ? 4.46 : 8.3879,
			duration: 3,
			scrollTrigger: {
				trigger: ".two",
				start: "top bottom",
				end: "top top",
				scrub: 1,
				duration: 3,
				immediateRender: false,
			},
			onUpdate: updatePlane,
		})
		.to(tar, {
			x: !isMobile ? 0.973 : 0.2436,
			y: !isMobile ? -1.195 : -0.2596,
			z: !isMobile ? -2.98 : 0.009,
			duration: 3,
			scrollTrigger: {
				trigger: ".two",
				start: "top bottom",
				end: "top top",
				scrub: 1,
				duration: 3,
				immediateRender: false,
			},
			onUpdate: updatePlane,
		})
		.to(pos, {
			x: !isMobile ? -11.23 : -5.62,
			y: !isMobile ? 5.89 : 14.7,
			z: !isMobile ? 4.0 : 11.28,
			duration: 3,
			scrollTrigger: {
				trigger: ".three",
				start: "top bottom",
				end: "top top",
				scrub: 1,
				duration: 3,
				immediateRender: false,
			},
			onUpdate: updatePlane,
		})
		.to(tar, {
			x: !isMobile ? -0.973 : 0.072,
			y: !isMobile ? 0.1795 : -0.0979,
			z: !isMobile ? -2.024 : -0.1716,
			duration: 3,
			scrollTrigger: {
				trigger: ".three",
				start: "top bottom",
				end: "top top",
				scrub: 1,
				duration: 3,
				immediateRender: false,
			},
			onUpdate: updatePlane,
		})
		.to(pos, {
			x: !isMobile ? 9.47 : 5.1343,
			y: !isMobile ? 5.62 : 16.7275,
			z: !isMobile ? 4.46 : 8.3879,
			duration: 3,
			scrollTrigger: {
				trigger: ".four",
				start: "top bottom",
				end: "top top",
				scrub: 1,
				duration: 3,
				immediateRender: false,
			},
			onUpdate: updatePlane,
		})
		.to(tar, {
			x: !isMobile ? 0.973 : 0.2436,
			y: !isMobile ? -0.195 : -0.2596,
			z: !isMobile ? -2.98 : 0.009,
			duration: 3,
			scrollTrigger: {
				trigger: ".four",
				start: "top bottom",
				end: "top top",
				scrub: 1,
				duration: 3,
				immediateRender: false,
			},
			onUpdate: updatePlane,
		});
};
