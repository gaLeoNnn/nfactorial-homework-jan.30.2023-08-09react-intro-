import Content from "../content/content";
const ContentList = ({news}) => {
  const articles = news.map(item => {
    return(
    <Content name={item.title} article={item.article}/>
    )
  })
  return(
    <div className="content__column">
       {articles}
    </div>
  )
}
export default ContentList;
