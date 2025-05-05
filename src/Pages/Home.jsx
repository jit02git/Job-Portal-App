/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Jobs from "./Jobs";
import { data } from "autoprefixer";

const Home = () => {
  const [selectedCategory,  setSelectedCategory] = useState(null);
  const [ jobs, setJobs ] = useState([])
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("jobs.json").then(res => res.json()).then(data => {  
    setJobs(data);});
  }, []); 
  
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

  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
  
    // Apply search query filter
    if (query) {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(query.toLowerCase())
      );
    }
  
    // Apply selected category filter
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({ jobLocation, maxPrice, experienceLevel, salaryType, employeeType, postingDate }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) === parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employeeType.toLowerCase() === selected.toLowerCase()
      );
    }
    // console.log("hey this is result", result)
    // Always return the mapped JSX array
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };
  
  
  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

         

      <div>
        <div>Left</div>
        <div>{result}</div>
        <div>Right</div>
  
      </div>
    </div>
  );
};

export default Home;
