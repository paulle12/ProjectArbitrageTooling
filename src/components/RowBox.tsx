import React from 'react';
import Image from 'next/image';

const scoreColor = (score: number) =>
  score >= 0 ? "text-green-600" : "text-red-600";

// think about adding in specific icons and debuffs think about how much screen space this will take
// shift elements up 

const RowBox = ({ isArbitrage, market, arbitrageAmount, market2 }: any) => {
  return (
    <div className={`w-full p-6 rounded-xl border-2  shadow-md`}>
      <div className="flex items-stretch space-x-6">
        {/* Icons Block */}
        {/* <div className="flex flex-col space-y-4 items-center">
          <div className="relative w-[60px] h-[60px]">
            <Image src={WowRoleImage} alt="Role Icon" fill className="object-contain" />
          </div>
          <div className="relative w-[60px] h-[60px]">
            <Image src={WowSpecImage} alt="Spec Icon" fill className="object-contain" />
          </div>
        </div> */}
        <div className="flex flex-col justify-center w-full">
          {market.title}
          <div className={`flex justify-between text-sm w-40 ${scoreColor(market.americanYesOdds)}`}>
            <p>yes</p>
            <p>{Number(market.yesAskDollars).toFixed(2)}</p>
            <p>{market.americanYesOdds}</p>
          </div>

          <div className={`flex justify-between text-sm w-40 ${scoreColor(market.americanNoOdds)}`}>
            <p>no</p>
            <p>{Number(market.noAskDollars).toFixed(2)}</p>
            <p>{market.americanNoOdds}</p>
          </div>
           <a
            href={`https://kalshi.com/markets/kxnflgame/professional-football-game/${market.event_ticker}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:underline break-all"
          >
            Kalshi Link
          </a>
        </div>
      

        {/* Vertical Divider */}
        <div className="w-[1px] self-stretch bg-cyan-400 rounded" />

        {/* market2 */}
        <div className="flex flex-col justify-center w-full">
          {market2.title}
          <div className={`flex justify-between text-sm w-40 ${scoreColor(market2.americanYesOdds)}`}>
            <p>yes</p>
            <p >{Number(market.yesAskDollars).toFixed(2)}</p>
            <p>{market.americanYesOdds}</p>
          </div>

          <div className={`flex justify-between text-sm w-40 ${scoreColor(market2.americanNoOdds)}`}>
           <p>no</p>
           <p>{Number(market.noAskDollars).toFixed(2)}</p>
           <p>{market.americanNoOdds}</p>
          </div>
          <a
            href={`https://polymarket.com/sports/nfl-2025/games/week/7/${market2.event_ticker}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:underline break-all"
          >
            PolyMarket Link
          </a>
        </div>

        {/* Score Block */}
        <div className={`flex w-1/10 items-center justify-center px-6 py-4 rounded-md border-2 text-2xl font-bold `}>
          {arbitrageAmount}
        </div>
        {/* Vertical Divider */}
        <div className="w-[1px] self-stretch bg-cyan-400 rounded" />

         {isArbitrage ? (
            <span title="Main Role" className="text-green-400 text-xl">✔️</span>
          ) : (
            <span title="Not Main Role" className="text-gray-500 text-xl">❌</span>
          )}
        {/* <div className={`w-1/10 border ${bgBorder} rounded-md px-4 py-2 space-y-1`}>
          <div className={"text-xl"}>
                <span className= 'font-bold text-white'>
                  {`current: ${seasonalScore}`}
                </span>
              </div>
              <span className=  'text-gray-300'>
                 {`previous: ${previousSeasonalScore}`}
                </span>
        </div> */}

      </div>
    </div>
  );
};

export default RowBox;