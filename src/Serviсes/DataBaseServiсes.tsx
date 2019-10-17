export default class DataBaseServiсes {
     API_KEY:string   = '23315c01cb32eba5fcb03d0ad0a1ef43';
     BASE_URL:string  = "https://api.themoviedb.org/3";
     SEARCH_PARAMS:string  = `api_key=${this.API_KEY}&language=ru`;

    getResource = async (type:string) => {
      const res = await fetch(`${this.BASE_URL}${type}&${this.SEARCH_PARAMS}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${type}` +
          `, received ${res.status}`)
      }
      return await res.json();
    };
  
    getSearchQuery = async (name:string) => {
      const res = await this.getResource(`/search/multi?query=${name}`);
      return res.results
   
    };
  
    getSpecificMovieInfo = async (id:number) => {
      const res = await this.getResource(`/movie/${id}?`);
      return this._transformMovie(res);
    };
  
    getPopularMovieList = async () => {
      const res = await this.getResource('/movie/popular?');
      return res
   
    };
    _transformMovie = (movie:any) => {
      return {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
       
      }
    }

  }