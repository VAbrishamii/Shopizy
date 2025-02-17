import { Search } from "lucide-react";
import {SearchContainer, SearchInput, SearchIcon} from "../styles/SearchBarStyles";

const SearchBar = () => {
    return (
        <SearchContainer>
        <SearchInput type="text" placeholder="Search..." />
        <SearchIcon>
            <Search size={24} />
        </SearchIcon>
        </SearchContainer>
    );
};

export default SearchBar;