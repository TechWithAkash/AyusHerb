
import React from 'react';
import Script from 'next/script';
const contact = () => {
    return (
<div className='flex justify-center'>
    <Script>
        {`alert("Welcome to COntact Page");`}
    </Script>
    <h1 className=' font-bold text-3xl m-10'>Contact page</h1>
</div>)
}

export default contact;

export const metadata = {
    title: "contact | ChaiApp",
    description: "contact page | Today Chai🍵 with Code!!!!",
  };