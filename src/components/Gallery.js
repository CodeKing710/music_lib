// Gallery.js
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import GalleryItem from './GalleryItem';

function Gallery(){
    const data = useContext(DataContext);

    return (
        <div>
            {data.map((item, index) => {
              return (
                <GalleryItem item={item} key={index} />
              )
            })}
        </div>
    );
}

export default Gallery;