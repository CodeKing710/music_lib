// ArtistView.js
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const ArtistView = () => {
  const history = useNavigate();
  const {id} = useParams();
  const [ artistData, setArtistData ] = useState([]);

  useEffect(()=>{
    const API_URL = `http://localhost:4000/album/${id}`;
    (async () => {
      const res = await fetch(API_URL);
      const resData = await res.json();
      setArtistData(resData.results);
    })();
  }, [id]);

  const navBtns = () => {
    return (
      <div>
        <button onClick={() => history(-1)}>Back</button>
        <button onClick={() => history('/')}>Home</button>
      </div>
    )
  };

  const justAlbums = artistData.filter(entry => entry.collectionType === 'Album');
  const renderAlbums = justAlbums.map((album, i) => {
    return (
      <div key={i}>
        <Link to={`/album/${album.collectionId}`}>
          <p>{album.collectionName}</p>
        </Link>
      </div>
    )
  });


  return (
    <div>
      {artistData.length > 0 ? <h2>{artistData[0].artistName}</h2>:<h2>Loading...</h2>}
      {navBtns()}
      {renderAlbums}
    </div>
  );
};

export default ArtistView;