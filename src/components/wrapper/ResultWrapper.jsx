import { PosterCard } from '../card/PosterCard';
import { useFetchMovies } from '../hooks/useFetchMovies';

export const ResultWrapper = () => {
  const { results } = useFetchMovies();
  const { data, isLoading } = results;

  return (
    <div className="resultWrapper">
      {isLoading ||
        data.map((movie, key) => {
          return <PosterCard movie={movie} key={key} />;
        })}
    </div>
  );
};
