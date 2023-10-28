import React, { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FaBookmark, FaInfoCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProgrammingData } from "../store/reducers/programming.js";
import "../styles/App.css";
import { saveProgrammingArticle, unsaveProgrammingArticle } from "../store/reducers/saved";

const formatDate = (publishedAt) => {
  const date = new Date(publishedAt);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

function Programming() {
  const dispatch = useDispatch();
  const programmingData = useSelector((state) => state.programming.data);
  const savedArticles = useSelector((state) => state.saved.programmingSaved);

  useEffect(() => {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    const formattedDate = oneMonthAgo.toISOString().split("T")[0];

    dispatch(fetchProgrammingData({ from: formattedDate }));
  }, [dispatch]);

  const sortedArticles = programmingData?.articles
    ? [...programmingData.articles].sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
      )
    : [];

  const savedProgrammingArticleIndexes = new Set(
    savedArticles ? savedArticles.map((article) => article.index) : []
  );

  const handleSaved = (article, index) => {
    const isSaved = savedProgrammingArticleIndexes.has(index);

    if (isSaved) {
      dispatch(unsaveProgrammingArticle({ index }));
    } else {
      dispatch(saveProgrammingArticle({ ...article, index }));
    }
  };

  useEffect(() => {
    const savedProgrammingArticlesFromLocalStorage =
      localStorage.getItem("programmingSaved");
    if (savedProgrammingArticlesFromLocalStorage) {
      const savedArticles = JSON.parse(savedProgrammingArticlesFromLocalStorage);
      if (
        savedArticles.length > 0 &&
        savedArticles.length !== savedArticles.length
      ) {
        savedArticles.forEach((article) => {
          dispatch(saveProgrammingArticle(article));
        });
      }
    }
  }, [dispatch]);

  return (
    <div className="container" style={{ paddingTop: "80px" }}>
      <h2 className="text-center">
        <b>Programming News</b>
      </h2>
      <Row className="mt-4">
        {sortedArticles.map((article, index) => (
          <Col sm={12} md={6} lg={3} key={index}>
            <Card
              className="card"
              style={{
                marginBottom: "50px",
                borderRadius: "10px",
                backgroundColor: "#B4CFE6",
                height: "90%",
              }}
            >
              <Card.Body className="card-content">
                <Link
                  to={`/detailsprogramming/${index}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Card.Title className="card-title text-center">
                    <b>{article.title}</b>
                  </Card.Title>
                </Link>
                <div style={{ color: "#5A5A5A" }}>
                  {formatDate(article.publishedAt)}
                </div>
              </Card.Body>
              <Row className="container">
                <Col md={10} className="d-flex justify-content-end">
                  <Link
                    to={`/detailsprogramming/${index}`}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <FaInfoCircle
                      size={25}
                      style={{ color: "#1b3260", marginBottom: "10px" }}
                    />
                  </Link>
                </Col>
                <Col md={2}>
                  <FaBookmark
                    size={25}
                    style={{
                      color: savedProgrammingArticleIndexes.has(index)
                        ? "#2E86C1"
                        : "#1b3260",
                      marginBottom: "10px",
                    }}
                    onClick={() => handleSaved(article, index)}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Programming;