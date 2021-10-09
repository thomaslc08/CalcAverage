import { red } from "@mui/material/colors";
import styled from "styled-components";

const InputText = styled.input`
  flex: 1;
  border: none;
  background: #f2f4f8;
  font-family: inherit;
  border-radius: 12px;
  font-size: 1rem;
  transition: 0.3s ease-out;
  text-indent: 20px;

  &:hover {
    background: #e7e7e8;
    transition: 0.3s ease-out;
  }
  &:focus {
    background: #e7e7e8;
    transition: 0.3s ease-out;
    outline: none;
    &::placeholder {
      color: #b6b6b6;
      transition: 0.1s ease-out;
    }
  }
`;

const InputTextBar = (props) => {
  return (
    <InputText
      value={props.value}
      onChange={(e) => props.handleChange(e.target.value)}
      autoFocus
      type="text"
      placeholder={props.placeholder}
    />
  );
};

export default InputTextBar;
