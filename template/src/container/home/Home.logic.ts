import { HomeSelector} from './Home.redux-selector';
import {useSelector, useDispatch} from 'react-redux';
export const HomeLogic = () => {
  const dispatch = useDispatch();
  const {} = useSelector(HomeSelector);
  return {};
}