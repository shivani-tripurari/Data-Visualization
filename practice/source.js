var svg = d3.select("#svgID");

var rect = svg
    .append("rect")
    .attr("height",40)
    .attr("width",40)
    .style("fill","red");

rect.style("fill", "yellow");