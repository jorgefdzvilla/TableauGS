import "./styles.css";
import Tableau from "tableau-react";

export default function App() {
  const options = {
    hideTabs: true,
    hideToolbar: true
  };
  return (
    <div className="App">
      <Tableau
        url="https://public.tableau.com/shared/XTCDMZ8KF?:display_count=y&:origin=viz_share_link"
        options={options}
      />
      <div className="right">
        <h1>Tableau Dashboard in React</h1>
        <q>
          So how does trash get into the ocean? It’s dumped, pumped, spilled,
          leaked and even washed out with our laundry. Each year, we expose the
          world’s waterways to an increasing variety of pollutants — plastic
          debris, chemical runoff, crude oil and more.
        </q>
        <p> ~ Conservation.Org</p>
        <a href="https://www.conservation.org/stories/ocean-pollution-11-facts-you-need-to-know">
          Know More
        </a>
        <p>
          Using Npm Library{" "}
          <a href="https://www.npmjs.com/package/tableau-react">
            Tableau-React
          </a>
        </p>
        <p>
          Dashboard Source{" "}
          <a href="https://public.tableau.com/en-us/gallery/garbage-ocean">
            Garbage in the Ocean - Tableau Public
          </a>
        </p>
      </div>
    </div>
  );
}
