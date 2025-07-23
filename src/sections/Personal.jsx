import TitleHeader from "../components/TitleHeader";
import { personal } from "../constants";
import GlowCard from "../components/GlowCard";

const Personal = () => {
    return(
        <section id="personal" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="Projects and Interests"
                    sub="Personal"
                />

                <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                    {personal.map(({ imgPath, name, mentions, review })=> (
                        <GlowCard card={{ review }}>
                            <div className="flex flex-row items-center gap-6">
                                <div className="w-1/2 flex items-center gap-3">
                                    <div>
                                        <p className="font-bold">{name}</p>
                                        <p className="text-white-50">{mentions}</p>
                                    </div>
                                </div>
                                <div className="w-1/2 flex items-center gap-3">
                                    <img src={imgPath} alt={name} />
                                </div>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Personal;