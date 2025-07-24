import { abilities } from "../constants";
import TitleHeader from "../components/TitleHeader";

const FeatureCards = () => {
    return(
        <div className="w-full padding-x-lg">
                <TitleHeader
                    title=""
                    sub="Relevant Courses"
                />
            <div className="mx-auto grid-3-cols">
                {abilities.map(({ imgPath, title, desc }) => (
                    <div key={title} className="card-border rounded-xl p-8 flex flex-col gap-4">
                        <div className="size-14 flex items-center justify-center rounded-full">
                            <img src={imgPath} alt={title} />
                        </div>
                        <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
                        {/* <p className="text-white-50 text-lg">{desc}</p> */}
                    {/* Map over the array so each item gets its own <li> */}
                    <ul className="list-disc list-inside ml-5 space-y-2 text-white-50">
                        {desc.map((line, i) => (
                            <li key={i} className="text-lg">
                            {line}
                            </li>
                        ))}
                    </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeatureCards;