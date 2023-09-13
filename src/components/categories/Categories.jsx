import React from 'react';


import Children from '../../Resources/Images/childrens.jpg';
import Athyadamika from '../../Resources/Images/athyadamikam.jpg';
import strilu from '../../Resources/Images/woman.jpg';
import Love from '../../Resources/Images/love.jpg';
import Romance from '../../Resources/Images/romance.jpg';
import Samajikam from '../../Resources/Images/samajikam.jpg';
import Health from '../../Resources/Images/health.jpg';
import Horror from '../../Resources/Images/horror.jpg';
import Comedy from '../../Resources/Images/comedy.jpg';
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




import { useLocation, useNavigate } from 'react-router-dom';
 const Teluguimagearray = [
    {img:Children,imgdesc:"పిల్లలు"},  {img:Athyadamika ,imgdesc:"ఆధ్యాత్మిక"},
    {img:strilu,imgdesc:"స్త్రీలు"}, {img:Love,imgdesc:"ప్రేమ"},
     {img:Romance,imgdesc:"రోమాన్స్"}, {img:Samajikam,imgdesc:"సామాజికం"},
    {img:Health,imgdesc:"ఆరోగ్యం"}, {img:Horror,imgdesc:"భయం"},
    {img:Comedy,imgdesc:"కామెడీ"}, {img:Life,imgdesc:"జీవితం"},
    {img:Science,imgdesc:"శాస్త్రం"},
    {img:Suspence,imgdesc:"సస్పెన్స్"}, {img:Anubandhalu,imgdesc:"అనుబంధాలు"},
    {img:Fantasy,imgdesc:"ఫాంటసీ"}, {img:Vantillu,imgdesc:"వంటిల్లు"},
    {img:Anubavalu,imgdesc:"అనుబావలు"},
    {img:Mandalikhakathalu,imgdesc:"మండలిక కథలు"}, {img:Prerana,imgdesc:"ప్రేరణ"},
    {img:Patalu,imgdesc:"పాటలు"}, {img:Minikathalu,imgdesc:"మిని కథలు"},
    {img:Sports,imgdesc:"క్రీడలు"},
    {img:Detective,imgdesc:"డిటెక్టివ్"},
    {img:Crime,imgdesc:"క్రైమ్"},
    {img:Bio,imgdesc:"జీవిత చరిత్ర"}
  ];
  const Englishimagearray = [
    { img: Children, imgdesc: "Adventure" },
    { img: Children, imgdesc: "Banned Books" },
    { img: Children, imgdesc: "Business & Money" },
    { img: Children, imgdesc: "Classics" },
    { img: Children, imgdesc: "Philosophy & Inspiration" },
    { img: Children, imgdesc: "Drama" },
    { img: Children, imgdesc: "Fiction And Literature" },
    { img: Children, imgdesc: "Gay/Lesbian/LGBTQ+" },
    { img: Children, imgdesc: "History" },
    { img: Children, imgdesc: "Poetry" },
    { img: Children, imgdesc: "Science Fiction" },
    { img: Children, imgdesc: "War" },
    { img: Children, imgdesc: "Travel" },
    { img: Children, imgdesc: "Psychology" },
    { img: Children, imgdesc: "Periodical & Mythology" },
    { img: Children, imgdesc: "Biography" },
    { img: Children, imgdesc: "Cooking" },
    { img: Children, imgdesc: "Games/Sports" },
    { img: Children, imgdesc: "Music" },
    { img: Children, imgdesc: "Mystery/Detective" },
    { img: Children, imgdesc: "Thriller & Suspense" },
    { img:Children, imgdesc: "Humor/Comedy" },
    { img: Children, imgdesc: "Children" },
    { img: Children, imgdesc: "Devotional" },
    { img: Children, imgdesc: "Love" },
    { img: Children, imgdesc: "Romance" },
    { img:Children, imgdesc: "Health" },
    { img: Children, imgdesc: "Horror" },
    { img: Children, imgdesc: "Fantasy" },
    { img: Children, imgdesc: "Epic/Short Stories" },
    { img: Children, imgdesc: "Crime" }
];




const Categories = () => {  
    const navigate=useNavigate();
    const location = useLocation();

  
    const myProp = location.state && location.state.myProp;
    console.log(myProp,"language")
    const test=(item)=>
    {
      var append={languageandtype:myProp,category:item.imgdesc}
       console.log(append,"cnecccccccccccc")

       item['type']=myProp.imgdesc
      navigate('/subcateogories', { state: { myProp:append } })
    }
  return (

    <div className='categorycontainer'>
      {myProp?.language === "Telugu"
        ? Teluguimagearray.map((item, index) => (
            <div className='containerimg' key={index} onClick={() => test(item)}>
              <img src={item.img} className='category-image-size01' alt={`image-${index}`} />
              <h2 className="heading-one" style={{ backdropFilter: 'blur(20px) saturate(70%)' }}>{item.imgdesc}</h2>
            </div>
          ))
        : Englishimagearray.map((item, index) => (
            <div className='containerimg' key={index} onClick={() => test(item)}>
              <img src={item.img} className='category-image-size01' alt={`image-${index}`} />
              <h2 className="heading-one" style={{ backdropFilter: 'blur(20px) saturate(70%)' }}>{item.imgdesc}</h2>
            </div>
          ))}
    </div>
  );
};

export default Categories;