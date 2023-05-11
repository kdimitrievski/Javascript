let prog_languages = [
  {
    Name: "Javascript",
    founder: {
      Name: "Brendan Eich",
      e_mail: "brendan_eich@gmail.com",
    },
    founded: 1995,
  },
  {
    Name: "PHP",
    founder: {
      Name: "Rasmus Lerdorf",
      e_mail: "rasmus_lerdorf@gmail.com",
    },
    founded: 1994,
  },
];

console.log(prog_languages);
console.log(prog_languages[0]);
console.log(prog_languages[1].founder.e_mail);

let python = {
    Name: "Python",
    founder: {
      Name: "Guido van Rossum",
      e_mail: "guido_van_rossum@gmail.com",
    },
    founded: 1991,
  }

prog_languages.unshift[python];

let java =   {
    Name: "Java",
    founder: {
      Name: "James Gosling",
      e_mail: "james_gosling@gmail.com",
    },
    founded: 1991,
  }

prog_languages.push[java];

console.log(prog_languages);