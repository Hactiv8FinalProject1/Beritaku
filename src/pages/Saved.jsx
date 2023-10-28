import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Saved() {
  const savedIndonesiaArticles = useSelector(
    (state) => state.saved.indonesiaSaved
  );
  const savedCovidArticles = useSelector((state) => state.saved.covidSaved);
  const savedProgramArticles = useSelector(
    (state) => state.saved.programmingSaved
  );

  const allSavedArticles = [
    ...savedIndonesiaArticles,
    ...savedCovidArticles,
    ...savedProgramArticles,
  ];

  const filteredSavedArticles = allSavedArticles.filter(
    (article) => article.saved
  );

  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      {filteredSavedArticles.length > 0 ? (
        <Table striped bordered hover variant="primary">
          <thead>
            <tr className="text-center">
              <th>No</th>
              <th>Source</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          {filteredSavedArticles.map((article, index) => (
            <tbody key={article.index}>
              <tr>
                <td className="text-center">{index + 1}</td>
                <td>
                  {article.author} - {article.source.name}
                  <p style={{ textDecoration: "none" }}>
                    <Link to={article.url} target="_blank">
                      News Page
                    </Link>
                  </p>
                </td>
                <td>{article.title}</td>
                <td>{article.description}</td>
              </tr>
            </tbody>
          ))}
        </Table>
      ) : (
        <h3 className="d-flex align-items-center justify-content-center">
          <b>No Saved News</b>
        </h3>
      )}
    </div>
  );
}

export default Saved;
