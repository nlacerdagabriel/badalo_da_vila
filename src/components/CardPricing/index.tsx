import * as C from './styles'
import { FaDollarSign } from 'react-icons/fa'
import { MdDone } from 'react-icons/md'
import { ButtonHover } from '../ButtonHover'

type CardPricingProps = {
    value: number;
    name: string;
    items: string[];
    buttonBgColor: string;
    buttonHover: string;
    buttonTextColor: string;
    backgroundImage: string;
}

export function CardPricing({ value, name, items, buttonBgColor, buttonHover, buttonTextColor, backgroundImage }: CardPricingProps) {
    return (
        <C.Container>
            <C.Header style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div>
                    {/* <C.Price>
                        <div>
                            <FaDollarSign color="var(--blue)" />
                            <h3>{value}</h3>
                        </div>
                        <p>{currency}</p>
                    </C.Price> */}
                    <C.Plan>
                        {name}
                    </C.Plan>
                </div>
            </C.Header>

            <C.Body>
                <ul>
                    {items.map((it) => (
                        <li>{it}<span><MdDone /></span></li>
                    ))}
                </ul>
                {/* <ButtonHover hasIcon={true} content='Purchase now' textColor={buttonTextColor} primaryColor={buttonBgColor} hoverColor={buttonHover} /> */}
            </C.Body>
        </C.Container>
    )
}