"use client";

import { useEffect, useState } from "react";
import RowBox,{MarketData} from "@/components/RowBox";

export default function ArbitrageInternal() {

  const [arbitrage, setArbitrage] = useState<MarketData[]>([]);

  const fetchMatchingService = async () => {
    try {
      const res = await fetch(`https://projectarbitrage.onrender.com/data/getArbitrage`);
      
      const arbitrageData = await res.json();

      setArbitrage(arbitrageData);

    } catch (error) {

    } finally {

    }
  };

  useEffect(() => {
    fetchMatchingService();
  },[])

  console.log(arbitrage);
  return (
    <div>
      {arbitrage.map((arb) => {

        return (
          <div key={`${arb.kalshiMarket.title}-${arb.kalshiMarket.ticker}-${arb.polymarket.title}`}>
           <RowBox
            is_arbitrage={arb.is_arbitrage}
            kalshiMarket={arb.kalshiMarket}
            arbitrage_amount={Number(arb.arbitrage_amount.toFixed(2))}
            polymarket={arb.polymarket}
          />
          </div>
        )
      })}
    </div>
  );
}
