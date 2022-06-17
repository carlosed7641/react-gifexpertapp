import { render, screen } from "@testing-library/react";
import GifGrid from "../../components/GifGrid";
import useFetchGifs from "../../hooks/useFetchGifs";


jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente <GifGrid />', () => {
    
    const category = 'CR7';

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
    
        render(<GifGrid  category={category}/>)

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    })

    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {

        const gifs = [

                {
                    id: 'ABC',
                    title: 'CR7',
                    url: 'htttps://localhost/CR7.jpg'
                },

                {
                    id: 'BCD',
                    title: 'Goku',
                    url: 'htttps://localhost/Goku.jpg'
                }
        
        ]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
    

        render(<GifGrid  category={category}/>)

        expect(screen.getAllByRole('img').length).toBe(2);
        
    })
    
    
})
