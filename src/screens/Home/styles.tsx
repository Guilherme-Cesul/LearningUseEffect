import styled from "styled-components/native";

export const Container = styled.View`
  padding: 20px;
  background-color: #9c9c9c;
  flex: 100%;
`;

export const Input = styled.TextInput`
  height: 50px;
  border-width: 1px;
  border-color: #0364d3;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #ececec;
  margin-top: 30px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Tag = styled.View`
  width: 115px;
  height: 50px;
  border-radius: 999px;
  border-color: #0364d3;
  border-width: 1px;
  background-color: #ececec;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 4px;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  padding: 8px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #0364d3;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #ececec;
`;

export const CountdownText = styled.Text`
  font-size: 12px;
`;
