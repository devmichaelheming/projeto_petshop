import React, { ReactNode } from "react";
import { StatusBar, Platform } from "react-native";
import S from "./styles";
import { colors } from "~/styles";

interface ScreenDefault {
  children: ReactNode;
}

const ScreenDefault = ({ children }: ScreenDefault) => {
  return (
    <>
      <S.Container>
        <StatusBar backgroundColor={colors.purple} />

        <S.Keyboard behavior={Platform.OS === "ios" ? "padding" : "height"}>{children}</S.Keyboard>
      </S.Container>

      <S.Footer />
    </>
  );
};

export default ScreenDefault;
