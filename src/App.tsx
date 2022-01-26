import DimBackground from "@ui/DimBackground";
import Panel from "@ui/DisplayPanel";
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
