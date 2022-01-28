import {GlobeIcon, AtSymbolIcon, SelectorIcon} from '@heroicons/react/solid';

export default function CoinInfo(props) {
    return (
        // <div className=" bd-gray max-w-[800px] hover:scale-105 transition duration-200 ease-out hover:text-black/100 bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-20 border-gray-400">
        //     <h1 className="text-8xl font-medium text-gray-700 pt-12">{props.name}</h1>
        //     <h3>{props.symbol}</h3>
        //     <p>{props.description}</p>
        //     <img src={props.img}/>
        //     <p>Market cap rank: {props.market_cap_rank}</p>
        //     <p>Developer score: {props.developer_score}</p>
        //     <p>Community score: {props.community_score}</p>
        //     <p>Liquidity score: {props.liquidity_score}</p>
        //     <p> Country of origin: {props.country_origin}</p>
        // </div>
        <div >
            <div className="flex items-start m-[auto]  w-[900px]">
                <h1 className=" text-7xl font-medium text-gray-700 pt-12">{props.name}</h1>
                <img className="w-[4rem] h-[4rem] mt-[3rem] ml-4" src={props.img}/>
            </div>
            <div className="flex items-center">
                <div>
                    <div className=" min-h-[250px] max-h-[500px]  bd-gray hover:scale-105 transition duration-200 ease-out hover:text-black/100 bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-20 border-gray-400">
                        <h2 className="text-2xl"><u>Stats</u></h2>
                        <div className="flex m-3">
                            <GlobeIcon className="w-5 h-5" /> 
                        {props.country_origin?<p className="ml-3">{props.country_origin}</p>:<p className="ml-3">Origin Not Found</p>} 
                        </div>
                        
                        <div className="flex m-3">
                            <AtSymbolIcon className="w-5 h-5"/>
                            <p className="ml-3"> {props.symbol}</p> 
                        </div>
                        <div className="flex m-3">
                            <SelectorIcon className="w-5 h-5"/>
                            <p className="ml-3">Market cap rank: {props.market_cap_rank}</p>
                        </div>
                    </div>
                    <div className=" min-h-[250px] max-h-[500px] bd-gray hover:scale-105 transition duration-200 ease-out hover:text-black/100 bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-20 border-gray-400">
                        <h2 className="text-2xl"><u>Scores</u></h2>
                        <p className="mt-5">Developer score: {props.developer_score}</p>
                        <p className="mt-5">Community score: {props.community_score}</p>
                        <p className="mt-5">Liquidity score: {props.liquidity_score}</p> 
                    </div> 
                </div>
                
                
                <div className="ml-[5rem] bd-gray hover:scale-105 transition duration-200 ease-out hover:text-black/100 bg-white font-semibold text-center  border shadow-sm max-w-[900px] h-[600px] m-20 rounded-xl w-[800px] items-center p-10">
                    
                    <h2 className="text-4xl"><u>Description</u></h2>
                    <div contentEditable={true} className="mt-[3.5rem] text-[24px] m-[auto] h-[200px] w-[600px]">{props.description}</div>
                </div>
              
              
            </div>
            
            

        </div>
    )
}
