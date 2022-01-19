import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { AppDisptatch, RootState } from ".";

export const useAppDispatch = () => useDispatch<AppDisptatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
