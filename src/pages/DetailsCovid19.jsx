import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCovidData } from "../store/reducers/covid19";
import { FaAngleRight } from "react-icons/fa";

function DetailsCovid19() {
  const { index } = useParams();
  const dispatch = useDispatch();
  const covidData = useSelector((state) => state.covid.data);

  useEffect(() => {
    if (!covidData || covidData.articles.length === 0) {
      dispatch(fetchCovidData());
    }
  }, [dispatch, covidData]);

  if (!covidData) {
    return <div>Loading...</div>;
  }

  const sortedArticles = [...covidData.articles].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
  );

  if (index < 0 || index >= sortedArticles.length) {
    return <div>No data available for this article.</div>;
  }

  const detailsCovid = sortedArticles[index];

  const publishedAtDate = new Date(detailsCovid.publishedAt);
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
          to={`/covid19`}
          style={{ textDecoration: "none", color: "black" }}
        >
          Covid-19
        </Link>
      </p>
      <h2 className="text-center">
        <b>{detailsCovid.title}</b>
      </h2>
      <div>
        <p className="text-center">
          {detailsCovid.author} - {detailsCovid.source.name}
        </p>
        <p className="text-center" style={{ color: "#5A5A5A" }}>
          {publishedAtFormatted}
        </p>
        {detailsCovid.urlToImage && (
          <img
            src={detailsCovid.urlToImage}
            alt={detailsCovid.title}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        )}
        <p style={{ color: "#5A5A5A", fontSize: "14px" }}>
          {detailsCovid.description}
        </p>
        <p>{detailsCovid.content}</p>
      </div>
    </div>
  );
}

export default DetailsCovid19;
