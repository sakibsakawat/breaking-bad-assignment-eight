const fakeData = [
    {
       name: 'Bryan Cranston',
       job: 'Actor | Producer | Writer',
       Born: 'March 7, 1956 in Hollywood, California, USA',
       img:'https://m.media-amazon.com/images/M/MV5BMTA2NjEyMTY4MTVeQTJeQWpwZ15BbWU3MDQ5NDAzNDc@._V1_UX214_CR0,0,214,317_AL_.jpg',
       knownFor: 'Breaking Bad,Why Him?, The Upside',
       salary:550000,
       
    },
    {
       name: 'Aaron Paul',
       job: 'Actor | Producer | Additional Crew',
       Born: ' August 27, 1979 in Emmett, Idaho, USA',
       img:'https://m.media-amazon.com/images/M/MV5BMTY1OTY5NjI5NV5BMl5BanBnXkFtZTcwODA4MjM0OA@@._V1_UX214_CR0,0,214,317_AL_.jpg',
       knownFor: 'Breaking Bad,El Camino, Need for Speed',
       salary:500000,
       
    },
    {
       name: 'Bob Odenkirk',
       job: 'Actor | Producer | Writer',
       Born: 'October 22, 1962 in Naperville, Illinois, USA',
       img:'https://m.media-amazon.com/images/M/MV5BOWM5MDJjYTItMTRkNC00NTQ4LThkNjUtNDY3Mzk0YWMwMTBhXkEyXkFqcGdeQXVyNzQzNDYwMA@@._V1_UY317_CR18,0,214,317_AL_.jpg',
       knownFor: 'Breaking Bad,Nobody,Better Call Saul',
       salary:450000,
       
    },
    {
       name: 'Dean Norris ',
       job: 'Actor | Producer | Soundtrack',
       Born: 'April 8, 1963 in South Bend, Indiana, USA',
       img:'https://m.media-amazon.com/images/M/MV5BMTUzOTQ2NDIzOF5BMl5BanBnXkFtZTcwMTE0OTYwOQ@@._V1_UX214_CR0,0,214,317_AL_.jpg',
       knownFor: 'Breaking Bad,Under the Dome,The Mentalist',
       salary:460000,
       
    },
    {
       name: 'Anna Gunn',
       job: 'Actress | Soundtrack',
       Born: 'August 11, 1968 in Cleveland, Ohio, USA',
       img:'https://m.media-amazon.com/images/M/MV5BMTU0NTk3MDQ3OV5BMl5BanBnXkFtZTcwNDY3NzQ4Mg@@._V1_UY317_CR4,0,214,317_AL_.jpg',
       knownFor: 'Breaking Bad,Shades of Blue, Being Frank',
       salary:350000,
       
    },
    {
       name: 'Jonathan Banks',
       job: 'Actor | Producer | Writer',
       Born: 'January 31, 1947 in Washington, District of Columbia, USA',
       img:'https://m.media-amazon.com/images/M/MV5BMjI3MTE0OTI0MF5BMl5BanBnXkFtZTcwMzc2MzU3NQ@@._V1_UY317_CR11,0,214,317_AL_.jpg',
       knownFor: 'Breaking Bad, Better Call Saul, The Damaged',
       salary:450000,
       
    },
    {
       name: 'Betsy Brandt',
       job: 'Actress | Soundtrack',
       Born: 'August 21, 1992 in Lafayette, Louisiana, USA',
       img:'https://m.media-amazon.com/images/M/MV5BMTU2OTQ3MzcxMV5BMl5BanBnXkFtZTcwMTk2MTk3Mw@@._V1_UX214_CR0,0,214,317_AL_.jpg',
       knownFor: 'Breaking Bad,Jefferies, The Unicorn',
       salary:320000,
       
    },
    {
       name: 'RJ Mitte',
       job: 'Actor | Producer',
       Born: 'March 7, 1956 in Hollywood, California, USA',
       img:'https://www.imdb.com/name/nm2666409/mediaviewer/rm224436736/',
       knownFor: 'Breaking Bad,All the Little Things We Kill, Carol of the Bells',
       salary:450000,
       
    },
    {
       name: 'Giancarlo Esposito',
       job: 'Music Department | Actor | Producer',
       Born: 'April 26, 1958 in Copenhagen, Denmark',
       img:'https://m.media-amazon.com/images/M/MV5BMjEyODM1NjI0OF5BMl5BanBnXkFtZTcwMTE0OTA1Mg@@._V1_UY317_CR4,0,214,317_AL_.jpg',
       knownFor: 'Breaking Bad,Better Call Saul, The Mandalorian',
       salary:500000,
       
    },
    {
       name: 'Charles Baker',
       job: 'Actor | Producer | Cinematographer',
       Born: 'February 27, 1971 in Washington, District of Columbia, USA',
       img:'https://m.media-amazon.com/images/M/MV5BMTcyODQwNzkxNl5BMl5BanBnXkFtZTgwNjYzOTY0MzE@._V1_UX214_CR0,0,214,317_AL_.jpg',
       knownFor: 'Breaking Bad,El Camino, The Blacklist',
       salary:330000,
       
    },
    {
       name: 'Matt Jones',
       job: 'Actor | Director | Producer',
       Born: 'November 1, 1981 in Sacramento, California, USA',
       img:'https://m.media-amazon.com/images/M/MV5BNTNiMTRhYWItYWU3Ni00OGVlLWE4NGEtYmUyMjJjNGM0NWQ1XkEyXkFqcGdeQXVyMjM0NDQ2MTQ@._V1_UY317_CR131,0,214,317_AL_.jpg',
       knownFor: 'Breaking Bad,El Camino, Brightburn',
       salary:300000,
       
    },
    {
       name: 'Steven Michael Quezada',
       job: 'Actor | Producer | Writer',
       Born: 'February 15, 1963 in Albuquerque, New Mexico, USA',
       img:'https://m.media-amazon.com/images/M/MV5BOWRjNTZlMTctM2NmNi00N2MxLWEzNWItODNhOTE4NjZjNWUwXkEyXkFqcGdeQXVyNzU1MzA1Ng@@._V1_UY317_CR20,0,214,317_AL_.jpg',
       knownFor: 'Breaking Bad,Better Call Saul,Magnum P.I.',
       salary:300000,
       
    },
    {
       name: 'Jesse Plemons',
       job: 'Actor | Producer | Soundtrack',
       Born: 'April 2, 1988 in Dallas, Texas, USA',
       img:'https://m.media-amazon.com/images/M/MV5BZjA0ODBmYmMtN2NhZS00NmRiLWFhN2YtYzVhNDc3Yjk0YjMzXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UX99_CR0,0,99,99_AL_.jpg',
       knownFor: 'Breaking Bad,Game night, The Irishman',
       salary:290000,
       
    },
    {
       name: 'Laura Fraser',
       job: 'Actress | Soundtrack',
       Born: 'July 24, 1975 in Glasgow, Scotland, UK',
       img:'https://m.media-amazon.com/images/M/MV5BMTIzMjc0MzgxMl5BMl5BanBnXkFtZTcwNTY5NjQ2MQ@@._V1_UX214_CR0,0,214,317_AL_.jpg',
       knownFor: 'Breaking Bad,Better Call Saul, Doctor Who',
       salary:250000,
       
    },
    {
       name: 'Christopher Cousins',
       job: ' Actor ',
       Born: 'September 27, 1960 in New York City, New York, USA',
       img:'https://m.media-amazon.com/images/M/MV5BMTYyMTAwMzE4Ml5BMl5BanBnXkFtZTgwOTQ5MDk3MTE@._V1_UY317_CR34,0,214,317_AL_.jpg',
       knownFor: 'Breaking Bad,9-1-1, Unthinkable',
       salary:500000,
       
    },
]