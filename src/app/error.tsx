'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold text-red-500">Hata!</h1>
        <h2 className="text-2xl font-semibold text-slate-200">Bir şeyler ters gitti</h2>
        <p className="text-slate-400 max-w-md mx-auto">
          Beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} variant="default">
            Tekrar Dene
          </Button>
          <Button asChild variant="outline">
            <Link href="/tr">Ana Sayfa</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
