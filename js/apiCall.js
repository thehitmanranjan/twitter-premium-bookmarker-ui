const TWITTER_API_URL = "http://localhost:3000/"
const loginButton = document.querySelector(".login-twitter__link");

loginButton?.addEventListener("click", loginAuth0)
const bookmarkPage = document.querySelector(".bookmarks")
bookmarkPage?.addEventListener("click", fetchBookmark)
function login() {
    window.location.href = TWITTER_API_URL + "login"
}
function fetchBookmark() {
    console.log("Callinh fetchBookmark")
    fetch(TWITTER_API_URL + 'twitterbookmarker/showUserBookmark')
        .then((response) => response?.json())
        .then((data) => console.log(data));

    // fetch(TWITTER_API_URL + 'twitterbookmarker/showUserBookmark')
    //     .then((response) => console.log(response))
}

function loginAuth0() {
    console.log("Callinh")
    fetch(TWITTER_API_URL + 'login')
        .then((response) => response.json())
        .then((data) => console.log(data));

}
