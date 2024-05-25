'use client';

import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: {amount: number}) => 
{
  return (
    <div>
        <CountUp
            decimals={2}
            end={amount}
            prefix="$"
            decimal=','
        />
    </div>
  )
}

export default AnimatedCounter