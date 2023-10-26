import styled from "styled-components";
import { colors } from "../../../styles";
import { View, Text, TouchableOpacity } from "react-native";

export const Information = styled(TouchableOpacity)`
  padding: 24px;
`;

export const Name = styled(Text)`
  color: ${colors.orange};
  font-weight: 600;
  font-size: 16px;
`;

export const Calculation = styled(View)`
  color: ${colors.dark};
  font-size: 14px;
  margin: 0 80px;
`;

export const Price = styled(Text)`
  color: ${colors.purple};
  font-size: 16px;
  font-weight: 600;
  text-align: right;
`;

export const Divider = styled(View)`
  margin: 0 24px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.gray};
`;

export const Cart = styled(View)`
  padding: 0 24px;
  padding-bottom: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Value = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
  column-gap: 6px;
`;

export const Description = styled(Text)`
  color: ${colors.dark};
  font-size: 16px;
  margin-right: 8px;
`;

export const Quantity = styled(Text)`
  color: #000;
`;

export default {
  Information,
  Name,
  Calculation,
  Price,
  Divider,
  Cart,
  Value,
  Description,
  Quantity,
};
