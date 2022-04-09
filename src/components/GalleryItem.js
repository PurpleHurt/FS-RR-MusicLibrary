import { useState } from 'react';
import { Link } from 'react-router-dom';


const GalleryItem = ({musicItem}) => {
    let [view, toggleView] = useState(false);

    const simpleStyle = {
        width: '25vw',
        height: '20vh',
        border: '1px solid black',
        margin: '2px'
    };
    
    const detailStyle = {
        width: '80vw',
        height: '20vh',
        border: '1px solid black',
        margin: '2px',
        backgroundImage: `url(${musicItem.artworkUrl100})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', 
        color: 'white' 
    };

    const simpleView = () => (
        <div style={simpleStyle}>
            <h3>{musicItem.trackName}</h3>
            <h4>{musicItem.collectionName}</h4>
        </div>
    );
    
    const detailedView = () => (
        <div style={detailStyle}>
            <h2>{musicItem.trackName}</h2>
            <h3>
                <Link to={`{/artist/${musicItem.artistId}`}>
                    {musicItem.artistName}
                </Link>
            </h3>
            <h3>
                <Link to={`{/album/${musicItem.collectionId}`}>
                    {musicItem.collectionName}
                </Link>
            </h3>
            <h4>{musicItem.primaryGenreName}</h4>
            <h4>{musicItem.releaseDate}</h4>
        </div>
    );

    return (
        <div 
            onClick={() => toggleView(!view)}
            style={{ 'display': 'inline-block'}}
            >
            {view ? detailedView() : simpleView()}
        </div>
    );

};

export default GalleryItem;
