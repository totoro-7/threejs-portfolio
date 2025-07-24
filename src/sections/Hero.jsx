import { words } from '../constants/index.js'
import Button from '../components/Button.jsx'
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter.jsx';

const Hero = () => {
    useGSAP(() =>  {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut'
            },
        )
    })
    return (
        <section id="hero" className="relative overflow-hidden"> 
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className="hero-layout">
                {/*LEFT: HERO CONTENT */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                  <div className="flex flex-col gap-7">
                    <div className="hero-text">
                        <h1>Learning about
                            <span className="slide">
                                <span className="wrapper">
                                {words.map((word) => (                                
                                    <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                    <img
                                        src={word.imgPath}
                                        alt={word.text}
                                        className="xl:size-12 md:size-10 size:7 md:p-2 p-1 rounded-full bg-white-50"
                                    />
                                    <span>{word.text}</span>
                                    </span>
                                ))}
                                </span>
                            </span>
                            </h1>
                        <h1>Developing Real Projects</h1>
                        {/* <h1>One Cloud At A Time</h1> */}
                    </div>
                    <p className='text-white-50 mt-2 md:text-xl relative z-10'>
                        Hi, I'm Yin Yu, a final-year student based in <br /> Singapore with a passion for code and learning.
                        {/* <br />I have interest in AI/ML, web development, cloud technologies and design. */}
                    </p>
                    <Button 
                    className="min-w-fit px-6 py-3 md:w-80 md:h-16"
                    id="button"
                    text="Learn more"/>
                    </div>
                </header>

                {/*RIGHT: 3D Model HeroExperience.jsx */}
                <figure>
                    <div className='hero-3d-layout'>
                        <HeroExperience />
                    </div>
                </figure>
            </div>
            <AnimatedCounter />
        </section>
    )
}

export default Hero
