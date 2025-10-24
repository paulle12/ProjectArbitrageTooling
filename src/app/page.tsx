"use client";

import { useEffect, useState } from "react";
import RowBox from "@/components/RowBox";

export default function ArbitrageInternal() {

  const [arbitrage, setArbitrage] = useState([]);

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
            isArbitrage={arb.is_arbitrage}
            market={arb.kalshiMarket}
            arbitrageAmount={arb.arbitrage_amount.toFixed(2)}
            market2={arb.polymarket}
          />
          </div>
        )
      })}
    </div>
  );
}
