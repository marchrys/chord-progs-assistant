// This is a JavaScript file
const degrees = {
  I: 'I',
  ii: 'ii',
  iii: 'iii',
  IV: 'IV',
  V: 'V',
  vi: 'vi',
}

const chords = [
    {
      id: 1,
      name: degrees.I,
      followedBy: [degrees.ii, degrees.iii, degrees.IV, degrees.V, degrees.vi],
    },
    {
      id: 2,
      name: degrees.ii,
      followedBy: [degrees.V],
    },
    {
      id: 3,
      name: degrees.iii,
      followedBy: [degrees.IV, degrees.V, degrees.vi],
    },
    {
      id: 4,
      name: degrees.IV,
      followedBy: [degrees.I, degrees.ii, degrees.V],
    },
    {
      id: 5,
      name: degrees.V,
      followedBy: [degrees.I, degrees.vi],
    },
    {
      id: 6,
      name: degrees.vi,
      followedBy: [degrees.ii, degrees.iii, degrees.IV],
    },
];