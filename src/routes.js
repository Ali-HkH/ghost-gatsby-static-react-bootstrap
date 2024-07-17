import Home from "./Pages/Home/Home";
import Tag from "./Pages/Tag/Tag";
import Author from "./Pages/Author/Author";
import About from "./Pages/About/About";
import ArticleInfo from "./Pages/ArticleInfo/ArticleInfo";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/tag", element: <Tag /> },
  { path: "/author", element: <Author /> },
  { path: "/about", element: <About /> },
  { path: "/articleInfo/:articleID", element: <ArticleInfo /> },
];

export default routes;
