import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../components/pages/HomePage';
import { IntroPage } from '../components/pages/IntroPage';
import { ProfilePage } from '../components/pages/ProfilePage';
import { SearchPage } from '../components/pages/SearchPage';
import { SignInPage } from '../components/pages/SignInPage';
import { SignUpPage } from '../components/pages/SignUpPage';
import { MovieInfoPage } from '../components/pages/MovieInfo';

// パスがルートの場合は、何を表示すればいいか？
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/movieinfo" element={<MovieInfoPage />} />
      <Route path="/home/profile" element={<ProfilePage />} />
      <Route path="/home/search" element={<SearchPage />} />
    </Routes>
  );
};

{
  /* <Route
path="/home"
render={({ match: { url } }) => (
  <Switch>
    {homeRoutes.map((route) => (
      <Route
        key={route.path}
        exact={route.exact}
        path={`${url}${route.path}`}
      >
        <>{route.children}</>
      </Route>
    ))}
  </Switch>
)}
/> */
}
