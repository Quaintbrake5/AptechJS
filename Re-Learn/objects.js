// function addStringElement(array) {
//     let stringElementSum = '';

//     for (let i = 0; i < array.length; i++) {
//         array.forEach(element => {
//             if(typeof element !== 'string') {
//                 console.log("Not Found")
//               } else {
//                 console.log(`${element}`);
//               }
//         });
//         return stringElementSum;
        
//     }
    
//    }


   
//    let array = [1];
//    console.log(addStringElement(array));

// function checkPalidrone(str) {
//     let string = ""

//     for (let i = str.length; i >= 0; i--) {
//          string += str[i]
//     }

//     if (string !== str) {
//         return false;
//     } else if  (string == str) {
//         return true;
//     }
// }

// let str="noon"
// console.log(checkPalidrone(str));

const anime = {
    firstAnime : "Naruto",
    secondAnime : "One Piece",
    thirdAnime : "Dragon Ball Super",
    favouriteAnimeChar : "Luffy",
    favouriteFirstAnimeChar : "Itachi",
    firstAnimeRating : "80%",
    secondAnimeRating : "90%",
    thirdAnimeRating : "78%",


}

// anime.greet = function() {
//     return `Hello ${this.firstAnime} and ${this.favouriteAnimeChar}! `
// }

// console.log(anime.greet())

for (let myKey in anime) {
    console.log(`${myKey}`)
}

if ("firstAnimeRating" in anime) {
    console.log("The key exists")

} else {
    console.log("The key does not exist")
}

// console.log(anime.firstAnime)
// console.log(anime.secondAnime)
// console.log(anime.thirdAnime)
// console.log(anime.favouriteAnimeChar)
// console.log(anime.favouriteFirstAnimeChar)
// console.log(anime.firstAnimeRating)
// console.log(anime.secondAnimeRating)
// console.log(anime.thirdAnimeRating) 

const students = {
    firstName: 'Denzyl',
    lastName: 'Ibe',
    age: 16,
    favFood: ['rice', 'garri', 'plantain'],
    skills: ['HTML', 'CSS', 'JavaScript', 'C', 'TypeScript', 'React', 'SQL'],
    address: {
        street: '345 Oke Street',
        city: 'Port Harcourt',
        country: 'Nigeria'
    },

    fullName: function() {
        return this.firstName + '' + this.lastName;
    },
};

//access object

//console.log(students.fullName());
//console.log(students['favFood'][0]);

//console.log(students.address.city);
//console.log(students['address']['city']);

//console.log(Object.key(students));
//console.log(Object.values(students));
console.log(Object.entries(students));

if ('lastName' in students) {
    students.lastName = 'Ibe'
}
console.log(students['lastName']);


const employees = [{
    "id": 1,
    "first_name": "Rolland",
    "last_name": "Colquit",
    "email": "rcolquit0@independent.co.uk",
    "gender": "Male",
    "salary": "110247.93",
    "country": "Afghanistan",
    "dob": "19/5/1997"
  }, {
    "id": 2,
    "first_name": "Griswold",
    "last_name": "Works",
    "email": "gworks1@walmart.com",
    "gender": "Male",
    "salary": "193571.27",
    "country": "Portugal",
    "dob": "2/6/1991"
  }, {
    "id": 3,
    "first_name": "Ramsay",
    "last_name": "Farrey",
    "email": "rfarrey2@blogtalkradio.com",
    "gender": "Male",
    "salary": "1981277.14",
    "country": "China",
    "dob": "8/1/2005"
  }, {
    "id": 4,
    "first_name": "Cullen",
    "last_name": "Prinett",
    "email": "cprinett3@goodreads.com",
    "gender": "Male",
    "salary": "643274.99",
    "country": "Uganda",
    "dob": "24/10/2000"
  }, {
    "id": 5,
    "first_name": "Cathi",
    "last_name": "Wapol",
    "email": "cwapol4@jimdo.com",
    "gender": "Female",
    "salary": "827275.75",
    "country": "Indonesia",
    "dob": "10/3/1994"
  }, {
    "id": 6,
    "first_name": "Siward",
    "last_name": "O'Kelly",
    "email": "sokelly5@shop-pro.jp",
    "gender": "Male",
    "salary": "881860.68",
    "country": "Albania",
    "dob": "16/9/1992"
  }, {
    "id": 7,
    "first_name": "Riley",
    "last_name": "Caslett",
    "email": "rcaslett6@epa.gov",
    "gender": "Male",
    "salary": "675988.33",
    "country": "Indonesia",
    "dob": "20/12/2001"
  }, {
    "id": 8,
    "first_name": "Andrei",
    "last_name": "Lawrenceson",
    "email": "alawrenceson7@irs.gov",
    "gender": "Female",
    "salary": "1703039.68",
    "country": "Sweden",
    "dob": "11/2/1993"
  }, {
    "id": 9,
    "first_name": "Morten",
    "last_name": "Yatman",
    "email": "myatman8@ucoz.ru",
    "gender": "Male",
    "salary": "111070.92",
    "country": "Paraguay",
    "dob": "7/9/2005"
  }, {
    "id": 10,
    "first_name": "Fleming",
    "last_name": "Balf",
    "email": "fbalf9@symantec.com",
    "gender": "Polygender",
    "salary": "1479789.91",
    "country": "Georgia",
    "dob": "13/12/1994"
  }, {
    "id": 11,
    "first_name": "Arch",
    "last_name": "Nilles",
    "email": "anillesa@histats.com",
    "gender": "Male",
    "salary": "989382.31",
    "country": "Tanzania",
    "dob": "25/3/2010"
  }, {
    "id": 12,
    "first_name": "Rey",
    "last_name": "Ratley",
    "email": "rratleyb@imdb.com",
    "gender": "Female",
    "salary": "1348658.52",
    "country": "Indonesia",
    "dob": "31/10/1998"
  }, {
    "id": 13,
    "first_name": "Cyrus",
    "last_name": "Burrell",
    "email": "cburrellc@ox.ac.uk",
    "gender": "Genderfluid",
    "salary": "1412346.64",
    "country": "Tanzania",
    "dob": "27/6/2009"
  }, {
    "id": 14,
    "first_name": "Burlie",
    "last_name": "Taffurelli",
    "email": "btaffurellid@epa.gov",
    "gender": "Male",
    "salary": "767483.17",
    "country": "Russia",
    "dob": "27/4/2002"
  }, {
    "id": 15,
    "first_name": "Laurie",
    "last_name": "Winsper",
    "email": "lwinspere@i2i.jp",
    "gender": "Genderfluid",
    "salary": "733020.23",
    "country": "Portugal",
    "dob": "5/2/1993"
  }, {
    "id": 16,
    "first_name": "Lara",
    "last_name": "Brashaw",
    "email": "lbrashawf@topsy.com",
    "gender": "Female",
    "salary": "1394637.31",
    "country": "Indonesia",
    "dob": "19/1/2005"
  }, {
    "id": 17,
    "first_name": "Trula",
    "last_name": "Sproul",
    "email": "tsproulg@unesco.org",
    "gender": "Female",
    "salary": "1128760.23",
    "country": "Poland",
    "dob": "11/8/2010"
  }, {
    "id": 18,
    "first_name": "Sonnie",
    "last_name": "Duffan",
    "email": "sduffanh@state.tx.us",
    "gender": "Male",
    "salary": "368996.04",
    "country": "Honduras",
    "dob": "30/11/2000"
  }, {
    "id": 19,
    "first_name": "Ian",
    "last_name": "Birdall",
    "email": "ibirdalli@fc2.com",
    "gender": "Male",
    "salary": "1777658.33",
    "country": "Guatemala",
    "dob": "26/2/1993"
  }, {
    "id": 20,
    "first_name": "Mayer",
    "last_name": "Keyzor",
    "email": "mkeyzorj@homestead.com",
    "gender": "Male",
    "salary": "844053.94",
    "country": "Philippines",
    "dob": "30/9/1997"
  }, {
    "id": 21,
    "first_name": "Llewellyn",
    "last_name": "Dick",
    "email": "ldickk@va.gov",
    "gender": "Male",
    "salary": "305826.41",
    "country": "Indonesia",
    "dob": "27/1/1997"
  }, {
    "id": 22,
    "first_name": "Goldina",
    "last_name": "Kerner",
    "email": "gkernerl@indiatimes.com",
    "gender": "Female",
    "salary": "176054.59",
    "country": "Chile",
    "dob": "24/4/2004"
  }, {
    "id": 23,
    "first_name": "Arlyn",
    "last_name": "Bartoleyn",
    "email": "abartoleynm@chron.com",
    "gender": "Female",
    "salary": "1127324.89",
    "country": "France",
    "dob": "9/6/2009"
  }, {
    "id": 24,
    "first_name": "Dallas",
    "last_name": "Soldner",
    "email": "dsoldnern@clickbank.net",
    "gender": "Male",
    "salary": "519310.29",
    "country": "Mexico",
    "dob": "11/3/1997"
  }, {
    "id": 25,
    "first_name": "Joshia",
    "last_name": "Roussell",
    "email": "jroussello@creativecommons.org",
    "gender": "Male",
    "salary": "116779.59",
    "country": "Kazakhstan",
    "dob": "24/5/2003"
  }, {
    "id": 26,
    "first_name": "Christine",
    "last_name": "Fairrie",
    "email": "cfairriep@archive.org",
    "gender": "Female",
    "salary": "869815.42",
    "country": "New Zealand",
    "dob": "9/9/2002"
  }, {
    "id": 27,
    "first_name": "Lizabeth",
    "last_name": "Pawley",
    "email": "lpawleyq@dion.ne.jp",
    "gender": "Female",
    "salary": "1112580.07",
    "country": "Bosnia and Herzegovina",
    "dob": "9/7/2004"
  }, {
    "id": 28,
    "first_name": "Ronald",
    "last_name": "Hymas",
    "email": "rhymasr@tamu.edu",
    "gender": "Male",
    "salary": "659112.73",
    "country": "Czech Republic",
    "dob": "22/1/2004"
  }, {
    "id": 29,
    "first_name": "Silvain",
    "last_name": "Greener",
    "email": "sgreeners@time.com",
    "gender": "Male",
    "salary": "1253342.33",
    "country": "Poland",
    "dob": "18/9/2010"
  }, {
    "id": 30,
    "first_name": "Ugo",
    "last_name": "Quadri",
    "email": "uquadrit@rambler.ru",
    "gender": "Male",
    "salary": "1813092.91",
    "country": "Serbia",
    "dob": "20/9/1991"
  }, {
    "id": 31,
    "first_name": "Aurie",
    "last_name": "Edmonds",
    "email": "aedmondsu@usgs.gov",
    "gender": "Female",
    "salary": "1382456.33",
    "country": "Guinea",
    "dob": "25/1/2006"
  }, {
    "id": 32,
    "first_name": "Isabel",
    "last_name": "Wallett",
    "email": "iwallettv@geocities.jp",
    "gender": "Female",
    "salary": "240179.92",
    "country": "France",
    "dob": "31/1/2004"
  }, {
    "id": 33,
    "first_name": "Wilmar",
    "last_name": "Matthewson",
    "email": "wmatthewsonw@github.com",
    "gender": "Male",
    "salary": "721989.31",
    "country": "China",
    "dob": "23/11/2010"
  }, {
    "id": 34,
    "first_name": "Seward",
    "last_name": "Cardello",
    "email": "scardellox@usatoday.com",
    "gender": "Male",
    "salary": "226013.54",
    "country": "Poland",
    "dob": "12/3/1999"
  }, {
    "id": 35,
    "first_name": "Merry",
    "last_name": "Picopp",
    "email": "mpicoppy@cbc.ca",
    "gender": "Male",
    "salary": "942394.32",
    "country": "Myanmar",
    "dob": "9/12/1997"
  }, {
    "id": 36,
    "first_name": "Vitoria",
    "last_name": "McNee",
    "email": "vmcneez@skyrock.com",
    "gender": "Female",
    "salary": "1024428.13",
    "country": "Peru",
    "dob": "17/9/2008"
  }, {
    "id": 37,
    "first_name": "Christen",
    "last_name": "Mudie",
    "email": "cmudie10@phoca.cz",
    "gender": "Female",
    "salary": "1590829.42",
    "country": "Uganda",
    "dob": "10/7/2009"
  }, {
    "id": 38,
    "first_name": "Kirsten",
    "last_name": "Esselen",
    "email": "kesselen11@uiuc.edu",
    "gender": "Female",
    "salary": "1110013.09",
    "country": "Peru",
    "dob": "11/2/1997"
  }, {
    "id": 39,
    "first_name": "Sasha",
    "last_name": "Tremaine",
    "email": "stremaine12@ucsd.edu",
    "gender": "Male",
    "salary": "466244.85",
    "country": "Poland",
    "dob": "28/11/2010"
  }, {
    "id": 40,
    "first_name": "Luis",
    "last_name": "Tilby",
    "email": "ltilby13@paginegialle.it",
    "gender": "Genderfluid",
    "salary": "718567.53",
    "country": "Philippines",
    "dob": "16/8/2004"
  }, {
    "id": 41,
    "first_name": "Thaxter",
    "last_name": "Veillard",
    "email": "tveillard14@sbwire.com",
    "gender": "Male",
    "salary": "1203606.33",
    "country": "Indonesia",
    "dob": "10/1/1996"
  }, {
    "id": 42,
    "first_name": "Maximilianus",
    "last_name": "Feasley",
    "email": "mfeasley15@elegantthemes.com",
    "gender": "Bigender",
    "salary": "950404.27",
    "country": "Indonesia",
    "dob": "11/7/1996"
  }, {
    "id": 43,
    "first_name": "Roshelle",
    "last_name": "Mingardi",
    "email": "rmingardi16@salon.com",
    "gender": "Female",
    "salary": "549765.65",
    "country": "Portugal",
    "dob": "27/10/2009"
  }, {
    "id": 44,
    "first_name": "Byrann",
    "last_name": "Crowcher",
    "email": "bcrowcher17@blogger.com",
    "gender": "Male",
    "salary": "1803968.11",
    "country": "Uruguay",
    "dob": "1/10/1995"
  }, {
    "id": 45,
    "first_name": "Fayre",
    "last_name": "Normington",
    "email": "fnormington18@discuz.net",
    "gender": "Female",
    "salary": "1151470.97",
    "country": "Finland",
    "dob": "16/7/1996"
  }, {
    "id": 46,
    "first_name": "Miltie",
    "last_name": "Gresswell",
    "email": "mgresswell19@go.com",
    "gender": "Male",
    "salary": "1246322.51",
    "country": "China",
    "dob": "2/7/2000"
  }, {
    "id": 47,
    "first_name": "Duane",
    "last_name": "Pridgeon",
    "email": "dpridgeon1a@apple.com",
    "gender": "Male",
    "salary": "1777900.39",
    "country": "Denmark",
    "dob": "13/8/2002"
  }, {
    "id": 48,
    "first_name": "Jerrylee",
    "last_name": "Woffenden",
    "email": "jwoffenden1b@fc2.com",
    "gender": "Female",
    "salary": "1341432.74",
    "country": "Russia",
    "dob": "7/2/1998"
  }, {
    "id": 49,
    "first_name": "Carmelina",
    "last_name": "Vernazza",
    "email": "cvernazza1c@forbes.com",
    "gender": "Female",
    "salary": "1672289.77",
    "country": "Kyrgyzstan",
    "dob": "30/7/1999"
  }, {
    "id": 50,
    "first_name": "Allistir",
    "last_name": "Asplin",
    "email": "aasplin1d@addthis.com",
    "gender": "Male",
    "salary": "1900344.54",
    "country": "China",
    "dob": "24/10/2007"
  }, {
    "id": 51,
    "first_name": "Eugenio",
    "last_name": "Odo",
    "email": "eodo1e@nhs.uk",
    "gender": "Male",
    "salary": "1587606.71",
    "country": "Canada",
    "dob": "25/3/2006"
  }, {
    "id": 52,
    "first_name": "Dena",
    "last_name": "Conybear",
    "email": "dconybear1f@wikimedia.org",
    "gender": "Female",
    "salary": "1185765.69",
    "country": "Ethiopia",
    "dob": "22/10/2002"
  }, {
    "id": 53,
    "first_name": "Ralph",
    "last_name": "Aherne",
    "email": "raherne1g@usnews.com",
    "gender": "Male",
    "salary": "1290780.85",
    "country": "Sweden",
    "dob": "1/7/2008"
  }, {
    "id": 54,
    "first_name": "Glendon",
    "last_name": "Brehaut",
    "email": "gbrehaut1h@disqus.com",
    "gender": "Male",
    "salary": "1144855.39",
    "country": "Albania",
    "dob": "22/11/1991"
  }, {
    "id": 55,
    "first_name": "Nadia",
    "last_name": "Rossbrooke",
    "email": "nrossbrooke1i@illinois.edu",
    "gender": "Polygender",
    "salary": "1890074.33",
    "country": "Indonesia",
    "dob": "6/4/2002"
  }, {
    "id": 56,
    "first_name": "Talbot",
    "last_name": "Dukelow",
    "email": "tdukelow1j@dot.gov",
    "gender": "Male",
    "salary": "1956671.02",
    "country": "Poland",
    "dob": "27/6/1994"
  }, {
    "id": 57,
    "first_name": "Lindon",
    "last_name": "MacBey",
    "email": "lmacbey1k@hostgator.com",
    "gender": "Male",
    "salary": "1853416.12",
    "country": "Guinea-Bissau",
    "dob": "1/6/1998"
  }, {
    "id": 58,
    "first_name": "Queenie",
    "last_name": "Angelini",
    "email": "qangelini1l@hp.com",
    "gender": "Female",
    "salary": "668161.98",
    "country": "Philippines",
    "dob": "25/7/2006"
  }, {
    "id": 59,
    "first_name": "Germana",
    "last_name": "Penddreth",
    "email": "gpenddreth1m@parallels.com",
    "gender": "Female",
    "salary": "1803938.71",
    "country": "Argentina",
    "dob": "27/9/1995"
  }, {
    "id": 60,
    "first_name": "Farra",
    "last_name": "MacElholm",
    "email": "fmacelholm1n@state.gov",
    "gender": "Female",
    "salary": "371022.17",
    "country": "France",
    "dob": "25/5/2004"
  }, {
    "id": 61,
    "first_name": "Ezequiel",
    "last_name": "Pordal",
    "email": "epordal1o@live.com",
    "gender": "Male",
    "salary": "1301989.24",
    "country": "Tanzania",
    "dob": "14/3/2008"
  }, {
    "id": 62,
    "first_name": "Valeda",
    "last_name": "Scneider",
    "email": "vscneider1p@mysql.com",
    "gender": "Female",
    "salary": "1999896.43",
    "country": "China",
    "dob": "29/2/2004"
  }, {
    "id": 63,
    "first_name": "Pen",
    "last_name": "Boxer",
    "email": "pboxer1q@wikimedia.org",
    "gender": "Male",
    "salary": "744467.76",
    "country": "Ethiopia",
    "dob": "14/11/2005"
  }, {
    "id": 64,
    "first_name": "Rosetta",
    "last_name": "Trevena",
    "email": "rtrevena1r@wiley.com",
    "gender": "Female",
    "salary": "1050410.92",
    "country": "Indonesia",
    "dob": "17/3/2010"
  }, {
    "id": 65,
    "first_name": "Doe",
    "last_name": "Fessions",
    "email": "dfessions1s@google.co.uk",
    "gender": "Female",
    "salary": "1704341.96",
    "country": "Portugal",
    "dob": "30/6/2006"
  }, {
    "id": 66,
    "first_name": "Colan",
    "last_name": "Hourihane",
    "email": "chourihane1t@odnoklassniki.ru",
    "gender": "Male",
    "salary": "1618378.56",
    "country": "Russia",
    "dob": "12/4/2001"
  }, {
    "id": 67,
    "first_name": "Fara",
    "last_name": "Oddey",
    "email": "foddey1u@bloglines.com",
    "gender": "Female",
    "salary": "1354043.23",
    "country": "Iran",
    "dob": "1/11/2005"
  }, {
    "id": 68,
    "first_name": "Haven",
    "last_name": "Webburn",
    "email": "hwebburn1v@canalblog.com",
    "gender": "Bigender",
    "salary": "1877170.05",
    "country": "Japan",
    "dob": "17/6/1995"
  }, {
    "id": 69,
    "first_name": "Annora",
    "last_name": "Bebb",
    "email": "abebb1w@bloglovin.com",
    "gender": "Female",
    "salary": "632771.06",
    "country": "Brazil",
    "dob": "7/12/2001"
  }, {
    "id": 70,
    "first_name": "Rafferty",
    "last_name": "Sieve",
    "email": "rsieve1x@disqus.com",
    "gender": "Male",
    "salary": "937774.24",
    "country": "Costa Rica",
    "dob": "16/5/1994"
  }, {
    "id": 71,
    "first_name": "Lu",
    "last_name": "Cutchee",
    "email": "lcutchee1y@latimes.com",
    "gender": "Female",
    "salary": "1352699.01",
    "country": "China",
    "dob": "15/4/2010"
  }, {
    "id": 72,
    "first_name": "Elysee",
    "last_name": "Heddy",
    "email": "eheddy1z@dagondesign.com",
    "gender": "Female",
    "salary": "1392345.70",
    "country": "Portugal",
    "dob": "14/6/2002"
  }, {
    "id": 73,
    "first_name": "Kendra",
    "last_name": "Antonioni",
    "email": "kantonioni20@list-manage.com",
    "gender": "Female",
    "salary": "1873173.54",
    "country": "China",
    "dob": "20/12/2006"
  }, {
    "id": 74,
    "first_name": "Hortensia",
    "last_name": "Stainsby",
    "email": "hstainsby21@a8.net",
    "gender": "Female",
    "salary": "196748.15",
    "country": "China",
    "dob": "5/8/1991"
  }, {
    "id": 75,
    "first_name": "Olivia",
    "last_name": "Obert",
    "email": "oobert22@storify.com",
    "gender": "Female",
    "salary": "1111988.91",
    "country": "Botswana",
    "dob": "12/10/2007"
  }, {
    "id": 76,
    "first_name": "Lucius",
    "last_name": "Bagenal",
    "email": "lbagenal23@amazon.de",
    "gender": "Male",
    "salary": "565784.03",
    "country": "China",
    "dob": "25/3/2002"
  }, {
    "id": 77,
    "first_name": "Alick",
    "last_name": "Cropp",
    "email": "acropp24@blog.com",
    "gender": "Male",
    "salary": "1248334.23",
    "country": "Finland",
    "dob": "16/2/2001"
  }, {
    "id": 78,
    "first_name": "Jeddy",
    "last_name": "Nears",
    "email": "jnears25@accuweather.com",
    "gender": "Male",
    "salary": "992109.14",
    "country": "China",
    "dob": "21/4/1995"
  }, {
    "id": 79,
    "first_name": "Daphene",
    "last_name": "O'Garmen",
    "email": "dogarmen26@marriott.com",
    "gender": "Female",
    "salary": "1840004.88",
    "country": "China",
    "dob": "22/2/2007"
  }, {
    "id": 80,
    "first_name": "Ellswerth",
    "last_name": "Lapish",
    "email": "elapish27@cnet.com",
    "gender": "Male",
    "salary": "1379184.48",
    "country": "China",
    "dob": "24/3/1994"
  }, {
    "id": 81,
    "first_name": "Gaspard",
    "last_name": "Soeiro",
    "email": "gsoeiro28@telegraph.co.uk",
    "gender": "Male",
    "salary": "1795175.88",
    "country": "Slovenia",
    "dob": "9/2/1996"
  }, {
    "id": 82,
    "first_name": "Alexandro",
    "last_name": "Espinoza",
    "email": "aespinoza29@cbslocal.com",
    "gender": "Male",
    "salary": "693242.40",
    "country": "Comoros",
    "dob": "15/5/1997"
  }, {
    "id": 83,
    "first_name": "Jacques",
    "last_name": "Juanico",
    "email": "jjuanico2a@netscape.com",
    "gender": "Male",
    "salary": "1280287.61",
    "country": "United States",
    "dob": "28/2/1991"
  }, {
    "id": 84,
    "first_name": "Ari",
    "last_name": "Lorait",
    "email": "alorait2b@opera.com",
    "gender": "Male",
    "salary": "666337.07",
    "country": "China",
    "dob": "14/11/2009"
  }, {
    "id": 85,
    "first_name": "Em",
    "last_name": "Forge",
    "email": "eforge2c@hc360.com",
    "gender": "Female",
    "salary": "435559.24",
    "country": "France",
    "dob": "3/2/2006"
  }, {
    "id": 86,
    "first_name": "Alayne",
    "last_name": "Lissandri",
    "email": "alissandri2d@weather.com",
    "gender": "Agender",
    "salary": "185714.81",
    "country": "Brazil",
    "dob": "27/7/2001"
  }, {
    "id": 87,
    "first_name": "Padget",
    "last_name": "MacGill",
    "email": "pmacgill2e@paginegialle.it",
    "gender": "Male",
    "salary": "778519.07",
    "country": "Philippines",
    "dob": "1/8/2010"
  }, {
    "id": 88,
    "first_name": "Malachi",
    "last_name": "Wurst",
    "email": "mwurst2f@rediff.com",
    "gender": "Male",
    "salary": "1115181.55",
    "country": "Ireland",
    "dob": "16/10/2005"
  }, {
    "id": 89,
    "first_name": "Martino",
    "last_name": "Simonsen",
    "email": "msimonsen2g@nba.com",
    "gender": "Male",
    "salary": "1702160.69",
    "country": "France",
    "dob": "23/3/1998"
  }, {
    "id": 90,
    "first_name": "Pammie",
    "last_name": "Descroix",
    "email": "pdescroix2h@hatena.ne.jp",
    "gender": "Female",
    "salary": "1099318.94",
    "country": "Portugal",
    "dob": "19/10/2000"
  }, {
    "id": 91,
    "first_name": "Prudence",
    "last_name": "Dodsley",
    "email": "pdodsley2i@ucsd.edu",
    "gender": "Female",
    "salary": "1917866.90",
    "country": "United States",
    "dob": "16/8/2009"
  }, {
    "id": 92,
    "first_name": "Chad",
    "last_name": "Tockell",
    "email": "ctockell2j@issuu.com",
    "gender": "Male",
    "salary": "587001.18",
    "country": "China",
    "dob": "7/3/2008"
  }, {
    "id": 93,
    "first_name": "Eward",
    "last_name": "Lyven",
    "email": "elyven2k@hibu.com",
    "gender": "Male",
    "salary": "1445173.50",
    "country": "China",
    "dob": "10/4/1996"
  }, {
    "id": 94,
    "first_name": "Balduin",
    "last_name": "Haeslier",
    "email": "bhaeslier2l@homestead.com",
    "gender": "Male",
    "salary": "306634.42",
    "country": "Indonesia",
    "dob": "23/11/1999"
  }, {
    "id": 95,
    "first_name": "Karin",
    "last_name": "Heintzsch",
    "email": "kheintzsch2m@shop-pro.jp",
    "gender": "Genderfluid",
    "salary": "477772.19",
    "country": "China",
    "dob": "2/8/1992"
  }, {
    "id": 96,
    "first_name": "Roscoe",
    "last_name": "Gorrick",
    "email": "rgorrick2n@gnu.org",
    "gender": "Male",
    "salary": "709821.29",
    "country": "Azerbaijan",
    "dob": "4/5/2006"
  }, {
    "id": 97,
    "first_name": "Edythe",
    "last_name": "Solly",
    "email": "esolly2o@berkeley.edu",
    "gender": "Female",
    "salary": "166961.59",
    "country": "Sweden",
    "dob": "19/12/1992"
  }, {
    "id": 98,
    "first_name": "Sullivan",
    "last_name": "Whapple",
    "email": "swhapple2p@slashdot.org",
    "gender": "Male",
    "salary": "1612732.08",
    "country": "Brazil",
    "dob": "10/4/2009"
  }, {
    "id": 99,
    "first_name": "Wang",
    "last_name": "McQuaker",
    "email": "wmcquaker2q@harvard.edu",
    "gender": "Agender",
    "salary": "862946.39",
    "country": "Japan",
    "dob": "24/10/2004"
  }, {
    "id": 100,
    "first_name": "Laurie",
    "last_name": "Micklewright",
    "email": "lmicklewright2r@mashable.com",
    "gender": "Male",
    "salary": "960285.36",
    "country": "Syria",
    "dob": "17/4/2001"
  }]

  let numOfEmp = employees.length;
//   console.log(numOfEmp);

function getGender(gen){
    for(let i=0; i<employees.length; i++){
        if(employees[i].gender===gen){
            console.log(employees[i]);
        }
    }
}

//second method
//filter
const filterGender = (gen,coun,id)=>{
  return employees.filter(employee=>employee.gender===gen)
  .filter(employee=>employee.country===coun)
  .filter(employee=>employee.id===id)
}

// getGender("Female")
// console.log(filterGender("Male","China",84));

// const arr= [1,2,3,4,5,6,7,8,9];

// const onlyEven = (arr)=>{
// return arr.filter(num=>num %2 ===0)
// }
// console.log(onlyEven(arr));

// const number = [1,5,7,9,3,12];
// function getMax(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>max) {
//       max = arr[i];
//     }
    
//   }
//   return max
// }
// console.log(getMax(number));

// function highestPaidEmployee(employee) {
//   let highest = employee[0]
//   for (let i = 0; i < employee.length; i++) {
//     if (Number(employee[i].salary)>Number(highest.salary)){
//       highest
//     }
    
//   }
//   return highest;
// }

// console.log(highestPaidEmployee(employee));

function getCountry(employees, country) {
  return employees.filter(employee => employee.country === country);
}

function highestPaidEmployeeByCountry(employees, country) {
  let employeeCountries = getCountry(employees,country);
  let highestPaid = employeeCountries[0];
  for (let i = 0; i < employeeCountries.length; i++){
    if (Number(employeeCountries[i].salary) > Number(highestPaid.salary)){
      highestPaid = employeeCountries[i];
    }
  }
  return highestPaid;
}

console.log(highestPaidEmployeeByCountry(employees, 'Portugal'));

// function salariesByCountry(country) {
//   const salaries = employees.filter(employee => employee.country === country).map(employee => employee.salary);
//   console.log(salaries);
//  }

// salariesByCountry('Portugal');

// // foreach
// // forEach is used to perform an action on each element of the array
// // it takes in a callback function as its argument which will be executed for each element
// const soln = numbers.forEach(elem,index,array) => {
//     console.log(`The index of ${number} => ${index}: ${Array} `)
// };

const numbers = [1,2,3,4,5];
let sum = 0;

numbers.forEach((num) => {
    if (num % 2 == 0) {
        sum += num;
    }
});
console.log(`sum = ${sum}`);

const onlyAdd = [3, 4, 10, 2, 99, 45];
// let sumOdd = 0;
// onlyAdd.forEach((num, index) =>{
//     if (index % 2 === 1){
//         sumOdd += num;
//     }
// });
// console.log(`Sum Odd = ${sumOdd}`);

const findMax = (arr) => {
    let max = arr[0];

    for(const num of arr) {
        if (max < num){
            max = num
        }
    }
    return max;
}
console.log(findMax(onlyAdd));