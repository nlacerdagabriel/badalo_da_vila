import * as C from './styles'
import { GiCakeSlice, GiCupcake, GiPieSlice, GiDonut, GiSlicedBread} from 'react-icons/gi'
import { FaCookieBite } from 'react-icons/fa'
import { CardServices } from '../CardServices'
import { SectionTitle } from '../SectionTitle'



export function OurServices() {
    return (
        <C.Container>
            <SectionTitle>Our Services</SectionTitle>

            <C.ContainerCards>
                <CardServices icon={<GiCakeSlice />}
                title='Wedding Cakes'
                items={['Commercial cookies company',
                'Quality Bakery services',
                'Operational excellence through'   
            ]}>
                    Whetheryou are looking for a traditional
                    style or a contemporar creation. our decorators
                    can meet your individual needs
                </CardServices>
                <CardServices icon={<GiSlicedBread />}
                title='Our Breads'
                items={['Commercial cookies company',
                'Quality Bakery services',
                'Operational excellence through'   
            ]}>
                    The unique flavors and textures of our
                    breads come from the use of natural starters,
                    minimal commercial yeast.
                </CardServices>
                <CardServices icon={<FaCookieBite />}
                title='Best Cookies'
                items={['Commercial cookies company',
                'Quality Bakery services',
                'Operational excellence through'   
            ]}>
                    Is there really anything more satisfying
                    than a great cookie? We don't think so and
                    when you try ours we think you'll agree.
                </CardServices>
                <CardServices icon={<GiPieSlice />}
                title='Tarts & Pies'
                items={['Commercial cookies company',
                'Quality Bakery services',
                'Operational excellence through'   
            ]}>
                    Everyone loves the elegance of a tart or pie.
                    We offer bite-sized tartlettes for a quick sweet treat
                    or large dramatic tarts and pies.
                </CardServices>
                <CardServices icon={<GiCupcake />}
                title='Cupcakes & Cookies'
                items={['Commercial cookies company',
                'Quality Bakery services',
                'Operational excellence through'   
            ]}>
                    A cookie is a baked or cooked food that is typically
                    small, flat and sweet. It usually contains flour, sugar
                    and some type of oil or fat.
                </CardServices>
               
                <CardServices icon={<GiDonut />}
                title='Biscotti & Donuts'
                items={['Commercial cookies company',
                'Quality Bakery services',
                'Operational excellence through'   
            ]}>
                   Biscuit or cookie variants include sandwich biscuits, such
                   as custard creams, Jammie Dodgers, Bourbons and Oreos.
                </CardServices>
            </C.ContainerCards>
        </C.Container>
    )
}