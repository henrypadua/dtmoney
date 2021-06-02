import { useEffect } from "react";
import { api } from "../../services/app";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvovimento WebSite</td>
            <td className="withdraw">R$12.000,00</td>
            <td>Desenvovimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvovimento WebSite</td>
            <td className="withdraw">R$12.000,00</td>
            <td>Desenvovimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvovimento WebSite</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvovimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Desenvovimento WebSite</td>
            <td className="deposit">R$12.000,00</td>
            <td>Desenvovimento</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
