// This is a JavaScript file

const chords = [
    {
      id: 1,
      name: 'I',
      value: 'I',
      followedBy: ['ii', 'iii', 'IV', 'V', 'vi'],
    },
    {
      id: 2,
      name: 'ii',
      value: 'ii',
      followedBy: ['V'],
    },
    {
      id: 3,
      name: 'iii',
      value: 'iii',
      followedBy: ['IV', 'V', 'vi'],
    },
    {
      id: 4,
      name: 'IV',
      value: 'IV',
      followedBy: ['I', 'ii', 'V'],
    },
    {
      id: 5,
      name: 'V',
      value: 'V',
      followedBy: ['I', 'vi'],
    },
    {
      id: 6,
      name: 'vi',
      value: 'vi',
      followedBy: ['ii', 'iii', 'IV'],
    },
    {
      id: 7,
      name: 'i',
      value: 'i',
      followedBy: ['ii_dim', 'iv', 'V', 'VI'],
    },
    {
      id: 8,
      name: 'ii&#176;',
      value: 'ii_dim',
      followedBy: ['V'],
    },
    {
      id: 9,
      name: 'iv',
      value: 'iv',
      followedBy: ['i', 'ii_dim', 'V'],
    },
    {
      id: 10,
      name: 'VI',
      value: 'VI',
      followedBy: ['ii_dim', 'iv', 'V'],
    },
];

 