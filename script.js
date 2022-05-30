import {Api} from "./requests.js";

const pic = await Api.pictureOfTheDay();
const galleryPictures = await Api.gallery();

console.log(galleryPictures)

const body = document.getElementById("body");

const pictureCard = document.createElement("section");
pictureCard.id = "pictureCard";
body.appendChild(pictureCard);

const divContainer = document.createElement("div");
divContainer.id = "divContainer";

const galleryContainer = document.createElement("section");
galleryContainer.id = "galleryContainer";

body.appendChild(divContainer);
divContainer.appendChild(galleryContainer);

const cards = document.getElementsByClassName("galleryCards");

function astronomyPicOfTheDay(object){
  console.log(object)
  
  let arr = []
  arr.push(object)
  
  console.log(arr)
  
  for(let i = 0; i < arr.length; i++){
    
    const apodImg = document.createElement("img")
    apodImg.className = "apodImg"
    apodImg.src = object.hdurl
    pictureCard.appendChild(apodImg)
    
    const div = document.createElement("div")
    div.className = "div"
    pictureCard.appendChild(div)
    
    const apodTitle = document.createElement("div")
    apodTitle.id = "apodTitle"
    div.appendChild(apodTitle)
    
    const apodIcon = document.createElement("img")
    apodIcon.className = "apodIcon"
    apodIcon.src = "./src/styles/assets/ÍCONES/GALERIA.PNG"
    apodTitle.appendChild(apodIcon)

    const title = document.createElement("p")
    title.className = "title"
    title.innerText = object.title
    apodTitle.appendChild(title)
    
    const p = document.createElement("p")
    p.className = "explanation"
    p.innerText = `Explanation: ${object.explanation}`
    div.appendChild(p)
    
    const copyright = document.createElement("p")
    copyright.className = "copyright"
    copyright.innerText = `Copyright: ${object.copyright}`
    div.appendChild(copyright)
  }
  
}

astronomyPicOfTheDay(pic)



function createGallery(picture){
  console.log(picture)
  
  let arr = []
  arr.push(picture)
  
  console.log(arr)
  console.log(arr.length)
  
  for(let i = 0; i < arr[0].length; i++){
    const galleryCards = document.createElement("div")
    galleryCards.className = "galleryCards"
    galleryContainer.appendChild(galleryCards)
    
    const pictureInfos = document.createElement("div")
    pictureInfos.className = "pictureInfos"
    galleryCards.appendChild(pictureInfos)

    const galleryTitle = document.createElement("div")
    galleryTitle.id = "galleryTitle"
    pictureInfos.appendChild(galleryTitle)
    
    const apodIcon = document.createElement("img")
    apodIcon.className = "apodIcon"
    apodIcon.src = "./src/styles/assets/ÍCONES/PLANETA.PNG"
    galleryTitle.appendChild(apodIcon)
    
    const galleryPicTitle = document.createElement("p")
    galleryPicTitle.className = "galleryPicTitle"
    galleryPicTitle.innerText = picture[i].title
    galleryTitle.appendChild(galleryPicTitle)
    
    const description = document.createElement("p")
    description.className = "explanation"
    description.innerText = `Explanation: ${picture[i].explanation}`
    pictureInfos.appendChild(description)
    
    const copyright = document.createElement("p")
    copyright.className = "copyright"
    copyright.innerText = `Copyright: ${picture[i].copyright}`
    pictureInfos.appendChild(copyright)

    const galleryImg = document.createElement("img")
    galleryImg.className = "galleryImg"
    galleryImg.src = picture[i].hdurl
    galleryCards.appendChild(galleryImg)
  }

}

createGallery(galleryPictures);


const meetMe = document.createElement("section")
const myInfos = document.createElement("div")
const myName = document.createElement("h3")
const aboutMe = document.createElement("p")
const linkedin = document.createElement("button")
const github = document.createElement("button")
const hrefLinkedin = document.createElement("a")
const hrefGithub = document.createElement("a")

body.appendChild(meetMe)
meetMe.id = "meetMe"
myInfos.id = "myInfos"
meetMe.appendChild(myInfos)

myInfos.appendChild(myName)
myInfos.appendChild(aboutMe)
myInfos.appendChild(linkedin)
myInfos.appendChild(github)
linkedin.appendChild(hrefLinkedin)
github.appendChild(hrefGithub)
// linkedin.innerHTML(hrefLinkedin)
// github.innerHTML(hrefGithub)

hrefLinkedin.href = "https://www.linkedin.com/in/esther-nunes-02518617a/"
hrefGithub.href = "https://github.com/surielesther"
myName.innerText = "ESTHER SURIEL DA SILVA NUNES"
aboutMe.innerText = "I'm an engineering student who is passionate \n about photography and now is exploring \n the JavaScript universe"
linkedin.innerText = "LINKEDIN"
github.innerText = "GITHUB"

myName.className = "titlesAboutMe"
myName.id = "myName"
linkedin.className = "titlesAboutMe"
github.className = "titlesAboutMe"
aboutMe.className = "aboutMe"