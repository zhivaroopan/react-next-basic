import React from 'react'
import Link from 'next/link'

function News() {
  return (
    <>
    <h1>The News Page</h1>
    <ul>
        <li>
            <Link href='/news/idda'>
                Crypto market crashed again!!
            </Link>
        </li>
        <li>
            Nifty 50 increased by 6% in one day!!
        </li>
    </ul>
    </>
  )
}

export default News