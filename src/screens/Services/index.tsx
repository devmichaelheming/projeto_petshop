import React from "react";
import S from "./styles";
import { StatusBar, FlatList } from "react-native";
import { ItemProps } from "./Model";
import Item from "./Item";

const listServices: ItemProps[] = [
  {
    id: 1,
    name: "Banho",
    price: 79.9,
    description: "NÃO DÊ BANHO NO SEU GATO! mas se precisar nós damos.",
  },
  {
    id: 2,
    name: "Vacina V4",
    price: 89.9,
    description: "Uma dose da vacina V4. Seu gato precisa de duas.",
  },
  {
    id: 3,
    name: "Vacina Antirrábica",
    price: 99.9,
    description: "Uma dose da vacina antirrábica. Seu gato precisa de uma por ano.",
  },
];

const Services = () => {
  return (
    <S.Container>
      <StatusBar />
      <FlatList
        data={listServices}
        removeClippedSubviews={false}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </S.Container>
  );
};

export default Services;
