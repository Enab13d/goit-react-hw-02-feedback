import styled from "@emotion/styled";
import { theme } from "constants";

export const Form = styled.div`
background-color: ${theme.colors.formWrapperBg};
width: 400px;
margin: auto;
margin-top: ${theme.sizing(4)};
padding: ${theme.sizing(4)};
height: 600px;
border-radius: 4px;
color: ${theme.colors.formText};
`