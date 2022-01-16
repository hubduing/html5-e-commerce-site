import React from "react";

export const About = () => {
  return (
    <>
      <section className="page-header about-header">
        <h2>#knowUs</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, voluptates.</p>
      </section>

      <section className="about-head section-p1">
        <img src="./img/about/a6.jpg" alt=""/>
          <div>
            <h2>Who We Are</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ex illo necessitatibus quas
              voluptate. Adipisci, aperiam blanditiis earum fugiat magnam magni, maiores minima molestias,
              nemo possimus provident quam quo velit.Beatae blanditiis commodi culpa cum deserunt
              dicta dignissimos doloremque dolores eos expedita incidunt inventore itaque maxime modi, numquam
              quam qui rem repellat tempora voluptatem. Ab consequatur distinctio eum quaerat rerum!
              Culpa debitis dicta, dolor explicabo laboriosam minima nesciunt, non obcaecati perferendis quo
              repellendus sequi velit? Eligendi et eveniet ex, facere, hic ipsum labore laudantium modi molestiae
              quia quod reprehenderit ut. Amet culpa dolor et in nostrum nulla, possimus! Aliquid dolore
              ducimus nulla odit quam reprehenderit veritatis. Aut eius est et, exercitationem facere ipsam
              labore laborum numquam, perferendis quos, reiciendis veniam.
            </p>
            <abbr title="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis dicta
              ea earum eum explicabo in iste magni nobis voluptate? A aperiam distinctio dolore ex
              expedita optio totam vitae.
            </abbr>
          </div>
      </section>

      <section className="about-app section-p1">
        <h1>Download Our <a href="#">App</a></h1>
        <div className="video">
          <video autoPlay muted loop src="./img/about/1.mp4"></video>
        </div>
      </section>
    </>
)
}
