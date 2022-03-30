import * as C from './styles'
import { AiOutlineArrowUp } from 'react-icons/ai'

export function ButtonToTop() {
    return (
        <a href="#home">
            <C.Container>
                <AiOutlineArrowUp />
            </C.Container>
        </a>
    )
}