import { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                y: 50, 
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.1 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100'
                }
            }
        )
    })

        gsap.fromTo(
            sectionRef.current, 
            { opacity: 0}, 
            { opacity:1, duration: 1.5})
    }, [])
    
    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/razer_proj.png" alt="Computer Vision" />
                        </div>
                        <div className="text-content">
                        <h2>Computer Vision - Image and Video Recognition.</h2>

                        <p className="text-white-50 md:text-xl">
                            An automation pipeline built to process images and videos for classification using deep learning techniques.
                        </p>
                    </div>
                    </div>

                    
                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#284D8A]">
                                <img src="/images/tinkering.png" alt="Garage@EEE - Tinkering Projects" />
                            </div>
                            <h2>Garage@EEE Website - Tinkering Projects Page</h2>
                        </div>
                        
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#E7B080]">
                                <img src="/images/lab2life.png" alt="Lab2life" />
                            </div>
                            <h2>Lab2life - An Indoor Navigation App Prototype</h2>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection