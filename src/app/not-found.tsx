import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-8xl font-bold text-blue-500">404</h1>
        <h2 className="text-2xl font-semibold text-slate-200">Sayfa Bulunamadı</h2>
        <p className="text-slate-400 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild variant="default">
            <Link href="/tr">Ana Sayfa</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/tr/contact">İletişim</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
