import { useGSAP } from "@gsap/react";
import VideoSlider from "./VideoSlider";

const CloserLook = () => {
	useGSAP(() => {
		const loadAndAnimate = async () => {
			const { default: gsap } = await import('gsap');

			gsap.to('#title', {
				opacity: 1,
				y: 0
			})
		}
		loadAndAnimate()
	}, [])


	return (
		<section className="w-screen h-full bg-zinc-900 common-padding overflow-hidden">
			<div className="screen-max-width">
				<h1 id="title" className="section mb-12">The Submariner Uncovered.</h1>
				<VideoSlider />
			</div>
		</section>
	)
}

export default CloserLook;