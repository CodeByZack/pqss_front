import React from "react";
import { useRouter } from "next/router";
import AppBar from "@/components/AppBar";
import SearchAdvice from "@/components/SearchAdvice";
import SearchResultList from "@/components/SearchResultList";
import BoxLayout from "@/components/BoxLayout";
import MovieItem from "@/components/MovieItem";
import MovieDetailBox from "@/components/MovieDetailBox";
import Store from "@/store";

import "./search.less";

const SearchPage = () => {
  const router = useRouter();
  const { windowWidth } = Store.useContainer();
  console.log(router.query.key);

  return (
    <div className="search-page">
      <div className="search-page-appbar">
        <AppBar />
      </div>
      <div className="search-content">
        <div className="search-content-main">
          <SearchAdvice />
          {windowWidth <= 820 && <MovieDetailBox />}
          <SearchResultList />
        </div>
        {windowWidth > 820 && (
          <div className="search-content-sidebar">
            <MovieDetailBox />
            <BoxLayout
              style={{ position: "sticky", top: 130 }}
              title={"新片速递"}
            >
              <MovieItem />
              <MovieItem />
              <MovieItem />
              <MovieItem />
            </BoxLayout>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
