import{u,j as e,k as y,m as f}from"./react-vendor-DUAwp0DP.js";import{E as v,M as w,A as j}from"./swiper-vendor-Dl_WRv9M.js";import{a as N,e as k}from"./ar-DPtWaokl.js";import{S as _}from"./ScrambleText-D8AKk9xQ.js";import{g as S}from"./icons-CWgxrxQ5.js";import"./inertia-vendor-C7028C4g.js";import"./vendor-BREGID51.js";import"./phone-vendor-Cl7CPH_p.js";import"./animation-vendor-BOQyiasL.js";const C=t=>S(t,"CheckCircle"),d=[{background:"from-purple-950/40 to-purple-800/20",border:"border-purple-300/20",icon:"text-purple-300"},{background:"from-cyan-950/40 to-cyan-800/20",border:"border-cyan-300/20",icon:"text-cyan-300"},{background:"from-emerald-950/40 to-emerald-800/20",border:"border-emerald-300/20",icon:"text-emerald-300"},{background:"from-amber-950/40 to-amber-800/20",border:"border-amber-300/20",icon:"text-amber-300"}],M=[{title:"Expertise",description:"Our team brings years of experience delivering professional solutions.",icon:"Award"},{title:"24/7 Support",description:"We’re always here to help, any time of day or night.",icon:"Headphones"},{title:"Top Security",description:"Your data and privacy are protected with industry-leading standards.",icon:"Shield"},{title:"High Performance",description:"Optimized systems built for speed, reliability, and scalability.",icon:"Zap"}],F=({section:t,features:s=[]})=>{const{locale:a}=u().props,n=a==="ar"?N:k,o=s.length>0?s:M,c=t?a==="ar"?t.title_ar:t.title:"Why Choose Us",p=t?a==="ar"?t.subtitle_ar:t.subtitle:"What Makes Us Different",m=t?a==="ar"?t.description_ar:t.description:"Discover why clients trust us to bring their ideas to life. We deliver high-quality digital solutions powered by creativity, innovation, and reliability.";return e.jsxs("section",{className:"overflow-hidden bg-[var(--color-background)] py-24 text-white sm:py-32",children:[e.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:e.jsxs("div",{className:`relative z-10 flex w-full flex-col items-center justify-between gap-8 px-10 md:gap-12 ${a==="ar"?"md:flex-row-reverse":"md:flex-row"}`,children:[e.jsxs("div",{className:`max-w-[460px] px-4 text-white ${a==="ar"?"text-right":"text-left"}`,children:[e.jsx(_,{className:"scramble-heading",children:c}),e.jsx("h2",{className:"my-6 text-3xl font-bold tracking-tight sm:text-4xl",children:p}),e.jsx("p",{className:"my-6 text-lg leading-8 text-gray-300",children:m}),e.jsxs("button",{className:`group relative mt-4 overflow-hidden rounded-md border border-cyan-500/40 bg-gray-900/80 px-8 py-3 font-semibold text-cyan-400 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/60 hover:bg-gray-800/90 hover:shadow-2xl hover:shadow-cyan-500/25 ${a==="ar"?"mr-0 ml-auto":"mr-auto ml-0"}`,children:[e.jsxs("div",{className:"absolute inset-0 opacity-20",children:[e.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"}),e.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.05)_25%,rgba(6,182,212,0.05)_50%,transparent_50%,transparent_75%,rgba(6,182,212,0.05)_75%)] bg-[length:20px_20px]"})]}),e.jsx("div",{className:"absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]"}),e.jsx("div",{className:"absolute top-0 left-0 h-2 w-2 border-t-2 border-l-2 border-cyan-400/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"}),e.jsx("div",{className:"animation-delay-100 absolute top-0 right-0 h-2 w-2 border-t-2 border-r-2 border-cyan-400/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"}),e.jsx("div",{className:"animation-delay-200 absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-cyan-400/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"}),e.jsx("div",{className:"animation-delay-300 absolute right-0 bottom-0 h-2 w-2 border-r-2 border-b-2 border-cyan-400/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"}),e.jsx("div",{className:"absolute inset-0 rounded-md border border-cyan-500/30 opacity-0 transition-opacity duration-100 group-hover:border-cyan-400/80 group-hover:opacity-100"}),e.jsxs("span",{className:"relative z-10 flex items-center gap-2 text-cyan-300 transition-colors duration-100 group-hover:text-cyan-100",children:[e.jsx("span",{className:"text-sm tracking-wider",children:n["why.button"]}),e.jsx("svg",{className:"h-4 w-4 transform transition-all duration-100 group-hover:translate-x-1 group-hover:text-cyan-200",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]}),e.jsx("div",{className:"absolute right-0 bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"})]})]}),e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx("div",{className:"h-[400px] w-[300px] py-12 md:mx-10 lg:mx-25",children:e.jsx(y,{effect:"cards",grabCursor:!0,loop:o.length>1,speed:500,mousewheel:{invert:!1},autoplay:{delay:500,disableOnInteraction:!1,pauseOnMouseEnter:!0,waitForTransition:!0},loopAdditionalSlides:o.length,allowTouchMove:!0,initialSlide:0,modules:[v,w,j],className:"h-full",children:o.map((r,l)=>{const x=r.icon||r.icon,b=C(x),g=a==="ar"&&r.title_ar?r.title_ar:r.title||r.title,h=a==="ar"&&r.description_ar?r.description_ar:r.description||r.description,i=d[l%d.length];return e.jsxs(f,{className:`relative flex flex-col items-center justify-center rounded-xl bg-gradient-to-br ${i.background} border-2 ${i.border} p-8 text-center text-white shadow-[0_15px_50px_rgba(0,0,0,0.3)] backdrop-blur-lg`,children:[e.jsxs("div",{className:"flex flex-col items-center justify-center",children:[e.jsx(b,{className:`mb-4 h-12 w-12 ${i.icon}`}),e.jsx("h3",{className:"mb-2 text-center text-xl font-semibold",children:g})]}),e.jsx("p",{className:"text-center text-sm leading-relaxed text-gray-300",children:h})]},r.id||l)})})}),e.jsx("p",{className:"mt-2 text-center text-xs text-white/30",children:n["why.drag_text"]})]})]})}),e.jsx("style",{children:`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
          }
          100% {
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
          }
        }

        @keyframes gelatine {
          0%,100% { transform: scale(1,1); }
          25% { transform: scale(0.9,1.1); }
          50% { transform: scale(1.1,0.9); }
          75% { transform: scale(0.95,1.05); }
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .bg-clip-border {
          -webkit-background-clip: border-box;
          background-clip: border-box;
        }

        .hover\\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        /* Tech button specific styles */
        .tech-button-grid {
          background-image: linear-gradient(45deg, transparent 25%, rgba(6, 182, 212, 0.05) 25%, rgba(6, 182, 212, 0.05) 50%, transparent 50%, transparent 75%, rgba(6, 182, 212, 0.05) 75%);
          background-size: 20px 20px;
        }
      `})]})};export{F as WhyUsNew};
