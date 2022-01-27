import axios from "axios";
import Trending from "./components/Trending";


export default function Home(props) {
  return (
    <>
      <div className='flex items-center justify-center'>
        <h1  className="text-8xl font-medium text-gray-700 pt-12">Trending</h1>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>
      
      <div className="p-10 flex items-center justify-center">
        <Trending trendingCoins={props.trending} />
      </div>
    </>
  )
}


export async function getStaticProps() {

  try {
    var resTrending = await axios.get('https://api.coingecko.com/api/v3/search/trending');
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      trending: resTrending.data.coins,
    },
    revalidate: 1000, // In seconds
  }
}
