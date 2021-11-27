import { useLocation } from "react-router-dom";

export default function Detail() {
  const { state } = useLocation();
  return (
    <div  style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <img src= {state.img} width="200" height="200"/>
      <p>{state.description}</p>
    </div>
  );
}