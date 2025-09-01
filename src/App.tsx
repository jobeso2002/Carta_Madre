import { motion } from "framer-motion";
import imagen1 from "./assets/ma1.jpg";
import imagen2 from "./assets/ma2.jpg";
import imagen3 from "./assets/ma3.jpg";
import imagen4 from "./assets/ma4.jpg";
import imagen5 from "./assets/ma5.jpg";
import imagen6 from "./assets/ma6.jpg";

export default function CardMadre() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 relative p-4">
      {/* Imágenes lado izquierdo (solo en pantallas medianas en adelante) */}
      <div className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 flex-col gap-6">
        <img
          src={imagen1}
          alt="Madre"
          className="w-40 h-40 md:w-64 md:h-64 object-contain"
        />
        <img
          src={imagen2}
          alt="Madre"
          className="w-40 h-40 md:w-64 md:h-64 object-contain"
        />
        <img
          src={imagen3}
          alt="Madre"
          className="w-40 h-40 md:w-64 md:h-64 object-contain"
        />
      </div>

      {/* Imágenes lado derecho (solo en pantallas medianas en adelante) */}
      <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 flex-col gap-6">
        <img
          src={imagen4}
          alt="Madre"
          className="w-40 h-40 md:w-64 md:h-64 object-contain"
        />
        <img
          src={imagen5}
          alt="Madre"
          className="w-40 h-40 md:w-64 md:h-64 object-contain"
        />
        <img
          src={imagen6}
          alt="Madre"
          className="w-40 h-40 md:w-64 md:h-64 object-contain"
        />
      </div>

      {/* Tarjeta central */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white shadow-2xl rounded-2xl max-w-3xl w-full p-6 md:p-8 text-center"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-pink-700 mb-6">
          💖 Para mi madre, María Isabel 💖
        </h1>

        <p className="text-gray-700 leading-relaxed text-base md:text-lg text-justify">
          Querida mamá, <br />
          <br /> Hoy quiero expresarte lo mucho que significas para mí. Eres una
          mujer fuerte, valiente y llena de amor. Desde muy joven trabajaste
          incansablemente junto a papá para darnos lo que tú no pudiste tener, y
          aunque muchas veces no estabas presente físicamente por tus
          responsabilidades, tus consejos y tu ejemplo siempre nos han
          acompañado. <br />
          <br /> Eres el corazón y el motor de nuestra familia. Te admiro por tu
          carácter decidido, por no rendirte nunca, por levantarte cada día a
          pesar del cansancio y el estrés que enfrentas en tu trabajo. Aunque a
          veces no digas cómo te sientes, nosotros lo sabemos, y aun así sigues
          firme porque piensas en nosotros y en nuestro futuro. <br />
          <br /> También me conmueve tu generosidad. No solo cuidas de nosotros,
          sino que siempre estás pendiente de tus padres, de tus hermanos y de
          cualquiera que necesite ayuda. Lo haces sin esperar nada a cambio,
          porque así es tu corazón: noble, bondadoso y dispuesto a dar. <br />
          <br /> Mamá, quiero que sepas que te valoro, que agradezco todo lo que
          haces y que, aunque ahora no pueda darte cosas materiales, te entrego
          estas palabras desde lo más profundo de mi corazón. Espero que al
          leerlas te llenes de alegría y sepas cuánto te amamos y lo importante
          que eres para nuestras vidas. <br />
          <br /> Con todo mi cariño, <br />
          <span className="font-semibold text-pink-600">
            Tu hijo, José Alfredo 💕
          </span>
        </p>
      </motion.div>

      {/* Galería abajo (solo en móviles y tablets) */}
      <div className="flex md:hidden flex-wrap justify-center gap-4 mt-6">
        {[imagen1, imagen2, imagen3, imagen4, imagen5, imagen6].map(
          (img, i) => (
            <img
              key={i}
              src={img}
              alt="Madre"
              className="w-32 h-32 sm:w-40 sm:h-40 object-contain rounded-xl shadow-md"
            />
          )
        )}
      </div>
    </div>
  );
}
