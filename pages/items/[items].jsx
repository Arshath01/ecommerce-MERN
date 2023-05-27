import { useEffect, useState } from "react";

export async function getServerSideProps(context){
    const query = context.params;
    return {
        props:{query}
    }
}

export default function Items({query}) {
    const [data,setData] = useState('');

    useEffect(() => {
        fetch('../api/hello')
            .then(res => res.json())
            .then(data => setData(data))
    }, [query.items]);

    const category = data && data[query.items.split(" ")[0]].category;
    const match = data && Object.values(data).find((product) => product.category === query.items);

    console.log(match);

    return (
      <>
          <h1>{query.items}</h1>
          <p>Category: {category}</p>
      </>
    )
}
