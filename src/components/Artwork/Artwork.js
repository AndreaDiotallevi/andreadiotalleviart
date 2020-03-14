import React from 'react';

function Artwork(props) {
  const title = props.match.params.title;

  return (
    <div id='artwork-component'>
      <div id='artwork-container'>
        <img id='artwork-page-image' className='artwork-page-image' src={require(`../../assets/artworks/${title}-750x750.png`)} alt={title}></img>
        <h3 id='artwork-page-title'>{title.replace('-', ' ')}</h3>
      </div>
    </div>
  )
}

export default Artwork;