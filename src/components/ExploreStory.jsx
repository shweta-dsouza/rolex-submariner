import { useGSAP } from "@gsap/react";
import { animateWithScroll } from "../utils/gsapAnimations";
import { rolexOnWater, rolexUnderwater, rolexCover } from "../utils";

const ExploreStory = () => {
    useGSAP(() => {
        animateWithScroll('#story-title', 
            { y: 0, opacity: 1 }
        );
        animateWithScroll('.story-text', 
            { y: 0, opacity: 1, duration: 1, ease: 'power2.inOut' }
        );
        animateWithScroll('.story-img', 
            { y:0, opacity: 1, scale: 1, ease: 'power' },
            { scrub: 5.5 }
        );
        animateWithScroll('#story-subtext-1', 
            { y: 0, opacity: 1 },
            { toggleActions: 'restart none none reverse', end: 'bottom top' }
        );
    }, [])


  return (
    <section className="h-full bg-zinc-900 overflow-hidden relative px-10">
        <div className="screen-max-width">
            <div className="mb-4 w-full">
                <h1 id="story-title" className="section">Exploring the depths</h1>
            </div>

            <div className="flex flex-col w-full relative overflow-hidden">
                <div className="story-container">
                    <div className="flex-1 flex-center">
                        <p className="story-text">
                            In the 1950s, the exploration of the underwater world was no longer limited 
                            to scientists and the military. The Submariner was launched at a time when diving 
                            was becoming increasingly popular. The public’s fascination with ocean exploration 
                            led to the establishment of the first diving schools.
                        </p>
                    </div>
                    <div className="flex-1 flex-center">
                        <p className="story-text">
                            Waterproof, robust, technical and perfectly legible, the Submariner was designed 
                            with this new-found popularity in mind. It became the tool watch of choice for divers, 
                            giving them the confidence to venture into the depths.
                        </p>
                    </div>
                </div>

                <div className="story-container mt-10 mb-20">
                    <div className="flex-center flex-col w-full gap-4">
                        <div className="overflow-hidden">
                            <img src={rolexOnWater} alt="rolex-on-water" className="story-img"/>
                        </div>
                        <div className="overflow-hidden">
                            <img src={rolexUnderwater} alt="rolex-underwater" className="story-img"/>
                        </div>
                    </div>
                </div>

                <div className="w-full flex-center sm:px-40 px-15">
                    <h1 id="story-subtext-1" className="section">
                        Over the years, the Submariner has benefited from innovations developed by Rolex, 
                        making it a timeless benchmark for divers’ watches.
                    </h1>
                </div>
            </div>

            <div className="story-container mt-10 mb-20">
                <div className="flex-center w-full">
                    <div className="overflow-hidden">
                        <img src={rolexCover} alt="rolex-on-water"/>
                    </div>
                </div>
                <div className="flex-center sm:px-40 px-15 mt-20">
                    <h2 className="font-semibold lg:text-3xl md:text-2xl text-xl text-gray-400">
                        With a case waterproof to a depth of 300 metres (1,000 feet), 
                        a unidirectional rotatable bezel graduated over 60 minutes and luminescent 
                        display features, the Submariner and Submariner Date both boast essential technical 
                        attributes that make them benchmarks in the world of divers’ watches.
                    </h2>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default ExploreStory;