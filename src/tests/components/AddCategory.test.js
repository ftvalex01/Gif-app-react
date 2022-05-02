import React from "react";
import '@testing-library/jest-dom'
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";


describe('Pruebas en <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />)

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />)

    });

    test('debe de mostarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input');
        const value = 'hola mundo'

        input.simulate('change',{target:{value}})

    });

    test('No debe de postear la info en el submit', () => {
        
        wrapper.find('form').simulate('submit',{preventDefault(){}})

        expect(setCategories).not.toHaveBeenCalled();

    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        /* simular el inputChange , simular el sumbit , setCategories debe ser llamado , el value de input debe de estar vacio */
        const value = 'hola funciono'
        wrapper.find('input').simulate('change',{target:{value}})
        wrapper.find('form').simulate('submit',{preventDefault(){}})

        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');






    });


});