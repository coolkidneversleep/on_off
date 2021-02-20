import { Fragment } from "react";
import Header from "./header/index";
import Item from "./item/index";
const items = [
    {
      name: "Lamp on the bed",
      current: true,
      id: 1,
    },
    {
      name: "Lamp on the desk",
      current: false,
      id: 2,
    },
    {
      name: "Lamp on the living room",
      current: false,
      id: 3,
    },
    {
      name: "Lamp on the kitchen",
      current: true,
      id: 4,
    },
  ];
const App = () => {
  return (
    <Fragment>
      <div id="app">
        <Header />
        <div style={{display:'flex',flexWrap:'wrap'}}>
			{
				items.map(i=>{
					return <Item item={i} />
				})
			}
        </div>
      </div>
    </Fragment>
  );
};

export default App;
