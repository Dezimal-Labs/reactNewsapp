import "./accordion.css";
import { useDispatch } from "react-redux";
import { api2 } from "../redux/actions";

export default function Accordion({ title, items, source }) {
  const dispatch = useDispatch();
  let showHide = (e) => {
    //e.target.classList.toggle("active");
    var panel = e.target.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <button className="accordion" onClick={(event) => showHide(event)}>
          {title}
        </button>
        <div className="panel">
          {source.map((item, i) => (
            <div
              key={i}
              style={{
              }}
            >
              <div id="source" onClick={() => dispatch(api2(item.id))}>
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
