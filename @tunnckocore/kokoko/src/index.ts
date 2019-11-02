import stringify from 'stringify-github-short-url';
import { qux } from './barry/qux';

export default (foo: string) => {
  console.log(qux(1, 2));
  return stringify(foo, 'barry-123');
};
