import { Store as PullStateStore } from 'pullstate';

const Store = new PullStateStore({
  user: null,
});

export default Store;
