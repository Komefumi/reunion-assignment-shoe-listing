import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "./store";
import type { IState } from "@my-types/state";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IState> = useSelector;
