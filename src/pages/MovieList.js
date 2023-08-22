import { Card } from '../components'
import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';


export const MovieList = ({apiPath, title}) => {
  const { data: movies } = useFetch(apiPath);
  // pageTitle 
  useTitle(title);



  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap other:justify-evenly '>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie}/>
          ))}
          
        </div>
      </section>
    </main>
  )
}
// https://api.themoviedb.org/3/movie/now_playing?api_key=af2787e09edee0ba52d0f4b98cd98a7c