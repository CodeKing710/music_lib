// AlbumView.js
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AlbumView = () => {
  const history = useNavigate();
  const {id} = useParams();
  const [ albumData, setalbumData ] = useState([]);

  useEffect(()=>{
    const API_URL = `http://localhost:4000/song/${id}`;
    (async () => {
      const res = await fetch(API_URL);
      const resData = await res.json();
      setalbumData(resData.results);
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

  const justSongs = albumData.filter(entry => entry.kind === 'song');
  const renderSongs = justSongs.map((song, i) => {
    return (
      <div key={i}>
        <p>{song.trackName}</p>
      </div>
    )
  });

  return (
    <div>
      {navBtns()}
      {renderSongs}
    </div>
  );
};

export default AlbumView;