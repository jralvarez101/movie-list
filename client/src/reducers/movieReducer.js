const initialState = [
  {
    poster_path:
      'https://image.tmdb.org/t/p/w500/t9nyF3r0WAlJ7Kr6xcRYI4jr9jm.jpg',
    title: 'Venom: Let There Be Carnage',
    vote_average: 7.5,
    overview:
      'After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer',
  },
  {
    poster_path:
      'https://image.tmdb.org/t/p/w500/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg',
    title: 'Free Guy',
    vote_average: 7.9,
    overview:
      'A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.',
  },
  {
    poster_path:
      'https://image.tmdb.org/t/p/w500/vFIHbiy55smzi50RmF8LQjmpGcx.jpg',
    title: 'Deathstroke: Knights & Dragons - The Movie',
    vote_average: 7.1,
    overview:
      'The assassin Deathstroke tries to save his family from the wrath of H.I.V.E. and the murderous Jackal.',
  },
];

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
