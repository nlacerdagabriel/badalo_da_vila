import * as C from './styles'
import jeff from '../../assets/jeff.jpg'
import { ButtonHover } from '../ButtonHover'

export function AboutUs() {
    return (
        <C.Container>
            <C.Image>
                <div>
                    <img src={jeff} alt="" />
                    <p>Jeff D. <br /><span>Founder</span></p>
                </div>
            </C.Image>

            <C.ContainerText>
                <p>About us</p>
                <h2>All sorrows are less with Cookies Respect</h2>
                <p>A cookie is a baked or cooked food that is typically
                    small, flat and sweet. It usually contains flour, sugar
                    and some type of oil or fat. It may include other ingredients
                    such as raisins, oats, chocolate chips, nuts, etc.</p>
                <C.OurMission>
                    <h3>Our Mission</h3>
                    <p>In most English-speaking countries except for the United
                        States, crunchy cookies are called biscuits. Many Canadians
                        also use this term. Chewier biscuits are sometimes called cookies
                        even in the Uk.</p>
                </C.OurMission>

                <ButtonHover content='Learn More' textColor='#FFF' primaryColor='var(--blue)' hoverColor='var(--blue-hover)' />
            </C.ContainerText>
        </C.Container>
    )
}