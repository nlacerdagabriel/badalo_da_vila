import { CardClientsFeedback } from '../CardClientsFeedback'
import { SectionTitle } from '../SectionTitle'
import * as C from './styles'
// import client1 from '../../assets/client1.jpg'
// import client2 from '../../assets/client2.jpg'
// import client3 from '../../assets/client3.jpg'


export function ClientsFeedback() {

    return (
        <C.Container id='feedback'>
            <SectionTitle>Avaliações dos Clientes</SectionTitle>
            <div>

                <CardClientsFeedback
                    // img={client1}
                    name="Jessica Trindade"
                    // job="Fashion Designer"
                    description='"
                    Porção extremamente saborosa, e peguei promo de cerveja... Voltarei mais vezes com certeza!!!
                    "'/>
                    <CardClientsFeedback
                        // img={client2}
                        name="Artur Tokimatsu"
                        // job="UX DESIGNER"
                        description='"Comida por quilograma de boa qualidade. Funcionários atenciosos.
                        Vale a pena conferir o X-Tudo do chapeiro Marcão. Café do Romário. Cachaça de
                        salinas servida pela Mara. Gerente Edmilson sempre atencioso."'/>
                <CardClientsFeedback
                    // img={client3}
                    name="Marcinha"
                    // job="WEB DESIGNER"
                    description='"
                    Lanche saboroso feito com muito capricho pelo Marcão Chapeiro, que é uma simpatia."'/>
            </div>
        </C.Container>
    )

}