// NOTE: This component is based off of https://dev.to/sandra_lewis/building-a-multi-range-slider-in-react-from-scratch-4dl1
// The code is comprehended and altered to suit the assignment's needs. Credit is given as due

import { ChangeEvent, useCallback, useEffect, useRef } from "react";
import clsx from "clsx";
import type { RangeSliderProps } from "@my-types/prop-types";
import classes from "./classes.module.scss";

const RangeSlider = ({
  lowerBound,
  upperBound,
  currentLowerValue,
  currentHigherValue,
  setLowerAndHigherValues,
}: RangeSliderProps) => {
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) =>
      Math.round(((value - lowerBound) / (upperBound - lowerBound)) * 100),
    [lowerBound, upperBound]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(currentLowerValue);
      const maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [currentLowerValue, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(currentHigherValue);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [currentHigherValue, getPercent]);

  return (
    <div>
      <input
        type="range"
        min={lowerBound}
        max={upperBound}
        value={currentLowerValue}
        ref={minValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const valueGainedForLower = Math.min(
            +event.target.value,
            currentHigherValue - 1
          );
          setLowerAndHigherValues([valueGainedForLower, currentHigherValue]);
          event.target.value = valueGainedForLower.toString();
        }}
        className={clsx(
          classes.thumb,
          classes["thumb--zindex-3"],
          currentLowerValue > currentHigherValue - 100 &&
            classes["thumb--zindex-5"]
        )}
      />
      <input
        type="range"
        min={lowerBound}
        max={upperBound}
        value={currentHigherValue}
        ref={maxValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const valueGainedForHigher = Math.max(
            +event.target.value,
            currentLowerValue + 1
          );
          setLowerAndHigherValues([currentLowerValue, valueGainedForHigher]);
          event.target.value = valueGainedForHigher.toString();
        }}
        className={clsx(classes.thumb, classes["thumb--zindex-4"])}
      />

      <div className={classes.slider}>
        <div className={classes.slider__track}></div>
        <div ref={range} className={classes.slider__range}></div>
        <div className={classes["slider__left-value"]}>{currentLowerValue}</div>
        <div className={classes["slider__right-value"]}>
          {currentHigherValue}
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
