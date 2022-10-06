import type { ImageProps } from "@typings/Image"
import { IComponent } from "@models/typings/Component"
export type PostProps = {
    banner?: ImageProps,
    title?: string,
}


import Affix from "../Affix"



const Post: IComponent<PostProps> = ({ banner, title }: PostProps) => {
    return (
        <section className="py-22">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4 mb-12 items-center">
                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                        <img
                            className="block w-full border-3 border-indigo-900 rounded-2xl shadow-md"
                            src={banner?.src}
                            alt={banner?.alt}
                        />
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <span className="inline-flex mb-6 h-6 items-center justify-center text-xs font-extrabold px-2 text-indigo-900 rounded border-2 border-indigo-900 bg-green-200 uppercase shadow-sm">
                            Technology
                        </span>
                        <p className="text-xl font-bold text-gray-400 mb-2">
                            John Doe • 19 Jan 2022
                        </p>
                        <h1 className="text-3xl md:text-4xl font-extrabold font-heading mb-4">
                           {title ? title : "TITLE_NOT_FOUND"}
                        </h1>
                        <p className="text-xl font-extrabold leading-8 mb-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <div className="flex items-center">
                            <img
                                className="block w-16 h-16"
                                src="nigodo-assets/blog/avatar-author.png"
                                alt=""
                            />
                            <div className="ml-3">
                                <h5 className="text-xl font-bold leading-7">John Doe</h5>
                                <span className="text-xl font-bold leading-7">12 October 2021</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">

               

                        <div className="w-full lg:w-2/5 px-4 mb-12 lg:mb-0">
                        <Affix top={120}>
                            <ul className="mb-12">
                                <li className="mb-8">
                                    <a
                                        className="inline-block text-xl hover:text-indigo-800 font-extrabold"
                                        href="#"
                                    >
                                        Introduction
                                    </a>
                                </li>
                                <li className="mb-8">
                                    <a
                                        className="inline-block text-xl hover:text-indigo-800 font-extrabold"
                                        href="#"
                                    >
                                        Header 1
                                    </a>
                                </li>
                                <li className="mb-8">
                                    <a
                                        className="inline-block text-xl hover:text-indigo-800 font-extrabold"
                                        href="#"
                                    >
                                        Header 2
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="inline-block text-xl hover:text-indigo-800 font-extrabold"
                                        href="#"
                                    >
                                        Summary
                                    </a>
                                </li>
                            </ul>


                            <div className="md:flex pt-8 items-center border-t-3 border-indigo-900">
                                <a
                                    className="inline-block w-full md:w-auto mb-4 md:mb-0 md:mr-6 py-3 px-8 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                                    href="#"
                                >
                                   Share
                                </a>
                                <a
                                    className="inline-flex items-center justify-center w-14 h-14 mr-6 border-3 border-indigo-900 hover:border-indigo-800 rounded bg-white text-indigo-900 hover:text-indigo-800 shadow"
                                    href="#"
                                >
                                    <svg
                                        width={32}
                                        height={32}
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M18.1798 27.6364V17.0214H21.8109L22.3557 12.8833H18.1798V10.2417C18.1798 9.04402 18.5175 8.22781 20.2705 8.22781L22.5027 8.22691V4.52566C22.1166 4.47646 20.7916 4.36365 19.2493 4.36365C16.0288 4.36365 13.824 6.29175 13.824 9.83189V12.8833H10.1818V17.0214H13.824V27.6364H18.1798Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                                <a
                                    className="inline-flex items-center justify-center w-14 h-14 mr-6 border-3 border-indigo-900 hover:border-indigo-800 rounded bg-white text-indigo-900 hover:text-indigo-800 shadow"
                                    href="#"
                                >
                                    <svg
                                        width={32}
                                        height={32}
                                        viewBox="0 0 28 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M8.13417 0.909058H19.8655C23.8497 0.909058 27.0911 4.15039 27.0909 8.13429V19.8656C27.0909 23.8495 23.8497 27.0909 19.8655 27.0909H8.13417C4.15026 27.0909 0.909088 23.8497 0.909088 19.8656V8.13429C0.909088 4.15039 4.15026 0.909058 8.13417 0.909058ZM19.8657 24.7679C22.5688 24.7679 24.7681 22.5688 24.7681 19.8656H24.7679V8.13429C24.7679 5.43128 22.5687 3.23204 19.8655 3.23204H8.13417C5.43115 3.23204 3.23207 5.43128 3.23207 8.13429V19.8656C3.23207 22.5688 5.43115 24.7681 8.13417 24.7679H19.8657ZM7.14285 14.0001C7.14285 10.219 10.2189 7.14282 14 7.14282C17.7811 7.14282 20.8571 10.219 20.8571 14.0001C20.8571 17.7811 17.7811 20.8571 14 20.8571C10.2189 20.8571 7.14285 17.7811 7.14285 14.0001ZM9.50397 14C9.50397 16.479 11.521 18.4958 14 18.4958C16.479 18.4958 18.496 16.479 18.496 14C18.496 11.5207 16.4792 9.50383 14 9.50383C11.5208 9.50383 9.50397 11.5207 9.50397 14Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                                <a
                                    className="inline-flex items-center justify-center w-14 h-14 border-3 border-indigo-900 hover:border-indigo-800 rounded bg-white text-indigo-900 hover:text-indigo-800 shadow"
                                    href="#"
                                >
                                    <svg
                                        width={32}
                                        height={32}
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M29.0909 8.19468C28.1808 8.59795 27.2042 8.87145 26.1782 8.99355C27.2259 8.3662 28.0278 7.37113 28.4079 6.18907C27.4252 6.77004 26.3404 7.19189 25.1846 7.42058C24.2591 6.43323 22.9426 5.81824 21.4824 5.81824C18.681 5.81824 16.4097 8.08963 16.4097 10.8895C16.4097 11.2866 16.4545 11.6744 16.541 12.0453C12.3258 11.8336 8.58808 9.81404 6.08646 6.74531C5.64917 7.49319 5.4004 8.36462 5.4004 9.29484C5.4004 11.0548 6.2966 12.6077 7.65636 13.5162C6.82505 13.4884 6.04319 13.2597 5.3587 12.8796V12.943C5.3587 15.3998 7.10783 17.4502 9.42711 17.9169C9.00218 18.0312 8.5541 18.0946 8.09054 18.0946C7.76299 18.0946 7.44622 18.0621 7.13563 18.0003C7.78149 20.0167 9.65426 21.4831 11.8731 21.5233C10.1379 22.883 7.94994 23.6912 5.57349 23.6912C5.16404 23.6912 4.76072 23.6664 4.36363 23.6216C6.60876 25.0633 9.27418 25.9039 12.1389 25.9039C21.4701 25.9039 26.5707 18.1749 26.5707 11.472L26.5537 10.8153C27.5503 10.1045 28.4125 9.21141 29.0909 8.19468Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                            </div>

                            </Affix>
                        </div>
                

                    <div className="w-full lg:w-3/5 px-4">
                        <p className="text-xl font-extrabold leading-7 pb-12 mb-12 border-b-3 border-indigo-900">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                            massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus.
                            Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
                        </p>
                        <h3 className="text-2xl font-extrabold mb-4">Header 1</h3>
                        <p className="text-xl font-extrabold leading-7 mb-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                            massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus.
                            Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
                        </p>
                        <div className="mb-10 p-8 border-l-3 border-indigo-500">
                            <p className="text-2xl font-extrabold leading-8 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                                massa. Eu dolor aliquet risus gravida nunc at feugiat consequat
                                purus.
                            </p>
                            <span className="text-xl text-gray-400 font-extrabold leading-7">
                                — John Doe, CEO &amp; Founder
                            </span>
                        </div>
                        <p className="text-xl font-extrabold leading-7 mb-12">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                            massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus.
                            Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
                        </p>
                        <img
                            className="block mb-6 w-full h-112 object-cover border-3 border-indigo-900 rounded-2xl shadow-lg"
                            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                            alt=""
                        />
                        <p className="text-xl font-extrabold text-gray-400 mb-8">
                            Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
                        </p>
                        <h3 className="text-2xl font-extrabold mb-4">Header 1</h3>
                        <p className="text-xl font-extrabold leading-7 mb-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                            massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus.
                            Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
                        </p>
                        <p className="text-xl font-extrabold leading-7 mb-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo
                            massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus.
                            Non massa enim vitae duis mattis. Vel in ultricies vel fringilla.
                        </p>
                        <p className="text-xl font-extrabold leading-7 mb-10">
                            Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas
                            sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor
                            rutrum lacus malesuada massa ornare et. Vulputate consectetur ac
                            ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim
                            massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac
                            elementum gravida cursus dis.
                        </p>
                        <ul className="mb-10">
                            <li className="text-xl font-extrabold leading-7 mb-2">
                                1. Lectus id duis vitae porttitor enim gravida morbi.
                            </li>
                            <li className="text-xl font-extrabold leading-7 mb-2">
                                2. Eu turpis posuere semper feugiat volutpat elit, ultrices
                                suspendisse. Auctor vel in vitae placerat.
                            </li>
                            <li className="text-xl font-extrabold leading-7">
                                3. Suspendisse maecenas ac donec scelerisque diam sed est duis
                                purus.
                            </li>
                        </ul>
                        <p className="text-xl font-extrabold leading-7">
                            Vestibulum placerat magna nulla, sit amet venenatis sapien consequat
                            ut. Cras pulvinar, lorem tristique pharetra finibus, dui erat finibus
                            orci, a vehicula arcu sapien id metus. Quisque quis lorem a sem
                            porttitor feugiat. Etiam quis congue est. Donec fermentum ac libero a
                            pretium. Nulla nisl sem, euismod ut eros vitae, egestas scelerisque
                            enim. Vivamus id pharetra massa. Nulla aliquet erat elit, a gravida
                            dui efficitur vel. Sed pulvinar diam sed neque ullamcorper semper.
                            Nulla elementum arcu lacus, quis porta nisl posuere varius. Quisque
                            tempus libero sed urna posuere hendrerit.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Post