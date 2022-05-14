import { useState } from "react";
import GifGrid from './GifGrid';
import AddCategory from "./AddCategory";


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Super Mario']);


    return (
        <>       
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            
            <>
                {
                    categories.map(category => 
                       <GifGrid 
                       key={ category }
                       category={ category }/>
                    )
                }
            </>
        </>

    );
}

export default GifExpertApp;