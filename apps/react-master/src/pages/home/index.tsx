import Navigation from '@/components/Navigation'
import React, { useState } from 'react'
import Card from '@/components/Card'
import Tabs from '@/pages/home/Tabs'

export default function Home() {
  const [hide, setHide] = useState<boolean>(true)

  const handleChange = (isHide: boolean) => {
    console.log('isHide', isHide)
    setHide(isHide)
  }

  return (
    <div className="bg-slate-100">
      <Navigation hide={hide} />
      <div className="mx-auto max-w-5xl flex my-2 px-2">
        <Card className="w-2/3">
          <Tabs onChange={handleChange} />
        </Card>
        <div className="w-1/3">
          <Card>
            <div>222</div>
          </Card>
        </div>
      </div>
    </div>
  )
}
