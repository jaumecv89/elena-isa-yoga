import wave from "../assets/wave_footer.svg"
import image from "../assets/image00002.jpeg"

const About = () => {
    return <section id="about" className="w-full select-none bg-background">
        <div className="container mx-auto py-28">
            <div className="flex flex-col lg:flex-row gap-16">
                <div className="w-[50%]">
                    <img src={image} alt="Sobre mí imágen" className="rounded-lg scale-2" />
                </div>
                <div className="flex flex-col w-[50%]">
                    <h2>
                        ¿Quieres tiempo para respirar?
                    </h2>
                    <h1>
                        El enfoque en la fuerza, el equilibrio y la flexibilidad.
                    </h1>
                    <p className="pb-6">
                        A través de la práctica consciente de posturas y la conexión con la respiración, descubrimos nuestra fortaleza interna, encontramos equilibrio entre cuerpo y mente, y desarrollamos una flexibilidad que trasciende lo físico.
                    </p>
                    <p>
                        Únete a mí en este viaje transformador hacia una vida más equilibrada y plena.
                    </p>
                </div>
            </div>
        </div>
        <img src={wave} alt="Wave transition" />
    </section>
}

export default About