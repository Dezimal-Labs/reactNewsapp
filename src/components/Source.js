import Accordion from "./accordion";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../redux/actions";
import { useEffect } from "react";

function Source() {
  const News = useSelector((state) => state.Source);
  const { loading, error, source } = News;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(api());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>error...</div>
      ) : (
        <div className="column1">
          <div className="card" style={{ }}>
            <div className="source">
              <div id="sc">
                <Accordion title="Sources" source={source} />
              </div>       
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Source;
