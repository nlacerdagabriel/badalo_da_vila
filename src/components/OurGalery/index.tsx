import { SectionTitle } from '../SectionTitle'
import * as C from './styles'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


export function OurGalery() {

    return (
        <C.Container>
            <SectionTitle>Our Gallery</SectionTitle>

            <C.Grid>
                <div><div style={{ backgroundImage: `url(${img1})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img2})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img3})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img1})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img2})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img3})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img1})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img2})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img3})` }} /></div>
            </C.Grid>


            <AwesomeSlider className='slider'>
                <div data-src={img1}>1</div>
                <div data-src={img2}>1</div>
                <div data-src={img3}>1</div>
            </AwesomeSlider>
        </C.Container>
    )
}