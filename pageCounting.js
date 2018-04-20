margazines = [

    { margazine: 'SunRise', pages: 40 },

    { margazine: 'DailyNews', pages: 28 },

    { margazine: 'RockStar', pages: 18 },

    { margazine: 'FootballEra', pages: 52 },

    { margazine: 'WorldLeadre', pages: 76 }

]

const totalPages = margazines.map(margazine => margazine.pages).reduce((sum, pages) => sum + pages);

console.log(totalPages);