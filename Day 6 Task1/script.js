class Movie{
    constructor(title,studio,rating="PG"){
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
   static getPG(arr) {
      let pgfilms = arr.filter((movie) => movie.rating == "PG");
       return pgfilms;     
   }

  }
  let a = new Movie("Casino Royale", "Eon Productions", "PG-13");
 console.log(a);
 // //Movie {
 //   title: 'Casino Royale',
 //   studio: 'Eon Productions',
 //   rating: 'PG-13'
 // }
  let b = new Movie("Interstellar", "Warner Bros. Pictures");
  let c = new Movie("Avengers Endgame", "Marvel Studios");
  let d = new Movie("Spiderman Into the Spiderverse", "Sony Pictures", "PG");
  let e = new Movie("Soul", "Walt Disney Pictures", "G");
  console.log(Movie.getPG([a, b, c, d, e]));