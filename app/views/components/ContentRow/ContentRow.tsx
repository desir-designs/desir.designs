import type { ComponentType } from "@models/typings/Component";
import type { ContentRowProps } from "@typings/ContentRow";
import Fade from 'react-reveal/Fade';


const ContentRow: ComponentType<ContentRowProps> = ({ title, heading, description, action, content }: ContentRowProps) => {

    const Header = () => {
        return (
            <div className="flex flex-wrap -mx-4 mb-16 items-center">
                <div className="w-full lg:w-2/3 px-4 mb-8 lg:mb-0">
                    <span className="text-2xl font-extrabold text-blue-800">
                        {title ? title : "TITLE_NOT_FOUND"}
                    </span>
                    <h1 className="text-6xl font-extrabold font-heading mt-2 mb-4">
                        {heading ? heading : "HEADING_NOT_FOUND"}
                    </h1>
                    <p className="text-xl font-extrabold leading-8">
                        {description ? description : "DESCRIPTION_NOT_FOUND"}
                    </p>
                </div>
                <div className="w-full lg:w-1/3 px-4 mb-8 md:mb-0 lg:text-right">
                    <a
                        className="inline-block py-4 px-12 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                        href={action ? action?.url : "ACTION_URL_NOT_FOUND"}
                    >
                        {action ? action?.name : "ACTION_NOT_FOUND"}
                    </a>
                </div>
            </div>


        )
    }

    const Content = () => {

        return (

            <div className="flex flex-wrap -mx-4 -mb-8">
                <Fade cascade duration={200}>
                    {
                        content ? content.map((item, index) => {
                            return (
                                <a key={index} href={item.url ?? "#"} className="duration-500 ease-in-out hover:-translate-y-4 group w-full md:w-1/2 xl:w-1/3 px-4 mb-8 cursor-pointer transition-all">
                                    <div className="group-hover:border-2 group-hover:border-blue-800 items-center group-hover:shadow-2xl backdrop-blur-lg duration-300 group-hover:opacity-80 transition-all rounded-2xl border-2 border-opacity-25 border-blue-800 overflow-hidden group-hover:scale-90 group-hover:-translate-y-4 ease-in-out m-auto">
                                        <img
                                            className="max-h-50 inline-block object-cover"
                                            src={item?.cover?.src ?? "#"}
                                            alt={item?.cover?.alt ?? "IMAGE_NOT_FOUND"}
                                        />
                                        <div className="px-6 py-8 md:p-10">
                                            {item.tags ?
                                                item.tags.map((tag, index) => {
                                                    return (
                                                        <span key={index} className="inline-flex mb-6 h-6 items-center justify-center text-xs font-extrabold px-2 text-blue-900 rounded border-2 border-indigo-900 bg-blue-300 uppercase shadow-xl">
                                                            {tag?.name}
                                                        </span>
                                                    )
                                                }) : <></>
                                            }
                                            <p className="text-xl font-bold text-blue-800 mb-2">
                                                Joshua Desir • {item?.date}
                                            </p>
                                            <h2 className="text-4xl font-extrabold mb-6 text-black">
                                                {item?.title ?? "TITLE_NOT_FOUND"}
                                            </h2>
                                            <p className="text-xl font-bold mb-6">
                                            </p>
                                            <a
                                                className="inline-block font-2xl font-bold text-blue-600"
                                                href={item?.url}
                                            >
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </a>
                            )
                        })
                            : <></>

                    }
                </Fade>
            </div>

        )
    }

    const Action = () => {

        return (
            action ? <div className="mt-20 text-center">
                <a
                    className="hover:bg-opacity-50 hover:scale-90 inline-block py-4 px-12 text-center leading-6 text-lg text-white font-bold bg-blue-700 hover:bg-indigo-900 border-3 border-blue-900 rounded transition duration-200"
                    href={action?.url}>
                    {action?.name}
                </a>
            </div> : <>CALL_TO_ACTION_NOT_FOUND</>
        )
    }


    return (
        <section className="py-20 relative">
            <div className="container px-4 mx-auto relative">
                <Header />
                <Content />
                <Action />
            </div>
        </section>


    )
}

export default ContentRow