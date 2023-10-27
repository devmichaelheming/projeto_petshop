import Cart from "./src/screens/Cart";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import Routes from "~/routes";
import ScreenDefault from "~/components/ScreenDefault";
import Reactotron from "reactotron-react-native";

Reactotron.configure().useReactNative().connect();

export default function App() {
  return (
    <ScreenDefault>
      <Routes />
    </ScreenDefault>
  );
}
