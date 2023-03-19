import React, { Fragment, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
// import Button from './Button';

//slick library
import $ from "jquery";
import slick from 'slick-carousel';
import '../../assets/css/slick.css'

const CarouselCandidate = ({ data }) => {
    let i = 0;

    //slick carousel config
    useEffect(() => {
        $(document).ready(function () {
            $('.carousel-candidate').slick({
                dots: true,
                autoplay: true,
                autoplaySpeed: 3000,
                dotsClass: 'dots-carousel',
                infinite: false,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: false,
                nextArrow: false,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });
    }, [])

    return (
        <Fragment>
            <div class="carousel-candidate">
                {data.map(item => (
                    <div key={item.id} className="team-card">
                        <div className="team__card-img">
                            <Avatar alt="Candidat" src={item.img} sx={{ width: 60, height: 60 }} key={i++} />
                        </div>
                        <div className="team__card-info">
                            <div className="team-card-name">{item.name}</div>
                            <div className="team-card-rating">
                                <Rating name="rating" defaultValue={item.rating} precision={0.5} />
                            </div>
                            <div className="team-card-text">
                                <p>{item.text}</p>
                            </div>
                            {/* <Button
                                type="vote"
                                name="Votează"
                            /> */}
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}
export default CarouselCandidate