import { getGifs } from "../../helpers/getGifs";

describe('pruebas con Fecth de getGifs', () => {
    
    test('debe de traer 10 elementos', async() => {
        
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10)

    });

});