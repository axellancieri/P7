=============================================
<!--  Using Local Storage  -->
=============================================
you can store, retrieve and delete data using local storage methods like setItem, getItem, and removeItem

Store Items in Local Storage with setItem
Local storage can be defined, retrieved and deleted with it’s own built-in methods. Let's start with setItem(), which sets a property on the local storage object. It takes two parameters, the key and value of the item you would like to create:
 
localStorage.setItem('keyName', 'keyValue')

-

Retrieve a Value from Local Storage with getItem
The getItem() method accepts one parameter, a key name in local storage, and it returns thatkey's value: .

localStorage.getItem('keyName')

Since we're accessing keys from a regular JavaScript object, you can also retrieve a key's value using dot notation:

localStorage.keyName

-

Remove an Item in Local Storage with removeItem
The removeItem() method removes a given item from the localStorage object. It accepts one parameter, a key name, and it removes that key from the object if it exists:

removeItem('itemName') 

=============================================
<!--  Local Storage by example  -->
=============================================

const searchForm = document.getElementById('searchForm');
const searchBar = document.getElementById('searchBar');
const clearButton = document.getElementById('clearStorage');

// Initialize display list
createStorageList();

// Retrieve searches from Local Storage, return an array
function getRecentSearches() {
  //get recent searches from localStorage
  const searches = localStorage.getItem('recentSearches');
  if (searches) {
    return JSON.parse(searches);
  }
  return [];
}

// Create a list item
function createItem(item) {
  const recentSearchList = document.getElementById('recentSearchList');
  recentSearchList.insertAdjacentHTML('afterbegin', `<li>${item}</li>`);
}

// Create initial list from items in local storage 
function createStorageList() {
  const searchList = getRecentSearches();
  searchList.forEach(searchItem => {
   createItem(searchItem);
  });
}

// Set event handlers
searchForm.addEventListener('submit', () => {
  const searches = getRecentSearches();
  const searchString = searchBar.value;

  searches.push(searchString) 
  // Set local storage item
  localStorage.setItem('recentSearches', JSON.stringify(searches));
  createItem(searchString);
});

clearButton.addEventListener('click', () => {
  //remove searches 
  localStorage.removeItem('recentSearches');
  recentSearchList.innerHTML = '';
});

=============================================
<!--  Viewbox  -->
=============================================