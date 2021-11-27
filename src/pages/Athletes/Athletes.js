import CardCustoms from "../../component/CardCustoms"
import { Fragment } from "react";
import "./Athletes.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Athletes() {
    const [data, setData] = useState([]);
    useEffect(() => {
    fetch("https://my-json-server.typicode.com/aryobst/ufcdb/champions")
    .then((response) => response.json())
    .then((json) => setData(json))
    .catch((err) => console.log(err));
    }, []);
    let navigate = useNavigate();
  return (
    <>
      <p id="Athletes"></p>
      <div style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center'}}> 
      {data.map((item, index) => (
        <Fragment key={item.id}>
          <CardCustoms
            titleCust={item.titleCust}
            img={item.img}
            genreCust={item.genreCust}
            onClick={() => navigate(`detail/`, { state: item })}
          />
          {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
      </div>
    </>
  );
}