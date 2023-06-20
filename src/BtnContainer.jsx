import React from "react";
import { v4 as uuidv4 } from "uuid";
function BtnContainer({ jobs, setValue, value }) {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        const { company } = job;
        return (
          <button
            key={index}
            className={`job-btn ${index === value && "active-btn"}`}
            onClick={() => setValue(index)}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
}

export default BtnContainer;
