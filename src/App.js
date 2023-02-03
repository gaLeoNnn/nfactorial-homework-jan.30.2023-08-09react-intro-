
import './App.css';
import Header from './components/header/header';
import ContentList from './components/content-list/content-list';
import Footer from './components/footer/footer';

//   .then((response) => response.json())
//   .then((result) => result.results.splice(7, 4))
//   .then((result) => {
//     console.log(result)
//   })


function App() {
  const data = [
    {
      id: 1,
      title: `Putin uses a World War II anniversary to vow victory in Ukraine.`,
      article: `As his military pressed its eastern campaign with missile strikes on a key Ukrainian military hub, President Vladimir V.Putin used a speech in the city formerly known as Stalingrad on Thursday to invoke the Soviets’ defeat of the Nazis in a decisive World War II battle and vow that Russia would be victorious again.`,
      img: '../images/Img.jpg'
    },
    {
      id: 2,
      title: `Russia's war in Ukraine`,
      article: `Ukraine's minister of defense said the country will provide guarantees that it would not strike Russia should it receive the long-range missiles it has been asking its allies for.`,
      img: '../images/second.png'

    },
    {
      id: 3,
      title: `It's nighttime in Kyiv. Here's what you need to know.`,
      article: `An international center for the prosecution of the "crime of aggression” in Ukraine will be set up in The Hague, the head of the European Commission, Ursula von der Leyen, announced on Thursday.`,
      img: '../images/third.png'
      
    }
  ]
  // const response = fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=flGfQIPCSNXUZmLzGIbeMJHfL6gBDhuP')
  // console.log(response);
  // const respJson =  await response.json();
  // console.dir(respJson)
  // const array = respJson.results.splice(7,4);
    return (
      <div className="App">
        <div className="conteiner">
          <Header />
          <ContentList news={data}/>
          <Footer/>
        </div>

      </div>
    );


  
}

export default App;
