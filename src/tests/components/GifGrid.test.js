import React from "react";
import { shallow } from "enzyme";
import '@testing-library/jest-dom'
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs')


describe('Pruebas en GifGrid', () => {
    
    const category = 'One Punch';
    

    test('Debe mostrarse correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });
        const wrapper = shallow(<GifGrid category={category}/>)
        expect(wrapper).toMatchSnapshot()

    });

    test('debe de mostrar items cuando carga las imagenes con useFetch', () => {
        
       const gifs =[{
           id:'ABC',
           url:'https://localhost/cualquier/cosa.jpg',
           title:'Cualquier cosa'
       },
       {
        id:'11ABC',
        url:'https://localhost/cualquier/cosa.jpg',
        title:'Cualquier cosa'
        }];
       useFetchGifs.mockReturnValue({
        data:gifs,
        loading:false
    });

       const wrapper = shallow(<GifGrid category={category}/>);
       
       expect(wrapper).toMatchSnapshot();
       expect(wrapper.find('p').exists()).toBe(false);
       expect(wrapper.find('GifGridItem').length).toBe(gifs.length)

    });

});