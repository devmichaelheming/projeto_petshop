import React from "react";
import S from "./styles";

interface ButtonProps {
  title: string;
  action: () => void;
  inverted?: boolean;
  small?: boolean;
}

const Button = ({ title, action, inverted = false, small = false }: ButtonProps) => {
  return (
    <S.Button onPress={action}>
      <S.Value>{title}</S.Value>
    </S.Button>
  );
};

export default Button;
