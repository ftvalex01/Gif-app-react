import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en el GifExpertApp', () => {
    
    test('Haciendo match con el snapshot', () => {
        
        const wrapper = shallow(<GifExpertApp/>)
        expect(wrapper).toMatchSnapshot()


    });

    test('debe de mostrar una lista de categorias', () => {
        
        const categories = ['One Punch','Dragon ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    }); 

});