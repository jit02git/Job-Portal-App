/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Jobs from "./Jobs";

const Home = () => {
  const [selectedCategory,  setSelectedCategory] = useState(null);
  const [ jobs, setJobs ] = useState([])
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("jobs.json").then(res => res.json()).then(data => {
      setJobs(data)
      
    })
  })

  // filter jobs by title
  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  }

  const filteredData = (job, selected, query) => {
    let filteredJobs = job;
    console.log("this is filtered jobs", filteredJobs)

    if (query) {
      filteredJobs = filteredItems;
    }

    if (selected) {
      filteredJobs = filteredJobs.filter(({jobLocation, maxPrice, experienceLevel, salaryType, employeeType, postingDate})=>{
        jobLocation.toLowerCase() === selected.toLowerCase() || 
        parseInt(maxPrice) === parseInt(selected) ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        employeeType.toLowerCase() === selected.toLowerCase()
      });
      console.log(filteredJobs);
      
      return filteredData.map((data, i) => <Card key={i} data={data}/>)
    }

  }

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      <div>
      <Jobs result={result} />  
      </div>
    </div>
  );
};

export default Home;
