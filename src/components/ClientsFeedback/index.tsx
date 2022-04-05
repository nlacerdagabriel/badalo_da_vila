import { CardClientsFeedback } from '../CardClientsFeedback'
import { SectionTitle } from '../SectionTitle'
import * as C from './styles'
import client1 from '../../assets/client1.jpg'
import client2 from '../../assets/client2.jpg'
import client3 from '../../assets/client3.jpg'


export function ClientsFeedback() {

    return (
        <C.Container>
            <SectionTitle>Avaliações dos Clientes</SectionTitle>
            <div>
                <CardClientsFeedback
                    img={client1}
                    name="Nome do Cliente"
                    // job="Fashion Designer"
                    description='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et volutpat justo.
                    Pellentesque sit amet dolor orci. Class taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."'/>
                <CardClientsFeedback
                    img={client1}
                    name="Nome do Cliente"
                    // job="Fashion Designer"
                    description='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et volutpat justo.
                    Pellentesque sit amet dolor orci. Class taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."'/>
                <CardClientsFeedback
                    img={client1}
                    name="Nome do Cliente"
                    // job="Fashion Designer"
                    description='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et volutpat justo.
                    Pellentesque sit amet dolor orci. Class taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."'/>
            </div>
        </C.Container>
    )

}