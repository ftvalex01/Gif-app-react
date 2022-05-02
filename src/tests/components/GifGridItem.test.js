// debe mostrar el componente correctamente

//shallow , wrapper , wrapper .toMatchSnapshot()

import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('GifGridItem test', () => {
    
    const title='un titulo';
    const url='https://google.com/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url}/>)

    test('debe mostar el componente correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de tener un parrafo con el title', () => {
        
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(title)

    });

    test('debe de tener la imagen igual al url y alt de los props',()=>{

        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    })

    test('debe de tener animate fadeInDownBig', () => {
        
        const div = wrapper.find('div')
        expect(div.hasClass('animate__fadeInDownBig')).toBe(true)
    });



});