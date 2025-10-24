import React from 'react';
import Image from 'next/image';

const scoreColor = (score: string) =>
  Number(score) >= 0 ? "text-green-600" : "text-red-600";

export interface MarketData {
  kalshiMarket: Market;
  polymarket: Market;
  is_arbitrage: boolean;
  arbitrage_amount: number;
}

export interface Market {
  ticker: string;
  eventTicker: string;
  title: string;
  category: string;
  status: string;
  openTime: string;   // ISO date string
  closeTime: string;  // ISO date string
  yesAskDollars: string;
  noAskDollars: string;
  americanYesOdds: string;
  americanNoOdds: string;
  orderBook: OrderBook | null;
}

export interface OrderBook {
  yes_dollars: number[];
  no_dollars: number[];
}


// think about adding in specific icons and debuffs think about how much screen space this will take
// shift elements up 

const RowBox = ({ is_arbitrage, kalshiMarket, arbitrage_amount, polymarket }: MarketData) => {
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
          {kalshiMarket.title}
          <div className={`flex justify-between text-sm w-40 ${scoreColor(kalshiMarket.americanYesOdds)}`}>
            <p>yes</p>
            <p>{Number(kalshiMarket.yesAskDollars).toFixed(2)}</p>
            <p>{kalshiMarket.americanYesOdds}</p>
          </div>

          <div className={`flex justify-between text-sm w-40 ${scoreColor(kalshiMarket.americanNoOdds)}`}>
            <p>no</p>
            <p>{Number(kalshiMarket.noAskDollars).toFixed(2)}</p>
            <p>{kalshiMarket.americanNoOdds}</p>
          </div>
           <a
            href={`https://kalshi.com/markets/kxnflgame/professional-football-game/${kalshiMarket.eventTicker}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:underline break-all"
          >
            Kalshi Link
          </a>
        </div>
      

        {/* Vertical Divider */}
        <div className="w-[1px] self-stretch bg-cyan-400 rounded" />

        {/* polymarket */}
        <div className="flex flex-col justify-center w-full">
          {polymarket.title}
          <div className={`flex justify-between text-sm w-40 ${scoreColor(polymarket.americanYesOdds)}`}>
            <p>yes</p>
            <p >{Number(polymarket.yesAskDollars).toFixed(2)}</p>
            <p>{polymarket.americanYesOdds}</p>
          </div>

          <div className={`flex justify-between text-sm w-40 ${scoreColor(polymarket.americanNoOdds)}`}>
           <p>no</p>
           <p>{Number(polymarket.noAskDollars).toFixed(2)}</p>
           <p>{polymarket.americanNoOdds}</p>
          </div>
          <a
            href={`https://polymarket.com/sports/nfl-2025/games/week/7/${polymarket.eventTicker}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-500 hover:underline break-all"
          >
            PolyMarket Link
          </a>
        </div>

        {/* Score Block */}
        <div className={`flex w-1/10 items-center justify-center px-6 py-4 rounded-md border-2 text-2xl font-bold `}>
          {arbitrage_amount}
        </div>
        {/* Vertical Divider */}
        <div className="w-[1px] self-stretch bg-cyan-400 rounded" />

         {is_arbitrage ? (
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