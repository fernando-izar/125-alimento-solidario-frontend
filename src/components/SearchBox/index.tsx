import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchIconWrapper, StyledInputBase, Search } from "./styles";
import { useContext } from "react";
import { DonorContext } from "../../contexts/DonorContext";

export const SearchBox = () => {
  const { setNewSearch, newSearch, setSearched } = useContext(DonorContext);

  function onSubmitHandler(e: any) {
    e.preventDefault();
    setSearched(newSearch);
  }
  return (
    <Box
      sx={{
        display: "flex",

        "& > :not(style)": {
          m: 1,
          width: "100%",
        },
      }}
    >
      <Search onSubmit={onSubmitHandler}>
        <StyledInputBase
          placeholder="Pesquisar"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setNewSearch(e.target.value)}
        />

        <SearchIconWrapper onClick={() => setSearched(newSearch)}>
          <SearchIcon />
        </SearchIconWrapper>
      </Search>
    </Box>
  );
};
