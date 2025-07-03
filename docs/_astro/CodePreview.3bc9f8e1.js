import{u as v,k as S,l as P,m as M,o as F,p as O,q as I}from"./index.8cadc582.js";import{c as h,b as A,d as z}from"./index.9579ce70.js";import{r as m}from"./index.26f5e802.js";import{j as e}from"./jsx-runtime.47a19089.js";import{A as R}from"./preload-helper.a460f0e1.js";import{m as w}from"./use-force-update.df9cacee.js";const E=n=>n.reduce((r,i)=>{const{props:o}=i.props.value;let t,d=!1,c=!1;if(o.metastring){const[s,...l]=o.metastring.split(" ");t="/"+s,l.includes("hidden")&&(d=!0),l.includes("active")&&(c=!0)}else if(o.className==="language-js")t="/App.js";else if(o.className==="language-css")t="/styles.css";else throw new Error(`Code block is missing a filename: ${o.children}`);if(r[t])throw new Error(`File ${t} was defined multiple times. Each file snippet should have a unique path name`);return r[t]={code:o.children||"",hidden:d,active:c},r},{}),T={colors:{surface1:"#231f20",surface2:"#0f0d0e",surface3:"#2F2F2F",clickable:"#f9f4da",base:"#f9f4da",disabled:"#4D4D4D",hover:"#C5C5C5",accent:"#fcba28",error:"#ed203d",errorSurface:"#262422"},syntax:{plain:"#f9f4da",comment:"#a7a7a7",keyword:"#f38ba3",tag:"#f38ba3",punctuation:"#f9f4da",definition:"#9d7dce",property:"#12b5e5",static:"#12b5e5",string:"#f99157"},font:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'"Fira Mono", monospace',size:"13px",lineHeight:"20px"}},B={template:"react",customSetup:{dependencies:{react:"^18.0.0","react-query":"4.0.0-beta.23","react-router-dom":"^6.3.0","react-dom":"^18.0.0","react-scripts":"^4.0.0","prop-types":"^15.8.1"},entry:"/index.js",environment:"create-react-app"},theme:{colors:{surface1:"#231f20",surface2:"#0f0d0e",surface3:"#2F2F2F",clickable:"#f9f4da",base:"#f9f4da",disabled:"#4D4D4D",hover:"#C5C5C5",accent:"#fcba28",error:"#ed203d",errorSurface:"#262422"},syntax:{plain:"#f9f4da",comment:"#a7a7a7",keyword:"#f38ba3",tag:"#f38ba3",punctuation:"#f9f4da",definition:"#9d7dce",property:"#12b5e5",static:"#12b5e5",string:"#f99157"},font:{body:'"Outfit", sans-serif',mono:'"Fira Code", monospace',size:"14px",lineHeight:"24px"}},options:{classes:{"sp-navigator":"rounded-t-lg","sp-layout":"!rounded-none !border-0","sp-icon-standalone":"!bg-brand-coal !text-brand-beige"}}},D=`/* Ignore this file. You can put your CSS in the styles.css file */
:root {
  --gray-light: #1b1d23;
  --gray-dark: #131519;
  --gray-darkest: #0d0f11;
  --coal: #0f0d0e;
  --charcoal: #231f20;
  --gray: #262522;
  --yellow: #fcba28;
  --pink: #f38ba3;
  --green: #0ba95b;
  --purple: #7b5ea7;
  --beige: #f9f4da;
  --blue: #12b5e5;
  --orange: #fc7428;
  --red: #ed203d;
  --white: #fff;
  --black: var(--coal);

  --bg: var(--coal);
  --bg-alt: var(--charcoal);
  --color: var(--beige);
  --color-muted: var(--beige-50);
  --color-inverse: var(--charcoal);
  --border-color: var(--beige-10);
  --accent: var(--yellow);
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

html {
  font-family: "Outfit", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  font-size: 18px;
}

body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: var(--coal);
  color: var(--beige);
  font-family: "Outfit", sans-serif;
}

#root,
html,
body {
  height: 100%;
}

.light {
  --bg: var(--beige);
  --bg-alt: var(--beige);
  --color: var(--charcoal);
  --color-muted: var(--charcoal-50);
  --color-inverse: var(--beige);
  --border-color: var(--charcoal-10);
  --accent: var(--purple);
}

.dark,
.light {
  min-height: 100%;
}

h1 {
  font-family: "Paytone One", sans-serif;
  text-transform: uppercase;
  font-size: 24px;
}

h2 {
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 24px;
}

h3 {
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 24px;
}

h4 {
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0;
}

select {
  background: var(--charcoal);
  color: var(--yellow);
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  border: 10px solid var(--charcoal);
}

select:focus {
  outline: 1px solid var(--border-color);
}

button,
.btn {
  appearance: none;
  display: inline-flex;
  text-align: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  font-size: 14px;
  transition: all 200ms ease-in-out;
  cursor: pointer;
}

button:hover,
.btn:hover {
  opacity: 0.85;
}

button,
button.primary,
.btn.primary {
  background: var(--accent);
  color: var(--bg-alt);
  text-transform: uppercase;
  font-weight: 900;
  font-size: 12px;
}

button.secondary,
.btn.secondary {
  background: var(--bg-alt);
  color: var(--accent);
}

button.link,
.btn.link {
  appearance: none;
  background: transparent;
  color: var(--accent);
  padding: 10px;
  text-decoration: underline;
  display: inline-block;
}

button.large,
.btn.large {
  font-size: 14px;
  padding: 16px;
}

label {
  font-size: 14px;
  margin-bottom: 8px;
  display: block;
}

input {
  appearance: none;
  border: 1px solid var(--border-color);
  background-color: transparent;
  border-radius: 4px;
  padding: 10px;
  color: var(--color);
}

input::placeholder {
  color: var(--color-muted);
}

input:focus {
  border-color: var(--color);
  outline: none;
}

.container {
  margin: 0 auto;
  max-width: 1100px;
  padding: 50px;
}

a {
  color: var(--yellow);
  font-weight: 600;
}
`,y=(n=!0)=>{const r='<div className="container"><App /></div>',i=`<StrictMode>
      ${r}
    </StrictMode>`;return`import React, { StrictMode } from "react";
  import { createRoot } from "react-dom/client";
  import "./styles.css";
  import "./theme.css";
  import App from "./App.jsx";
  const root = createRoot(document.getElementById("root"));
  root.render(
    ${n?i:r}
  );`},g={template:"react",files:{"/App.jsx":{code:`export default function App() {
  return <h1>Hello World</h1>
}
`,active:!0},"/styles.css":{code:"",hidden:!0},"/theme.css":{code:D,hidden:!0},"/public/index.html":{code:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React GG</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`,hidden:!0},"/package.json":{code:JSON.stringify({dependencies:{react:"19.0.0","react-dom":"19.0.0","react-scripts":"^4.0.0"},main:"/index.js"}),hidden:!0}},main:"/App.jsx",environment:"create-react-app",showConsole:!1},k={...g,files:{...g.files,"/index.js":{code:y(!0),hidden:!0}}},q={...g,files:{...g.files,"/index.js":{code:y(!1),hidden:!0}}};function U(n,{strict:r=!0,devTools:i}){switch(n){case"react":return r?k:q;default:return k}}const L=e.jsx("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.18185 6.18175C4.35759 6.00602 4.64251 6.00602 4.81825 6.18175L7.50005 8.86356L10.1819 6.18175C10.3576 6.00602 10.6425 6.00602 10.8182 6.18175C10.994 6.35749 10.994 6.64241 10.8182 6.81815L7.81825 9.81815C7.73386 9.90254 7.6194 9.94995 7.50005 9.94995C7.3807 9.94995 7.26624 9.90254 7.18185 9.81815L4.18185 6.81815C4.00611 6.64241 4.00611 6.35749 4.18185 6.18175Z",fill:"#F9F4DA"})}),H=n=>n==="log"||n==="info"?"info":n==="warn"?"warning":"error",$=n=>n==="warn"?"text-brand-yellow":n==="error"?"text-brand-red":"text-brand-beige";function G(...n){const r=n[0];if(typeof r!="string")return n;const i=n.slice(1);let o=String(r);if(i.length){const t=/(%?)(%([jds]))/g;o=o.replace(t,(d,c,s,l)=>{let a=i.shift();switch(l){case"s":a+="";break;case"d":case"i":a=parseInt(a,10).toString();break;case"f":a=parseFloat(a).toString();break}return c?(i.unshift(a),d):a})}if(i.length)for(let t=0;t<i.length;t++)o+=" "+String(i[t]);return[o.replace(/%{2,2}/g,"%")]}const Q=100,_=({showConsole:n})=>{const{listen:r}=v(),[i,o]=m.useState([]);m.useEffect(()=>{let c=!0;const s=r(l=>{if(!c){console.warn("Received an unexpected log from Sandpack.");return}l.type==="action"&&l.action==="show-error"||((l.type==="start"&&l.firstLoad||l.type==="refresh")&&o([]),l.type==="console"&&l.codesandbox&&o(a=>{const f=l.log.filter(u=>!(u.method==="info"||u.method==="error"||u?.data?.[0]?.includes&&u?.data?.[0]?.includes("Error")||typeof u?.data?.[0]=="string"&&u?.data?.[0]?.indexOf("The above error occurred")!==-1)).map(u=>({...u,data:G(...u.data)}));let p=[...a,...f];for(;p.length>Q;)p.shift();return p}))});return()=>{s(),c=!1}},[r]);const[t,d]=m.useState(!0);return i.length===0?null:e.jsx("div",{className:"min-h-[28px]",children:e.jsxs("div",{className:"console-wrapper absolute bg-brand-coal bottom-0 w-full text-brand-beige z-10",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("button",{className:"flex items-center p-1",onClick:()=>d(!t),children:[e.jsx("span",{className:h("transition-transform duration-300",t?"rotate-0":"rotate-[-90deg]"),children:L}),e.jsxs("span",{className:"pl-1 text-sm",children:["Console (",i.length,")"]})]}),!n&&e.jsx("button",{className:"p-1",onClick:()=>{o([])},children:e.jsxs("svg",{viewBox:"0 0 24 24",width:"14",height:"14",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("line",{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"})]})})]}),e.jsx(R,{children:e.jsx(w.div,{initial:{height:0},animate:{height:"auto"},exit:{height:0},children:t&&e.jsx("div",{className:"w-full h-full border-t border-brand-charcoal bg-brand-coal console",children:e.jsx("div",{className:"max-h-[140px] overflow-auto",children:i.map(({data:c,id:s,method:l})=>e.jsx("div",{className:h("first:border-none border-t border-brand-charcoal text-md p-1 pl-2 leading-6 font-mono min-h-[28px] whitespace-pre-wrap",`console-${H(l)}`,$(l)),children:e.jsx("span",{className:"console-message",children:c.map((a,f)=>{if(typeof a=="string")return e.jsx("span",{children:a},`${a}-${f}`);let p;if(a!=null&&typeof a["@t"]=="string")p=a["@t"];else try{p=JSON.stringify(a,null,2)}catch{try{p=Object.prototype.toString.call(a)}catch{p="["+typeof a+"]"}}return e.jsx("span",{className:h("console-span"),children:e.jsx(S,{initMode:"user-visible",showTabs:!1,code:p})},`${a}-${f}`)})})},s))})})},t?"open":"closed")})]})})};function Y(n){const r=[],i=n.replace("mark=","").split(",");for(const o of i){const t=o.match(/\[(\d+):(\d+)\]$/);if(t){const d=parseInt(t[1]),c=parseInt(t[2]),s=parseInt(o.replace(t[0],""));r.push({line:s,className:"widget",startColumn:d,endColumn:c})}else{const[d,c]=o.split(":").map(Number);c||r.push({line:d,className:"highlight"});for(let s=d;s<=c;s++)r.push({line:s,className:"highlight"})}}return r}function W(n){const r=[];let i="/App.jsx",o={};return n.forEach(t=>{if(!t)return;const{props:d}=t.props.children,[c,...s]=d.metastring.split(" ");s.includes("hidden")||r.push(c),s.includes("active")&&(i=c),s.forEach((l,a)=>{l.includes("mark")&&(o[`/${c}`]=Y(s[a]))})}),{visibleFiles:r,activeFile:i,decorators:o}}function J({hide:n=!1,strictMode:r=!0,template:i}){const[o,t]=m.useState(r),{sandpack:d}=v();if(i!=="react"||n)return null;function c(){const s=y(!o);d.updateFile("/index.js",s),t(!o)}return e.jsx("button",{title:"Click to toggle strict mode",onClick:c,className:h("bg-brand-coal rounded-full border border-brand-beige/10 px-4 hover:brightness-110",o?"text-brand-beige":"text-brand-beige/50"),children:o?e.jsxs("span",{className:"inline-flex items-center gap-2",children:[e.jsx("span",{className:"w-[12px] h-[12px] rounded-full bg-brand-green inline-block"}),"Strict Mode On"]}):e.jsxs("span",{className:"inline-flex items-center gap-2",children:[e.jsx("span",{className:"w-[12px] h-[12px] rounded-full border border-brand-beige/10 inline-block"}),"Strict Mode Off"]})},"strict-mode-on")}const V=`export default function Authors () {
  return <aside>
    <h2>Authors</h2>
    <ul>
      <li>Tyler McGinnis</li>
      <li>Ben Adam</li>
      <li>Lynn Fisher</li>
    </ul>
  </aside>
}`,X=`function Hello (props) {
  return <h1>Hello, {props.name}</h1>
}

export default function App () {
  return <Hello name='Tyler' />
}
`,Z=`import * as React from "react"
import Modal from "./Modal"

export default function App () {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)
  
  return (
    <main>
      <button onClick={handleOpen}>Open Modal</button>
      {isOpen && (
        <Modal onClose={handleClose}>
          <h1>Modal is Customizable</h1>
          <p><i>children</i> can be whatever we want.</p>
          <p>(and it can be different each time we use Modal)</p>
        </Modal>
      )}
    </main>
  )
}
`,K=`import closeIcon from "./closeIcon"

export default function Modal ({ children, onClose }) {
  return (
    <dialog>
      <button onClick={onClose}>{closeIcon}</button>
      { children }
    </dialog>
  )
}
`,ee=`section {
  text-align: center;
}

dialog {
  position: fixed;
  top: 40px;
  background: var(--purple);
  width: 75vw;
  margin: auto;
  display: block;
  animation: expand 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  border-radius: 8px;
  padding: 32px;
}

dialog button {
  position: absolute;
  top: 16px;
  right: 16px;
  appearance: none;
  background: rgba(255, 255, 255, 0.05);
  padding: 0;
  color: var(--charcoal);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes expand {
  0% {
    transform: scale(0.75);
  }
  100% {
    transform: scale(1);
  }
}
`,te=`const closeIcon = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
  </svg>
)

export default closeIcon
`,ne=`import * as React from "react"

export default function Counter() {
  const [count, setCount] = React.useState(0)

  const handleClick = () => setCount(count + 1)

  return (
    <button onClick={handleClick}>
      {count}
    </button>
  )
}
`,oe=`.container {
  display: grid;
  justify-items: center;
  align-items: start;
  height: 100%;
}

.container button {
  font-size: 30px;
  padding: 15px 30px;
}
`,re=`import * as React from "react"

function Greeting ({ name }) {
  const [index, setIndex] = React.useState(0)

  const greetings = ['Hello', "Hola", "Bonjour"]

  const handleClick = () => {
    const nextIndex = index === greetings.length - 1
      ? 0
      : index + 1
    setIndex(nextIndex)
  }

  return (
    <main>
      <h1>{greetings[index]}, {name}</h1>
      <button onClick={handleClick}>Next Greeting</button>
    </main>
  )
}

export default function App () {
  return <Greeting name="Tyler" />
}
`,ie=`import * as React from "react"
import { fetchPrice } from "./api"

export default function App() {
  const [quantity, setQuantity] = React.useState(1);
  const [price, setPrice] = React.useState(null)
  const [isPending, startTransition] = React.useTransition()

  React.useEffect(() => {
    const handleFetchPrice = async () => {
      const data = await fetchPrice(quantity)
      setPrice(data)
    }

    handleFetchPrice()
  }, [])

  const handleChange = async (e) => {
    const nextQty = Number(e.target.value)
    setQuantity(nextQty);
    
    startTransition(async () => {
      const data = await fetchPrice(nextQty)
      startTransition(() => {
        setPrice(data)
      })
    })
  }

  if (!price) {
    return null
  }

  const baseUrl = "https://ui.dev/api/checkout?product_id=subscription"
  const url = baseUrl + "&quantity=" + quantity + "&code=" + (price.discount?.code || "")

  return (
    <main>
      <img
        src="https://ui.dev/images/subscribe/tier-annual.svg"
        alt="ui.dev courses banner"
      />
      <div>
        <em>
          {price.discountedPrice || price.basePrice} <span>/yr</span>
        </em>
        {price.discountedPrice && <s>{price.basePrice}</s>}
      </div>

      <div>
        Team Size
        <input type="number" value={quantity} onChange={handleChange} />
      </div>

      <p>
        {price.discount?.percentOff > 0 
          ? <>Enjoy your <strong>{price.discount.percentOff}% off</strong> bulk discount <br /></> 
          : null}
        {price.message}
      </p>

      <a
        href={url}
        className={isPending ? "pending" : ""}
      >
        Subscribe to ui.dev
      </a>
    </main>
  );
}`,ae=`const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const formatPrice = (price) => {
  return formatter.format(price);
}

const bulkDiscountMap = [
  { min: 5, max: 9, percentOff: 5 },
  { min: 10, max: 29, percentOff: 10 },
  { min: 30, max: 49, percentOff: 15 },
  { min: 50, max: 74, percentOff: 25 },
  { min: 75, max: 99, percentOff: 35 },
  { min: 100, max: Infinity, percentOff: 50 },
];

const getBulkDiscount = (quantity) => {
  const codes = [
    "BS5NUY",
    "BS10YMN",
    "BS15LMD",
    "BS25JDF",
    "BS35QDF",
    "BS50GPQ",
  ]

  for (let i = 0; i < bulkDiscountMap.length; i++) {
    const discount = bulkDiscountMap[i];
    if (quantity >= discount.min && quantity <= discount.max) {
      return { code: codes[i], percentOff: discount.percentOff };
    }
  }

  return null;
};

export const fetchPrice = (quantity) => {
  const fullPricePerUnit = 495
  const discount = getBulkDiscount(quantity);
  const basePrice = formatPrice(fullPricePerUnit * quantity);
  const discountedPrice = discount ? formatPrice(fullPricePerUnit * quantity * (1 - discount.percentOff / 100)) : null

  let res = {
    quantity,
    fullPricePerUnit: formatPrice(fullPricePerUnit),
    basePrice,
    discountedPrice,
    discount,
    message: null,
  }

  const nextDiscount = bulkDiscountMap.find((d) => quantity < d.min);

  if (nextDiscount) {
    const licensesNeeded = nextDiscount.min - quantity;
    const licenseTerm = licensesNeeded === 1 ? "license" : "licenses";
    res.message = "(Add " + licensesNeeded + " more " + licenseTerm + "to get " + nextDiscount.percentOff + "% off)";
  }
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(res)
    }, 700)
  })
}`,se=`main {
  margin-top: 50px;
  padding: 0 32px 32px;
  border-radius: 20px;
  background-color: var(--green);
  text-align: center;
  color: var(--coal);
}

img {
  width: 75%;
  max-width: 300px;
  margin: 0 auto;
  display: block;
  transform: translateY(-40%);
}

main > div:has(em) {
  margin-top: -35px;
  margin-bottom: 16px;
}

em {
  font-size: 60px;
  font-family: Paytone One;
  font-style: normal;
}

em span {
  font-size: 30px;
}

s {
  margin-left: 16px;
  font-size: 36px;
  opacity: 0.6;
  text-decoration: line-through;
}

body input {
  width: 80px;
  background-color: var(--beige);
  border: 1px solid var(--charcoal);
  border-radius: 6px;
  margin-left: 5px;
  color: var(--coal);
  font-size: 16px;
}

body a {
  display: inline-block;
  margin-top: 24px;
  padding: 20px 24px;
  background-color: var(--yellow);
  color: var(--coal);
  border-radius: 9999px;
  text-transform: uppercase;
  border: 1px solid #000;
  cursor: pointer;
  font-weight: 900;
  box-shadow: 5px 5px 0 var(--coal);
  text-decoration: none;
}

body p {
  margin-bottom: 0;
}

.pending {
  opacity: 0.7;
  pointer-events: none;
}`,ce={"/App.jsx":{code:ie,active:!0},"/api.js":{code:ae},"/styles.css":{code:se,hidden:!0}},le={"/App.jsx":{code:V,active:!0}},de={"/App.jsx":{code:X,active:!0}},pe={"/App.jsx":{code:Z,active:!0},"/Modal.jsx":{code:K},"/styles.css":{code:ee,hidden:!0},"/closeIcon.jsx":{code:te,hidden:!0}},ue={"/App.jsx":{code:ne,active:!0},"/styles.css":{code:oe,hidden:!0}},fe={"/App.jsx":{code:re,active:!0}},me={"/App.jsx":{code:`import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Content from "./Content"
import ContentSkeleton from "./ContentSkeleton"
import { Suspense } from "react"
    
export default function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <Suspense fallback={<ContentSkeleton />}>
        <Content />
      </Suspense>
      <Footer />
    </div>
  )
}`,active:!0},"/Content.jsx":{code:`import { getImage } from "./api"

export default async function Content() {
  const image = await getImage()

  return (
    <div className="content">
      <img src={image.src} alt={image.title} />
      <p>{image.caption}</p>
    </div>
  )
}`}},he={"/App.jsx":{code:`import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Content from "./Content"
import ContentSkeleton from "./ContentSkeleton"
import { Suspense } from "react"
import { getImages } from "./api"

function Layout() {
  const promise = getImages()

  return (
    <div className="layout">
      <Sidebar />
      <Suspense fallback={<ContentSkeleton />}>
        <Content promise={promise} />
      </Suspense>
      <Footer />
    </div>
  )
}`,active:!0},"/Content.jsx":{code:`"use client"

import Carousel from "./Carousel"

export default function Content({ promise }) {
  const images = React.use(promise)

  return (
    <Carousel>
      {images.map((img) => (
        <div key={img.src}>
          <img src={img.src} alt={img.caption} />
          <p>{img.caption}</p>
        </div>
      ))}
    </Carousel>
  )
}`}},ge={"/App.jsx":{code:`import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Content from "./Content"
import ContentSkeleton from "./ContentSkeleton"
import { Suspense } from "react"
import { getImages } from "./api"
import Carousel from "./Carousel"

const CarouselTemplate = async () => {
  const images = await getImages()

  const slides = images.map((img) => (
    <div key={img.src}>
      <img src={img.src} alt={img.caption} />
      <p>{img.caption}</p>
    </div>
  ))

  return (
    <Carousel>
      {slides}
    </Carousel>
  )
}

export default function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <Suspense fallback={<ContentSkeleton />}>
        <CarouselTemplate />
      </Suspense>
      <Footer />
    </div>
  )
}`,active:!0}},xe=Object.freeze(Object.defineProperty({__proto__:null,actions:ce,component:le,props:de,propsChildren:pe,rendering:fe,state:ue,suspense:me,useclient:he,useclient2:ge},Symbol.toStringTag,{value:"Module"})),be={damping:20,stiffness:120,mass:.15};function ve({lineLimit:n,decorators:r}){const{sandpack:i}=v(),{code:o}=O(),{activeFile:t}=i,d=m.useRef({});d.current[t]||(d.current[t]=o.split(`
`).length);const c=d.current[t],[s,l]=m.useState(!1),a=c>n,f=!!r[t];return e.jsxs("div",{className:"relative h-full flex-1",children:[e.jsx(w.div,{transition:be,variants:{collapsed:{height:a?`${n*20}px`:"auto"},expanded:{height:"auto"}},animate:s?"expanded":"collapsed",initial:"collapsed",style:{"--line-limit":n},children:f?e.jsx(S,{wrapContent:!1,decorators:r[t]}):e.jsx(I,{wrapContent:!1})},t),a&&e.jsx("button",{title:s?"Collapse":"Expand",onClick:()=>{l(!s)},className:"bg-[#2E2A2B] text-brand-yellow text-sm absolute bottom-2 right-2 z-100 px-2 py-1 rounded",children:s?e.jsx(A,{size:18}):e.jsx(z,{size:18})})]})}function Ne({strictMode:n=!0,template:r="react",hideEditor:i=!1,hideStrictModeToggle:o=!1,previewHeight:t="250px",hidePreview:d=!1,lineLimit:c=20,example:s,devTools:l=!1,children:a}){const f=xe[s],p=m.Children.toArray(a),{decorators:u,...C}=W(p),j={...f,...E(p)},x=U(r,{strict:n,devTools:l}),b=!!x?.showConsole,N={template:x.template,theme:T,options:{...B.options,...C},files:{...x.files,...j},initMode:"user-visible",autorun:!1,logLevel:0};return e.jsx("div",{className:"editor-wrapper code-preview border-solid border border-brand-coal rounded-lg overflow-hidden not-prose",children:e.jsx(P,{...N,children:e.jsxs(M,{className:"relative",children:[!i&&e.jsx(ve,{decorators:u,lineLimit:c}),d===!0?null:e.jsx(F,{actionsChildren:o?void 0:e.jsx(J,{strictMode:n,template:r,hide:i}),showOpenInCodeSandbox:!1,showRefreshButton:!0,style:{minHeight:b?"0px":t},className:h(b?"invisible !h-0 overflow-hidden":"visible h-full")}),e.jsx(_,{showConsole:b})]})})})}export{Ne as default};
