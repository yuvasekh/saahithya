import React from 'react';
// import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Children from '../../Resources/Images/childrens.jpg';
import Athyadamika from '../../Resources/Images/athyadamikam.jpg';
import strilu from '../../Resources/Images/woman.jpg';
import Love from '../../Resources/Images/love.jpg';
import Romance from '../../Resources/Images/romance.png';
import Samajikam from '../../Resources/Images/samajikam.jpg';
import Health from '../../Resources/Images/health.jpg';
import Horror from '../../Resources/Images/horror.jpg';
// import Comedy from '../../Resources/Images/comedy.jpg';
import Life from '../../Resources/Images/life.jpg';
import Science from '../../Resources/Images/science.jpg';
import Suspence from '../../Resources/Images/suspense.jpg';
import Anubandhalu from '../../Resources/Images/anubhandhallu.jpg';
import Fantasy from '../../Resources/Images/fantasy.jpg';
import Vantillu from '../../Resources/Images/vantillu.jpg';
import Anubavalu from '../../Resources/Images/anubhavallu.jpg';
import Mandalikhakathalu from '../../Resources/Images/mandalika kathallu.jpg';
import Prerana from '../../Resources/Images/prerana.jpg';
import Patalu from '../../Resources/Images/songs.jpg';
import Minikathalu from '../../Resources/Images/mini kathalu.jpg';
import Sports from '../../Resources/Images/sports.jpg';
import Detective from '../../Resources/Images/Detective.jpg';
import Crime from '../../Resources/Images/Crime.jpg';
import Bio from '../../Resources/Images/Bio.jpg';

import './Categories.scss';

import adventure from '../../Resources/Images/English/adventure.jpg'
// import Banned from '../../Resources/Images/English/.jpg'
import Business from '../../Resources/Images/English/business.jpg'
import Drama from '../../Resources/Images/English/drama.jpg'
import Fiction from '../../Resources/Images/English/fiction.jpg'
import LGBTQ from '../../Resources/Images/English/LGBTQ.jpg'
import History from '../../Resources/Images/English/history.jpg'
import Poetry from '../../Resources/Images/English/poetry.jpg'
import Sciencef from '../../Resources/Images/English/sciencef.jpg'
import War from '../../Resources/Images/English/war.jpg'
import Travel from '../../Resources/Images/English/travel.jpg'
import Psychology from '../../Resources/Images/English/psychology.jpg'
import Periodical from '../../Resources/Images/English/periodical.jpg'
import Biography from '../../Resources/Images/English/biography.jpg'
import Cooking from '../../Resources/Images/English/cooking.jpg'
import Thriller from '../../Resources/Images/English/thriller.jpg'
import Humor from '../../Resources/Images/English/comedy.jpg'
import Devotional from '../../Resources/Images/English/devotional.jpg'
import love from '../../Resources/Images/English/love.jpg'
import romance from '../../Resources/Images/English/romance.jpg'
import health from '../../Resources/Images/English/health.jpg'
import horror from '../../Resources/Images/English/horror.jpg'
import fantasy from '../../Resources/Images/English/fantasy.jpg'
import Epic from '../../Resources/Images/English/Epic.jpg'
import crime from '../../Resources/Images/English/crime.jpg'
import Philosophy from '../../Resources/Images/English/philosophy.jpg'
import Banned from '../../Resources/Images/English/banned.jpg'
import classic from '../../Resources/Images/English/classic.jpg'
import Childrens from '../../Resources/Images/English/childrens.jpg'
import mystery from '../../Resources/Images/English/mystery.jpg'



import { useLocation, useNavigate } from 'react-router-dom';
 const Teluguimagearray = [
    {img:Children,imgdesc:"బాల సాహిత్యం"},  {img:Athyadamika ,imgdesc:"ఆధ్యాత్మికం"},
    {img:strilu,imgdesc:"మహిళ"}, {img:Love,imgdesc:"ప్రేమ"},
     {img:Romance,imgdesc:"శృంగారం"}, {img:Samajikam,imgdesc:"సామాజికం"},
    {img:Health,imgdesc:"ఆరోగ్యం"}, {img:Horror,imgdesc:"భయానకం"},
    {img:Humor,imgdesc:"హాస్యం"}, {img:Life,imgdesc:"జీవితం"},
    {img:Science,imgdesc:"శాస్త్రీయం"},
    {img:Suspence,imgdesc:"సస్పెన్స్"}, {img:Anubandhalu,imgdesc:"అనుబంధాలు"},
    {img:Fantasy,imgdesc:"ఫాంటసీ"}, {img:Vantillu,imgdesc:"వంటిల్లు"},
    {img:Anubavalu,imgdesc:"అనుభవాలు"},
    {img:Mandalikhakathalu,imgdesc:"మాండలిక కథలు"}, {img:Prerana,imgdesc:"ప్రేరణ"},
    {img:Patalu,imgdesc:"పాటలు"}, {img:Minikathalu,imgdesc:"కథలు"},
    {img:Sports,imgdesc:"క్రీడలు"},
    {img:Detective,imgdesc:"డిటెక్టివ్"},
    {img:Crime,imgdesc:"నేరం"},
    {img:Bio,imgdesc:"జీవిత చరిత్ర"}
  ];
  const Englishimagearray = [
    { img: adventure, imgdesc: "Adventure" },
    { img: Banned, imgdesc: "Banned Books" },
    { img: Business, imgdesc: "Business & Money" },
    { img: classic, imgdesc: "Classics" },
    { img: Philosophy, imgdesc: "Philosophy & Inspiration" },
    { img: Drama, imgdesc: "Drama" },
    { img: Fiction, imgdesc: "Fiction And Literature" },
    { img: LGBTQ, imgdesc: "Gay/Lesbian/LGBTQ+" },
    { img: History, imgdesc: "History" },
    { img: Poetry, imgdesc: "Poetry" },
    { img: Sciencef, imgdesc: "Science Fiction" },
    { img: War, imgdesc: "War" },
    { img: Travel, imgdesc: "Travel" },
    { img: Psychology, imgdesc: "Psychology" },
    { img: Periodical, imgdesc: "Periodical & Mythology" },
    { img: Biography, imgdesc: "Biography" },
    { img: Cooking, imgdesc: "Cooking" },
    { img: Sports, imgdesc: "Games/Sports" },
    { img: Patalu, imgdesc: "Music" },
    { img: mystery, imgdesc: "Mystery/Detective" },
    { img: Thriller, imgdesc: "Thriller & Suspense" },
    { img:Humor, imgdesc: "Humor/Comedy" },
    { img: Childrens, imgdesc: "Children" },
    { img: Devotional, imgdesc: "Devotional" },
    { img: love, imgdesc: "Love" },
    { img: romance, imgdesc: "Romance" },
    { img:health, imgdesc: "Health" },
    { img: horror, imgdesc: "Horror" },
    { img: fantasy, imgdesc: "Fantasy" },
    { img: Epic, imgdesc: "Epic/Short Stories" },
    { img: crime, imgdesc: "Crime" }
];




const Categories = () => {  


  const goBack = () => {
    navigate(-1);
  };

  const navigate=useNavigate();
  // const location = useLocation();
    



  
    const myProp = location.state && location.state.myProp;
    console.log(myProp,"language")
    const test=(item)=>
    {
      var append={languageandtype:myProp,category:item.imgdesc}
       console.log(append,"cnecccccccccccc")

       item['type']=myProp.imgdesc
      navigate('/cateogories', { state: { myProp:append } })
    }



  return (

    <div >
      <div className='category-cont'>

      

      {myProp.category.language === "Telugu"
        ? Teluguimagearray.map((item, index) => (
            <div className='category-cont2' key={index} onClick={() => test(item)}>
              <img src={item.img} className='cotegory-img' alt={`image-${index}`} />
              <h4 className="category-head" style={{ backdropFilter: 'blur(50px) saturate(70%)'}}>{item.imgdesc}</h4>
             
            </div>
         
          ))
          
        : Englishimagearray.map((item, index) => (
            <div className='category-cont2' key={index} onClick={() => test(item)}>
              <img src={item.img} className='cotegory-img' alt={`image-${index}`} />
              <h4 className="category-head" style={{ backdropFilter: 'blur(20px) saturate(70%)' }}>{item.imgdesc}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;