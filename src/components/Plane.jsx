import React, { useCallback, useEffect, useRef, useState } from "react";
import {
	ViewerApp,
	AssetManagerPlugin,
	GBufferPlugin,
	ProgressivePlugin,
	TonemapPlugin,
	SSRPlugin,
	SSAOPlugin,
	BloomPlugin,
	GammaCorrectionPlugin,
	CanvasSnipperPlugin,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollPlane } from "../utils/scroll-plane";
gsap.registerPlugin(ScrollTrigger);
export const Plane = ({ planeRef }) => {
	const [isMobile, setIsMobile] = useState(false);
	const canvasRef = useRef(null);

	const memoziedScroll = useCallback(
		(position, target, isMobile, updatePlane) => {
			if (position && target && updatePlane) {
				scrollPlane(position, target, isMobile, updatePlane);
			}
		},
		[isMobile]
	);

	const setupViewer = useCallback(async () => {
		{
			if (canvasRef.current) {
				const viewer = await new ViewerApp({
					canvas: canvasRef.current,
				});
				const manager = await viewer.addPlugin(AssetManagerPlugin);

				const currWidthWindow = await window.innerWidth;
				await setIsMobile(currWidthWindow <= 1045 ? true : false);
				const camera = viewer.scene.activeCamera;
				const position = camera.position;
				const target = camera.target;

				console.log("position", position);
				await viewer.addPlugin(GBufferPlugin);
				await viewer.addPlugin(new ProgressivePlugin(32));
				await viewer.addPlugin(new TonemapPlugin(true));
				await viewer.addPlugin(GammaCorrectionPlugin);
				await viewer.addPlugin(SSRPlugin);
				await viewer.addPlugin(SSAOPlugin);
				await viewer.addPlugin(BloomPlugin);

				await viewer.addPlugin(CanvasSnipperPlugin);

				viewer.renderer.refreshPipeline();

				await manager.addFromPath("plane3D2.glb");

				viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
				position.set(5.6815, -2, 2.42);
				target.set(-0.00588, -0.243, -0.13);
				if (isMobile) {
					position.set(13.853, -3.25, 7.458);
					target.set(0.0154, -0.17707, -0.15836);
				}
				window.scrollTo(0, 0);

				let wantUpdate = true;

				const updatePlane = () => {
					wantUpdate = true;
					viewer.setDirty();
				};

				viewer.addEventListener("preFrame", () => {
					if (wantUpdate) {
						camera.positionTargetUpdated(true);
						wantUpdate = false;
					}
				});

				memoziedScroll(position, target, isMobile, updatePlane);
			}
		}
	}, [isMobile]);
	let resizeTimer;
	window.addEventListener("resize", () => {
		clearTimeout(resizeTimer);

		resizeTimer = setTimeout(() => {
			window.location.reload();
		}, 500);
	});
	useEffect(() => {
		setupViewer();
	}, [isMobile]);

	return (
		<div className="plane">
			<div id="plane_canvas_container" ref={planeRef}>
				<canvas id="plane_canvas" ref={canvasRef} />
			</div>
		</div>
	);
};
