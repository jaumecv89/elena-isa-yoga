import { Link } from "react-scroll"
import image from "../assets/about-image2.jpeg"
import wave1 from "../assets/wave-1.svg"
import wave2 from "../assets/wave-2.svg"

const About = () => {

    return <section id="about" className="w-full select-none">
        <div className="bg-background">
            <div className="container mx-auto py-28 text-center">
                <div className="flex flex-col tablet:flex-row gap-16 mb-28">
                    <div className="flex h-[30em] tablet:h-auto tablet:w-[50%] bg-about-image bg-no-repeat bg-cover bg-center rounded-lg" />
                    <div className="flex flex-col tablet:w-[50%] tablet:text-left">
                        <span className="heading-title">
                            ¿Quieres tiempo para respirar?
                        </span>
                        <h2 className="pb-5">
                            El enfoque en la fuerza, el equilibrio y la flexibilidad.
                        </h2>
                        <p>
                            A través de la práctica consciente de posturas y la conexión con la respiración, descubrimos nuestra fortaleza interna, encontramos equilibrio entre cuerpo y mente, y desarrollamos una flexibilidad que trasciende lo físico.
                        </p>
                        <p className="mb-0">
                            Únete a mí en este viaje transformador hacia una vida más equilibrada y plena.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-center text-secondary">
                    <span className="font-primary italic text-[22px] tablet:text-[28px] desktop:text-[40px] leading-[1.2em] tablet:w-[80%] desktop:w-[70%]">"El verdadero yoga no es sobre la forma del cuerpo, sino sobre la forma de tu vida".</span>
                    <span className="tablet:text-lg desktop:text-xl">- Aadil Palkhivala</span>
                </div>
            </div>
        </div>
        <img src={wave1} alt="Wave transition" className="relative top-[-5px]" />
        <div className="bg-white">
            <div className="container mx-auto py-28 tablet:pb-0 text-center">
                <div className="flex flex-col items-center">
                    <span className="heading-title">
                        Mi historia
                    </span>
                    <h2 className="pb-5">
                        Un viaje a través del yoga.
                    </h2>
                    <p className="tablet:w-[60%] mb-10">
                        Hace años, empecé mi viaje en el yoga, buscando equilibrio y paz interior. Descubrí la magia de conectar mente, cuerpo y espíritu, encontrando calma y serenidad en cada postura. El yoga se convirtió en mi refugio, guiándome en momentos difíciles y enseñándome a crecer. Ahora, como profesora, deseo inspirar a otros en su propio camino de autodescubrimiento.
                    </p>
                    <Link
                        to="classes"
                        smooth="true"
                        className="btn-primary mb-20"
                    >
                        Descubre mis clases
                    </Link>
                    <div className="flex flex-col tablet:w-[85%] items-center">
                        <img
                            src={image}
                            alt="Clase de yoga"
                            className="rounded-xl"
                        />
                        <div className="relative tablet:w-[60%] tablet:top-[-150px] pt-10 tablet:p-10 tablet:rounded-lg tablet:shadow-lg tablet:bg-background">
                            <h2>Filosofía</h2>
                            <p>
                                Mi filosofía en el yoga se basa en cultivar la conexión profunda entre el cuerpo, la mente y el espíritu. Creo en honrar y respetar nuestro ser en su totalidad, y en encontrar equilibrio y armonía a través de la práctica consciente. <br /><br /> Para mí, el yoga es una herramienta poderosa para el autodescubrimiento, la transformación y el crecimiento interior. Es un camino de amor propio, aceptación y gratitud, que nos invita a vivir plenamente en el presente y a encontrar la paz en nuestro interior.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src={wave2} alt="Wave transition" />
    </section>
}

export default About
