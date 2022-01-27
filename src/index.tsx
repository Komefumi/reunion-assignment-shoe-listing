import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "@app/App";
import store from "@state/store";
import "./global-styles.scss";

render(<Provider store={store}><App /></Provider>, document.getElementById("entry"));
