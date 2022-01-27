import axios from "axios";
import AllCoins from "./components/AllCoins";
import Trending from "./components/Trending";


export default function Home(props) {
  return (
    <div className="p-10 flex items-center justify-center">
     
      
      {/* left side bar - trending  */}
      
        <Trending trendingCoins={props.trending} />
        

      {/* right - cards */}
      {/* <div className="w-[40rem] border-x-4 border-purple-400 ml-20">
        <AllCoins />
      </div> */}
        
      

      
    </div>
  )
}


export async function getStaticProps() {

  try {
    var resTrending = await axios.get('https://api.coingecko.com/api/v3/search/trending');
    var resCoins = await axios.get('https://api.coingecko.com/api/v3/coins/list?include_platform=false');
    // console.log(resCoins);
  } catch (error) {
    console.log(error);
  }

  // return a trending array and a regular array of coins
  return {
    props: {
      trending: resTrending.data.coins,
      // AllCoins: resCoins.data,
    },
  }
}
