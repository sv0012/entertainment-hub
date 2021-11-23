import axios from "axios";
import Chip from '@material-ui/core/Chip';
import { useEffect } from "react";

const Genres = ({   
    genres,
    setGenres,
    selectedGenres,
    setSelectedGenres,
    type,
    setPage
}) => {

    const handleAdd= (genre) => {
        setSelectedGenres([...selectedGenres,genre]);
        setGenres(genres.filter((g)=>g.id!==genre.id));
        setPage(1);
    }

    const handleRemove= (genre) => {
        setSelectedGenres(selectedGenres.filter((selected)=>selected.id!==genre.id));
        setGenres([...genres,genre]);
        setPage(1);
    }
     
    const fetchGenres= async() => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
        setGenres(data.genres)
    };

    useEffect(() => {
        fetchGenres();
        return () => {
            setGenres({});
        };
    }, []);

    
    return (
        <div style={{ padding: "6px 0" }} >

                {selectedGenres && selectedGenres.map((genre) => (
                    <Chip 
                    label={genre.name} 
                    style={{ margin : 2 }} 
                    size="small" 
                    key={genre.id}
                    color="primary"
                    onDelete={()=>handleRemove(genre)}
                    clickable 
                     />
                ))
                }



            {genres.map((genre) => (
                    <Chip 
                    label={genre.name} 
                    style={{ margin : 2 }} 
                    size="small" 
                    key={genre.id}
                    onClick={()=>handleAdd(genre)}
                    clickable 
                     />
                ))
                }
            
        </div>
    );
};

export default Genres