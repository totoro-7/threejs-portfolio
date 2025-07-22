import { useGSAP } from "@gsap/react";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons, techStackImgs } from "../constants";
import { gsap } from "gsap/gsap-core";

const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo('.tech-card', { y: 50, opacity: 0 }, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#skills',
                start: 'top center'
            }
        })
    })
    return(
        <div id="skills" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Tech Stack"
                    sub="Skills I worked with"
                />

            <div className="tech-grid">
                {techStackIcons.map((icon)=> (
                    <div key= {icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                        <div className="tech-card-animated-bg"/>
                        <div className="tech-card-content">
                            <div className="tech-icon-wrapper">
                                <TechIcon model={icon}/>
                            </div>

                            <div className="padding-x w-full">
                                <p>{icon.name}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* For 2D images */}
                {/* {techStackImgs.map((icon => (
                    <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                        <div className="tech-card-animated-bg"/>
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <img src={icon.imgPath} />
                                </div>
                                <div className="padding-x w-full">
                                <p>{icon.name}</p>
                                </div>
                            </div>
                    </div>
                )))} */}

            </div>
            </div>
        </div>
    )
}

export default TechStack;