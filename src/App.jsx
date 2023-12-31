import { useEffect, useLayoutEffect, useRef } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Heros } from "./components/Heros";
import { Hot } from "./components/Hot";
import { Info } from "./components/Info";
import { Plane } from "./components/Plane";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Loader } from "./components/Loader";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);
function App() {
	const planeRef = useRef(null);

	return (
		<ReactLenis
			root
			options={{
				lerp: 0.2,
				smoothWheel: true,
				duration: 1.5,
			}}
		>
			<div className="App">
				<Loader />
				<Header />
				<div style={{ position: "relative" }}>
					<Heros />
					<Plane planeRef={planeRef} />
				</div>
				<Hot />
				<Info />
				<Footer />
			</div>
		</ReactLenis>
	);
}

export default App;
