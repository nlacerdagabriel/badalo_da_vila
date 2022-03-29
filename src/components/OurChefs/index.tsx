import { CardChef } from '../CardChef'
import * as C from './styles'
import chef1 from '../../assets/chef1.jpg'
import chef2 from '../../assets/chef2.jpg'
import chef3 from '../../assets/chef3.jpg'
import { SectionTitle } from '../SectionTitle'

export function OurChefs() {
    return (
        <C.Container>
            <SectionTitle>Nossa Equipe</SectionTitle>
            <C.ContainerCards>
                <CardChef img={chef1} name="Tom Hardy" cargo="Owner"/>
                <CardChef img={chef2} name="Mark Otto" cargo="Senior Baker"/>
                <CardChef img={chef3} name="Andrew Simon" cargo="Junior Baker"/>
            </C.ContainerCards>
        </C.Container>
    )
}