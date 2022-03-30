import { CardClientsFeedback } from '../CardClientsFeedback'
import { SectionTitle } from '../SectionTitle'
import * as C from './styles'
import client1 from '../../assets/client1.jpg'
import client2 from '../../assets/client2.jpg'
import client3 from '../../assets/client3.jpg'


export function ClientsFeedback() {

    return (
        <C.Container id='feedback'>
            <SectionTitle>Avaliações dos Clientes</SectionTitle>
            <div>

                <CardClientsFeedback
                    img={client2}
                    name="José Luiz R."
                    // job="UX DESIGNER"
                    description='"Muito boa padaria, com variedade de pães e doces, além de pratos e lanches bem preparados e saborosos.
                    Frios fatiados bem fininhos, dão um sabor especial ao montar o sanduíche, no lanche de casa.
                    Tem mantido a qualidade e isso é muito importante."'/>
                <CardClientsFeedback
                    img={client1}
                    name="Adriane Baldo"
                    // job="Fashion Designer"
                    description='"
                        Muito bom! Atendentes muito simpáticos e atenciosos... Pãezinhos diversos e doces. Tudo delicioso. Acessível para cadeirantes."'/>
                <CardClientsFeedback
                    img={client3}
                    name="Bruna Lyandra"
                    // job="WEB DESIGNER"
                    description='"
                    Clássica padaria paulista com opções de café, almoço e jantar no buffet. A noite também tem buffet de sopas que pode comer a vontade.
                    Também vendem pizzas! O atendimento é bom, funcionários simpáticos. Recomendo um suco de morango com um bauruzinho ;)"'/>
            </div>
        </C.Container>
    )

}