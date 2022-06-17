import { render, screen, fireEvent } from "@testing-library/react"
import AddCategory from "../../components/AddCategory"

describe('Pruebas en <AddCategory />', () => {
  
    test('debe de cambiar el valor de la caja de texto ', () => {
        
        render(<AddCategory setCategories={()=> {}}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'CR7'} })
        expect(input.value).toBe('CR7');
    })

    test('debe de llamar setCategories  si el input es > 2', () => {

        const inputValue = 'CR7';
        const setCategories = jest.fn();

        render(<AddCategory setCategories={setCategories}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue} })
        fireEvent.submit(form)
        expect(input.value).toBe('')

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        //expect(setCategories).toHaveBeenLastCalledWith(inputValue)
    })
    

    test('no debe de llamar el setCategories si el input está vacío ', () => {

        const setCategories = jest.fn();

        render(<AddCategory setCategories={setCategories}/>);

        //const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //fireEvent.input(input, {target: {value: ''} })
        fireEvent.submit(form);
        expect(setCategories).toHaveBeenCalledTimes(0);

      
    })
    
    
})
