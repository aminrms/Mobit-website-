import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./SearchBoxStyle.css";
import styled from "styled-components";
import CardSearch from "./CardSearch";
import Skeleton from "../Skeleton";
const SearchContainer = styled.div`
  display: ${(props) => props.unShow && "none"};
  @media (max-width: 1024px) {
    display: ${(props) => props.show && "none"};
    display: ${(props) => props.unShow && "flex"};
  }
`;
const SearchBox = ({ showDis, unShow, className }) => {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState([]);
  const [dataSearchBox, setDataSearchBox] = useState(false);
  const inputChangeHandler = (e) => {
    setInputText(e.target.value);
  };
  useEffect(() => {
    if (inputText ==='') {
      setData([]);
      setDataSearchBox(true);
    } else {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => setData(res.data))
      setDataSearchBox(false);
    }
  }, [inputText]);
  const input = useRef(null);
  let dataSearch = data.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(inputText.toString().toLocaleLowerCase());
    });
  });
  return (
    <SearchContainer
      className={`searchBox ${className} `}
      show={showDis}
      unShow={unShow}
    >
      <div className="search-container">
        <div className="searchIcon">
          <i className="bi bi-search"></i>
        </div>
        <input
          ref={input}
          onClick={() => this.input.current.focus()}
          required
          type={"text"}
          className="searchInput"
          placeholder="جستجو در مبیت"
          value={inputText}
          onChange={inputChangeHandler}
        />
      </div>

      <div className={dataSearchBox ? "searched-box " : "searched-box open"}>
        {dataSearch.length
          ? dataSearch.map((item) => {
              return <CardSearch item={item} />;
            })
          : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(() => {
              return (
                <div className="skeleton-container">
                  <Skeleton type="smallImage" />
                  <div className="detail">
                    <Skeleton type="title" />
                    <Skeleton type="text" />
                  </div>
                </div>
              );
            })}
      </div>
    </SearchContainer>
  );
};

export default SearchBox;
