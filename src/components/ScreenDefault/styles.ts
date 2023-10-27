import styled from "styled-components";
import { SafeAreaView, KeyboardAvoidingView } from "react-native";

import { colors } from "~/styles";

export const Container = styled(SafeAreaView)`
  background-color: ${colors.purple};
  flex: 1;
`;

export const Keyboard = styled(KeyboardAvoidingView)`
  flex: 1;
`;

export const Footer = styled(SafeAreaView)`
  background-color: ${colors.orange};
  flex: 0;
`;

export default {
  Container,
  Keyboard,
  Footer,
};
