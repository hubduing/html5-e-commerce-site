import React from 'react';

// @ts-ignore
export const BlogBox = ({source}: string[]) => {
  return (
    <>
      <section className="blog">
        {source.map( (source: string, index: number) =>
          {
            return (
              <div className="blog-box" key={index.toString()}>
                <div className="blog-img">
                  <img src={source} alt=""/>
                </div>
                <div className="blog-details">
                  <h4>The cotton-jercy Zip-up hoodie</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium
                    aut illum similique vero voluptatem?</p>
                  <a href="#">Continued reading</a>
                </div>
                <h1>13/01</h1>
              </div>
            )
          }
        )}
      </section>
    </>
  )
}
