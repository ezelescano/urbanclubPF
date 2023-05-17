import React from "react";
import styles from "./TermsAndConditions.module.css"; // Archivo de estilos CSS Modules para el componente

const TermsAndConditions = () => {
  return (
    <div className={styles.terms}>
      <div className={styles.termsContainer}>
        <h2>Términos y Condiciones de urbanClub!</h2>
        <div className={styles.termsContent}>
          <h2>1. Uso del Sitio Web</h2>
          <h1>
            El uso de este sitio web está sujeto a las siguientes condiciones:
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            aliquet, diam nec fermentum fermentum, est orci aliquet lectus, vel
            dapibus dolor dui eu mauris.
          </h1>

          <h2>2. Registro y Cuenta de Usuario</h2>
          <h1>
            Al registrarte en nuestro sitio web, aceptas proporcionar
            información precisa y actualizada. Eres responsable de mantener la
            confidencialidad de tu cuenta y contraseña, y aceptas ser
            responsable de todas las actividades que ocurran bajo tu cuenta.
          </h1>

          <h2>3. Propiedad Intelectual</h2>
          <h1>
            Este sitio web y su contenido son propiedad nuestra o de nuestros
            licenciantes. Queda prohibida la reproducción, distribución,
            exhibición, transmisión o cualquier otro uso no autorizado del
            contenido sin nuestro permiso previo por escrito.
          </h1>

          <h2>4. Enlaces a Terceros</h2>
          <h1>
            Nuestro sitio web puede incluir enlaces a sitios web de terceros.
            Estos enlaces se proporcionan para tu conveniencia y para
            proporcionar información adicional. No tenemos control sobre el
            contenido de los sitios web de terceros y no somos responsables de
            su contenido. El uso de cualquier sitio web enlazado es bajo tu
            propio riesgo.
          </h1>

          <h2>5. Limitación de Responsabilidad</h2>
          <h1>
            En la medida máxima permitida por la ley, no seremos responsables
            por cualquier pérdida o daño directo, indirecto, incidental,
            consecuente o especial que resulte del uso o la imposibilidad de uso
            de este sitio web.
          </h1>

          <h2>6. Ley Aplicable</h2>
          <h1>
            Estos términos y condiciones se regirán e interpretarán de acuerdo
            con las leyes vigentes. Cualquier disputa relacionada con estos
            términos y condiciones estará sujeta a la jurisdicción exclusiva de
            los tribunales competentes.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
