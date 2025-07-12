import { Link } from "react-router-dom";
import { Articles } from "../data/Articles";
export default function ArticleSection() {
  return (
    <div className="h-auto w-full flex flex-col items-center justify-center bg-gray-100 p-4">
  

      
  {Articles.map((article) => (
      <div key={article.slug} className="article-item">
        <Link to={`/Article/${article.slug}`}>Link for a3teeyakl {article.title}</Link>
      </div>
  ))}










    </div>
  )
}
