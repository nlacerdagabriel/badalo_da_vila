import { CardPricing } from '../CardPricing'
import { SectionTitle } from '../SectionTitle'
import pricing1 from '../../assets/pricing1.jpg'
import pricing2 from '../../assets/pricing2.jpg'
import pricing3 from '../../assets/pricing3.jpg'
import * as C from './styles'

export function OurPricing() {
    return (
        <C.Container>
            <SectionTitle>Pratos Principais</SectionTitle>
            <C.Cards>
                <CardPricing
                    value={39}
                    name="Frango à parmegiana"
                    items={['Crumpets', 'Muffins', 'Pancakes', 'Croissants', 'Cupcakes']}
                    buttonBgColor="#FFF" buttonHover="#d9d9d9" buttonTextColor="#000"
                    backgroundImage={pricing1}
                />
                <CardPricing
                    value={39}
                    name="Frango à parmegiana"
                    items={['Crumpets', 'Muffins', 'Pancakes', 'Croissants', 'Cupcakes']}
                    buttonBgColor="#FFF" buttonHover="#d9d9d9" buttonTextColor="#000"
                    backgroundImage={pricing1}
                />
                <CardPricing
                    value={39}
                    name="Frango à parmegiana"
                    items={['Crumpets', 'Muffins', 'Pancakes', 'Croissants', 'Cupcakes']}
                    buttonBgColor="#FFF" buttonHover="#d9d9d9" buttonTextColor="#000"
                    backgroundImage={pricing1}
                />
            </C.Cards>
        </C.Container>
    )
}