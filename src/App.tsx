import { useFetch } from "./hooks/useFetch";

type Repository = {
  full_name: string;
  description: string;
}

function App() {
  const { data: reposiories, isFetching} = 
  useFetch<Repository[]>('https://api.github.com/users/pceolato/repos') 

  return (
   <ul>
     {isFetching && <p>Carregando...</p>}
     {reposiories?.map(repo => {
       return (
         <li key={repo.full_name}>
           <strong>{repo.full_name}</strong>
           <p>{repo.description}</p>
         </li>
       )
     })}
   </ul> 
   )
}

export default App
