export default class DataBaseServiсes {
     API_KEY   = '23315c01cb32eba5fcb03d0ad0a1ef43';
     BASE_URL  = "https://api.themoviedb.org/3";
     SEARCH_PARAMS  = `api_key=${this.API_KEY}&language=ru`;

    getResource = async (type) => {
      const res = await fetch(`${this.BASE_URL}${type}&${this.SEARCH_PARAMS}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${type}` +
          `, received ${res.status}`)
      }
      return await res.json();
    };
  
    getSearchQuery = async (name) => {
      const res = await this.getResource(`/search/multi?query=${name}`);
      return res.results
   
    };
  
    getIdMovie = async (id) => {
      const res = await this.getResource(`/movie/${id}?`);
      return res
   
    };
  
    getPopularMovieList = async () => {
      const res = await this.getResource('/movie/popular?');
      return res
   
    };


  }