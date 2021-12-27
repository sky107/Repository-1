import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { useCharacters } from '../hooks/useCharacters';
import { useSearch } from '../hooks/useSearch';



export default () => {
    const CharacterList= useCharacters();
    const [search,setSearch]=useState('');
    const [getCharacter,{ error,loading,data,called}]=useSearch(search);

    console.log({
        error,
        loading,
        data,called
    })


    if (loading || CharacterList.loading) return <div>Spinner</div>

    if (error || CharacterList.error){ 

        return <div>Something went wrong.. Please refresh the page</div>}


    return <div>
        <div className='header-search-bar'>
            <input className='header-input' value={search} onChange={e=>setSearch(e.target.value)} />
            <button className='header-button' onClick={e=>getCharacter()}>SEARCH</button>
            <h2>   Creator : Siddharth Kumar Yadav  27/12/2021 </h2>
        </div>
        <div className='data-list'>
            {
               !search ? CharacterList.data?.characters?.results?.map((e,i)=> (

                    <div key={i}>
                        <img src={e.image} />
                        <h3>{e.name}</h3>
                    </div>


                ))
                :data?.characters.results.map((e,i)=>( <div key={i}>
                    <img src={e.image} />
                    <h3>{e.name}</h3>
                </div>))
            }
        </div>

    </div>
}