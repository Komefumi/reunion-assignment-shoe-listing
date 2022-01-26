import DimBackground from "@ui/DimBackground";
import Panel from "@ui/DisplayPanel";
import SearchIconSVG from "@assets/search-icon.svg";
import classes from "./App.module.scss";

export default function App() {
  console.log({ SearchIconSVG });
  return (
    <div className={classes.app}>
      <DimBackground className={classes.background}>
        <Panel
          className={classes.panel}
          headerChildren={
            <div className={classes.panel_header_content}>
              <h4 className={classes.title}>Shoe</h4>

              <div className={classes.search_bar}>
                <SearchIconSVG className={classes.search_icon} />
                <input className={classes.search_input} type="text" />
              </div>
            </div>
          }
        >
          <div>Body Content</div>
        </Panel>
      </DimBackground>
    </div>
  );
}
