import { AnimatedNumberC } from '../AnimatedNumber'
import * as C from './styles'

export function InfoNumbers(){
    return(
        <C.Container>
            <C.ContainerNumbers>
                <C.EachNumber>
                   <AnimatedNumberC value={99} fontSize='3rem'/>
                    <p>Wedding cakes</p>
                </C.EachNumber>
                <C.EachNumber>
                   <AnimatedNumberC value={19} fontSize='3rem'/>
                    <p>Artisan Breads</p>
                </C.EachNumber>
                <C.EachNumber>
                   <AnimatedNumberC value={9} fontSize='3rem'/>
                    <p>Tarts and Pies</p>
                </C.EachNumber>
                <C.EachNumber>
                   <AnimatedNumberC value={49} fontSize='3rem'/>
                    <p>Cup Cakes</p>
                </C.EachNumber>
            </C.ContainerNumbers>
        </C.Container>
    )
}