import axios from "axios";
import CoinInfo from "../../components/CoinInfo";

export default function CoinInfoPage(props) {
  return (
      <CoinInfo name={props.name}
              symbol={props.symbol}
              description={props.description}
              price_usd={props.price_usd}
              max_supply={props.max_supply}
              circulating_supply={props.circulating_supply}
              homepage={props.homepage}
              img={props.img}
              market_cap_rank={props.market_cap_rank}
              developer_score={props.developer_score}
              community_score={props.community_score}
              public_interest_score={props.public_interest_score}
              country_origin={props.country_origin}
              liquidity={props.liquidity_score}
              />
  );
}

export async function getServerSideProps(context) {

    const httpURL = `https://api.coingecko.com/api/v3/coins/${context.query.CoinInfo.trim()}?tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`

    try {
       var resCoin = await axios.get(httpURL);
    } catch (error) {
      return {
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
            public_interest_score: resCoin.data?.public_interest_score,
            country_origin:  resCoin.data?.country_origin,
            homepage: resCoin.data?.links.homepage[0],
            price_btc: resCoin.data?.market_data.current_price.btc,
            price_usd: resCoin.data?.market_data.current_price.usd,
            max_supply: resCoin.data?.market_data.max_supply,
            circulating_supply: resCoin.data?.market_data.circulating_supply
        },
      } 
}
