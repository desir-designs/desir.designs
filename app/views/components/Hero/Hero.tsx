import type { IComponent } from "@typings/Component";
import type { HeroProps } from "@typings/Hero";


const Hero: IComponent<HeroProps> = ({ title, heading, description, cta}: HeroProps) => {



    return (

        <div className="z-10 relative container mx-auto px-4 mt-14">

            <div className="relative z-10 flex backdrop-blur-lg flex-wrap justify-center items-center -m-6 lg:pt-32 pb-36">

                <div className="flex-1 p-4 backdrop-blur-lg">
                    <div className="lg:max-w-2xl mx-auto">

                        <div className="mb-3 -mt-12 font-heading flex items-center max-w-max mx-auto px-5 py-2.5 uppercase font-semibold text-md tracking-px text-white bg-black bg-opacity-70 rounded-lg">
                            <p>{heading ? heading : "HEADING_NOT_FOUND"}</p>
                        </div>

                        <h1 className="z-10 mb-6 font-heading text-center text-black text-7xl md:text-9xl xl:text-12xl font-bold">
                            <img className="h-1/2" src="/assets/images/logo-header.png" />
                        </h1>

                        <p className="mb-10 font-medium text-xl text-center text-black">
                            {description ? description : "DESCRIPTION_NOT_FOUND"}
                        </p>

                        <a href={cta?.url} className="group mb-9 relative flex items-center justify-center font-heading px-24 py-5 mx-auto w-full lg:w-auto uppercase text-white text-sm font-semibold tracking-px bg-blue-900 bg-opacity-80 overflow-hidden rounded-md">
                            <p className="relative z-10 mr-2">{cta?.name}</p>
                        </a>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero