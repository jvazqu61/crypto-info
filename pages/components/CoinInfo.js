export default function CoinInfo(props) {
    return (
        <div className=" bd-gray max-w-[800px] hover:scale-105 transition duration-200 ease-out hover:text-black/100 bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-20 border-gray-400">
            <h1 className="text-8xl font-medium text-gray-700 pt-12">{props.name}</h1>
            <h3>{props.symbol}</h3>
            <p>{props.description}</p>
            <img src={props.img}/>
            <p>Market cap rank: {props.market_cap_rank}</p>
            <p>Developer score: {props.developer_score}</p>
            <p>Community score: {props.community_score}</p>
            <p>Liquidity score: {props.liquidity_score}</p>
            <p> Country of origin: {props.country_origin}</p>
        </div>
    )
}
