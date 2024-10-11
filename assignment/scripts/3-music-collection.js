console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

function addToCollection( collection, title, artist, yearPublished, tracks ){
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks
  }
  collection.push(newAlbum);
  console.log(newAlbum);
  return newAlbum;
}

addToCollection( myCollection, 'Volcano', 'Jungle', 2023, [{ trackName: 'Us Against The World', duration: '3:27'}, {trackName: 'Holding On', duration: '3:16'}, { trackName: 'Back on 74', duration: '3:29'}]);
addToCollection( myCollection, 'ForEver', 'Jungle', 2018, [{ trackName: 'Smile', duration: '3:07'}, {trackName: 'Heavy, California', duration: '3:04'}] );
addToCollection( myCollection, 'Lust for Life', 'Lana Del Rey', 2017, [{ trackName: 'Something', duration: '3:14'}] );
addToCollection( myCollection, 'Random Access Memories', 'Daft Punk', 2013, [{ trackName: 'Something', duration: '3:14'}] );
addToCollection( myCollection, 'Paradise', 'Lana Del Rey', 2012, [{ trackName: 'Something', duration: '3:14'}] );
addToCollection( myCollection, 'Rumours', 'Fleetwood Mac', 1977, [{ trackName: 'Something', duration: '3:14'}] );
console.log( 'My Collection:', myCollection );

function showCollection( collection ){
  for( let i=0; i<collection.length; i++ ){
    let newString = collection[i].title + ' by ' + collection[i].artist + ', published in year ' + collection[i].yearPublished;
    console.log( newString );
    for( let j=0; j<collection[i].tracks.length; j++){
      console.log( j + 1 + '.', collection[i].tracks[j].trackName + ': ' + collection[i].tracks[j].duration);
    }
  }
} // end func
showCollection(myCollection);

function findByArtist( collection, artist ){
  let matchingResults = [];
  for( let i=0; i<collection.length; i++){
    if( collection[i].artist === artist ){
      matchingResults.push(collection[i]);
    }
  }
  return matchingResults;
} // end func
console.log(findByArtist( myCollection, 'Jungle' ));

let searchObject = { artist: 'Ray Charles', yearPublished: 1957 };
let searchObjectExists = { artist: 'Jungle', yearPublished: 2023 };
let emptySearchObject = {};
let partialSearchObject = { artist: '', yearPublished: 2024 };

function search( collection, searchCriteria ){
  let matchingSearchResults = [];

  // If there is no argument passed:
  if( searchCriteria === undefined){
    console.log('No search terms provided!');
    return collection;
  }
  // If the argument is an empty object:
  else if( Object.keys(searchCriteria).length < 1){
    console.log('The search object is empty!!');
    return collection;
  }
  // If the argument is missing artist or yearPublished keys entirely:
  else if ( Object.keys(searchCriteria).indexOf('artist') < 0 || Object.keys(searchCriteria).indexOf('yearPublished') < 0){
    console.log('The search object is missing artist or year data!');
    return collection;
  }
  // If the argument has either artist or yearPublished as an empty string
  else if( searchCriteria.artist < 1 || searchCriteria.yearPublished < 1){
    console.log('empty artist or year string');
    return collection;
  }
  else {
    for( let i=0; i<collection.length; i++){
      if( collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.yearPublished ){
        matchingSearchResults.push(collection[i]);
      }
    }
    return matchingSearchResults;
  }
} // end func

console.log('---Searching a result with all data, but not in myCollection:');
console.log(search( myCollection, searchObject ));

console.log('---Searching a result with all data, but is in myCollection:');
console.log(search( myCollection, searchObjectExists ));

console.log('---Searching a result with an empty object:');
console.log(search( myCollection, emptySearchObject ));

console.log('---Searching a result with partially missing terms:');
// console.log('artist:', Object.keys(partialSearchObject).indexOf('artist'));
// console.log('yearPublished:', Object.keys(partialSearchObject).indexOf('yearPublished'));
console.log(search( myCollection, partialSearchObject ));

console.log('---Searching a result with no searchCriteria argument:');
console.log(search( myCollection ));

console.log('--- END MY WORK');

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
