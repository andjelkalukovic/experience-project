import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineDoubleRight } from "react-icons/ai";

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }

  useEffect(() => {
    fetchJobs()
  }, []);

  if (loading) {
    return (
      <section className='container'>
        <h1 className='text-center py-5'>Loading...</h1>
      </section>
    )
  }

  const { company, dates, duties, title } = jobs[value];
  return (
    <section className='container'>
      <div>
        <h1 className='text-center py-5'>Experience</h1>
      </div>

      <div className='container'>
        <div className='row'>

          <div className='col-lg-3 btn-secton'>
            {jobs.map((item, index) => {
              return (
                <button key={item.id} onClick={() => setValue(index)}
                  className={`job-btn ${index === value && 'active-btn'}`}>{item.company}</button>
              )
            })}
          </div>

        <article className='col-lg-9'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p>{dates}</p>

            {duties.map((duty, index) => {
              return (
                <div key={index} className='d-flex'>
                  <AiOutlineDoubleRight className='icon'/>
                  <p>{duty}</p>
                </div>
              )
            })}
        </article>
      </div>
      </div>
    </section>

  );
}

export default App;
