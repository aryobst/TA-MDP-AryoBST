import { Fragment } from "react";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Events.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Events() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;

  const [poster, setPoster] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
  fetch("https://my-json-server.typicode.com/aryobst/ufcdb/poster")
  .then((response) => response.json())
  .then((json) => setPoster(json))
  .catch((err) => console.log(err));
  fetch("https://my-json-server.typicode.com/aryobst/ufcdb/data")
  .then((response) => response.json())
  .then((json) => setData(json))
  .catch((err) => console.log(err));
  }, []);
  let navigate = useNavigate();
  return (
    <>
      <p id="events">What's New</p>
      <div className="containerTop">
        {poster.map((item, index) => (
          <Fragment key={item.id}>
            <CardBig
              title={item.title}
              img={item.img}
              genre={item.genre}
              size={STAR_SIZE}
              color={STAR_COLOR}
              onClick={() => navigate(`detailevents/`, { state: item })}
            />
            {data.length === index && <div style={{ marginRight: 40 }} />}
          </Fragment>
        ))}
      </div>
      <p id="events">INTERVIEWS</p>
      {data.map((item, index) => (
        <Fragment key={item.id}>
          <CardSmall
            title={item.title}
            img={item.img}
            genre={item.genre}
            size={STAR_SIZE}
            color={STAR_COLOR}
            onClick={() => navigate(`detailevents/`, { state: item })}
          />
          {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
    </>
  );
}