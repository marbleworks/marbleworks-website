const marbleLogo = "marble-logo";
const headerProjects = "header-projects";
const twitter = "twitter";
const instagram = "instagram";

const mainUrl = "index.html";
const projectsUrl = "projects.html";
const twitterUrl = "https://twitter.com/marbledayo";
const instagramUrl = "https://www.instagram.com/marbledayo/";

function setUrl(className, url, target){
    var element = document.getElementById(className);
    // element.onclick = function() {window.open(url, target)};
    element.onclick = console.log(className);
}

function setUrlBlank(className, url){
    setUrl(className, url, "_blank")
}

function setUrlSelf(className, url){
    setUrl(className, url, "_self")
}

setUrlSelf(marbleLogo, mainUrl)
// setUrlSelf(headerProjects, projectsUrl)
// setUrlBlank(twitter, twitterUrl)
// setUrlBlank(instagram, instagramUrl)