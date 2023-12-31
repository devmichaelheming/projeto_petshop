import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { ItemProps } from "../Model";
import WholeField from "~/components/WholeField";
import S from "./styles";
import Button from "~/components/Button";
import { numberFormat } from "~/utils/functions";

export const Quantity = StyleSheet.create({
  quantidade: {
    width: 42,
  },
});

const Item = ({ name, price, description }: ItemProps) => {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);
  const [expand, setExpand] = useState(false);

  const updateQuantity = (newQuantity: number) => {
    setQuantity(newQuantity);
    sumTotal(newQuantity);
  };

  const sumTotal = (newQuantity: number) => {
    setTotal(newQuantity * price);
  };

  const invertedExpand = () => {
    setExpand(!expand);
    updateQuantity(1);
  };

  return (
    <>
      <S.Information onPress={invertedExpand}>
        <S.Name>{name}</S.Name>
        <S.Description>{description}</S.Description>
        <S.Price>{numberFormat(price, "BRL")}</S.Price>
      </S.Information>

      {expand && (
        <S.Cart>
          <View>
            <S.Value>
              <S.Quantity>Quantidade</S.Quantity>
              <WholeField value={quantity} action={updateQuantity} width={42} />
            </S.Value>

            <S.Value>
              <S.Quantity>Total</S.Quantity>
              <S.Price>{numberFormat(total, "BRL")}</S.Price>
            </S.Value>
          </View>
          <Button title="Adicionar ao carrinho" action={() => {}} />
        </S.Cart>
      )}

      <S.Divider />
    </>
  );
};

export default Item;
