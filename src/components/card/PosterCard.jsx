export const PosterCard = (props) => {
  const { movie } = props;
  const base_url = 'https://image.tmdb.org/t/p/original';
  return (
    <img
      className="poster"
      src={`${base_url}${movie.poster_path}`}
      alt={movie.name}
    />
  );
};
