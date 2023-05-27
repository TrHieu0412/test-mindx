import React, { useState } from "react";
import axios, { all } from "axios";
import {
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaRegEnvelope,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import "./Form.css";
function Form() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [shortUrlList, setShortUrlList] = useState([]);
  const [isInputFocused, setIsInputFocused] = useState(false);
  // const [isDeleteButtonShown, setIsDeleteButtonShown] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      setShortUrlList([...shortUrlList, response.data.result.full_short_link]);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };
  const handleDelete = (index) => {
    const updatedList = [...shortUrlList];
    updatedList.splice(index, 1);
    setShortUrlList(updatedList);
    // if (updatedList.length === 0) {
    //   setIsDeleteButtonShown(false);
    // }
  };
  const showDeleteButton = shortUrlList.length > 1;
  return (
    <div className="form-title">
      <div className="form-title-submit">
        <h1>Link Shortener</h1>
        <div className="form-text">
          <p>Enter a link:</p>
          <form onSubmit={handleSubmit} className="form-url">
            <input
              type="text"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              placeholder={isInputFocused ? "" : "example.com"}
              required
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? "loading" : <FaArrowRight />}
            </button>
          </form>
        </div>
        <div className="form-domain">
          <div className="form-domain-choose">Short domain:</div>
          <p class="form-domain-main">shrtco.de </p>
          <p>9qr.de </p>
          <p>shiny.link</p>
        </div>
        <p className="form-para">
          {" "}
          With this free Link Shortener you can make Links shorter and easier to
          remember. Just enter a Link into the form and click on the above
          Button to generate a short Link. When visiting the short-Link, the
          short-Link will immediately redirect you to the long Link.
        </p>
      </div>
      <div className="form-using">
        <p>By using shrtcode you agree to our </p>
        <p className="form-using-privacy">
          {" "}
          Terms of Service & Privacy Policy.
        </p>
      </div>
      <div>
        {shortUrlList.map((shortUrl, index) => (
          <div key={index} className="form-output form-output-item ">
            <p>Link generated!</p>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
            <ul>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaRegEnvelope />
              </li>
              <li>
                <FaWhatsapp />
              </li>
              <li>
                <FaTelegramPlane />
              </li>
              
            
            </ul>
          {/* {isDeleteButtonShown && ( */}
              <div className="form-delete">
                <button onClick={() => handleDelete(index)}>Clear history</button>
              </div>
            {/* )} */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form;
