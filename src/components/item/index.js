import Switch from "../switch/index";
import style from "./style.css";
const Item = ({ item }) => {
  const handleChange = ((val) => {
    if (val) {
      console.log(`Turn ${item.id} on`);
    } else {
      console.log(`Turn ${item.id} off`);
    }
  });
  return (
    <div className={style.itemBox}>
      <div className={style.itemName}>{item.name}</div>
      <div>
        <Switch current={item.current} handleChange={handleChange} />
      </div>
    </div>
  );
};
export default Item;
