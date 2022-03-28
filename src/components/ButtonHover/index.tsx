import * as C from './styles'
import { RiShoppingBasketLine } from 'react-icons/ri'


type ButtonHoverProps = {
    content: string;
    primaryColor: string;
    hoverColor: string;
    textColor: string;
    hasIcon?: boolean;
}

export function ButtonHover({ content, primaryColor, hoverColor, textColor, hasIcon }: ButtonHoverProps) {
    return (
        <C.Button primaryColor={primaryColor} hoverColor={hoverColor} textColor={textColor}>
            {content}
            {hasIcon && <span><RiShoppingBasketLine size={20} /></span>}
        </C.Button>
    )
}