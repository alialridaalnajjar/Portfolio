import { Articles } from "@/data/Articles";
import { useParams } from "react-router-dom";

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = Articles.find((article) => article.slug === slug);
  if (!article) {
    return <div>Article not found</div>;
  }
  return (
    <div>
      {article.title}
      {article.img}
      {article.description}
    </div>
  );
}
