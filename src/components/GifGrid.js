import React /*,{ useState, useEffect }*/ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

//uP1ox3rzOZT5qfYALKreohKl5oeQv0kP

export const GifGrid = ({ category }) => {

    const {data:images,loading}=useFetchGifs(category);

    return (
        <>
            <h3 className=" animate__animated animate__fadeIn">{category}</h3>
            {loading&& <p className="animate__animated animate__fadeIn">Loading</p>}
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem key={img.id}
                            {...img}
                        />
                    )
                    )
                }
            </div>
        </>
    )
}
