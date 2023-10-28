import React, { useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchProgrammingData } from "../store/reducers/programming";

function DetailsProgramming() {
  const { index } = useParams();
  const dispatch = useDispatch();
  const programmingData = useSelector((state) => state.programming.data);

  useEffect(() => {
    if (!programmingData || programmingData.articles.length === 0) {
      dispatch(fetchProgrammingData());
    }
  }, [dispatch, programmingData]);

  if (!programmingData) {
    return <div>Loading...</div>;
  }

  if (index < 0 || index >= programmingData.articles.length) {
    return <div>No data available for this article.</div>;
  }

  const detailsProgramming = programmingData.articles[index];

  const publishedAtDate = new Date(detailsProgramming.publishedAt);
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
          to={`/programming`}
          style={{ textDecoration: "none", color: "black" }}
        >
          Programming
        </Link>
      </p>
      <h2 className="text-center">
        <b>{detailsProgramming.title}</b>
      </h2>
      <div>
        <p className="text-center">
          {detailsProgramming.author} - {detailsProgramming.source.name}
        </p>
        <p className="text-center" style={{ color: "#5A5A5A" }}>
          {publishedAtFormatted}
        </p>
        {detailsProgramming.urlToImage && (
          <img
            src={detailsProgramming.urlToImage}
            alt={detailsProgramming.title}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        )}
        <p style={{ color: "#5A5A5A", fontSize: "14px" }}>
          {detailsProgramming.description}
        </p>
        <p>{detailsProgramming.content}</p>
      </div>
    </div>
  );
}

export default DetailsProgramming;
