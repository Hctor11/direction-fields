import { Mafs, Coordinates, Plot, Theme } from "mafs";
import "./Styles/Styles.css";
import React from "react";



const Graph = () => {
  const height = window.innerHeight;  
  const width = window.innerWidth;
  const test = (x: number) => 2 * x * x + 10

  return (
    <Mafs 
      height={height} 
      width={width} 
      zoom={{ min: 0.5, max: 1 }}
      >
      
      <Coordinates.Cartesian 
        subdivisions={2}/>
      <Plot.OfX y={test} color={Theme.pink} />
      <Plot.VectorField
        xy={([x, y]) => [
          x * test(x),
          test(y),
        ]}
        step={0.5}
        xyOpacity={([x, y]) =>
          (Math.abs(x) + Math.abs(y)) / 10
        }
      />
    </Mafs>
  );
};

export default Graph;