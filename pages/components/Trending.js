import React from 'react';

export default function Trending(props) {
  return <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 h-screen text-black/80">
      {props.trendingCoins.map((coin, index) => {
        return (
            <div key={coin.item.name} className="min-w-[190px] hover:scale-105 transition duration-200 ease-out hover:text-black/100 bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs mb-5 border-gray-400">
                <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src={coin.item.large} alt="coin image" />
                <h1 className="text-lg text-gray-700"> {coin.item.name} </h1>
                <h3 className="text-sm text-gray-400 "> {coin.item.symbol} </h3>
                <p className="text-xs text-gray-400 mt-4"> Rank: {coin.item.market_cap_rank} </p>
                <p className="text-xs text-gray-400 mt-4"> Price: {coin.item.price_btc} btc </p>
                <button className="hover:bg-red-300 bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">More</button>
            </div>
           )
      })}
  </div>;
}