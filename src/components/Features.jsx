import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Features = () => {
    useGSAP(() => {
        gsap.to('.g_text', {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.1,
            ease: "power1.inOut"
        })

    }, [])

  return (
    <section className="w-screen h-full common-padding bg-black overflow-hidden">
        <div className="screen-max-width">
            <div className="flex-center flex-col">
                <p className="section-subtitle g_text">Next</p>
                <p className="section-title-2 g_text">Submariner Features</p>
                <button className="btn g_text">Learn more</button>
            </div>
        </div>
    </section>
  )
}

export default Features;
