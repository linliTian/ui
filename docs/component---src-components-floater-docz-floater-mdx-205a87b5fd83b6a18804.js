(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"14BW":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return m})),n.d(t,"default",(function(){return h}));var o=n("Fcif"),a=n("+I+c"),l=n("mXGw"),c=n("/FXl"),i=n("TjRS"),r=n("ZFoC"),s=n("vG1d"),u=n("odlw"),p=n("P95c"),b=n("yj+E"),m=(n("aD51"),{});void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/floater/docz/Floater.mdx"}});var d={_frontmatter:m},f=i.a;function h(e){var t,n,h=e.components,y=Object(a.a)(e,["components"]);return Object(c.b)(f,Object(o.a)({},d,y,{components:h,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"floater"},"Floater"),Object(c.b)("p",null,"Floaters all users to display information with respect to an anchor point"),Object(c.b)("h2",{id:"simple"},"Simple"),Object(c.b)("p",null,"Add a simple floater to any anchor point using a ",Object(c.b)("inlineCode",{parentName:"p"},"ref"),"."),Object(c.b)(r.c,{__position:0,__code:"() => {\n  const [buttonRef, setRef] = React.useState(null)\n  const [open, setOpen] = React.useState(false)\n  const handleClick = React.useCallback(() => {\n    if (open) {\n      setOpen(false)\n    } else {\n      setOpen(true)\n    }\n  }, [setOpen, open])\n  const handleRef = React.useCallback(\n    node => {\n      setRef(node)\n    },\n    [setRef],\n  )\n  return (\n    <ThemeContainer>\n      <React.Fragment>\n        <Button onClick={handleClick} ref={handleRef}>\n          {open ? 'Hide' : 'Show'}\n        </Button>\n        <Floater\n          anchorElement={buttonRef}\n          position={['bc', 'tc']}\n          open={open && buttonRef !== null}\n        >\n          I am the content\n        </Floater>\n      </React.Fragment>\n    </ThemeContainer>\n  )\n}",__scope:(t={props:y,DefaultLayout:i.a,Playground:r.c,Props:r.d,Floater:s.a,Button:u.a,ButtonContainer:p.a,Container:p.b,ThemeContainer:b.f},t.DefaultLayout=i.a,t._frontmatter=m,t),mdxType:"Playground"},(function(){var e=l.useState(null),t=e[0],n=e[1],o=l.useState(!1),a=o[0],i=o[1],r=l.useCallback((function(){i(!a)}),[i,a]),p=l.useCallback((function(e){n(e)}),[n]);return Object(c.b)(b.f,{mdxType:"ThemeContainer"},Object(c.b)(l.Fragment,null,Object(c.b)(u.a,{onClick:r,ref:p,mdxType:"Button"},a?"Hide":"Show"),Object(c.b)(s.a,{anchorElement:t,position:["bc","tc"],open:a&&null!==t,mdxType:"Floater"},"I am the content")))})),Object(c.b)("h2",{id:"complex"},"Complex"),Object(c.b)("p",null,'A floater can "float" around the screen, simply by change the anchor point. The target anchor can be retrieved from the ',Object(c.b)("inlineCode",{parentName:"p"},"click")," event on the button."),Object(c.b)(r.c,{__position:1,__code:"() => {\n  const [hasMountedFloater, setHasMountedFloater] = React.useState(false)\n  const [anchorElement, setAnchorElement] = React.useState(null)\n  const [floaterPosition, setFloaterPosition] = React.useState(['bc', 'tc'])\n  const handleButtonClick = (e, position) => {\n    const element = e.target\n    if (element === anchorElement) {\n      setAnchorElement(null)\n      setHasMountedFloater(false)\n    } else if (anchorElement) {\n      setAnchorElement(element)\n      setFloaterPosition(position)\n      setHasMountedFloater(true)\n    } else {\n      setAnchorElement(element)\n      setFloaterPosition(position)\n    }\n  }\n  return (\n    <ThemeContainer>\n      <ButtonContainer>\n        <Button onClick={e => handleButtonClick(e, ['tc', 'bc'])}>\n          Move to Top\n        </Button>\n        <span style={{ display: 'inline-block', width: '20px' }} />\n        <Button onClick={e => handleButtonClick(e, ['bc', 'tc'])}>\n          Move to Bottom\n        </Button>\n        <span style={{ display: 'inline-block', width: '20px' }} />\n        <Button onClick={e => handleButtonClick(e, ['cr', 'cl'])}>\n          Move to Right\n        </Button>\n      </ButtonContainer>\n      <Floater\n        position={floaterPosition}\n        anchorElement={anchorElement}\n        open={anchorElement !== null}\n        animationProps={{\n          initial: { opacity: 0 },\n          animate: { opacity: 1 },\n          exit: { opacity: 0 },\n          layout: hasMountedFloater,\n        }}\n        matchAnchorWidth\n      >\n        <Container />\n      </Floater>\n    </ThemeContainer>\n  )\n}",__scope:(n={props:y,DefaultLayout:i.a,Playground:r.c,Props:r.d,Floater:s.a,Button:u.a,ButtonContainer:p.a,Container:p.b,ThemeContainer:b.f},n.DefaultLayout=i.a,n._frontmatter=m,n),mdxType:"Playground"},(function(){var e=l.useState(!1),t=e[0],n=e[1],o=l.useState(null),a=o[0],i=o[1],r=l.useState(["bc","tc"]),m=r[0],d=r[1],f=function(e,t){var o=e.target;o===a?(i(null),n(!1)):a?(i(o),d(t),n(!0)):(i(o),d(t))};return Object(c.b)(b.f,{mdxType:"ThemeContainer"},Object(c.b)(p.a,{mdxType:"ButtonContainer"},Object(c.b)(u.a,{onClick:function(e){return f(e,["tc","bc"])},mdxType:"Button"},"Move to Top"),Object(c.b)("span",{style:{display:"inline-block",width:"20px"}}),Object(c.b)(u.a,{onClick:function(e){return f(e,["bc","tc"])},mdxType:"Button"},"Move to Bottom"),Object(c.b)("span",{style:{display:"inline-block",width:"20px"}}),Object(c.b)(u.a,{onClick:function(e){return f(e,["cr","cl"])},mdxType:"Button"},"Move to Right")),Object(c.b)(s.a,{position:m,anchorElement:a,open:null!==a,animationProps:{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},layout:t},matchAnchorWidth:!0,mdxType:"Floater"},Object(c.b)(p.b,{mdxType:"Container"})))})),Object(c.b)("h2",{id:"floater-props"},"Floater Props"),Object(c.b)(r.d,{of:s.a,mdxType:"Props"}))}void 0!==h&&h&&h===Object(h)&&Object.isExtensible(h)&&!h.hasOwnProperty("__filemeta")&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/floater/docz/Floater.mdx"}}),h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-floater-docz-floater-mdx-205a87b5fd83b6a18804.js.map