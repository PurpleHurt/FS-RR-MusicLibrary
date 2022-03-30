import { useState } from 'react';


const GalleryItem = ({musicItem}) => {
    let [view, toggleView] = useState(false);

    const simpleView = () => (
        <div style={simpleStyle}>
            <h3>{musicItem.trackName}</h3>
            <h4>{musicItem.collectionName}</h4>
        </div>
    );
    
    

    const detailedView = () => (
        <div style={detailStyle}>
            <h3>{musicItem.trackName}</h3>
            <h4>{musicItem.collectionName}</h4>
            <h4>{musicItem.primaryGenreName}</h4>
            <h4>{musicItem.releaseDate}</h4>
        </div>
    );

const simpleStyle = {
    width: '25vw',
    height: '20vh',
    border: '1px solid black',
    margin: '2px'
}

const detailStyle = {
    width: '80vw',
    height: '20vh',
    border: '1px solid black',
    margin: '2px',
    backgroundImage: `url(${musicItem.artworkUrl100})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', 
    color: 'white' 
}

    return (
        <div className="gallery-item" onClick={() => toggleView(!view)}>
            {view ? detailedView() : simpleView()}
        </div>
    );

};

export default GalleryItem;