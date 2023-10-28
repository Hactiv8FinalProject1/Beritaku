import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBookmark, FaInfoCircle } from "react-icons/fa";
import "../styles/App.css";
import { fetchIndonesiaData } from "../store/reducers/indonesia";
import {
  saveIndonesiaArticle,
  unsaveIndonesiaArticle,
} from "../store/reducers/saved";

function Indonesia() {
  const dispatch = useDispatch();
  const indonesiaData = useSelector((state) => state.indonesia.data);
  const savedArticles = useSelector((state) => state.saved.indonesiaSaved);

  useEffect(() => {
    dispatch(fetchIndonesiaData());
  }, [dispatch]);

  const formatDate = (publishedAt) => {
    const date = new Date(publishedAt);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  const savedIndonesiaArticleIndexes = new Set(
    savedArticles.map((article) => article.index)
  );

  const handleSaved = (article, index) => {
    const isSaved = savedIndonesiaArticleIndexes.has(index);

    if (isSaved) {
      dispatch(unsaveIndonesiaArticle({ index }));
    } else {
      dispatch(saveIndonesiaArticle({ ...article, index }));
    }
  };

  useEffect(() => {
    localStorage.setItem("IndonesiaSaved", JSON.stringify(savedArticles));
  }, [savedArticles]);

  return (
    <div className="container" style={{ paddingTop: "80px" }}>
      <h2 className="text-center">
        <b>Indonesia News</b>
      </h2>
      <Row className="mt-4">
        {indonesiaData &&
          indonesiaData.articles.map((article, index) => (
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
                {article.urlToImage ? (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    style={{
                      width: "100%",
                      height: "205px",
                      borderRadius: "10px",
                    }}
                  />
                ) : (
                  <img
                    src="https://placehold.co/600x400?text=No-Image"
                    alt={article.title || "No Image"}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "10px",
                    }}
                  />
                )}
                <Card.Body className="card-content">
                  <div style={{ color: "#5A5A5A" }}>
                    {article.author} | {formatDate(article.publishedAt)}
                  </div>
                  <Link
                    to={`/detailsindo/${index}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Card.Title className="card-title">
                      <b>{article.title}</b>
                    </Card.Title>
                  </Link>
                </Card.Body>
                <Row className="container">
                  <Col md={10} className="d-flex justify-content-end">
                    <Link
                      to={`/detailsindo/${index}`}
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
                        color: savedIndonesiaArticleIndexes.has(index)
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

export default Indonesia;
