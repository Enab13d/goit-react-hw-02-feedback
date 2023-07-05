import styled from "@emotion/styled";
import { theme } from "constants";

export const Experience = styled.select`
    height: 44px;
    width: 100%;
    background-color: ${theme.colors.formWrapperBg};
    border: none;
    outline: none;
    overflow: hidden;
    &:hover, &:focus {
        border: 0;
    }
`;

export const Feedback = styled.option`
width: 60px;
font-size: 1.2em;
background-color: ${theme.colors.btnBg};
padding: 10px 0;
text-align: center;
margin-right: 20px;
display: inline-block;
cursor: pointer;
border:rgb(204, 204, 0) solid 1px;
border-radius: 4px;
color: ${theme.colors.formText};
&:hover {
    color: ${theme.colors.black};
    background-color: ${theme.colors.formText};
}
`;
