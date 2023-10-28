import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaAngleRight } from "react-icons/fa";
import { fetchIndonesiaData } from "../store/reducers/indonesia";

function DetailsIndo() {
  const { index } = useParams();
  const dispatch = useDispatch();
  const indoData = useSelector((state) => state.indonesia.data);

  useEffect(() => {
    if (!indoData || indoData.articles.length === 0) {
      dispatch(fetchIndonesiaData());
    }
  }, [dispatch, indoData]);

  if (!indoData) {
    return <div>Loading...</div>;
  }

  if (index < 0 || index >= indoData.articles.length) {
    return <div>No data available for this article.</div>;
  }

  const detailsIndo = indoData.articles[index];

  const publishedAtDate = new Date(detailsIndo.publishedAt);
  const publishedAtFormatted = publishedAtDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="container" style={{ paddingTop: "80px" }}>
      <p>
        <Link to={`/`} style={{ textDecoration: "none", color: "black" }}>
          Beritaku
        </Link>
        <FaAngleRight />
        <Link
          to={`/`}
          style={{ textDecoration: "none", color: "black" }}
        >
          Indonesia
        </Link>
      </p>
      <h2 className="text-center">
        <b>{detailsIndo.title}</b>
      </h2>
      <div>
        <p className="text-center">
          {detailsIndo.author} - {detailsIndo.source.name}
        </p>
        <p className="text-center" style={{ color: "#5A5A5A" }}>
          {publishedAtFormatted}
        </p>
        {detailsIndo.urlToImage && (
          <img
            src={detailsIndo.urlToImage}
            alt={detailsIndo.title}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        )}
        <p style={{ color: "#5A5A5A", fontSize: "14px" }}>
          {detailsIndo.description}
        </p>
        <p>{detailsIndo.content}</p>
      </div>
    </div>
  );
}

export default DetailsIndo;
