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
    <S.Button onPress={action} inverted={inverted} small={small}>
      <S.Value inverted={inverted}>{title}</S.Value>
    </S.Button>
  );
};

export default Button;
