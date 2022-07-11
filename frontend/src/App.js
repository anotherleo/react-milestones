import React from 'react';
import data from "./data";

function App() {
  return (
    <>
      <header>Leo's WebDev Milestones <i class="fa-solid fa-rocket"></i></header>
      <main>
        <section className="milestones">
          {
            data.milestones.map(milestone => (
              <div className="milestone__card">
                <img class="icon" src={milestone.icon} alt={milestone.title} />
                <p class="title">{milestone.title}</p>
                <p class="date">{milestone.date}</p>
                <p class="description">{milestone.description}</p>
              </div>
            ))
          }
        </section>
      </main>
    </>
  );
}

export default App;
