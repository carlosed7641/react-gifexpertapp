import { renderHook, waitFor } from "@testing-library/react"
import useFetchGifs from "../../hooks/useFetchGifs"

describe('Purebas en el hook useFetchGifs', () => {
    test('debe de regresar el estado inicial', () => {
        
        const { result } = renderHook(()=> useFetchGifs('CR7'));
        const { data, loading} = result.current;

        expect(data.length).toBe(0);
        expect(loading).toBeTruthy();
    })

    test('debe de retornar un arreglo de imágenes y loading en false', async() => {
        const { result } = renderHook(()=> useFetchGifs('CR7'));
        
         await waitFor(
             () => expect(result.current.data.length).toBeGreaterThan(0),
            //  {

            //     timeout: 10000
            //  }
         );

         const { data, loading} = result.current;

         expect(data.length).toBeGreaterThan(0);
         expect(loading).toBeFalsy();
        
    })
    
    
})
