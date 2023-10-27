import styled from "styled-components/native";
import { TouchableOpacity, Text } from "react-native";

import { colors } from "~/styles";

interface ButtonProps {
  small?: boolean;
  inverted?: boolean;
}

export const Button = styled(TouchableOpacity)<ButtonProps>`
  width: 140px;
  padding: ${({ small }) => (small ? "3px 20px" : "9px 20px")};
  background-color: ${({ inverted }) => (inverted && inverted ? colors.orange : colors.purple)};
  border-radius: 8px;
`;

export const Value = styled(Text)<ButtonProps>`
  font-weight: 600;
  text-align: center;
  color: ${({ inverted }) => (inverted && inverted ? colors.purple : colors.orange)};
`;

export default {
  Button,
  Value,
};
