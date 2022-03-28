import * as C from './styles'
import { SiCodechef } from 'react-icons/si'

type SectionTitleProps = {
    children: string;
}


export function SectionTitle({children} : SectionTitleProps){
    return(
        <C.Container>
            <h2>{children}</h2>
            <SiCodechef/>
        </C.Container>
    )
}