import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../redux/actions";
import { useEffect } from "react";

const useGetTypes = () => {
    const dispatch = useDispatch();
    const types = useSelector(state => state.infoType);
  
  useEffect(() => {
    dispatch(getTypes())
  }, [dispatch])

  return types;
}

export default useGetTypes;