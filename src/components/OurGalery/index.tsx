import { SectionTitle } from '../SectionTitle'
import * as C from './styles'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


export function OurGalery() {

    return (
        <C.Container>
            <SectionTitle>Visite Nosso Espaço</SectionTitle>

            <C.Grid>
                <div><div style={{ backgroundImage: `url(${img1})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img2})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img3})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img4})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img5})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img6})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img7})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img8})` }} /></div>
                <div><div style={{ backgroundImage: `url(${img9})` }} /></div>
            </C.Grid>


            <AwesomeSlider className='slider'>
                <div data-src={img1}></div>
                <div data-src={img2}></div>
                <div data-src={img3}></div>
                <div data-src={img4}></div>
                <div data-src={img5}></div>
                <div data-src={img6}></div>
                <div data-src={img7}></div>
                <div data-src={img8}></div>
                <div data-src={img9}></div>
            </AwesomeSlider>
        </C.Container>
    )
}