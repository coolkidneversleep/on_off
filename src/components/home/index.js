import Switch from "react-ios-switch";
import { useState } from "preact/hooks";
const Home = () => {
  let [checked, setChecked] = useState(false);
  return (
    <div onClick={()=>setChecked(!checked)} style={{width:'900px',height:'500px',border:'1px solid black',borderRadius:'300px',display:'flex',alignItems:'center',marginTop:'1rem',justifyContent:checked?'flex-end':'flex-start',background:checked?'#673AB7':'white'}}>
      <div style={{width:'470px',height:'470px',borderRadius:'250px',border:'1px solid black',boxShadow:'1px 0 0 1px #cccccc60',background:'white'}}></div>
      <input value={checked} type="checkbox" style="display:none;" />
    </div>
  );
};
export default Home;
