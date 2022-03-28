import { CardPricing } from '../CardPricing'
import { SectionTitle } from '../SectionTitle'
import pricing1 from '../../assets/pricing1.jpg'
import pricing2 from '../../assets/pricing2.jpg'
import pricing3 from '../../assets/pricing3.jpg'
import * as C from './styles'

export function OurPricing() {
    return (
        <C.Container>
            <SectionTitle>Our Pricing</SectionTitle>
            <C.Cards>
                <CardPricing
                    value={39}
                    currency="Silver"
                    items={['Crumpets', 'Muffins', 'Pancakes', 'Croissants', 'Cupcakes']}
                    buttonBgColor="#FFF" buttonHover="#d9d9d9" buttonTextColor="#000"
                    backgroundImage={pricing1}
                    />

                <CardPricing
                    value={49}
                    currency="Gold"
                    items={['Crumpets', 'Muffins', 'Pancakes', 'Croissants', 'Donuts']}
                    buttonBgColor="var(--blue)" buttonHover="var(--blue-hover)" buttonTextColor="var(--white)"
                    backgroundImage={pricing2}
                    />

                <CardPricing
                    value={59}
                    currency="Diamond"
                    items={['Crumpets', 'Muffins', 'Pancakes', 'Croissants', 'Salty Pastry']}
                    buttonBgColor="#FFF" buttonHover="#d9d9d9" buttonTextColor="#000"
                    backgroundImage={pricing3}
                    />
            </C.Cards>
        </C.Container>
    )
}