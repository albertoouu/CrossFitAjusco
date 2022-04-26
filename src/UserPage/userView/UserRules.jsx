import * as React from "react";
import { useAuth } from "../../Context/authContext";


export const UserRules = () => {
  // Se declara una variable para guardar el id del usuario para
  const { user, users } = useAuth();
  console.log(user.email)
  //console.log(users[0])

  const userData = users.filter( (us) => {
    if (us.email === user.email) return true
  })
  console.log(userData[0])

  //configuración de los hoocks para
  const uD = userData[0]

  //Función para actualizar datos 
  
  return (
    
    <>        
      <div key={uD.id}>
        <h4>{uD.name} {uD.last_name}</h4>
        <h5>
            ESTE ES TU REGLAMENTO DE USUARIO 
        </h5>
          <p>
            Este reglamento está diseñado para informarle acerca de los servicios que proporciona CROSS F T AJUSCO, así como las reglas que deberá de respetar al asistir y hacer uso de las instalaciones, equipo y/o actividades de CROSS F T AJUSCO; ello con el objeto de proporcionarle un mejor servicio y lograr una convivencia armónica, agradable y de respeto para todos los que asisten. Por lo que el usuario se obliga a respetar las disposiciones contenidas en el presente reglamento:
          </p>
        <h6>
           PRIMERA.- CUMPLIMIENTO     
        </h6>
          <p>
          El presente Reglamento aplica para todo usuario de CROSS F T AJUSCO, el cual deberá observar y cumplir el mismo.
          </p>
        <h6>
          SEGUNDA.- BENEFICIOS DE USUARIOS ACTIVOS.    
        </h6>
          <p>
          La inscripción y el pago puntual de la mensualidad correspondiente de acuerdo a la membresía contratada, ofrece a los usuarios los siguientes beneficios:
            <tr>1. Uso de los equipos y de las instalaciones generales, durante los horarios de operación del  CROSS F T AJUSCO con excepción de las áreas privadas y de servicio, cuyo acceso queda excluido por seguridad de los usuarios.</tr> 
            <tr>2. Acceso a las clases grupales; las cuales podrán cancelarse o modificarse con o sin previo aviso, en caso de falta del instructor que las imparte, y sin responsabilidad para CROSS F T AJUSCO.</tr>
            <tr>3. Acceso y uso del baño.</tr>
          </p>
        <h6>
          SEGUNDA.- BENEFICIOS DE USUARIOS ACTIVOS.    
        </h6>
          <p>
          El presente Reglamento aplica para todo usuario de CROSS F T AJUSCO, el cual deberá observar y cumplir el mismo.
          </p> 
        <h6> 
          TERCERA.- MEMBRESIA.
        </h6> 
          <p> 
          MEMBRESIA. CROSS F T AJUSCO.- Bajo la membresía únicamente una persona física, hombre o mujer, mayor de ocho años, podrá hacer uso de las instalaciones y equipo en el horario  establecido.
          </p>
        <h6>
          CUARTA.- EDAD MÍNIMA. 
        </h6> 
          <p> 
          La edad mínima para ser usuario es 8 años siempre acompañados por alguno de sus padres o tutores. Los menores de 18 años de edad deberán contar con la autorización de sus padres o tutores para ingresar y hacer uso de las instalaciones. Asimismo, los padres o tutores del menor de edad, deberán haber aceptado y firmado de que leyeron y están de acuerdo con el presente Reglamento, y deslindando a CROSS F T AJUSCO de cualquier responsabilidad sobre la salud del menor de edad o por cualquier lesión que pudiera sufrir el mismo dentro de las instalaciones. 
          </p> 
        <h6> 
          QUINTA.- ACEPTACIÓN DE USUARIO.
        </h6>
          <p>
           Para ser aceptados por CROSS F T AJUSCO como usuario, los solicitantes recibirán por correo electrónico el presente reglamento así como el historial médico que deben de informar. También deben firmar que leyeron, entendieron y aceptan el presente reglamento.
           La solicitud y documentos serán revisados por CROSS F T AJUSCO, quien en caso de que advierta que la información o documentación proporcionada por el usuario es falsa o apócrifa, podrá rechazar la solicitud. El rechazo de la solicitud por parte de CROSS F T AJUSCO, será inapelable por el usuario. 
          </p> 
        <h6>         
          SEXTA.- CUOTAS.
        </h6>
          <p> 
            CROSS F T AJUSCO, fijará las cuotas que estime adecuadas para la  mensualidad, así como para cualquier otro servicio prestado a los usuarios; y las podrá modificar libremente atendiendo a las necesidades que se presenten en el CROSS F T AJUSCO, para conservar la misma calidad y nivel en las instalaciones, equipos y servicios puestos a disposición de los usuarios. Las cuotas y precios no estarán sujetos a convenio; cualquier modificación a los mismos será publicada por CROSS F T AJUSCO en un lugar visible para los usuarios. 
            La obligación de pagar la cuota correspondiente no depende de la disponibilidad de las instalaciones o equipo que se podrá afectar por reparaciones, mantenimiento, u otros eventos no especificados.
            CROSS F T AJUSCO no reembolsará a los usuarios cantidad alguna pagada por concepto de cuotas.
            </p>
            <h6>
            SÉPTIMA.- SERVICIOS ADICIONALES O ESPECIALES.
            </h6>
            <p>
            Los servicios adicionales, especiales o personales contratados por los usuarios dentro del CROSS F T AJUSCO, tales como instructor personal, entre otros; no se encuentran incluidos en las cuotas mensuales, por lo que cargos que se generen por dichos conceptos deberán ser pagados de forma independiente al CROSS F T AJUSCO por los usuarios. 
            En el caso de que se realice cualquier pago a los colaboradores de CROSS F T AJUSCO de manera directa, se tomará como falta al reglamento y se dará de baja tanto al colaborador como al socio o miembro.
            CROSS F T AJUSCO podrá agregar o suprimir servicios o actividades especiales, con o sin cargos adicionales para los usuarios.
            </p>
            <h6>
            OCTAVA.- HORARIO.
            </h6>
            <p>
            Los usuarios podrán utilizar las instalaciones y el equipo en los siguientes horarios:
            </p>
            <th>•	Lunes a  viernes:  
            </th>
                <tr>       
                    De 06:00 a 06:50
                </tr>   
                <tr>   
    	            De 07:00 a 08:00
                </tr>       
                <tr>
                     De 08:10 a 09:10.
                </tr>        
                <tr>   
				     De 18:00 a 19:00
                </tr>   
				     De 19:10 a 20:10
                <tr>          
                     De 20:20 a 21:20
                </tr>        
                <th>
                    •	Sábados y domingos:
                </th>
                <p>
                 Actividades  y/o servicios especiales (eventos que no están incluidos en la cuota mensual)
                 </p>        
                       <h6>
                           TOLERANCIA.
                           </h6> 
                <p>
                Las clases comienzan en punto. Por lo que los alumnos deben llegar antes y prepararse en el tiempo entre clases. De la hora inicio tienen 5 minutos de tolerancia para entrar, mismos que se penalizaran haciendo 5 burpees por cada asistente presente en esa clase. Después de esos 5 minutos se negara el acceso a la clase. 
                CROSS F T AJUSCO valorará los casos extraordinarios.

                CROSS F T AJUSCO se reserva el derecho de modificar el horario de apertura, así como el de señalar los días en que el CROSS F T AJUSCO permanecerá cerrado, así como de la suspensión temporal del otorgamiento de algún servicio por mantenimiento o reparación. 

                CROSS F T AJUSCO tendrá disponible un calendario de días festivos en los que abrirá en horarios diferentes o permanecerá cerrado, el cual se tendrá disponible al inicio de cada mes CROSS F T AJUSCO podrá modificarlo libremente durante el año si es necesario.
                En el supuesto de que se presentara un evento o caso fortuito que obligara a CROSS F T AJUSCO a mantener cerradas sus instalaciones o a no prestar el servicio en su horario habitual descrito en la presente cláusula, durante un periodo indeterminado, dicho cierre total o parcial no dará lugar a la devolución de la parte proporcional de las cuotas o a las cuotas pagadas por mensualidad o por cualquier otra actividad. 
                El personal del CROSS F T AJUSCO tiene derecho a 7 días de vacaciones al año que podrá tomar juntos o parcialmente. Durante esos días se publicara en el grupo de whatsapp entrenamientos para realizar en su casa o en el exterior sin necesidad de equipo especial. 
                </p>
                <h6>
                NOVENA.- PAGO DE CUOTAS MENSUALES.
                </h6>
                <p>
                El pago de la mensualidad será de acuerdo a la lista de precios vigentes y de acuerdo a las condiciones que aplican.
                El usuario, una vez activo, dentro de los 5 (cinco) primeros días naturales de cada mes deberá realizar el pago de la mensualidad; teniendo acceso durante dicho periodo a las instalaciones. Una vez concluido éste período, no se permitirá el acceso al usuario, sin haber realizado el pago de la mensualidad.
                La mensualidad es por periodos completos, de acuerdo a la lista de precios vigente.
                </p>
                <h6>
                DÉCIMA.- CUOTA DE INSCRIPCION 
                </h6>
                <p>
                No se cobra cuota de inscripción.
                </p>
                <p>
                USO DE INSTALACIONES Y EQUIPO.
                Todas las instalaciones y equipos del CROSS F T AJUSCO deberán ser utilizados de manera adecuada por los usuarios conforme a la naturaleza de los mismos. En caso de que se descomponga o se dañe el equipo o las instalaciones, por el mal uso que el usuario haga a los mismos, el usuario se hará responsable de los gastos de reparación o reposición de los mismos. 
                El uso de las instalaciones y equipos por parte de los usuarios será bajo su propia responsabilidad y riesgo, por lo que en este acto el usuario libera a CROSS F T AJUSCO de cualquier lesión, enfermedad, accidente, daño o perjuicio que se llegue a generar por el uso que de las instalaciones y equipos haga el usuario.
                La falta de cumplimiento de estas reglas será causa suficiente para que CROSS F T AJUSCO dé por terminada la membresía.
                </p>
                <h6>
                DÉCIMA PRIMERA.- VALORES.
                </h6>
                <p>
                CROSS F T AJUSCO recomienda a los usuarios entrar al centro sin valores, joyas u objetos costosos. CROSS F T AJUSCO no se hará responsable por la pérdida o deterioro de los bienes de los usuarios.
                </p>
                <h6>
                DÉCIMA SEGUNDA.- ENFERMEDADES.
                </h6>
                <p>
                Cuando un usuario tenga enfermedades infecciosas, contagiosas o que por alguna razón puedan causar lesiones o contagiar a terceros, se abstendrá de hacer uso de las instalaciones y equipo, a fin de evitar contagios o daños a terceros y notificará a CROSS F T AJUSCO de inmediato de su padecimiento, para que CROSS F T AJUSCO tome las medidas pertinentes. 
                El incumplimiento por parte de un usuario a lo previsto en esta cláusula, hará que CROSS F T AJUSCO pueda dar por terminada en forma definitiva su activación y el usuario será responsable de los daños y perjuicios que se ocasionen a terceros.
                </p>
                <h6>
                DÉCIMA TERCERA.- REALIZACIÓN DE ACTIVIDADES FÍSICAS.
                </h6>
                <p>
                Cualquier usuario mayor de edad y en el caso de los menores de 18 años, sus padres o tutores, se harán responsables de la realización de actividades físicas que los usuarios efectúen en las instalaciones de CROSS F T AJUSCO en el entendido de que es bajo su propio riesgo la realización de las mismas, o de que se realicen cuando la condición de salud del usuario no sea la apropiada para este tipo de actividades. Por lo que en este acto, el usuario libera a CROSS F T AJUSCO de cualquier responsabilidad, renunciando a cualquier acción que pudiera ejercer en contra de CROSS F T AJUSCO; ya que se reitera es bajo riesgo del usuario la realización de las mismas. 
                </p>
                <h6>
                DÉCIMA CUARTA.- NO ACOMPAÑANTES.
                </h6>
                <p>
                Por seguridad, ningún usuario podrá entrar en las instalaciones con acompañantes que no sean usuarios; tampoco se permitirá el ingreso con animales.
                </p>
                <h6>
                DÉCIMA QUINTA.- OBLIGACIONES DE NO HACER.
                </h6>
                <p>
                Los usuarios se obligan a abstenerse de:
                </p>
                <tr>
                1. Circular por las áreas comunes del CROSS F T vestidos en forma no propia o adecuada.
                </tr>
                <tr>
                2. Asistir al CROSS F T AJUSCO, bajo los efectos de bebidas alcohólicas, tóxicas, enervantes o cualquier droga. En caso de que un usuario se presente alcoholizado o bajo los influjos de una droga, CROSS F T AJUSCO  le negará el ingreso a las instalaciones.
                </tr>
                <tr>
                3. Consumir, introducir o vender bebidas alcohólicas, sustancias tóxicas, enervantes, anabólicos, esteroides o cualquier tipo de droga o sustancia ilícita.
                </tr>
                <tr>
                4. Tomar o introducir alimentos enfocados a compensar el desgaste por actividad física o bebidas diferentes al agua natural o a los líquidos hidratantes, en las instalaciones.
                </tr>
                <tr>
                5. Introducir vasos, objetos de vidrio, elementos punzocortantes, armas.
                </tr>
                <tr>
                6. Fumar dentro de las instalaciones.
                </tr>
                <tr>
                7. Apartar espacios dentro de las instalaciones que impidan que algún usuario los utilice cuando no están ocupados.
                </tr>
                <tr>
                8. Tomar parte en los entrenamientos o actividades deportivas con goma de mascar, caramelos u objetos ajenos a los ortopédicos y/o estéticos.
                </tr>
                <tr>
                9.  Realizar apuestas dentro de las instalaciones.
                </tr>
                <tr>
                10. Realizar cualquier tipo de actividades que pudieran constituir una infracción administrativa o un delito.
                </tr>
                <tr>
                11. Ser irrespetuoso o comportarse inadecuadamente con otros usuarios o con personal de servicio.
                </tr>
                <tr>
                12. Conducirse con falta de probidad o de forma violenta dentro de las instalaciones.
                </tr>     
      </div>          
    </>
  )}; 


