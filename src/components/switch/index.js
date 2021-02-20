import { useEffect, useState } from "preact/hooks";
import style from "./index.css";
const Switch = ({handleChange =()=>{}},current=false) => {
  let [checked, setChecked] = useState(current);
  useEffect(()=>{
    handleChange(checked);
  },[checked])
  return (
    <div
    className={style.switchBox}
      onClick={() => setChecked(!checked)}
      style={{
        justifyContent: checked ? "flex-end" : "flex-start",
        background: checked ? "#673AB7" : "white",
        borderLeft: checked ? '':'none',
        borderRight: checked ? 'none': ''
      }}
    >
      <div className={style.switchControl} />
    </div>
  );
};
export default Switch;
