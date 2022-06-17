import { getGifs } from "../../helpers/getGifs"


describe('Pruebas en getGifs()', () => {
    

    test('debe de retronar un arreglo de gifs', async() => {
           
        const gifs = await getGifs('CR7');

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
    
})
