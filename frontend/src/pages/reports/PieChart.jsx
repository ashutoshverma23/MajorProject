import React, { useEffect } from "react";
import * as d3 from "d3";

const PieChart = ({ data }) => {
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

    // Prepare data for the pie chart
    const formattedData = Object.keys(categoryCounts).map((key) => ({
      label: key,
      value: categoryCounts[key],
    }));

    // Set up the dimensions and margins of the graph
    const width = 500,
      height = 500,
      margin = 40;

    // The radius of the pie chart is half the smallest side
    const radius = Math.min(width, height) / 2 - margin;

    // Remove existing SVG elements before re-rendering
    d3.select("svg").selectAll("*").remove();

    // Append the svg object to the div called 'my_dataviz'
    const svg = d3
      .select("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // Set the color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Compute the position of each group on the pie
    const pie = d3
      .pie()
      .value((d) => d.value)
      .sort(null);
    const data_ready = pie(formattedData);

    // Shape helper to build arcs
    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    // Build the pie chart
    svg
      .selectAll("mySlices")
      .data(data_ready)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => color(d.data.label))
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .style("opacity", 0.7);

    // Add labels
    svg
      .selectAll("mySlices")
      .data(data_ready)
      .enter()
      .append("text")
      .text((d) => `${d.data.label}: ${d.data.value}`)
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .style("text-anchor", "middle")
      .style("font-size", 12);
  }, [data]);

  return <svg width="500" height="500"></svg>;
};

export default PieChart;
