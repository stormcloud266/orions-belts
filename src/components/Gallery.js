import React from 'react';
import Img from "gatsby-image"


const Gallery = (props) => {

  const closeModal = () => {
    document.getElementById('modal').classList.remove('modal-opened');
  }
  const openModal = (src) => {
    console.log(src);
    document.getElementById('modal-img').src = src
    document.getElementById('modal').classList.add('modal-opened')
  }

  const imagesArray = Object.keys(props.data).map(key => ( props.data[key] ));

  return (
    <section className="Gallery">
      <div id="modal" className='modal-open' onClick={closeModal}>
        <img id="modal-img" src={props.data.image1.childImageSharp.sizes.src} alt=""/>
      </div>
      <h2 className="Gallery__title">Gallery</h2>

      <div className="Gallery__grid-container wrapper">
      {
        imagesArray.map((image, ind) => (
          <div onClick={(e) => openModal(e.target.src)}>
            <Img sizes={image.childImageSharp.sizes}/>
          </div>
        ))
      }
      </div>
    </section>
  )
}

export default Gallery;
