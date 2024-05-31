import React, { useEffect } from "react";
import * as d3 from "d3";

const BarChart = ({ data }) => {
  useEffect(() => {
    // Count occurrences of each category
    const categoryCounts = {};
    data.forEach((entry) => {
      const label = entry.label;
      if (categoryCounts[label]) {
        categoryCounts[label]++;
      } else {
        categoryCounts[label] = 1;
      }
    });

    // Prepare data for the bar chart
    const formattedData = Object.keys(categoryCounts).map((key) => ({
      label: key,
      value: categoryCounts[key],
    }));

    // Set up the dimensions and margins of the graph
    const margin = { top: 20, right: 30, bottom: 60, left: 40 },
      width = 500 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    // Remove existing SVG elements before re-rendering
    // d3.select("svg").selectAll("*").remove();

    // Append the svg object to the body of the page
    const svg = d3
      .select("svg")
      .attr("width", width + margin.left + 500 + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // X axis
    const x = d3
      .scaleBand()
      .range([0, width])
      .domain(formattedData.map((d) => d.label))
      .padding(0.2);

    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // Add Y axis
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(formattedData, (d) => d.value)])
      .range([height, 0]);

    svg.append("g").call(d3.axisLeft(y));

    // Bars
    svg
      .selectAll("mybar")
      .data(formattedData)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.label))
      .attr("y", (d) => y(d.value))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - y(d.value))
      .attr("fill", "rgba(75, 192, 192, 0.6)");

    // Labels
    svg
      .selectAll(".bar-label")
      .data(formattedData)
      .enter()
      .append("text")
      .attr("class", "bar-label")
      .attr("x", (d) => x(d.label) + x.bandwidth() / 2)
      .attr("y", (d) => y(d.value) - 5)
      .attr("text-anchor", "middle")
      .text((d) => d.value);
  }, [data]);

  return <svg width="1000" height="500"></svg>;
};

export default BarChart;
