import DimBackground from "@ui/DimGreyBackground";
import Panel from "@ui/CleanWhitePanel";
import classes from "./App.module.scss";

export default function App() {
  return (
    <div className={classes.app}>
      <DimBackground className={classes.background}>
        <Panel
          className={classes.panel}
          headerChildren={<div>Header Content</div>}
        >
          <div>Body Content</div>
        </Panel>
      </DimBackground>
    </div>
  );
}
