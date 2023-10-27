import React, { FC, ReactElement } from "react";
import { numberFormat } from "~/utils/functions";

import S from "./styles";

interface StatusCartProps {
  total: number;
}

const StatusCart = ({ total }: StatusCartProps) => {
  return (
    <S.Container>
      <S.Total>
        <S.Description>Total do carrinho:</S.Description>
        <S.Value>{numberFormat(total, "BRL")}</S.Value>
      </S.Total>

      <S.ButtonRN title="Concluir pedido" inverted action={() => {}} />
    </S.Container>
  );
};

export default StatusCart;
