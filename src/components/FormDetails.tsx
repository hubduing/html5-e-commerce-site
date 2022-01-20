import React from "react";

export const FormDetail = () => {
  return (
    <section className="form-details">
      <form action="">
        <span>leave a message</span>
        <h2>we love to hear from you</h2>
        <input type="text" placeholder="Your Name"/>
        <input type="email" placeholder="Email"/>
        <input type="text" placeholder="Subject"/>
        <textarea name="" placeholder="Your message"></textarea>
        <button className="normal" type="submit">Submit</button>
      </form>

      <div className="people">
        <div>
          <img src="./img/people/1.png" alt=""/>
          <p><span>John Doe</span> senior marketing manager <br/> Phone: + 000 123 456 78 90 <br/> Email:
            contact@example.com</p>
        </div>
        <div>
          <img src="./img/people/2.png" alt=""/>
          <p><span>Carbanara Copochy</span> senior marketing manager <br/> Phone: + 000 123 456 78 90 <br/> Email:
            contact@example.com</p>
        </div>
        <div>
          <img src="./img/people/3.png" alt=""/>
          <p><span>Alexandra Bestrashny</span> senior marketing manager <br/> Phone: + 000 123 456 78 90 <br/> Email:
            contact@example.com</p>
        </div>
      </div>
    </section>
)
}
