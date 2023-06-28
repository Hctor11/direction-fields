import { Mafs, Coordinates } from "mafs"
import './Styles/Styles.css'
 
const height = window.innerHeight;
const width = window.innerWidth

const Graph = () => {
  return (
    <Mafs 
        height={height}
        width={width}
        zoom={{min: 0.1, max: 1}}>
        <Coordinates.Cartesian/>
    </Mafs>
  )
}

export default Graph