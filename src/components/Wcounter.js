import React from 'react';
import { useState } from 'react';
import "./wcounter.css"

export const Wcounter = () => {
    const [wcount,setWcount]=useState(1);
    const [ccount,setCcount]=useState(1);
    const textEl=document.querySelector('#textar');
    textEl.addEventListener('input',function(){
        let textval=textEl.value;
        let clen=textval.length;
        let textarray=textEl.split(/\s/);
        let wlen=textarray.length;
        setCcount(ccount=>ccount=clen);
        setWcount(wcount=>wcount=wlen)
    })


  return (
    <div className='wcounter'>
        <textarea name="" id="textar" rows={25} cols={75}></textarea>
        <section className='counterdetail'>
            <div className='wordcount'>
            <p>Word count</p>
            <span>{wcount}</span>
            </div>
            <div className='charactercount'>
            <p>Character count</p>
            <span>{ccount}</span>
            </div>
 
        </section>
    </div>
  )
}
