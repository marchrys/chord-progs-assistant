// This is a JavaScript file
const I = 'I';
const ii = 'ii';
const iii = 'iii';
const IV = 'IV';
const V = 'V';
const vi = 'vi';

const chords = [
    {
      id: 1,
      name: I,
      followedBy: [ii, iii, IV, V, vi],
    },
    {
      id: 2,
      name: ii,
      followedBy: [V],
    },
    {
      id: 3,
      name: iii,
      followedBy: [IV, V, vi],
    },
    {
      id: 4,
      name: IV,
      followedBy: [I, ii, V],
    },
    {
      id: 5,
      name: V,
      followedBy: [I, vi],
    },
    {
      id: 6,
      name: vi,
      followedBy: [ii, iii, IV],
    },
];