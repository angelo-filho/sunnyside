import{j as u,s as r,r as f,L as I,R as v,C as m,Z as E,F as C,I as z,T as R,P as j,a as k,W as F,b as U}from"./vendor.91565e01.js";const Q=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function c(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=c(n);fetch(n.href,a)}};Q();const e=u.exports.jsx,i=u.exports.jsxs,T=u.exports.Fragment,M=()=>e("svg",{width:"124",height:"24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M5.857 18.708c1.638 0 2.995-.36 4.07-1.08 1.075-.721 1.613-1.769 1.613-3.144-.083-1.855-1.464-3.246-4.144-4.173l-1.44-.597c-.314-.1-.538-.198-.67-.298a.45.45 0 01-.198-.373c0-.414.273-.62.819-.62.678 0 1.182.347 1.513 1.043l3.698-1.044c-.893-2.22-2.614-3.329-5.162-3.329-1.522 0-2.788.398-3.797 1.193C1.15 7.08.645 8.116.645 9.39c0 .398.058.766.174 1.106.116.34.29.638.521.894.232.257.455.48.67.671.215.19.488.369.82.534.33.166.582.286.756.36.174.075.41.162.707.261l.422.15 1.49.546c.363.133.6.244.707.335a.449.449 0 01.16.36c0 .431-.404.647-1.215.647-1.191 0-1.903-.53-2.134-1.59L0 14.509c.463 2.8 2.416 4.2 5.857 4.2zm11.636 0c1.638 0 2.845-.63 3.623-1.888v1.615h5.112V5.366h-5.112v7.156c0 1.474-.505 2.21-1.514 2.21-1.026 0-1.539-.736-1.539-2.21V5.366h-5.112v7.653c0 3.793 1.514 5.69 4.542 5.69zm16.103-.273V11.28c0-1.475.504-2.212 1.513-2.212 1.026 0 1.54.737 1.54 2.212v7.155h5.111v-7.652c0-3.793-1.513-5.69-4.541-5.69-1.638 0-2.846.63-3.623 1.888V5.366h-5.113v13.069h5.113zm15.383 0V11.28c0-1.475.504-2.212 1.514-2.212 1.025 0 1.538.737 1.538 2.212v7.155h5.113v-7.652c0-3.793-1.514-5.69-4.542-5.69-1.638 0-2.846.63-3.623 1.888V5.366h-5.113v13.069h5.113zM64.958 24l8.289-18.634H67.91l-2.532 6.684-2.258-6.684h-5.584l5.435 11.802L59.944 24h5.014zm13.67-5.292c1.638 0 2.995-.36 4.07-1.08 1.076-.721 1.614-1.769 1.614-3.144-.083-1.855-1.465-3.246-4.145-4.173l-1.44-.597c-.314-.1-.537-.198-.67-.298a.45.45 0 01-.198-.373c0-.414.273-.62.819-.62.678 0 1.183.347 1.514 1.043l3.698-1.044c-.894-2.22-2.614-3.329-5.162-3.329-1.522 0-2.788.398-3.797 1.193-1.01.795-1.514 1.83-1.514 3.105 0 .398.058.766.173 1.106.116.34.29.638.522.894.231.257.455.48.67.671.215.19.488.369.819.534.33.166.583.286.757.36.173.075.41.162.707.261l.422.15 1.489.546c.364.133.6.244.707.335a.449.449 0 01.161.36c0 .431-.405.647-1.216.647-1.19 0-1.902-.53-2.134-1.59l-3.723.844c.464 2.8 2.416 4.2 5.857 4.2zm9.8-14.137c.91 0 1.613-.215 2.11-.646.495-.43.744-.977.744-1.64 0-.678-.24-1.23-.72-1.651C90.082.21 89.371 0 88.428 0c-.943 0-1.655.211-2.135.634-.48.422-.72.973-.72 1.652 0 .662.249 1.209.745 1.64.497.43 1.2.645 2.11.645zm2.556 13.864V5.366H85.87v13.069h5.113zm7.74.273c1.737 0 2.977-.63 3.722-1.888v1.615h5.112V.472h-5.112v6.534c-.745-1.275-1.985-1.913-3.723-1.913-1.753 0-3.214.642-4.38 1.926-1.166 1.283-1.75 2.91-1.75 4.882 0 1.97.584 3.598 1.75 4.882 1.166 1.283 2.627 1.925 4.38 1.925zm1.39-3.9c-.729 0-1.312-.274-1.75-.82-.439-.547-.658-1.243-.658-2.087 0-.845.215-1.54.645-2.087.447-.547 1.034-.82 1.762-.82s1.311.273 1.75.82c.438.546.657 1.242.657 2.087 0 .844-.219 1.54-.657 2.087-.439.546-1.022.82-1.75.82zm16.698 3.9c2.597 0 4.624-.754 6.08-2.26l-2.11-2.833c-1.042.845-2.217 1.267-3.524 1.267-.992 0-1.799-.224-2.42-.67-.62-.448-.93-.879-.93-1.293h9.604c.083-.298.124-.687.124-1.167 0-2.054-.674-3.677-2.022-4.87-1.349-1.193-3.073-1.789-5.175-1.789-2.25 0-4.028.671-5.335 2.013-1.307 1.341-1.961 2.956-1.961 4.844 0 1.938.69 3.549 2.072 4.833 1.382 1.283 3.247 1.925 5.597 1.925zm2.208-8.149h-5.112c.033-.613.298-1.08.794-1.404.496-.323 1.084-.484 1.762-.484.678 0 1.266.165 1.762.497.497.331.761.795.794 1.391z",fill:"#FFF",fillRule:"nonzero"})}),W=r.div`
  position: fixed;
  right: 0;

  width: 100%;

  background-color: ${t=>t.theme.blue_400};

  z-index: 10000;
`,D=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  margin: 0 auto;
  padding: 30px 0;

  @media (max-width: 1080px) {
    padding: 20px 0;
  }
`,V=r(M)`
  cursor: pointer;
`;var J="/assets/logo.1eb2b0bf.svg";const N=()=>{const[t,o]=f.exports.useState({width:void 0,height:void 0});return f.exports.useEffect(()=>{function c(){o({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",c),c(),()=>window.removeEventListener("resize",c)},[]),t},S=r.div`
  position: relative;
`,G=r.button`
  border: none;
  background-color: transparent;

  :active {
    filter: brightness(0.8);
  }
`,H=r(I)`
  color: #fff;
  width: 34px;
`,Y=r.nav`
  position: absolute;

  right: 0;
  top: 90px;
`,q=r.ul`
  position: relative;
  width: 90vw;
  padding: 40px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fff;

  gap: 30px 0;

  ::before {
    content: "";

    position: absolute;
    right: 0;
    top: -28px;

    width: 30px;
    height: 30px;

    clip-path: polygon(100% 0, 0% 100%, 100% 100%);

    background-color: #fff;
    z-index: 100000;
  }
`,h=r.a`
  color: ${t=>t.theme.darkgrayishBlue};
  font-size: 1.125rem;
`,L=r.a`
  padding: 15px 25px;

  background-color: ${t=>t.theme.yellow};
  border-radius: 100px;

  font-family: "Fraunces";
  font-weight: 700;
  font-size: 0.875rem;
  color: #21282c;

  transition: 200ms;

  :hover {
    background-color: ${t=>t.theme.blue_200};

    color: #fff;
  }
`,X=()=>{const[t,o]=v.useState(!1);return i(S,{children:[e(G,{onClick:()=>o(!t),children:e(H,{})}),t&&e(Y,{children:i(q,{children:[e("li",{children:e(h,{href:"#",children:"About"})}),e("li",{children:e(h,{href:"#",children:"Services"})}),e("li",{children:e(h,{href:"#",children:"Projects"})}),e("li",{children:e(L,{href:"#",children:"CONTACT"})})]})})]})},K=r.nav`
  ul {
    display: flex;
    gap: 40px;
  }
`,g=r.a`
  color: #fff;
  font-size: 1rem;
`,O=r.a`
  padding: 15px 25px;

  background-color: #fff;
  border-radius: 100px;

  font-family: "Fraunces";
  font-weight: 700;
  font-size: 0.875rem;
  color: #21282c;

  transition: 200ms;

  :hover {
    background-color: ${t=>t.theme.blue_200};

    color: #fff;
  }
`,P=()=>e(K,{children:i("ul",{children:[e("li",{children:e(g,{href:"#",children:"About"})}),e("li",{children:e(g,{href:"#",children:"Services"})}),e("li",{children:e(g,{href:"#",children:"Projects"})}),e("li",{children:e(O,{href:"#",children:"CONTACT"})})]})}),Z=()=>{const t=N();return e(W,{children:i(D,{children:[e(V,{src:J}),t.width>1080?e(P,{}):e(X,{})]})})},$=r.section`
  width: 100%;
  height: min(100vh, 1000px);

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${t=>t.src});
  background-position-x: center;
  background-size: cover;
  background-position-y: bottom;
`,_=r.h2`
  margin-top: 25vh;
  margin-bottom: 7vh;
  padding: 0 2rem;

  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1.125rem;
  font-family: Fraunces;
  font-weight: 900;
  font-size: 3rem;
  color: #fff;

  @media (max-width: 800px) {
    padding: 0 0;
    font-size: 2.5rem;
    letter-spacing: 10px;
  }
`,ee=r.img``;var te="/assets/image-header.0f17b34f.jpg",re="/assets/icon-arrow-down.e9369d47.svg";const ie=()=>i($,{src:te,children:[e(_,{children:"We are creatives"}),e(ee,{src:re})]}),ne=r.div`
  display: flex;

  ${t=>t.reverse&&m`
      flex-direction: row-reverse;
    `}

  max-height: fit-content;

  @media (max-width: 1080px) {
  }

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`,oe=r.div`
  width: 50%;

  @media (max-width: 800px) {
    width: 100%;
  }
`,ae=r.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`,ce=r.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-right: 100px;
  padding-left: 160px;

  ${t=>t.reverse?m`
          padding-right: 160px;
          padding-left: 100px;
        `:m`
          padding-right: 100px;
          padding-left: 160px;
        `}

  @media (max-width: 1080px) {
    padding: 50px 40px;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 50vh;
    padding: 210px 20px;

    align-items: center;
    text-align: center;
  }
`,se=r.h2`
  font-family: Fraunces;
  font-weight: 900;
  font-size: 2.625rem;
  color: ${t=>t.theme.veryDarkDesaturatedBlue};

  margin-bottom: 32px;

  @media (max-width: 1080px) {
    font-size: 2.375rem;
  }
`,le=r.p`
  font-size: 1.125rem;
  line-height: 28px;
  color: ${t=>t.theme.darkgrayishBlue};

  margin-bottom: 32px;
`,Ae=r.a`
  position: relative;
  display: flex;
  font-family: Fraunces;
  font-weight: 900;
  color: ${t=>t.theme.veryDarkDesaturatedBlue};
  z-index: 100;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -11px;

    width: 150px;
    height: 8px;

    background-color: ${t=>t.buttonColor};
    border-radius: 50px;

    opacity: 0.2;
    z-index: -90;
    transition: ease-in-out 0.1s;
  }

  &:hover {
    &::after {
      opacity: 1;
    }
  }
`,de=({image:t,title:o,description:c,reverse:s=!1,buttonColor:n})=>i(ne,{reverse:s,children:[i(ce,{reverse:s,children:[e(se,{children:o}),e(le,{children:c}),e(Ae,{href:"#",buttonColor:n,children:"LEARN MORE"})]}),e(oe,{children:e(ae,{src:t})})]}),he=r.section`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`,x=r.div`
  position: relative;

  width: 50%;

  min-height: 700px;

  @media (max-width: 800px) {
    width: 100%;
  }
`,w=r.img`
  display: block;

  width: 100%;
  min-height: 740px;
  object-fit: cover;
`,y=r.div`
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100%;
  padding: 0 23% 8%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  text-align: center;

  @media (max-width: 800px) {
    padding: 0 5% 20%;
  }
`,B=r.h3`
  font-family: "Fraunces";
  font-size: 28px;
  font-weight: 900;
  color: ${t=>t.color};

  margin-bottom: 28px;
`,b=r.p`
  line-height: 1.75rem;
  color: ${t=>t.color};
`;var ge="/assets/image-graphic-design.098e636b.jpg",pe="/assets/image-photography.51d89ac6.jpg";const me=()=>{const t=E();return i(he,{children:[i(x,{children:[i(y,{children:[e(B,{color:t.darkDesaturatedCyan,children:"Graphic Design"}),e(b,{color:t.darkModerateCyan,children:"Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention."})]}),e(w,{src:ge})]}),i(x,{children:[e(w,{src:pe}),i(y,{children:[e(B,{color:t.darkBlue,children:"Photography"}),e(b,{color:t.darkBlue,children:"Increase your credibility by getting the most stunning high-quality photos that improve your business image"})]})]})]})},ue={blue_200:"#6FCEFE",blue_400:"#3DBEFF",black:"#1B212D",softRed:"hsl(7, 99%, 70%)",yellow:"hsl(51, 100%, 49%)",darkDesaturatedCyan:"hsl(167, 40%, 24%)",darkBlue:"hsl(198, 62%, 26%)",darkModerateCyan:"hsl(168, 34%, 41%)",lightCyan:"#90D4C5",veryDarkDesaturatedBlue:"hsl(212, 27%, 19%)",veryDarkGrayishBlue:"hsl(213, 9%, 39%)",darkgrayishBlue:"hsl(232, 10%, 55%)",grayishBlue:"hsl(210, 4%, 67%)",White:"hsl(0, 0%, 100%)"},fe=r.div`
  position: relative;
  width: 100%;
`;var xe="/assets/image-transform.42b5f9e1.jpg",we="/assets/image-stand-out.fc825979.jpg";const ye=r.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 120px 0;

  @media (max-width: 800px) {
    padding: 80px 0px;
  }
`,Be=r.h3`
  margin-bottom: 64px;

  font-family: "Fraunces";
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1875rem;
  color: ${t=>t.theme.grayishBlue};
`,be=r.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 90px 32px;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0 25px;
  }
`;var ve="/assets/image-emily.575838d9.jpg",Ee="data:image/jpeg;base64,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",Ie="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYGBgYHBgcICAcKCwoLCg8ODAwODxYQERAREBYiFRkVFRkVIh4kHhweJB42KiYmKjY+NDI0PkxERExfWl98fKcBBgYGBgcGBwgIBwoLCgsKDw4MDA4PFhAREBEQFiIVGRUVGRUiHiQeHB4kHjYqJiYqNj40MjQ+TERETF9aX3x8p//CABEIAJAAkAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAYHBQj/2gAIAQEAAAAA9FOLcdBsxjQ2HEsEI6zUo2K3nXAt+idEBIAAWYxbHeFHk7ztvSIEUUKdXnGHuVeTzpnsLsJBKlrMF5mgWCi2bm1n1LcVgBpRgvIFv46pTdovl0fBhpRhnyFcc76k6r7bfre+CSyAafPz/DORD1Sw2dREGjMxT8uo/QbjafpPeNLR08nHjGeUCK25t3YSERg0pZuPV6iQx1NNbU22hucoOnJqNH5HR7lhq2h9BBojrWzSo/DOOt+Xids02yWFltznUrzjrNgEUPu5pwdae15caqU1WOWnRFqQtmi51sD2pWTmZNzpOYM7LJJ+OdXyPV+vc75W8qjuZ/wNy6KVvMcLGLtcu7rFFzltylVTTr6IbfUrGMStIsWzf//EABkBAAIDAQAAAAAAAAAAAAAAAAIDAAEEBf/aAAgBAhAAAAALi0m+VLDO5BvlxeYAPoSpmWAO3UmwyWnU+sdkC06DqMbkWfSxCR7ucs+hjQw+hz1ltRi//8QAGQEAAgMBAAAAAAAAAAAAAAAAAwQAAgUB/9oACAEDEAAAACd4Y41+zks2syIHaQmoWqudJHXSUTRhuX1CTOBG5VljqVJIJ6/cXWXtfI3bTC0b85jbpqZB3f/EADcQAAIBAwMDAgMFBwQDAAAAAAECAwAEEQUSIQZBURMxIlJhBxQyQnEQFSNicoGCICRDkaGisf/aAAgBAQABPwASeDSzHPNCX60steqteoteotPcAUdShyQCWx4BNC7SUZU0031oznzQuD5r7zRuCaMxr1q9WhLivVJr1aE5FCY16xqa9SJWLOAFBJPgCrjqrSgrgzZGMkhq1f7TFwyWaFEBwG81a9aaxJJu+97OfaWVQP7gkVZda6gpAkktZf5UYMf/AFarHVYL2JXjYZ7rnkGtxrJrc1Hca+KsOaCIfzVtXs1AfWtv1rb9aYbVJ8Cur+pmUS2dvIR2nPdz8oq+vpigSMlUqaWUnljW41DdTRH4WxX2favHqGbdpYxJ2ST839JqOxkjwyzZXuppbRCAaa1j7Ghaqe9G3Qfmr0UH5q+5uO1fdW+WhbN4oQnxQg+lfaRrz6Pp0UUQf1Zz8DqcbSpFIsl27SzncWOcDyavOnTcLv5U47VFYn7zJZ3C4Yg7GptLWNAZBlGON3yN/NV1p3oNhh8J/C3g10/K8Gp2+CR8YFaW8stnEGYtgDJ81/ExisP9aw/1ra2aCUC9fFXPiv7VzX2q300/Ua2jEhIolA/y5zWgWIEW9uflp/Y4FarZXMuq2noQMdhy79uTQ09WSRSAQ45FTaG8lqY25ZeFPkD2zX7tuLC7iKDDpmTd/TXSF2bnTo3YY4oFa+GvhrC1hfFbhQNZH7DXW9+l/wBWaiVYsBc+mv8AjxVrGLe2RccKozir/XDbHCLGw8buastUN0ASmw+M5q5v1t0JYE47CrLX4JzhoHA8nFLp0F0IpNodSprpqxltrURbyVXGw9wKjyw54NbTQB81g1nFceP2A1u+lXDuIZSo+LYcfritX0dxq4kDlmeQSMvcEnmtQWY2wWMDJHJq6tblSf46e/I2nJrQredJ1JJ2k8iupI5Nkfp/hIyatI7ndhIAfDIcNXSU8smh3JkU74WGP8q0KW5muLn2CLgVGrf6d1bq31uo896ubFoNXuzKucTsA3jn2q6UKFJq4EQyxxVo0MmXTkA++OKvFgNvG0hAGdvPtUOn2bMD6a1ocMcWh3rEAqCMA+RXT8xntHlRgBvwOPdQOKRjismtxrea3Gt9b6DVurIrqHps6hKJ7d0WQ/iVjgEjvXUSzWk5hb8ScHFM9xeybFzsB5NZuLVAsZwny4p572eB434jIqyvXiJicnj2rTrmZunJhnia4RPfxya0KyjsdPji9ssX291B9hSsMcGtw80WHmhKjHAYUWA70upuv5zX7znIPxcVHqkqALmv3tMe9HU5yfehezseWNdXws9yJiOJBT6ekqkK8kbA5V0Yg08ITImmkz5LEU0MzKy2t243exJ3YFRWhUjfIXYe5IAya0GAWWkWsTqPUYmU+VLe1NM5yQ9LeTIpBkIo38o/5DR1CUg/xWpbpkOVc01/L3kavu31oWxA96EB70IGJ4OKW3x+alhINdT23+1hbtuIqMJtbjDCrmFJBg1bW8S/CK0myik1CNnUFA4AX5jU8Xxs6OBk8k+1Qxze7f8AzFPEzAcGhE3PBpoH7A0YJKaCTuDTTEAHbn6UkxJ+JcU1wVIAAoS4GcClmYn8K4816jBScrxXUGrwTwC2jwxB3Fh5FEbgfNXP3hWIFaURy7KGf6+y/X6mtIcPq9sSQFVv/AodQJG0gNqhb/jJJx9M0v2t2cUs0N5pUsckZIOyQMCQa0vVrXVbOC+tX3RSrkDuPINPLx2FLIh4Bz+wumMGgBj2oKD+Wto+WriW1t4mlneOONfdnYKBSfaF0xJdpbRO7uzFQduFyK1LXZZsqDtT5RSyO43E980pIXFTMKtX2q5FW77JM55p3BGTXUa7NXuW+Zt1dA6vJE11ZmQgYEiUmu3iOAZCy+G5rTdVtLtgkg9Nz7EHijBtyDkGmt0PuTQehJV1rVlb5BkDN4Fa9fprFnLayIhjPt9G7GpBLb3LqSQ8cmM/VTWlXv321imLclef170rgAAURtqdfZhUAPsKaI7wRxyBTs23g11jAkcttIPd1bNdP3ZttXtnzwxKH/KmmPzVbXRVxg1YXX3zS7eUt8cZ9Nz57iix8Ghgd617VXjc28TEAD4jTTljyTQ71r6lNXu893z/AN10beRlZrST3zvSk2jvmiO9BFbIpE2GpXGUxW7HautISYLeTwxFRuY5Ece6sDUbGWJHH5lBqLINdIz77a7hJ/KHH6rWKlYRRPI2cKpNXt00sruSSSSaMxBpbjiupW36pI/lRWhT+jqUHYMcVBnAPkVk8ikc7sf9Vu3CjuBJrOcGurYt+lSN3Ug0a0CYT6VbN3C7D/jXeukbjZfqnzqVrJrXboJpsuDy2FqZuSKwDWODXUke26jb5lNRuY3R191II/tWmXC3NnDKvs6g0TxTYIpH3fr3rAKUQc11Gu7SLv8Aoo10nfBLe6gJ/CwcfoeDXqhuRXT1z6eqWp/nFNncw+tdUSKLWJRjlzUjg0HreMV1Tj1bTHdGNCuir0SWklsT8UTZH6GhHkUYyBVxMluu9j+lWuorLsVkKE5AB9uKKg11M4j0i7/pxRqxuHgnDKcbgVP6GrKbdEOa0wlbu3cdnFTMfUfAr//EACgRAAIBAwIEBgMAAAAAAAAAAAABAgMRIRIxBBATYRQiMkFRcQUggf/aAAgBAgEBPwCxnlUr06fqkeJe6i7EK9OTs8MwYGXLkpWQtN/Mvc1xRxCg4avjJQmpwUk3Zr9Z7oY5bIqyapy+j8dJ+HimXL867cZRaG7O+B7qRXzCTstmcArUId1z60e51Yk5QmrMb87RbuTktr4KNeCiopbHXXwdfsajUKRN+a5KWBw1uzI8N0s5Ll3yjG7VytRUEnEksFhIS10Bqw0iAkSjqpfwaGJIoZpk8Sa7ifsR2LlLNNFWNpyXcUW3ZDjKO5w3oZxEGp3+TaT+j//EACgRAAICAQMDBAEFAAAAAAAAAAECABEDBBMhEBJRICIxYUEUIzJxcv/aAAgBAwEBPwDpQmLT5Mh9qz9KvwXAMfTZFXuFESuldUHcwhGVl9nAmzlbm/zNKciZNsnhuJqFKOVNWDAfQnAaY6VRcVEHc3mKil1YeZr1B1DEH59OmRciOp82IMYdR8wY6xlbMRCnaLPJE1xO+48cdKm002WmMZMZsERCTjBEJYD4MBND2zPgyMxcnkmbJ8zZPmVKhWYrCgHzLWdxXlfEbU7pIFSpXQhqJE0mbvZg1XPz0WyTH/a1h/1KRhOQTFHMczG+3qb+4KIgWXNcCM9zE1qp+o45Bi/EMz8Zm+jNPkD4lP1GcIpYkUBEyo62s15Byj+ppH7kC+I/8Vn/2Q==";const Ce=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 350px;
`,ze=r.img`
  width: 80px;
  margin-bottom: 64px;

  border-radius: 50%;
`,Re=r.p`
  margin-bottom: 64px;
  text-align: center;
  line-height: 1.75rem;
  color: ${t=>t.theme.veryDarkGrayishBlue};
`,je=r.h4`
  margin-bottom: 10px;

  font-family: "Fraunces";
  font-weight: 900;
  font-size: 1.125rem;
  color: ${t=>t.theme.black};
`,ke=r.span`
  color: ${t=>t.theme.grayishBlue};
`,p=({image:t,description:o,name:c,role:s})=>i(Ce,{children:[e(ze,{src:t}),e(Re,{children:o}),e(je,{children:c}),e(ke,{children:s})]}),Fe=()=>i(ye,{children:[e(Be,{children:"Client Testimonials"}),i(be,{children:[e(p,{image:ve,description:"We put our trust in Sunnyside and they delivered, making sure our needswere met and deadlines were always hit.",name:"Emily R.",role:"Marketing Director"}),e(p,{image:Ee,description:"Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience",name:"Thomas S.",role:"Chief Operating Officer"}),e(p,{image:Ie,description:"Incredible end result! Our sale increased over 400% when we worked with Sunnyside. Highly recommended!",name:"Jennie R.",role:"Business Owner"})]})]}),Ue=r.div`
  display: grid;
  grid-template-areas: "a b c d";

  @media (max-width: 800px) {
    grid-template-areas:
      "a b"
      "c d";
  }
`,A=r.img`
  grid-area: ${t=>t.areaName};
  display: block;
  width: 100%;
`;var Qe="/assets/image-gallery-cone.ce8b2763.jpg",Te="/assets/image-gallery-milkbottles.4787fa48.jpg",Me="/assets/image-gallery-orange.7e4baa17.jpg",We="/assets/image-gallery-sugarcubes.809ba3f3.jpg";const De=()=>i(Ue,{children:[e(A,{areaName:"a",src:Te}),e(A,{areaName:"b",src:Me}),e(A,{areaName:"c",src:Qe}),e(A,{areaName:"d",src:We})]}),Ve=()=>{const t=E();return e("svg",{width:"124",height:"24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M5.857 18.708c1.638 0 2.995-.36 4.07-1.08 1.075-.721 1.613-1.769 1.613-3.144-.083-1.855-1.464-3.246-4.144-4.173l-1.44-.597c-.314-.1-.538-.198-.67-.298a.45.45 0 01-.198-.373c0-.414.273-.62.819-.62.678 0 1.182.347 1.513 1.043l3.698-1.044c-.893-2.22-2.614-3.329-5.162-3.329-1.522 0-2.788.398-3.797 1.193C1.15 7.08.645 8.116.645 9.39c0 .398.058.766.174 1.106.116.34.29.638.521.894.232.257.455.48.67.671.215.19.488.369.82.534.33.166.582.286.756.36.174.075.41.162.707.261l.422.15 1.49.546c.363.133.6.244.707.335a.449.449 0 01.16.36c0 .431-.404.647-1.215.647-1.191 0-1.903-.53-2.134-1.59L0 14.509c.463 2.8 2.416 4.2 5.857 4.2zm11.636 0c1.638 0 2.845-.63 3.623-1.888v1.615h5.112V5.366h-5.112v7.156c0 1.474-.505 2.21-1.514 2.21-1.026 0-1.539-.736-1.539-2.21V5.366h-5.112v7.653c0 3.793 1.514 5.69 4.542 5.69zm16.103-.273V11.28c0-1.475.504-2.212 1.513-2.212 1.026 0 1.54.737 1.54 2.212v7.155h5.111v-7.652c0-3.793-1.513-5.69-4.541-5.69-1.638 0-2.846.63-3.623 1.888V5.366h-5.113v13.069h5.113zm15.383 0V11.28c0-1.475.504-2.212 1.514-2.212 1.025 0 1.538.737 1.538 2.212v7.155h5.113v-7.652c0-3.793-1.514-5.69-4.542-5.69-1.638 0-2.846.63-3.623 1.888V5.366h-5.113v13.069h5.113zM64.958 24l8.289-18.634H67.91l-2.532 6.684-2.258-6.684h-5.584l5.435 11.802L59.944 24h5.014zm13.67-5.292c1.638 0 2.995-.36 4.07-1.08 1.076-.721 1.614-1.769 1.614-3.144-.083-1.855-1.465-3.246-4.145-4.173l-1.44-.597c-.314-.1-.537-.198-.67-.298a.45.45 0 01-.198-.373c0-.414.273-.62.819-.62.678 0 1.183.347 1.514 1.043l3.698-1.044c-.894-2.22-2.614-3.329-5.162-3.329-1.522 0-2.788.398-3.797 1.193-1.01.795-1.514 1.83-1.514 3.105 0 .398.058.766.173 1.106.116.34.29.638.522.894.231.257.455.48.67.671.215.19.488.369.819.534.33.166.583.286.757.36.173.075.41.162.707.261l.422.15 1.489.546c.364.133.6.244.707.335a.449.449 0 01.161.36c0 .431-.405.647-1.216.647-1.19 0-1.902-.53-2.134-1.59l-3.723.844c.464 2.8 2.416 4.2 5.857 4.2zm9.8-14.137c.91 0 1.613-.215 2.11-.646.495-.43.744-.977.744-1.64 0-.678-.24-1.23-.72-1.651C90.082.21 89.371 0 88.428 0c-.943 0-1.655.211-2.135.634-.48.422-.72.973-.72 1.652 0 .662.249 1.209.745 1.64.497.43 1.2.645 2.11.645zm2.556 13.864V5.366H85.87v13.069h5.113zm7.74.273c1.737 0 2.977-.63 3.722-1.888v1.615h5.112V.472h-5.112v6.534c-.745-1.275-1.985-1.913-3.723-1.913-1.753 0-3.214.642-4.38 1.926-1.166 1.283-1.75 2.91-1.75 4.882 0 1.97.584 3.598 1.75 4.882 1.166 1.283 2.627 1.925 4.38 1.925zm1.39-3.9c-.729 0-1.312-.274-1.75-.82-.439-.547-.658-1.243-.658-2.087 0-.845.215-1.54.645-2.087.447-.547 1.034-.82 1.762-.82s1.311.273 1.75.82c.438.546.657 1.242.657 2.087 0 .844-.219 1.54-.657 2.087-.439.546-1.022.82-1.75.82zm16.698 3.9c2.597 0 4.624-.754 6.08-2.26l-2.11-2.833c-1.042.845-2.217 1.267-3.524 1.267-.992 0-1.799-.224-2.42-.67-.62-.448-.93-.879-.93-1.293h9.604c.083-.298.124-.687.124-1.167 0-2.054-.674-3.677-2.022-4.87-1.349-1.193-3.073-1.789-5.175-1.789-2.25 0-4.028.671-5.335 2.013-1.307 1.341-1.961 2.956-1.961 4.844 0 1.938.69 3.549 2.072 4.833 1.382 1.283 3.247 1.925 5.597 1.925zm2.208-8.149h-5.112c.033-.613.298-1.08.794-1.404.496-.323 1.084-.484 1.762-.484.678 0 1.266.165 1.762.497.497.331.761.795.794 1.391z",fill:t.darkDesaturatedCyan,fillRule:"nonzero"})})},Je=r.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 48px 0;

  background-color: ${t=>t.theme.lightCyan};

  a {
    color: ${t=>t.theme.darkDesaturatedCyan};
    transition: ease-in-out 0.1s;

    :hover {
      color: white;
    }
  }

  @media (max-width: 1080px) {
    padding: 68px;
  }
`,Ne=r(Ve)``,Se=r.ul`
  display: flex;
  gap: 48px;
  margin-top: 32px;
  margin-bottom: 64px;
`,l=r.a`
  font-size: 16px;
`,Ge=r.ul`
  display: flex;
  gap: 30px;

  & svg {
    width: 26px;
  }
`,He=()=>i(Je,{children:[e(Ne,{}),e("nav",{children:i(Se,{children:[e("li",{children:e(l,{href:"#",children:"About"})}),e("li",{children:e(l,{href:"#",children:"Services"})}),e("li",{children:e(l,{href:"#",children:"Projects"})})]})}),i(Ge,{children:[e("li",{children:e(l,{href:"#",children:e(C,{})})}),e("li",{children:e(l,{href:"#",children:e(z,{})})}),e("li",{children:e(l,{href:"#",children:e(R,{})})}),e("li",{children:e(l,{href:"#",children:e(j,{})})})]})]}),Ye=[{title:"Transform your brand",description:"We are a full-service creative agency specializing in helping brandsgrow fast. Engage your clients through compelling visuals that do most of the marketing for you.",image:xe,reverse:!1,buttonColor:"hsl(51, 100%, 49%)"},{title:"Stand out to the right audience",description:"Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",image:we,reverse:!0,buttonColor:"hsl(7, 99%, 70%)"}],qe=()=>e(fe,{children:i(k,{theme:ue,children:[e(Z,{}),e(ie,{}),Ye.map((t,o)=>e(de,{image:t.image,title:t.title,description:t.description,reverse:t.reverse,buttonColor:t.buttonColor},o)),e(me,{}),e(Fe,{}),e(De,{}),e(He,{})]})}),Le=F`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Barlow", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    background-color: #FFFBF8;
    scroll-behavior: smooth;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  a, p {
    font-size: 1.125rem;
  }

  .container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }
`;function Xe(){return i(T,{children:[e(qe,{}),e(Le,{})]})}U.render(e(v.StrictMode,{children:e(Xe,{})}),document.getElementById("root"));
