import {
  Clear,
  LightModeOutlined,
  Menu,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { InputBase, Paper } from "@mui/material";
import React, { useState } from "react";

export const SearchBar = (props) => {
  const {
    handleClearSearchQuery,
    searchMovies,
    handleSearchQueryChange,
    searchQuery,
    setMobileOpen,
  } = props;
  const [showSearchInput, setShowSearchInput] = useState(false);

  const handleSearchIconClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  const searchInput = (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
      }}
      className={"search-input"}
    >
      <SearchOutlined
        className="searchbar-icon"
        onClick={handleSearchIconClick}
      />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Title, Movies, Keyword"
        onChange={(event) => {
          handleSearchQueryChange(event.target.value);
        }}
        onKeyUp={(event) => searchMovies(event.target.value.toLowerCase())}
        value={searchQuery}
      />
      {searchQuery ? (
        <Clear className="searchbar-icon" onClick={handleClearSearchQuery} />
      ) : (
        <></>
      )}
    </Paper>
  );

  return (
    <div className="searchbar">
      <div className="search">
        <Menu
          onClick={() => {
            setMobileOpen(true);
          }}
          className="searchbar-icon menu-icon"
        />
        {showSearchInput ? (
          searchInput
        ) : (
          <SearchOutlined
            className="search-icon-collapsed searchbar-icon"
            onClick={handleSearchIconClick}
          />
        )}
      </div>
      <div className="options">
        <LightModeOutlined className="searchbar-icon" />
        <MoreVert className="searchbar-icon" />
      </div>
    </div>
  );
};
