import axios from "axios";
import CoinInfo from "../../components/CoinInfo";

export default function CoinInfoPage(props) {
  return (
    <CoinInfo name={props.name}
              symbol={props.symbol}
              description={props.description}
              img={props.img}
              market_cap_rank={props.market_cap_rank}
              developer_score={props.developer_score}
              community_score={props.community_score}
              liquidity={props.liquidity_score}
              country_origin={props.country_origin}
              />
  );
}

export async function getServerSideProps(context) {

    const httpURL = `https://api.coingecko.com/api/v3/coins/${context.query.CoinInfo.trim()}?tickers=false&market_data=false&community_data=false&developer_data=true&sparkline=false`

    try {
       var resCoin = await axios.get(httpURL);
    } catch (error) {
      return {
        // returns the default 404 page with a status code of 404
        notFound: true
      }
    }
    return {
        props: {
            name: resCoin.data?.name,
            symbol: resCoin.data?.symbol,
            description: resCoin.data?.description.en,
            img: resCoin.data?.image.large,
            market_cap_rank: resCoin.data?.market_cap_rank,
            developer_score: resCoin.data?.developer_score,
            community_score: resCoin.data?.community_score,
            liquidity_score: resCoin.data?.liquidity_score,
            country_origin:  resCoin.data?.country_origin
        },
      } 
}
