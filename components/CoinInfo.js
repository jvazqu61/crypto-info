import {GlobeIcon, AtSymbolIcon, SelectorIcon} from '@heroicons/react/solid';
import MyHead from './MyHead';

export default function CoinInfo(props) {
    return (
        <div >
            <MyHead title={`Crypto Info | ${props.name}`} />
            <div className="flex justify-center m-[auto] content-center w-[900px]">
                <h1 className=" text-7xl font-medium text-gray-700 pt-12">{props.name}</h1>
                <img className="w-[4rem] h-[4rem] mt-[3rem] ml-4" src={props.img}/>
            </div>
            <div className="flex flex-wrap md:flex-auto max-w-[100%] min-w-[1000px] justify-center">
                <div className="flex md:flex-wrap lg:inline-block md:flex ">
                    <div className=" bg-slate-100 min-h-[250px] max-h-[500px]  bd-gray hover:scale-105 transition duration-200 ease-out hover:text-black/100  font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-20 border-gray-400">
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
                    <div className=" min-h-[250px] max-h-[500px] bd-gray hover:scale-105 transition duration-200 ease-out hover:text-black/100 bg-slate-100 font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs m-20 border-gray-400">
                        <h2 className="text-2xl"><u>Scores</u></h2>
                        <p className="mt-5">Developer score: {props.developer_score}</p>
                        <p className="mt-5">Community score: {props.community_score}</p>
                        <p className="mt-5">Liquidity score: {props.liquidity_score}</p> 
                    </div> 
                </div>
                
                
                <div className="ml-[5rem]  bd-gray hover:scale-105 transition duration-200 ease-out hover:text-black/100 bg-white font-semibold text-center  border shadow-sm  h-[600px] m-20 rounded-xl min-w-[500px] max-w-[1000px] items-center p-10">
                    
                    <h2 className="text-4xl"><u>Description</u></h2>

                    {/* dangerous to use, but text recieved from api includes html inside */}
                    <p dangerouslySetInnerHTML={{__html: props.description}} className="mt-[3.5rem] text-[24px] m-[auto] h-[400px] w-[80%] overflow-y-auto scrollbar-hide" />
                </div>
              
              
            </div>
            
            

        </div>
    )
}
