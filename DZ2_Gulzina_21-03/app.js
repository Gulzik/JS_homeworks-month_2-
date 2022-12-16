var TVSeries = {
    name: 'The Witcher',
    releaseDate: '20.12.2019',
    mainActor: 'Henry Cavill, Freya Allan, Anya Chalotra',
    episodes: '16',
    genre: 'Adventure and Fantasy',
    countryOfOrigin: 'United States and Poland',
    creator: 'Lauren Schmidt Hissrich',
    originalLanguage: 'English',
    originalNetwork: 'Netflix',
    seasons: {
        season2Name: 'The Witcher: Nightmare of the Wolf',
        releaseDate: '21.08.2021',
        prequelSeason: 'The Witcher: Blood Origin',
        releaseDatePrequel: '25.12.2022'
    }
};
console.log('TVSeries' + ' ' + '+' + ' ' + TVSeries.name)
console.log('release date'  + ' ' + '+' + ' ' + TVSeries.releaseDate)
console.log('main actor'  + ' ' + '+' + ' ' + TVSeries.mainActor)
console.log('episodes'  + ' ' + '+' + ' ' + TVSeries.episodes)
console.log('genre'  + ' ' + '+' + ' ' + TVSeries.genre)
console.log('country of origin'  + ' ' + '+' + ' ' + TVSeries.countryOfOrigin)
console.log('creator'  + ' ' + '+' + ' ' + TVSeries.creator)
console.log('original language'  + ' ' + '+' + ' ' + TVSeries.originalLanguage)
console.log('original network'  + ' ' + '+' + ' ' + TVSeries.originalNetwork)
console.log('second season'  + ' ' + '+' + ' ' + TVSeries.seasons.season2Name)
console.log('release date of second season '  + ' ' + '+' + ' ' + TVSeries.seasons.releaseDate)
console.log('prequel'  + ' ' + '+' + ' ' + TVSeries.seasons.releaseDate)
console.log('release date of prequel'  + ' ' + '+' + ' ' + TVSeries.seasons.releaseDatePrequel)



let week = 'monday';
switch (week){
    case 'Monday':
    case "monday":
        console.log('день недели - понедельник')
        break
    case 'Tuesday':
    case "tuesday":
        console.log('день недели - вторник')
        break
    case 'Wednesday':
    case "wednesday":
        console.log('день недели - среда')
        break
    case 'Thursday':
    case "thursday":
        console.log('день недели - четверг')
        break
    case 'Friday':
    case "friday":
        console.log('день недели - пятница')
        break
    case 'Saturday':
    case "saturday":
        console.log('день недели - суббота')
        break
    case 'Sunday':
    case "sunday":
        console.log('день недели - воскресенье')
        break
    default:
        console.log('wrong day')
}


