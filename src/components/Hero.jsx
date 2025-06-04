import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { mainVideo } from "../utils";

const Hero = () => {
    useGSAP(() => {
        gsap.to('.g_title', {
            opacity: 1,
            delay: 0.8,
            duration: 1,
            stagger: 0.5,
            ease: "power1.inOut"
        })

        gsap.to('#hero-info', {
            opacity: 1,
            delay: 2,
            y: 0,
            duration: 1,
            ease: "power1.inOut"
        })
    }, [])

  return (
    <section className="w-full my-8 bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col">
            <p className="section-subtitle g_title">Oyster Perpetual</p>
            <p className="section-title g_title">Submariner</p>
            <div className="md:w-10/12 w-9/12 flex justify-center">
                <video autoPlay loop muted playsInline={true} key={mainVideo} className="sm:h-[50vh] h-[30vh]">
                    <source src={mainVideo} type="video/mp4"/>
                </video>
            </div>
            <div>
                <p id="hero-info" className="section text-center">
                    Dive into another world
                </p>
            </div>
        </div>
    </section>
  )
}

export default Hero;