import { CardClientsFeedback } from '../CardClientsFeedback'
import { SectionTitle } from '../SectionTitle'
import * as C from './styles'
import client1 from '../../assets/client1.jpg'
import client2 from '../../assets/client2.jpg'
import client3 from '../../assets/client3.jpg'


export function ClientsFeedback() {

    return (
        <C.Container>
            <SectionTitle>Client's Feedback</SectionTitle>
            <div>
                <CardClientsFeedback
                    img={client1}
                    name="Aash Aron"
                    job="Fashion Designer"
                    description='"A cookie is a baked or cooked
                food that is typically small, flat and sweet.
                It usually contains flour, sugar and some type
                of oil or fat."'/>

                <CardClientsFeedback
                    img={client2}
                    name="Jeff Sied"
                    job="UX DESIGNER"
                    description='"United States, crunchy cookies are
                    called biscuits Many Canadians also use this term.
                    Chewier biscuits are sometimes called cookies."'/>

                <CardClientsFeedback
                    img={client3}
                    name="Mark Otto"
                    job="WEB DESIGNER"
                    description='"Biscuit or cookie variants include
                    sandwich biscuits, such as custard creams, Jammie
                        Dodgers, Bourbons and Oreos, with marshmallow or jam."'/>
            </div>
        </C.Container>
    )

}