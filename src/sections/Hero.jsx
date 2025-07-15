import { words } from '../constants/index.js'
import Button from '../components/Button.jsx'
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'

const Hero = () => {
    return (
        <div id="hero" className="relative overflow-hidden"> 
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className="hero-layout">
                {/*LEFT: HERO CONTENT */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="hero-text">
                        <h1>Shaping 
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
                        <h1>into Real Projects</h1>
                        <h1>that Delivers Results</h1>
                    </div>
                    <p className='text-white-50 md:text-xl relative z-10'>
                        Hi, I'm Yin Yu, a developer based in Singapore with a passion for code.
                    </p>
                    <Button 
                    className="min-w-fit px-6 py-3 md:w-80 md:h-16"
                    id="button"
                    text="See My Work"/>
                </header>

                {/*RIGHT: 3D MODELHeroExperience.jsx */}
                <figure>
                    <div className='hero-3d-layout'>
                        <HeroExperience />
                    </div>
                </figure>

            </div>
        </div>
    )
}

export default Hero