import { counterItems } from '../constants/index.js';
import CountUp from 'react-countup';
import TitleHeader from './TitleHeader.jsx';

const AnimatedCounter = () => {
    return(
        <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
                <TitleHeader
                    title=""
                    sub="Qualifications and Academics"
                />
            <div className="mx-auto grid-3-cols">
                {counterItems.map((item) => (
                    <div className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
                        <div key={counterItems.label} className="counter-number text-whte text-4xl font-bold mb-2">
                            {/* {item.value} {item.suffix} */}
                            {item.title}
                            <div className='mt-5 text-blue-50 text-lg'> {item.suffix} <CountUp useGrouping={false} end={item.value} delay={1} duration={2.5} /> <br/></div>
                            <div className='text-white-35 text-base'> {item.label} </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnimatedCounter;