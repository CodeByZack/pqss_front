import { createContainer } from './unstate-next';
import { useWindowWidth } from '../utils/hooks';

const useStore = () => {
  const windowWidth = useWindowWidth();
  return {
    windowWidth,
  };
};

const store = createContainer(useStore);
export default store;
