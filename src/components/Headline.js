// import { api2 } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import { NewsData } from "../redux/actions";
// import "../index.css"

function Headline() {
  const dispatch = useDispatch();
  const Headline = useSelector((state) => state.Headline);
  const { loading, error, headline } = Headline;
  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>error...</div>
      ) : (
        <div className="column">
          <div className="card">
            {headline.map((item, i) => (
              <div
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  borderRadius: "10px",
                }}
                key={i}
                id="headlinecard"
                onClick={() => dispatch(NewsData(item))}
              >
                <img
                  style={{
                    maxHeight: "150px",
                    maxWidth: "180px",
                    borderRadius: "10px",
                    alignItems: "center",
                    margin: "10px 10px"
                  }}
                  src={item.urlToImage}
                ></img>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15px",
                    backgroundColor: "white",
                    color: "Black",
                  }}
                >
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Headline;
