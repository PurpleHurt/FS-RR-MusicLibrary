import GalleryItem from './GalleryItem';

const Gallery = ({ data }) => { 
    return (
        <div>
            {data.map((musicItem, i) => (
                <GalleryItem key={i} musicItem={musicItem} />
            ))} 
        </div>
    )
};

export default Gallery;
