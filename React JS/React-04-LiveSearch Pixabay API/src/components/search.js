import React from "react";
import "./search.css";
import axios from "axios";
import Loader from "./giphy.gif";
class Search extends React.Component {
  handleOnInputChange = (event) => {
    const query = event.target.value;
    if (!query) {
      this.setState({
        query,
        message: "Created by Siddharth Kumar Yadav",
        results: {},
      });
    } else {
      this.setState({ query, loading: true, message: "" }, () => {
        this.fetchSearchResults(1, query);
      });
    }
  };

  renderSearchResults = () => {
    const { results } = this.state;
    if (Object.keys(results).length && results.length) {
      return (
        <div className="results-container">
          {results.map((result) => {
            return (
              <a
                key={result.id}
                href={result.previewURL}
                className="result-items"
              >
                <h6 className="image-username">{result.user}</h6>
                <div className="image-wrapper">
                  <img
                    className="image"
                    src={result.previewURL}
                    alt={result.user}
                  />
                </div>
              </a>
            );
          })}
        </div>
      );
    }
  };

  fetchSearchResults = (updatedPageNo, query) => {
    const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : "";
    const searchUrl = `https://pixabay.com/api/?key=12413278-79b713c7e196c7a3defb5330e&q=${query}${pageNumber}`;

    if (this.cancel) {
      this.cancel.cancel();
    }
    this.cancel = axios.CancelToken.source();
    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token,
      })
      .then((res) => {
        console.log("good");
        const resultNotFoundMsg = !res.data.hits.length
          ? "There are no more search result, Please Try a new search"
          : "";
        console.warn(res.data);
        this.setState({
          results: res.data.hits,
          message: resultNotFoundMsg,
          loading: false,
        });
      });
  };

  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: {},
      loading: false,
      message: "",
    };

    this.cancel = "";
  }

  render() {
    const { query, loading, message } = this.state;

    return (
      <div className="container">
        {/*Heading*/}
        <h2 className="heading">Live Search: React Application</h2>
        {/*Search Input*/}
        <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            id="search-input"
            placeholder="Search..."
            onChange={this.handleOnInputChange}
          />
          <i className="fa fa-search search-icon" />
        </label>
        {message && <p className="message">{message}</p>}

        {this.renderSearchResults()}

        {
          <img
            src={Loader}
            className={`search-loading ${loading ? "show" : "hide"}`}
            alt="text"
          />
        }
      </div>
    );
  }
}
export default Search;
