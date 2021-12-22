import{r as e,o as t,c as o,a as r,b as s,d as n,w as a,A as l,e as i,f as d,g as c,h as A,i as m}from"./vendor.eb67ca7b.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const u={id:"app"},p={className:"flex flex-row h-screen z-10"},g={className:"fixed right-2 top-8 w-20 h-20 md:hidden z-50 px-auto"},f={key:0,className:"fixed right-5 top-5 w-52 h-80 z-40 px-auto md:hidden "},h={className:"rounded-2xl w-30 h-full bg-gray-100 shadow-lg","data-aos":"fade-left"},v={className:"overflow-hidden border-gray-400"},b={className:"hidden md:flex md:w-2/7 h-full text-gray-50 "},E={className:"fixed h-full w-2/7 flex flex-col justify-end md:px-20 px-5 bg-forest"},N=r("div",{className:"py-3 flex flex-col items-center"},[r("img",{src:"/assets/me.2a04d6cd.png",alt:"my profile image",className:"rounded-full w-3/7 shadow-lg"})],-1),w=r("div",{className:"py-2 text-gray-50 flex flex-col "},[r("p",{className:"2xl:text-4xl xl:text-3xl lg:text-2xl md:text-lg font-bold text-md pl-0 pb-3"},"Journal"),r("p",{className:"2xl:text-3xl xl:text-2xl lg:text-xl md:text-base text-sm pl-0 pb-3"},"Welcome to my blog!")],-1),x={className:"py-5 flex items-start flex-col xl:text-2xl lg:text-xl md:text-lg text-md"},I=i("About Me"),k=i("Projects"),z=i("Blogs"),Z={class:"flex py-1 justify-evenly pb-10 pt-5"},B=r("p",{className:"text-sm pb-2"},"© 2021 Kornvik Tanpipat. All rights reserved.",-1);const T={name:"app",data:()=>({mode:"light",count:0,toggle:!1}),methods:{toggleFunc(){console.log(this.toggle),this.toggle=!this.toggle,1==this.toggle?this.mode="light":"/projects"==this.$route.path&&(this.mode="dark")},offFunc(){this.toggle=!1,"/projects"==this.$route.path&&(this.mode="dark")},gotoContact(e){window.open(e,"_blank")}},watch:{count:function(e){},$route(e,t){"/projects"==e.path?this.mode="dark":this.mode="light"}},created(){l.init({duration:1200})}},X=Object.assign(T,{props:{msg:String},setup:function(l){return(l,i)=>{const d=e("router-link"),c=e("router-view");return t(),o("div",u,[r("div",p,[r("div",g,["dark"==l.mode?(t(),o("img",{key:0,src:"https://img.icons8.com/material-rounded/48/ffffff/menu--v1.png",className:"cursor-pointer transition duration-400 ease-in-out transform hover:scale-110",onClick:i[0]||(i[0]=(...e)=>l.toggleFunc&&l.toggleFunc(...e))})):(t(),o("img",{key:1,src:"https://img.icons8.com/material-rounded/48/000000/menu--v1.png",className:"cursor-pointer transition duration-400 ease-in-out transform hover:scale-110",onClick:i[1]||(i[1]=(...e)=>l.toggleFunc&&l.toggleFunc(...e))}))]),l.toggle?(t(),o("div",f,[r("div",h,[r("div",v,[r("p",{className:"border-b-2 py-8 pt-20 cursor-pointer transition duration-400 ease-in-out transform hover:scale-110 hover:font-bold",onClick:i[2]||(i[2]=e=>l.$router.push("/home"))},"About me"),r("p",{className:"border-b-2 py-8 cursor-pointer transition duration-400 ease-in-out transform hover:scale-110 hover:font-bold",onClick:i[3]||(i[3]=e=>l.$router.push("/projects"))},"Projects"),r("p",{className:"py-8 cursor-pointer transition duration-400 ease-in-out transform hover:scale-110 hover:font-bold",onClick:i[4]||(i[4]=e=>l.$router.push("/blogs"))},"Blogs")])])])):s("",!0),r("div",b,[r("div",E,[N,w,r("div",x,[n(d,{to:"/home",className:"py-1 cursor-pointer"},{default:a((()=>[I])),_:1}),n(d,{to:"/projects",className:"py-1 cursor-pointer"},{default:a((()=>[k])),_:1}),n(d,{to:"/blogs",className:"py-1 cursor-pointer"},{default:a((()=>[z])),_:1})]),r("div",Z,[r("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABNVBMVEUAAAAqVaokbbYlZ7MoZ7EnZrEnZrInZ7EnZrInZ7IoZrEnZ7EoZrEoZrEnZrInZ7H////+/v/9/v78/f77/P33+vz2+Pz09/vy9frx9frw9Prs8vjq8Pfn7vfm7fbi6/Xf6PTc5/PU4fDR3+/R3u7Q3u7P3e7O3O3N3O3M2+3L2uzK2ezJ2ezH1+vG1urD1erB0+m/0ui6zua4zea2zOWxyOOvxuKuxuKtxeKsxeGsxOGrw+GmwN+hvN2gvN2fu92cudyTs9iKrNWHqtSDp9N7otB4oM90nc1xm8xqlcpnlMlmk8hlkshkkcdikMdhkMdgj8ZgjsZfjsZejcVbi8RWh8JRhMFQhMBLgL9Lf75GfL1AeLs/d7o9dro2cbc1cbc1cLczb7YwbLUvbLQua7QqaLMoZ7IXnbmAAAAAEHRSTlMABgcbbG1uxsfIyc/Q8fP0fRtnlgAAAWtJREFUeNrN1mdTwkAQBuAlgILRcNixK0hRFCzYuyLYRayoWJD9/z/Bgdswyky8Wz75fkneyT6TuSSTBACMNn8ANRLwew0AAHcnasd0AxiMeUTTgDZkxQMdPOADq76tZpNjE6uPamCBnF8StfQV1UKCnJAZr2qCZQLiQROkbHCtCXZovvtVE5T6JVjTXTQWRoQQwcynNsDK6dFxSefOATLTIigXZe5r5e5Kpoz4ld+cnZpbz703gwu6rPFaCVMp4vko7Q4dVP8AERtke0QjixU12P8xL8SWM4hS+TUvREEJmpJyBLHGTG9qe2XYLsEXJxC3RyafEPEjbde8E0hQGXiuH3sLUd9VgT26LhvUMypwQuCQetoJzFC5IZCnnlQB+xVypgJJLmCfIfH/QJwLYlwQ5YJpLohwQVgDFAZl6g/kfEjmlsAl9YUW33wWb76L/9n1cj/shsn6dXABuE3ezwmAy+PTWrnV7nEBfANNwZ4CXuQGXAAAAABJRU5ErkJggg==",alt:"my profile image",className:"h-6 w-6 cursor-pointer",onClick:i[5]||(i[5]=e=>l.gotoContact("https://www.linkedin.com/in/kornvik-tanpipat"))}),r("img",{src:"data:image/png;base64,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",alt:"my profile image",className:"h-6 w-6 cursor-pointer",onClick:i[6]||(i[6]=e=>l.gotoContact("https://www.instagram.com/kornravik/"))}),r("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAzFBMVEUAAAAAf/8qf/8Zf+UXc+cVf+kTdesSf+weePAccfAZcvITdfUWePAVdPAVePAUdfEUePEZefIYdvIYefIXdvMZePAVefIVdvIYdvEXdvIXePIXd/IXdvIWd/IWdvIXdvIWd/IWd/EWdvIWd/IXd/IXdvIXdvEWdvEWd/EXdvEXd/IXd/IWdvIWd/IXdvEXdvEWd/EWd/IXdvIXd/IXdvIXd/IWdvIWdvEWdvIXd/IXd/IXdvIWdvIWd/EWdvEXd/EXdvEXd/EXdvEXd/IkT+NeAAAAQ3RSTlMABAYKCwwNDhESFBoiIyQlJigpKiszO1JfY3d4eXp7kJOVnZ6kpq6/wsTFx8jNztDW2Nna29zf6uzv8vP19vn6+/z9LlKrXgAAAPNJREFUeNrt1VtPwjAYBuAX2XRTYR4mw41x8ACCsuGGg8GqSP//fzLM1MyEjn6Jd+69+9r3uWjTpAD0bsi4Qljo6wBw8caVM7cAndDnPNbgc1I8hDQQ4NB5V0mSFsYMZeXNg2Pu7gWG3RZrZWDUwE/OFMBdDSQwPgIJfFqggUcQgVNo1w3j6hDYmqJ9PVwXN2RgIfrn6e8NGZgJ0Odq4EWAJ0XwLMDrfwAfN3kuBbC/54EUvGNv7qlgQgVLIjjlRNCigtsSYOQ5FtWTfOxVj68Cfw8YDWSyb1cGAnRowIU+p4BIA6xYHUTN3ZLmBUwFsKmrAV+MIM+MH5axNAAAAABJRU5ErkJggg==",alt:"my profile image",className:"h-6 w-6 cursor-pointer",onClick:i[7]||(i[7]=e=>l.gotoContact("https://www.facebook.com/kornvik.tanpipat"))})]),B])]),r("div",{className:"bg-gray-50 w-full md:w-5/7 z-20",onClick:i[8]||(i[8]=(...e)=>l.offFunc&&l.offFunc(...e))},[n(c)])])])}}});const U={setup:e=>(e,o)=>(t(),d(X)),__scopeId:"data-v-ea9fccb0"};const W={},y=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in W)return;W[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},C=()=>y((()=>import("./Intro.69ff396b.js")),["assets/Intro.69ff396b.js","assets/vendor.eb67ca7b.js"]),V=[{path:"/",name:"Home",component:C},{path:"/home",name:"Intro",component:C},{path:"/projects",name:"Projects",component:()=>y((()=>import("./Projects.0c85bdfd.js")),["assets/Projects.0c85bdfd.js","assets/vendor.eb67ca7b.js"])},{path:"/blogs",name:"Blogs",component:()=>y((()=>import("./Blogs.6c1000a4.js")),["assets/Blogs.6c1000a4.js","assets/spinner2.9584901f.js","assets/vendor.eb67ca7b.js"])},{path:"/blogs/:id",name:"Posts",component:()=>y((()=>import("./Post.671cedfd.js")),["assets/Post.671cedfd.js","assets/vendor.eb67ca7b.js","assets/spinner2.9584901f.js"])}],M=c({history:A(),routes:V,scrollBehavior:(e,t,o)=>(window.scrollTo({top:0}),{x:0,y:0,behavior:"smooth"})});m(U).use(M).mount("#app");
