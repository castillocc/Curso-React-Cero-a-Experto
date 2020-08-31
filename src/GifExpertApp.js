import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Gundam']);
    // const handleAdd = () => {
    //     //setCategories(['Gundam Wing',...categories]);
    //     setCategories(categorie=>[...categorie,'Gundam Wing']);
    // }
    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={setCategories} />
            <ol>
                {
                    categories.map(category =>
                        <GifGrid key={category} 
                        category={category}/>
                    )
                }
            </ol>
        </div>
    );
}

export default GifExpertApp;