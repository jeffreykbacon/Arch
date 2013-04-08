var po = org.polymaps;

var div = document.getElementById("map"),
    svg = div.appendChild(po.svg("svg")),
    g = svg.appendChild(po.svg("g"));

var map = po.map()
    .container(g)
    .tileSize({x: 256, y: 256})
    .add(po.drag())

map.add(po.layer(grid));

function grid(tile) {
  var g = tile.element = po.svg("g");

  var rect = g.appendChild(po.svg("rect")),
      size = map.tileSize();
  rect.setAttribute("width", size.x);
  rect.setAttribute("height", size.y);

  var text = g.appendChild(po.svg("text"));
  text.setAttribute("x", 6);
  text.setAttribute("y", 6);
  text.setAttribute("dy", ".71em");
  text.appendChild(document.createTextNode("Easting: " + tile.key));
}

