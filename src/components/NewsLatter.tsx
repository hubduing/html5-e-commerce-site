import React from 'react';

interface Props {
  classNews: string
}

export const NewsLatter = ({classNews}:Props) => {
  return (
    <>
      <section className={classNews}>
        <div className="news-text">
          <h4>sign up for news letter</h4>
          <p>get e-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <form action="" className="form" name="news" method="get">
          <input type="text" placeholder="Your email address"/>
            <button className="normal">Sign Up</button>
        </form>
      </section>
    </>
)
}