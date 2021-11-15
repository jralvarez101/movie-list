const initialState = [
  {
    poster_path:
      'https://image.tmdb.org/t/p/w500/ApwmbrMlsuOay5rXQA4Kbz7qJAl.jpg',
    title: 'Solitary',
    vote_average: 6.7,
    overview:
      "A man wakes up inside a room to discover he's a prisoner sent into space to form Earth's first colony, and worse - his cell mate Alana is hell bent",
  },
  {
    poster_path:
      'https://image.tmdb.org/t/p/w500/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg',
    title: 'The Suicide Squad',
    vote_average: 7.8,
    overview:
      'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force',
  },
  {
    poster_path:
      'https://image.tmdb.org/t/p/w500/vclShucpUmPhdAOmKgf3B3Z4POD.jpg',
    title: 'Old',
    vote_average: 7.1,
    overview:
      'A group of families on a tropical holiday discover that the secluded beach where they are staying is somehow causing them to age rapidly ',
  },
];

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
