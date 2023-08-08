import image2 from "../assets/classes-image-2.webp"
import image3 from "../assets/classes-image-3.webp"
import image4 from "../assets/classes-image-4.webp"
import wave from "../assets/wave-4.svg"
import Collaborate from "../components/Collaborate"
import Image from "../components/Image"
import Testimonials from "../components/Testimonials"
import { ClasesText } from "../utils/Texts"

const Classes = () => {

    return (
        <section id="classes" className="select-none">
            <div className="container mx-auto py-28 text-center">
                <div className="flex flex-col items-center mb-12">
                    <span className="heading-title">{ClasesText.heading}</span>
                    <h2 className="pb-5">{ClasesText.title}</h2>
                    <p className="tablet:w-[90%] desktop:w-[70%]">{ClasesText.paragraph}</p>
                </div>
                <div className="flex flex-col gap-14 items-center">
                    <div className="flex flex-col tablet:flex-row w-full relative items-center justify-center">
                        <div
                            className="w-full tablet:w-[40%] h-[50vh] desktop:h-[60vh] mb-10 tablet:mb-0 bg-cover bg-no-repeat rounded-lg relative tablet:right-[-5%]"
                            style={{ backgroundImage: `url(${image4})` }}
                        />
                        <div className="flex flex-col tablet:w-[40%] desktop:w-[30%] tablet:text-left bg-background tablet:p-10 tablet:left-[-5%] relative">
                            <h2>{ClasesText.class1Title}</h2>
                            <p className="m-0">{ClasesText.class1Text}</p>
                        </div>
                    </div>
                    <div className="flex flex-col tablet:flex-row w-full relative items-center justify-center">
                        <div
                            className="tablet:hidden w-full h-[50vh] mb-10 bg-cover bg-center bg-no-repeat rounded-lg"
                            style={{ backgroundImage: `url(${image3})` }}
                        />
                        <div className="flex flex-col tablet:w-[40%] desktop:w-[30%] tablet:text-right bg-background tablet:p-10 tablet:left-[5%] relative z-10">
                            <h2>{ClasesText.class2Title}</h2>
                            <p className="m-0">{ClasesText.class2Text}</p>
                        </div>
                        <div
                            className="hidden tablet:flex w-[40%] h-[50vh] desktop:h-[60vh] mb-0 bg-cover bg-center bg-no-repeat rounded-lg relative right-[5%]"
                            style={{ backgroundImage: `url(${image3})` }}
                        />
                    </div>
                    <div className="flex flex-col tablet:flex-row w-full relative items-center justify-center">
                        <div
                            className="w-full tablet:w-[40%] h-[50vh] desktop:h-[60vh] mb-10 tablet:mb-0 bg-cover bg-no-repeat rounded-lg relative tablet:right-[-5%]"
                            style={{ backgroundImage: `url(${image2})` }}
                        />
                        <div className="flex flex-col tablet:w-[40%] desktop:w-[30%] tablet:text-left bg-background tablet:p-10 tablet:left-[-5%] relative">
                            <h2>{ClasesText.class3Title}</h2>
                            <p className="m-0">{ClasesText.class3Text}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Collaborate />
            <div className="container mx-auto py-28 text-center">
                <div className="flex flex-col items-center">
                    <h2 className="pb-5">{ClasesText.testimonials}</h2>
                </div>
                <Testimonials />
            </div>
            <Image
                src={wave}
                fallback={wave}
                type="image/svg"
                alt="Bottom page transition"
                className="relative w-full h-full bottom-[-1px]"
            />
        </section>
    )
}

export default Classes
