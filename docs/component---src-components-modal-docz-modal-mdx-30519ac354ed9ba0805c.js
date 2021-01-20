(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{t52h:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return O}));var a=n("Fcif"),o=n("+I+c"),l=n("mXGw"),i=n("/FXl"),s=n("TjRS"),c=n("ZFoC"),b=n("V044"),u=n("odlw"),d=n("06FW"),p=n("yj+E"),r=(n("aD51"),{});void 0!==r&&r&&r===Object(r)&&Object.isExtensible(r)&&!r.hasOwnProperty("__filemeta")&&Object.defineProperty(r,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/modal/docz/Modal.mdx"}});var m={_frontmatter:r},y=s.a;function O(e){var t,n,O,f=e.components,h=Object(o.a)(e,["components"]);return Object(i.b)(y,Object(a.a)({},m,h,{components:f,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"modal"},"Modal"),Object(i.b)("p",null,"Provides interaction with application without changing pages."),Object(i.b)("h2",{id:"simple"},"Simple"),Object(i.b)("p",null,"Many times a simple input is all that is needed."),Object(i.b)(c.c,{__position:0,__code:"() => {\n  const [visible, setVisibility] = React.useState(false)\n  const onCancel = React.useCallback(() => {\n    setVisibility(false)\n  }, [])\n  const onOk = React.useCallback(() => {\n    setVisibility(false)\n  }, [])\n  return (\n    <ThemeContainer>\n      <div>\n        <Button onClick={() => setVisibility(true)}>Open Simple Modal</Button>\n        <Modal\n          title={'Title'}\n          onOk={onOk}\n          onCancel={onCancel}\n          visible={visible}\n        >\n          <div style={{ minHeight: '200px' }}>\n            <Input label={'First Name'} />\n            <Input label={'Last Name'} />\n            <Input label={'Email'} />\n            <Input label={'Password'} />\n          </div>\n        </Modal>\n      </div>\n    </ThemeContainer>\n  )\n}",__scope:(t={props:h,DefaultLayout:s.a,Playground:c.c,Props:c.d,Modal:b.a,Button:u.a,Input:d.a,ThemeContainer:p.f},t.DefaultLayout=s.a,t._frontmatter=r,t),mdxType:"Playground"},(function(){var e=l.useState(!1),t=e[0],n=e[1],a=l.useCallback((function(){n(!1)}),[]),o=l.useCallback((function(){n(!1)}),[]);return Object(i.b)(p.f,{mdxType:"ThemeContainer"},Object(i.b)("div",null,Object(i.b)(u.a,{onClick:function(){return n(!0)},mdxType:"Button"},"Open Simple Modal"),Object(i.b)(b.a,{title:"Title",onOk:o,onCancel:a,visible:t,mdxType:"Modal"},Object(i.b)("div",{style:{minHeight:"200px"}},Object(i.b)(d.a,{label:"First Name",mdxType:"Input"}),Object(i.b)(d.a,{label:"Last Name",mdxType:"Input"}),Object(i.b)(d.a,{label:"Email",mdxType:"Input"}),Object(i.b)(d.a,{label:"Password",mdxType:"Input"})))))})),Object(i.b)("h2",{id:"custom-footer"},"Custom Footer"),Object(i.b)("p",null,"Sometimes a custom footer is needed to satisfy specific use cases. Modify the ",Object(i.b)("inlineCode",{parentName:"p"},"footer")," prop to create a custom footer."),Object(i.b)(c.c,{__position:1,__code:"() => {\n  const [visible, setVisibility] = React.useState(false)\n  const onCancel = React.useCallback(() => {\n    setVisibility(false)\n  }, [])\n  const onOk = React.useCallback(() => {\n    setVisibility(false)\n  }, [])\n  return (\n    <ThemeContainer>\n      <div>\n        <Button onClick={() => setVisibility(true)}>\n          Open Custom Footer Modal\n        </Button>\n        <Modal\n          title={'Title'}\n          onOk={onOk}\n          onCancel={onCancel}\n          footer={\n            <React.Fragment>\n              <Button onClick={onCancel} ghost>\n                Cancel\n              </Button>\n              <div style={{ height: '1px', width: '16px' }} />\n              <Button onClick={onOk}>Finish</Button>\n            </React.Fragment>\n          }\n          visible={visible}\n        >\n          <div style={{ minHeight: '200px' }}>\n            <Input label={'First Name'} />\n            <Input label={'Last Name'} />\n            <Input label={'Email'} />\n            <Input label={'Password'} />\n          </div>\n        </Modal>\n      </div>\n    </ThemeContainer>\n  )\n}",__scope:(n={props:h,DefaultLayout:s.a,Playground:c.c,Props:c.d,Modal:b.a,Button:u.a,Input:d.a,ThemeContainer:p.f},n.DefaultLayout=s.a,n._frontmatter=r,n),mdxType:"Playground"},(function(){var e=l.useState(!1),t=e[0],n=e[1],a=l.useCallback((function(){n(!1)}),[]),o=l.useCallback((function(){n(!1)}),[]);return Object(i.b)(p.f,{mdxType:"ThemeContainer"},Object(i.b)("div",null,Object(i.b)(u.a,{onClick:function(){return n(!0)},mdxType:"Button"},"Open Custom Footer Modal"),Object(i.b)(b.a,{title:"Title",onOk:o,onCancel:a,footer:Object(i.b)(l.Fragment,null,Object(i.b)(u.a,{onClick:a,ghost:!0,mdxType:"Button"},"Cancel"),Object(i.b)("div",{style:{height:"1px",width:"16px"}}),Object(i.b)(u.a,{onClick:o,mdxType:"Button"},"Finish")),visible:t,mdxType:"Modal"},Object(i.b)("div",{style:{minHeight:"200px"}},Object(i.b)(d.a,{label:"First Name",mdxType:"Input"}),Object(i.b)(d.a,{label:"Last Name",mdxType:"Input"}),Object(i.b)(d.a,{label:"Email",mdxType:"Input"}),Object(i.b)(d.a,{label:"Password",mdxType:"Input"})))))})),Object(i.b)("h2",{id:"asynchronous-actions"},"Asynchronous Actions"),Object(i.b)("p",null,"If there is a form in the modal that needs to be saved to the server, modify the ",Object(i.b)("inlineCode",{parentName:"p"},"okButtonProps")," to make use of the\nloading state while the form is being submitted. Then automatically close the modal once the request completes. The\nexample below is configured such that the modal will close 3 seconds after the ",Object(i.b)("inlineCode",{parentName:"p"},"Okay")," button is clicked. "),Object(i.b)(c.c,{__position:2,__code:"() => {\n  const [visible, setVisibility] = React.useState(false)\n  const [loading, setLoading] = React.useState(false)\n  const onCancel = React.useCallback(() => {\n    setVisibility(false)\n  }, [])\n  const onOk = React.useCallback(() => {\n    setLoading(true)\n    setTimeout(() => {\n      setVisibility(false)\n      setLoading(false)\n    }, 3000)\n  }, [])\n  return (\n    <div>\n      <Button onClick={() => setVisibility(true)}>\n        Open Modal with Async Logic\n      </Button>\n      <Modal\n        title={'Title'}\n        onOk={onOk}\n        onCancel={onCancel}\n        closable={!loading}\n        allowKeyboard={!loading}\n        cancelButtonProps={{\n          disabled: loading,\n        }}\n        okButtonProps={{\n          loading,\n        }}\n        visible={visible}\n      >\n        <div style={{ minHeight: '200px' }}>\n          <Input label={'First Name'} />\n          <Input label={'Last Name'} />\n          <Input label={'Email'} />\n          <Input label={'Password'} />\n        </div>\n      </Modal>\n    </div>\n  )\n}",__scope:(O={props:h,DefaultLayout:s.a,Playground:c.c,Props:c.d,Modal:b.a,Button:u.a,Input:d.a,ThemeContainer:p.f},O.DefaultLayout=s.a,O._frontmatter=r,O),mdxType:"Playground"},(function(){var e=l.useState(!1),t=e[0],n=e[1],a=l.useState(!1),o=a[0],s=a[1],c=l.useCallback((function(){n(!1)}),[]),p=l.useCallback((function(){s(!0),setTimeout((function(){n(!1),s(!1)}),3e3)}),[]);return Object(i.b)("div",null,Object(i.b)(u.a,{onClick:function(){return n(!0)},mdxType:"Button"},"Open Modal with Async Logic"),Object(i.b)(b.a,{title:"Title",onOk:p,onCancel:c,closable:!o,allowKeyboard:!o,cancelButtonProps:{disabled:o},okButtonProps:{loading:o},visible:t,mdxType:"Modal"},Object(i.b)("div",{style:{minHeight:"200px"}},Object(i.b)(d.a,{label:"First Name",mdxType:"Input"}),Object(i.b)(d.a,{label:"Last Name",mdxType:"Input"}),Object(i.b)(d.a,{label:"Email",mdxType:"Input"}),Object(i.b)(d.a,{label:"Password",mdxType:"Input"}))))})),Object(i.b)("h2",{id:"modal-props"},"Modal Props"),Object(i.b)(c.d,{of:b.a,mdxType:"Props"}))}void 0!==O&&O&&O===Object(O)&&Object.isExtensible(O)&&!O.hasOwnProperty("__filemeta")&&Object.defineProperty(O,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/modal/docz/Modal.mdx"}}),O.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-components-modal-docz-modal-mdx-30519ac354ed9ba0805c.js.map