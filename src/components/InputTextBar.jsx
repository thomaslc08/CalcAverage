import styled from "styled-components";

const InputText = styled.input`
  flex: 1;
  box-sizing: border-box;
  border: none;
  background: ${(props) => (props.isDark ? "#373f4b" : "#f2f4f8")};
  font-family: inherit;
  border-radius: 12px;
  font-size: 1rem;
  /* transition:  0.3s ease-out; */
  /* text-indent: 5px; */
  padding: 1.4rem;
  width: 100%;
  transition: all 5ms ease-in-out;

  &:hover {
    /* background: #420000; */
    background: ${(props) => (props.isDark ? "#475161" : "#e7e7e8")};
    transition: 0.3s ease-out;
  }
  &:focus {
    background: ${(props) => (props.isDark ? "#475161" : "#e7e7e8")};
    transition: 0.3s ease-out;
    outline: none;
    &::placeholder {
      color: #b6b6b6;
      transition: 0.1s ease-out;
    }
  }

  @media screen and (max-width: 1070px) {
    padding: 1.4rem;
    margin-bottom: 1rem;
  }
`;

const InputTextBar = (props) => {
  return (
    <InputText
      autoFocus={props.autoFocus}
      value={props.value}
      onChange={(e) => props.handleChange(e.target.value)}
      isDark={props.isDark}
      type="text"
      placeholder={props.placeholder}
    />
  );
};

export default InputTextBar;
