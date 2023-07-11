import wave from "../assets/wave_footer.svg"

const About = () => {

    return <section id="about" className="w-full select-none bg-background">
        <div className="container mx-auto py-28">
            <div className="flex flex-col lg:flex-row gap-16">
                <div className="flex h-[30em] lg:h-auto lg:w-[50%] bg-about-image bg-no-repeat bg-cover bg-center rounded-lg" />
                <div className="flex flex-col lg:w-[50%]">
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