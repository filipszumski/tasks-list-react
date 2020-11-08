import React from "react";
import { Wrapper } from "./styled";
import { Input } from "../Input";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameter";

const Search = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const OnInputChange = (event) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: event.target.value.trim() !== "" ? event.target.value : undefined,
        })
    };

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={OnInputChange}
            />
        </Wrapper>
    )
};

export default Search;