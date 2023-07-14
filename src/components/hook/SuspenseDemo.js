import { Suspense,useState } from "react";

function SearchResults({query})
{
    console.log('child render');
    return(
        <div>
            Search Result {query}
        </div>
    )
}
export default function SuspenseDemo()
{
  const [query, setQuery] = useState('');
  return (
    <>
      <label>
        Search albums:
        <input value={query} onChange={e => setQuery(e.target.value)} />
      </label>
      <Suspense fallback={<h2>Loading...</h2>}>
            <SearchResults query={query} />
      </Suspense>
    </>
  );
}