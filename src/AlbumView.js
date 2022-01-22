// AlbumView.js
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AlbumView = () => {
  const {id} = useParams();
  const [ albumData, setalbumData ] = useState([]);

  return (
    <div>
      <p>Album Data Goes Here!</p>
    </div>
  );
};

export default AlbumView;