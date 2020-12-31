// This is a JavaScript file

const chords = [
    {
      id: 1,
      name: 'I',
      value: 'I',
      followedBy: ['ii', 'iii', 'IV', 'Vmaj', 'vi'],
    },
    {
      id: 2,
      name: 'ii',
      value: 'ii',
      followedBy: ['Vmaj'],
    },
    {
      id: 3,
      name: 'iii',
      value: 'iii',
      followedBy: ['IV', 'Vmaj', 'vi'],
    },
    {
      id: 4,
      name: 'IV',
      value: 'IV',
      followedBy: ['I', 'ii', 'Vmaj'],
    },
    {
      id: 5,
      name: 'V',
      value: 'Vmaj',
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
      followedBy: ['ii_dim', 'iv', 'Vmin', 'VI'],
    },
    {
      id: 8,
      name: 'ii&#176;',
      value: 'ii_dim',
      followedBy: ['Vmin'],
    },
    {
      id: 9,
      name: 'iv',
      value: 'iv',
      followedBy: ['i', 'ii_dim', 'Vmin'],
    },
    {
      id: 10,
      name: 'bVI',
      value: 'VI',
      followedBy: ['ii_dim', 'iv'],
    },
    {
      id: 11,
      name: 'V',
      value: 'Vmin',
      followedBy: ['i', 'VI'],
    },
];

 