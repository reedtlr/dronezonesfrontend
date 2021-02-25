import React from "react";
import Carousel from 'react-material-ui-carousel'

export default function MainCarousel() {
    return (
        <Carousel
            autoPlay
            navButtonsAlwaysInvisible
        >
            <div style={{ height: "500px", overflow: "hidden" }}>
                <img
                    alt="testimage"
                    src="/carousel/image01.jpg"
                    width="100%"

                />
                <p className="legend">test Image</p>
            </div>
            <div style={{ height: "500px", overflow: "hidden" }}>
                <img
                    alt="testimage2"
                    src="/carousel/image02.jpg"
                    width="100%"

                />
                <p className="legend">test Image</p>
            </div>
            <div style={{ height: "500px", overflow: "hidden" }}>
                <img
                    alt="testimage3"
                    src="/carousel/image03.jpg"
                    width="100%"

                />
                <p className="legend">test Image</p>
            </div>
            <div style={{ height: "500px", overflow: "hidden" }}>
                <img
                    alt="testimage4"
                    src="/carousel/image04.jpg"
                    width="100%"

                />
                <p className="legend">test Image</p>
            </div>
            <div style={{ height: "500px", overflow: "hidden" }}>
                <img
                    alt="testimage5"
                    src="/carousel/image05.jpg"
                    width="100%"

                />
                <p className="legend">test Image</p>
            </div>
            <div style={{ height: "500px", overflow: "hidden" }}>
                <img
                    alt="testimage6"
                    src="/carousel/image06.jpg"
                    width="100%"
                />
                <p className="legend">test Image</p>
            </div>
        </Carousel>
    )
};