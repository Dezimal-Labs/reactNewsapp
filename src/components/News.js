import { useSelector } from "react-redux";

function News() {
  const News = useSelector((state) => state.News);
  const { news } = News;
  return (
    <div className="column">
      <div style={{ padding: "0", margin: 0 }} className="card">
        <h3>{news.title}</h3>
        <h3>{news.author}</h3>
        <div>
          <p>{news.description}</p>
          <div id="img">
            {" "}
            <img
              style={{
                maxHeight: "400px",
                maxWidth: "100%",
                borderRadius: "25px",
                padding: "10px",
              }}
              src={news.urlToImage}
            ></img>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export default News;
