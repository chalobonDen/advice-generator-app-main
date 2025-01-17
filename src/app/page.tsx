import Advice from '@/components/Advice'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <div className={cn('flex min-h-screen items-center justify-center p-5')}>
      <Advice />
    </div>
  )
}
