import React from "react";

function Sun() {
  return (
    <div className="card">
      <div className="card-content">
        <p className="title is-4 has-text-centered">
         Domingo
        </p>
        <article className="message is-info">
          <div className='message-header '>
            <p className='has-text-black'>CROSSFIT</p>
          </div>
          <div className='message-body'>
              <span className='tag-primary'> 10:00-11:00 am</span>
          </div>
        </article>
        <article className="message is-info">
          <div className='message-header'>
            <p className='has-text-black'>CROSSFIT</p>
          </div>
          <div className='message-body'>
              <span className='tag-primary'> 11:00-11:30 pm</span>
          </div>
        </article>
        <article className="message is-info">
          <div className='message-header'>
            <p className='has-text-black'>CROSSFIT</p>
          </div>
          <div className='message-body'>
              <span className='tag-primary'> 12:00-01:00 pm</span>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Sun;
