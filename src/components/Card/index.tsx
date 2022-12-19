import { Script } from 'gatsby';
import React from 'react'
import '../../styles/card.css';
import { Card, seoSchema } from './schema';

const CardInsight = (props: Card) => {
  const updatedProps: Card ={ ...props, ...seoSchema};

  <Script type="application/id+json" >
    {`{
       "@context" : "https://schema.org",
       '@type' : "CreativeWork",
       author: {updatedProps.author},
       datePublished: updatedProps.date,
       description: updatedProps.excerpt,
       link: updatedProps.link,
       image: {updatedProps.image},
       name: "Insights card"
    }`}
  </Script>


  return (
    <>
      <div className="card">
        <div className="container">
          <div className="sub-container">
            <div  className="date">
              <h2 role="heading" aria-level={1}>{updatedProps.date}</h2>
            </div>
            <div  className="heading">
              <h4 role="heading" aria-level={2}>{updatedProps.heading}</h4>
            </div>
          </div>
          <div className="container2">
            <img
              role="img" 
              aria-label="Description of image"
              src={updatedProps.image}
              className="container2_image"
              alt="insight"
            />
            <div className="container2_overlay">
              <div className="overlay_text">
                {updatedProps.excerpt}
              </div>
              <div className="btn">
                <a href="#"
                   role="link"
                   aria-label='click'
                   tabIndex={0}
                >{updatedProps.link}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardInsight
