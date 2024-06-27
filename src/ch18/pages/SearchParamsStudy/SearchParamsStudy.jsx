import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchParamsStudy(props) {
    const [ searchParams, setSearchParams ] = useSearchParams();
    // const values = searchParams.values();

    console.log(searchParams.get("a"))
    console.log(searchParams.get("b"))

    // console.log(values.next());
    // console.log(values.next());

    // setSearchParams({...searchParams, c: 30});

    const handleClick = () => {
        const keys = searchParams.keys();
        // console.log(keys.next().value);
        // console.log(keys.next().value);
        let newParams = {}
        for(let i = 0; i < searchParams.size; i++) {
            // console.log(keys.next().value)
            const key = keys.next().value;
            const value = searchParams.get(key);
            newParams = {
                ...newParams,
                [key]: value
            }
        }
        setSearchParams({...newParams, c: 30});
    }

    return (
        <div>
            <h1>SearchParams</h1>
            <button onClick={handleClick}>c=30 추가</button>
        </div>
    );
}

export default SearchParamsStudy;