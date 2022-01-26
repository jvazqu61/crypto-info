import axios from "axios";
import AllCoins from "./components/AllCoins";
import Trending from "./components/Trending";


export default function Home(props) {
  return (
    <div >
      <h1 className="text-3xl font-bold underline">
        crypto app
      </h1>
      

      <main className="columns-2xs">
        {/* left side bar - trending  */}
        <div className="w-[20rem] border-x-4 border-red-500">
          left sidebar
          <Trending trendingCoins={props.trending} />
        </div>

        {/* right - cards */}
        <div className="w-[40rem] border-x-4 border-purple-400 ml-20">
          <AllCoins />
        </div>
        
      </main>

      
    </div>
  )
}


export async function getStaticProps() {

  try {
    var resTrending = await axios.get('https://api.coingecko.com/api/v3/search/trending');
    var resCoins = await axios.get('https://api.coingecko.com/api/v3/coins/list?include_platform=false');
    console.log(resCoins);
  } catch (error) {
    console.log(error);
  }





  // return a trending array and a regular array of coins
  return {
    props: {
      trending: resTrending.data.coins,
    },
  }
}
