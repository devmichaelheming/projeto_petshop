import React from "react";
import { FlatList } from "react-native";
import { ItemProps } from "./Model";
import Item from "./Item";
import StatusCart from "./Widgets/StatusCart";

const listServices: ItemProps[] = [
  {
    id: 1,
    name: "Banho",
    price: 79.9,
    description: "NÃO DÊ BANHO NO SEU GATO! mas se precisar nós damos.",
    quantity: 1,
  },
  {
    id: 2,
    name: "Vacina V4",
    price: 89.9,
    description: "Uma dose da vacina V4. Seu gato precisa de duas.",
    quantity: 2,
  },
  {
    id: 3,
    name: "Vacina Antirrábica",
    price: 99.9,
    description: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano.",
    quantity: 1,
  },
];

const Cart = () => {
  const total = listServices.reduce((sum, { price, quantity }) => sum + price * quantity, 0);

  return (
    <>
      <StatusCart total={total} />

      <FlatList
        data={listServices}
        removeClippedSubviews={false}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  );
};

export default Cart;
