import { useContext } from 'react'
import { DataContext } from '../contexts/DataContext'
import GalleryItem from './GalleryItem'

const Gallery = () => {
    const data = useContext(DataContext)

    return (
        <div className="gallery">
            {data.map((musicItem, i) => (
                <GalleryItem key={i} musicItem={musicItem} />
            ))}
            </div>
    )
};

export default Gallery