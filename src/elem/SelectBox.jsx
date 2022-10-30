import styled from "styled-components";

const SelectBox = (props) => {
  const numArr = [];
  for (let i = props.a; i <= props.b; i++) {
    let optionObj = {};
    optionObj.value = i;
    optionObj.name = i;
    numArr.push(optionObj);
  }

  return (
    <Select {...props}>
      <option>{props.default}</option>
      {numArr.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </Select>
  );
};

export default SelectBox;

export const Select = styled.select`
  display: flex;
  margin: 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: ${(props) => props.wd};
  height: ${(props) => props.hg || "30px"};
  border-radius: 4px;
  font-size: 16px;
  padding: 3px;
  color: rgba(0, 0, 0, 0.6);

  &:focus {
    border-color: ${(props) => props.theme.mainC};
  }
`;
