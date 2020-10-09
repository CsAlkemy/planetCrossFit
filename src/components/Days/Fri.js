import React from "react";

function Fri() {
  let Time = {
    ninet: "9:30-10:30 am",
    tent: "10:30-11:30 am",
    Onet: "1.30-2:30 pm",
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
        <p className="title is-4 has-text-centered">Viernes</p>
        <div className="columns">
          <div className="column">
            <article className="message is-info">
              <div className="message-header ">
                <p className="has-text-black">CROSSFIT</p>
              </div>
              <div className="message-body">
                <span className="is-5">{Time.ninet}</span>
              </div>
            </article>
          </div>
          <div className="column">
            <article className="message is-info">
              <div className="message-header ">
                <p className="has-text-black">CROSSFIT</p>
              </div>
              <div className="message-body">
                <span className="is-5">{Time.tent}</span>
              </div>
            </article>
          </div>
          <div className="column">
            <article className="message is-info">
              <div className="message-header ">
                <p className="has-text-black">CROSSFIT</p>
              </div>
              <div className="message-body">
                <span className="is-5">{Time.Onet}</span>
              </div>
            </article>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <article className="message is-info">
              <div className="message-header ">
                <p className="has-text-black">CROSSFIT</p>
              </div>
              <div className="message-body">
                <span className="is-5">{Time.Twot}</span>
              </div>
            </article>
          </div>
          <div className="column">
            <article className="message is-info">
              <div className="message-header ">
                <p className="has-text-black">CROSSFIT</p>
              </div>
              <div className="message-body">
                <span className="is-5">{Time.Threet}</span>
              </div>
            </article>
          </div>
          <div className="column">
            <article className="message is-info">
              <div className="message-header ">
                <p className="has-text-black">CROSSFIT</p>
              </div>
              <div className="message-body">
                <span className="is-5">{Time.Fivet}</span>
              </div>
            </article>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <article className="message is-info">
              <div className="message-header ">
                <p className="has-text-black">CROSSFIT</p>
              </div>
              <div className="message-body">
                <span className="is-5">{Time.Sixt}</span>
              </div>
            </article>
          </div>
          <div className="column">
            <article className="message is-info">
              <div className="message-header ">
                <p className="has-text-black">CROSSFIT</p>
              </div>
              <div className="message-body">
                <span className="is-5">{Time.Sevent}</span>
              </div>
            </article>
          </div>
          <div className="column">
            {" "}
            <article className="message is-info">
              <div className="message-header ">
                <p className="has-text-black">CROSSFIT</p>
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

export default Fri;
