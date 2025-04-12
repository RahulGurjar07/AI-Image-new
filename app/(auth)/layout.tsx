import Image from 'next/image'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <main className="auth">{children}</main>
    <main className="relative h-screen w-full">
            <div className="absolute size-full">
              <Image src="/images/bg-img.png" alt="backgound" fill className="size-full" />
            </div>
              {children}
          </main>
  )
}

export default Layout
// 
