import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './DummyCarosel.scss';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getData, latest, trending } from '../components/services/api';
import { Slide } from 'react-toastify';

export const DummyCarousel = () => {
  const [filesdata, setFilesData] = useState([]);
  const [filesdata1, setFilesData1] = useState([]);
  const path = location.pathname;
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const fetchData = async (fetchFunction, setDataFunction) => {
    try {
      const res = await fetchFunction();
      console.log(res,"yuvas")
      const updatedData = await Promise.all(res.map(async (item) => {
        // const bufferData = item.FileImage.data;

        // const base64 = await bufferToBase64(bufferData);
        let url=`https://saahithyapdffiles.blob.core.windows.net/uploadfilessaahithya/${item.EpisodeId}${item.ImageExtension}?sp=r&st=2023-08-28T11:42:38Z&se=2023-12-30T19:42:38Z&spr=https&sv=2022-11-02&sr=c&sig=fvbUPQhstqAT7OaFy7XS7LuERdDsNu6U8uACd72XLmA%3D`
        item.FileImage.data = url;
        return item;
      }));
      setDataFunction(updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  const bufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  useEffect(() => {
    fetchData(latest, setFilesData);
    fetchData(trending, setFilesData1);
  }, []);

  const test = (item) => {
    navigate('/itemdesc', { state: { myProp: item } });
  };

  return (
    <div className='homecontent' style={{ marginTop: "40px" }}>
      {path === '/' ? (
        <>
          <p style={{ fontSize: '30px' }}> కనుగొనండి కథల ప్రపంచం </p>
        </>
      ) : (
        <></>
      )}

      <p className='trending-head'>టాప్ ట్రెండింగ్ సిరీస్</p>
      <br />
      <Slider {...settings}>
        {filesdata.map((item, index) => (
          <div className='trend-img-con' key={item.id}>
            {/* <img src={`data:image/png;base64,${item.FileImage.data}`} className='img5' onClick={() => { test(item) }} /> */}
            <img src={item.FileImage.data} className='img5' onClick={() => { test(item) }} />
            <h3 className='trend-head'>{item.FileName}</h3>
          </div>
        ))}
      </Slider>

      <br />
      <p className='trending-head'>ఇటీవల అప్డేట్ చేసిన టాప్ సిరీస్</p>
      <br />
      <Slider {...settings}>
        {filesdata1.map((item, index) => (
          <div className='trend-img-con' key={item.id}>
            {/* <img src={`data:image/png;base64,${item.FileImage.data}`} className='img5' onClick={() => { test(item) }} /> */}
            <img src={item.FileImage.data} className='img5' onClick={() => { test(item) }} />
            <h3 className='trend-head'>{item.FileName}</h3>
          </div>
        ))}
      </Slider>
      <br />
    </div>
  );
};

export default DummyCarousel;
