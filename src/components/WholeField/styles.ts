import styled from "styled-components/native";
import { TextInput } from "react-native";
import { colors } from "../../styles";

interface InputProps {
  width: number;
}

export const Input = styled(TextInput)<InputProps>`
  height: 25px;
  border-width: 1px;
  border-color: ${colors.dark};
  text-align: center;
  width: ${({ width }) => width}px;
`;

export default {
  Input,
};
