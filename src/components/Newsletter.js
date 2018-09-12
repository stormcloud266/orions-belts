import React from 'react';

const Newsletter = (props) => {
  return (
    <section className="Newsletter">
      <div className="Newsletter__inner wrapper">
        <div className="Newsletter__text">
          <h2>Get More</h2>
          <p>Join our newsletter and get first dibs on sales, coupons, and info about our newest additions.</p>
        </div>
        <div className="Newsletter__form">
          <input type="text" placeholder='Email'/>
          <button>Join</button>
        </div>
      </div>
    </section>
  )
}

export default Newsletter;
