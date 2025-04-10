import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useProducts } from "../hooks/useProducts";
import {
  SearchContainer,
  SearchInput,
  SearchIcon,
  ResultsContainer,
  ResultItem,
} from "../styles/SearchBarStyles";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { data, isLoading, error } = useProducts();
  const searchRef = useRef(null);

  if (isLoading) return null;
  if (error) {
    console.error("Search Error:", error.message);
    return null;
  }

  const filteredProducts =
    query.length > 0 && data?.data
      ? data.data.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    setIsOpen(e.target.value.length > 0);
  };

  const handleSelectProduct = (id) => {
    navigate(`/product/${id}`);
    setQuery("");
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setQuery("");
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <SearchContainer ref={searchRef}>
      <label htmlFor="search-input" className="visually-hidden">
        search
      </label>
      <SearchInput
        id="search-input"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleSearchChange}
      />
      <SearchIcon>
        <Search size={24} />
      </SearchIcon>
      {isOpen && filteredProducts.length > 0 && (
        <ResultsContainer>
          {filteredProducts.map((product) => (
            <ResultItem
              key={product.id}
              onClick={() => handleSelectProduct(product.id)}>
              {product.title}
            </ResultItem>
          ))}
        </ResultsContainer>
      )}
    </SearchContainer>
  );
};

export default SearchBar;
