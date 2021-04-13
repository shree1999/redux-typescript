import { useSelector } from '../hooks/useSelectorHook';

export const ListRepo: React.FC = () => {
  const { repo } = useSelector(state => ({ ...state }));

  const { isLoading, data, error } = repo;

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {error ? (
            <p role="alert">{error}</p>
          ) : (
            <>
              <h1>Total Packages found: {data.length}</h1>
              {data.map(name => (
                <p key={name}>{name}</p>
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};
