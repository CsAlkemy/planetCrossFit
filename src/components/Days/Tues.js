import React from "react";

function Tue() {
  let Time = {
    Seven:"7:00-8:00 am",
    Eight:"8:00-9:00 am",
    nine: "9:00-10:00 am",
    ten: "10:00-11:00 am",
    Twot: "2:30-3:30 pm",
    Threet: "3:30-4:30 pm",
    Fivet: "5:30-6:30 pm",
    Sixt: "6:30-7:30 pm",
    Sevent: "7:30-8:30 pm",
    Eightt: "8:30-9:30 pm",
  };
  return (
    <div className="card">
      <div className="card-content">
        <p className="title is-4 has-text-centered">Martes</p>
        <div className="columns">
          <div className="column">
            <article className="message is-dark ">
              <div className="message-header ">
                <p  >CROSSFIT</p>
              </div>
              <div className="message-body">
                <span className="is-5">{Time.Seven}</span>
              </div>
            </article>
          </div>
          <div className="column">
            <article className="message is-dark ">
              <div className="message-header ">
                <p  >CROSSFIT</p>
              </div>
              <div className="message-body">
                <span className="is-5">{Time.Eight}</span>
              </div>
            </article>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <article className="message is-dark ">
              <div className="message-header ">
                <p  >CROSSFIT</p>
              </div>
              <div className="message-body">
                <span className="is-5">{Time.nine}</span>
              </div>
            </article>
          </div>
          <div className="column">
            <article className="message is-dark ">
              <div className="message-header ">
                <p  >CROSSFIT</p>
              </div>
              <div className="message-body">
                <span className="is-5">{Time.ten}</span>
              </div>
            </article>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <article className="message is-dark ">
              <div className="message-header ">
                <p  >CROSSFIT</p>
              </div>
              <div className="message-body">
                <span className="is-5">{Time.Twot}</span>
              </div>
            </article>
          </div>
          <div className="column">
            <article className="message is-dark ">
              <div className="message-header ">
                <p  >CROSSFIT</p>
              </div>
              <div className="message-body">
                <span className="is-5">{Time.Threet}</span>
              </div>
            </article>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <article className="message is-dark ">
              <div className="message-header ">
                <p  >CROSSFIT</p>
              </div>
              <div className="message-body">
                <span className="is-5">{Time.Fivet}</span>
              </div>
            </article>
          </div>
          <div className="column">
            <article className="message is-dark ">
              <div className="message-header ">
                <p  >CROSSFIT</p>
              </div>
              <div className="message-body">
                <span className="is-5">{Time.Sixt}</span>
              </div>
            </article>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <article className="message is-dark ">
              <div className="message-header ">
                <p  >CROSSFIT</p>
              </div>
              <div className="message-body">
                <span className="is-5">{Time.Sevent}</span>
              </div>
            </article>
          </div>
          <div className="column">
            <article className="message is-dark ">
              <div className="message-header ">
                <p  >CROSSFIT</p>
              </div>
              <div className="message-body">
                <span className="is-5">{Time.Eightt}</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tue;
