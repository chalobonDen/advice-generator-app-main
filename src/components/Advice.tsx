'use client'
import React, { useState } from 'react'

import { useQuery } from '@tanstack/react-query'

import { Card } from './Base/Card'
import DiceIcon from '@/assets/sprite/svg/icon-dice.svg?sprite'
import { cn } from '@/lib/utils'
import { AdviceService } from '@/services'

const Advice = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isShake, setIsShake] = useState<boolean>(false)

  // _Query
  const {
    data: advices,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['get-advices'],
    queryFn: async () => {
      const response = await AdviceService.getAdviceslip()
      return response
    },
  })

  const handleShake = async () => {
    setIsShake(true)
    await refetch() // Trigger a new fetch
    setIsShake(false)
  }

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error fetching advice</div>

  return (
    <div>
      <Card className={cn('bg-gray-550 w-full p-5 md:w-[500px]', 'relative')}>
        <div className={cn('text-green-250 text-center text-xs font-bold')}>ADVICE #{advices?.slip?.id}</div>
        <div className={cn('text-gray-150 py-5')}>{advices?.slip?.advice}</div>
        <div className={cn('flex items-center justify-between space-x-3 pb-10')}>
          <div className={cn('border-gray-150 w-full border-b opacity-25')} />
          <div className={cn('flex space-x-2')}>
            <div className={cn('bg-gray-150 h-4 w-1.5 rounded-full')} />
            <div className={cn('bg-gray-150 h-4 w-1.5 rounded-full')} />
          </div>
          <div className={cn('border-gray-150 w-full border-b opacity-25')} />
        </div>

        <div
          onClick={handleShake}
          className={cn(
            'bg-green-250 h-14 w-14 cursor-pointer rounded-full',
            'flex items-center justify-center',
            'absolute -bottom-6 left-1/2 -translate-x-1/2 transform',
            'hover:shadow-green-250 hover:shadow-2xl',
          )}
        >
          <DiceIcon className={cn('h-6 w-6')} />
        </div>
      </Card>
    </div>
  )
}

export default Advice
