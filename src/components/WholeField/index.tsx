import React from "react";
import S from "./styles";

interface WholeFieldProps {
  value: number;
  action: (value: number) => void;
  width?: number;
}

const WholeField = ({ value, action, width = 42 }: WholeFieldProps) => {
  const handleUpdate = (newValue: string, actionReturn: (value: number) => void) => {
    const verifyInteger = newValue.match(/^[0-9]*$/);

    if (!verifyInteger) return;

    const removeZeroLeft = Number(newValue.replace(/^(0)(.+)/, "$2"));

    actionReturn(removeZeroLeft);
  };

  return (
    <S.Input
      width={width}
      keyboardType="number-pad"
      selectTextOnFocus
      maxLength={5}
      value={String(value)}
      onChangeText={(newValue: string) => {
        handleUpdate(newValue, action);
      }}
    />
  );
};

export default WholeField;
