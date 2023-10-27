import styled from "styled-components";
import { View, Text } from "react-native";
import Button from "~/components/Button";

import { colors } from "~/styles";

export const Container = styled(View)`
  background-color: ${colors.purple};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 24px;
`;

export const Total = styled(View)`
  align-items: center;
`;

export const Description = styled(Text)`
  font-size: 16px;
  color: ${colors.white};
  font-weight: 600;
`;

export const Value = styled(Text)`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.orange};
  margin: 6px 0;
`;

export const ButtonRN = styled(Button)`
  flex-grow: 1;
  align-items: center;
`;

export default {
  Container,
  Total,
  Description,
  Value,
  ButtonRN,
};
