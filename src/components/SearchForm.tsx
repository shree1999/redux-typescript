import { useState } from 'react';

import { useActions } from '../hooks/useActionHook';

export const SearchForm: React.FC = () => {
  const [text, setText] = useState('');
  const { searchRepositories } = useActions();

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(text);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="search a package..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};
