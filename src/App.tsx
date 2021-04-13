import { ListRepo } from './components/ListRepo';
import { SearchForm } from './components/SearchForm';

export const App: React.FC = () => {
  return (
    <div>
      <h1>React-Redux and Typescript</h1>
      <SearchForm />
      <ListRepo />
    </div>
  );
};
