import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {basketSlice} from "@store/reducers/BasketSlice";
import {useMemo} from "react";


const rootAction = {
  ...basketSlice.actions,
}

export const useActions = () => {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}