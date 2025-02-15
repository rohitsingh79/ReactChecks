import React, { useRef, useEffect } from "react";
import SvgContainer from "./SvgContainer";
import {
  GridContainer,
  GridChild,
  SvgIconMainWrapper,
  ContentWrapper
} from "./style";

const Expertise = ({ forwardedRef }) => {
  const childRef1 = useRef(null);
  const childRef2 = useRef(null);
  const childRef3 = useRef(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  };

  const childRefs = [
    { section: "child1", ref: childRef1 },
    { section: "child2", ref: childRef2 },
    { section: "child3", ref: childRef3 }
  ];

  const callbackFunction = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const { transitionDelay, borderBottom } = entry.target.style;
        entry.target.style.cssText = `opacity:1 ; 
        transform: translateY(10px);  transition:transform 600ms ease-in,opacity 
        400ms ease-in; transition-delay: ${transitionDelay};
        border-bottom:${borderBottom};
        `;
      }
    });
  };

  useEffect(() => {
    const appearOnScroll = new IntersectionObserver(callbackFunction, options);
    childRefs.forEach(({ ref }) => {
      appearOnScroll.observe(ref.current);
      return () => appearOnScroll.unobserve(ref.current);
    });
  }, []);

  return (
    <div
      ref={forwardedRef}
      style={{
        padding: "2em 0px"
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100px",
          "text-align": "left",
          "letter-spacing": "5px",
          "word-wrap": "break-word"
        }}
      >
        <div style={{ color: "#999999", "margin-bottom": "15px" }}>
          WHAT DO I DO?
        </div>
        <h2
          style={{
            "font-family": "'Roboto', sans-serif",
            "font-weight": "500",
            "text-transform": "uppercase",
            "letter-spacing": "5px",
            "text-align": "left",
            "font-size": "18px",
            marginBottom: "36px"
          }}
        >
          Here are some of my Expertise
        </h2>
      </div>

      <GridContainer>
        <GridChild
          ref={childRef1}
          style={{
            borderBottom: "2px solid #2c98f0",
            transitionDelay: "0.4s",
            opacity: 0
          }}
        >
          <SvgContainer color="#2c98f0">
            <SvgIconMainWrapper>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="white"
                class="bi bi-lightbulb"
                viewBox="0 0 16 16"
              >
                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
              </svg>
            </SvgIconMainWrapper>
          </SvgContainer>
          <ContentWrapper>
            <h5 style = {{'font-family': 'Roboto, sans-serif' , 'color':'rgb(44, 152, 240)'}}>Front end Web Development</h5>
            <p>
              I have experience building single page web application using
              JavaScript,React,HTML,CSS
            </p>
          </ContentWrapper>
        </GridChild>
        <GridChild
          ref={childRef2}
          style={{
            borderBottom: "2px solid #f9bf3f",
            transitionDelay: "0.8s",
            opacity: 0
          }}
        >
          <SvgContainer color="#f9bf3f">
            <SvgIconMainWrapper>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="white"
                class="bi bi-gear-wide-connected"
                viewBox="0 0 16 16"
              >
                <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z" />
              </svg>
            </SvgIconMainWrapper>
          </SvgContainer>
          <ContentWrapper>
          <h5 style = {{'font-family': 'Roboto, sans-serif','color':'rgb(249, 191, 63)'}}>Back End Development</h5>
            <p>
              I have experience in creating REST API and routes
              using run time env as node js and frameworks such as express js
            </p>
          </ContentWrapper>
        </GridChild>
        <GridChild
          ref={childRef3}
          style={{
            borderBottom: "2px solid #2fa499",
            transitionDelay: "1.0s",
            opacity: 0
          }}
        >
          <SvgContainer color="rgb(47, 164, 153)">
            <SvgIconMainWrapper>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="white"
                class="bi bi-lightbulb"
                viewBox="0 0 16 16"
              >
                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
              </svg>
            </SvgIconMainWrapper>
          </SvgContainer>
          <ContentWrapper>
          <h5 style = {{'font-family': 'Roboto, sans-serif' , 'color':'rgb(47, 164, 153)'}}>Automation Testing</h5>
            <p>
              I have experience in writing end to end automation test cases 
              using webdriver io , selenuim java and python
            </p>
          </ContentWrapper>
        </GridChild>
      </GridContainer>
    </div>
  );
};

export default Expertise;
