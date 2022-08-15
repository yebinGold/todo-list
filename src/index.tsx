import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
	
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, menu, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	main, menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
	  margin: 0;
	  padding: 0;
	  border: 0;
	  font-size: 100%;
	  font: inherit;
	  vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure,
	footer, header, hgroup, main, menu, nav, section {
	  display: block;
	}
	/* HTML5 hidden-attribute fix for newer browsers */
	*[hidden] {
	    display: none;
	}
	body {
	  line-height: 1;
	}
	menu, ol, ul {
	  list-style: none;
	}
	blockquote, q {
	  quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
	  content: '';
	  content: none;
	}
	table {
	  border-collapse: collapse;
	  border-spacing: 0;
	}
	// 개별 추가 코드
	* {
	  box-sizing: border-box;
	}
	body {
	  font-family: 'Source Sans Pro', sans-serif;
	  background-color: #9775fa;
	}
	a {
	  text-decoration: none;
	}
	input, select, option{
		outline: none;
	}
	button{
		background-color: rgba(225, 225, 225, 0.8);
		border: 2px solid white;
		border-radius: 15px;
		padding: 5px 10px;
		margin: 0 5px;
		cursor: pointer;
		transition: all .2s ease-in-out;
		&:hover{
			background-color: aliceblue;
		}
	}
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
