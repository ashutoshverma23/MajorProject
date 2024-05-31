import React, { useEffect } from "react";
import * as d3 from "d3";

const SpiderChart = ({ data }) => {
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

    // Determine the maximum count
    const maxCount = Math.max(...Object.values(categoryCounts));

    // Number of circles to be drawn
    const numCircles = 5; // Number of categories

    // Create SVG element
    const svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height"),
      centerX = width / 2,
      centerY = height / 2;

    // Define the radius
    const radius = Math.min(width, height) / 2;

    // Calculate radius scale based on maximum count
    const radiusScale = d3
      .scaleLinear()
      .domain([0, maxCount])
      .range([0, radius]);

    // Calculate angle slice
    const angleSlice = (Math.PI * 2) / numCircles;

    // Create a group for the spider chart
    const g = svg
      .append("g")
      .attr("transform", `translate(${centerX}, ${centerY})`);

    // Append concentric circles for background grid
    const circles = g
      .selectAll(".spider-chart-circle")
      .data(d3.range(maxCount + 1)) // Adjust as needed
      .enter()
      .append("circle")
      .attr("class", "spider-chart-circle")
      .attr("r", (d) => radiusScale(d))
      .attr("fill", "none")
      .attr("stroke", "rgba(0, 0, 0, 0.1)")
      .attr("stroke-width", 1)
      .lower(); // Place the circles behind the spider chart

    // Append radial lines for background grid
    const lines = g
      .selectAll(".spider-chart-line")
      .data(d3.range(numCircles))
      .enter()
      .append("line")
      .attr("class", "spider-chart-line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr(
        "x2",
        (d, i) => radiusScale(maxCount) * Math.cos(angleSlice * i - Math.PI / 2)
      )
      .attr(
        "y2",
        (d, i) => radiusScale(maxCount) * Math.sin(angleSlice * i - Math.PI / 2)
      )
      .attr("stroke", "rgba(0, 0, 0, 0.1)")
      .attr("stroke-width", 1);

    // Append the spider chart path
    // (You need to adjust this part according to your dataset)
    const line = d3
      .lineRadial()
      .radius((d) => radiusScale(categoryCounts[d.label]))
      .angle((d, i) => i * angleSlice)
      .curve(d3.curveLinearClosed);

    g.append("path")
      .datum(data)
      .attr("class", "spider-chart-path")
      .attr("d", line)
      .attr("fill", "rgba(75, 192, 192, 0.6)")
      .attr("stroke", "rgba(75, 192, 192, 1)")
      .attr("stroke-width", 2)
      .attr("fill-opacity", 0.5);

    const labelRadius = radius - 10; // Distance from the center
    const labelAngleOffset = Math.PI / 10; // Angle offset for better positioning
    const labelData = Object.keys(categoryCounts);
    const labelAngles = d3
      .range(numCircles)
      .map((d, i) => angleSlice * i - Math.PI / 2 + labelAngleOffset);

    g.selectAll(".spider-chart-label")
      .data(labelData)
      .enter()
      .append("text")
      .attr("class", "spider-chart-label")
      .attr("x", (d, i) => labelRadius * Math.cos(labelAngles[i]))
      .attr("y", (d, i) => labelRadius * Math.sin(labelAngles[i]))
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .text((d) => d);
  }, [data]);

  return <svg width="500" height="500"></svg>;
};

export default SpiderChart;
