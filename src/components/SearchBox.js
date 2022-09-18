import styled from "styled-components";

export const SearchBox = styled.form`
    display: flex;
    align-items: center;

    & input {
        padding-left: 8px;
        height: 32px;
        width: 300px;
        border-radius: 6px;
        border: 1px solid black;
        margin-right: 6px;
    }

    & button {
        border-left: 1px solid black;
        border-radius: 0 6px 6px 0;
        height: 30px;
        position: relative;
        right: 75px;
    }
`