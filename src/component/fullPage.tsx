import React from 'react';
import ReactDOM from "react-dom";
import ReactFullpage from '@fullpage/react-fullpage';
import { Section1 } from "./section-1";
import { Section2 } from "./section-2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RightOutlined } from "@ant-design/icons";

export const FullPage = () => (
    // @ts-ignore
    <ReactFullpage
        navigation
        slidesNavigation={true}
        controlArrows={true}
        controlArrowsHTML={["<div class=\"my-arrow\"><i class=\"fa-solid fa-chevron-left fa-4x\" style=\"color: #fff;\"></i><\/div>",
                            "<div class=\"my-arrow\"><i class=\"fa-solid fa-chevron-right fa-4x\" style=\"color: #fff;\"></i><\/div>"]} 
        scrollingSpeed={1000}
        render={({ state, fullpageApi }) => {


            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        {/*<p>Section 1 (welcome to fullpage.js)</p>*/}
                        {/*<button onClick={() => fullpageApi.moveSectionDown()}>*/}
                        {/*    Click me to move down*/}
                        {/*</button>*/}
                        {/*<p>dsfdsf</p>*/}
                        <Section1 />
                    </div>
                    <div className="section">
                        <Section2 />
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
)
