import React, { Component } from 'react';
import ServerContainer from './server-container';
import GamesPanel from './games-panel';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.scss';

export default class Content extends Component {
    render() {
        const { deviceType } = this.props;
        const responsive = {
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1172
                    },
                    items: 3,
                    slidesToSlide: 2,
                    paritialVisibilityGutter: 1
                },
                miniDesktop: {
                    breakpoint: {
                        max: 1170,
                        min: 0
                    },
                    items: 6,
                    slidesToSlide: 3,
                    paritialVisibilityGutter: 1
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 200
                    },
                    items: 5,
                    slidesToSlide: 3,
                    paritialVisibilityGutter: 0
                },
                mTablet: {
                    breakpoint: {
                        max: 910,
                        min: 200
                    },
                    items: 4,
                    slidesToSlide: 2,
                    paritialVisibilityGutter: 0
                },
                lTablet: {
                    breakpoint: {
                        max: 750,
                        min: 200
                    },
                    items: 3,
                    slidesToSlide: 2,
                    paritialVisibilityGutter: 0
                },
                Mobile: {
                    breakpoint: {
                        max: 550,
                        min: 0
                    },
                    items: 2,
                    slidesToSlide: 2,
                    paritialVisibilityGutter: 0
                },
                sMobile: {
                    breakpoint: {
                        max: 370,
                        min: 0
                    },
                    items: 1,
                    slidesToSlide: 1,
                    paritialVisibilityGutter: 0
                }
            };

        return (
            <div className="content">
                <div className="serve-list">
                    <div className="title">
                        <div className="icon"><img src={this.props.server.image} alt={this.props.server.title} /></div>
                        <h4 className="title">{this.props.server.title}</h4>
                    </div>
                    <div className="list">
                    <Carousel
                        showDots
                        arrows={false}
                        deviceType={deviceType}
                        ssr
                        slidesToSlide={1}
                        containerClass="carousel-with-dots"
                        responsive={responsive}
                        partialVisbile
                        infinite
                    >
                        {this.props.server.servers.map((data, index) => (
                            <ServerContainer key={index} data={data} />
                        ))}
                    </Carousel>
                    </div>
                </div>
                <div className="games-list">
                    {this.props.games.map((data, index) => (
                        <GamesPanel key={index} data={data}/>
                    ))}
                </div>
            </div>
        )
    }
}
