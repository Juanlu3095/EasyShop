import{a as pt}from"./chunk-STRHTQXY.js";import{a as _t}from"./chunk-IEASDS4O.js";import{a as ht}from"./chunk-WIU5G6ZA.js";import{a as ut}from"./chunk-34JUEJJQ.js";import{a as Ze,b as et,c as tt}from"./chunk-YK5JBHKT.js";import{a as He,b as Ue,c as Qe,e as $e,f as Ye,h as Je}from"./chunk-7VRA7NH3.js";import{a as ct}from"./chunk-GGG6OR2P.js";import{a as nt,b as dt}from"./chunk-JI4B56LL.js";import{a as it,c as ot,d as rt}from"./chunk-3TBXM6QS.js";import{a as Ke,g as We,h as Xe}from"./chunk-7ITRIRQH.js";import{a as Ve,b as Be}from"./chunk-O4SO6MKA.js";import{a as qe}from"./chunk-UIFHNKPJ.js";import{b as Le}from"./chunk-S3J4NSG4.js";import{a as je}from"./chunk-PE3AIABI.js";import{a as st,b as lt}from"./chunk-RD4WVGQA.js";import{a as mt}from"./chunk-4AJ3ZCJG.js";import{a as at}from"./chunk-2OGK3DXK.js";import"./chunk-SMOEXM7I.js";import"./chunk-OB62TPC4.js";import"./chunk-AKCFMZTD.js";import{a as Se,b as Me,d,f as Ee,g as Fe,h as Z,j as _,k as Pe,l as De,m as Te,n as Ae,s as Re,t as Oe,u as Ne}from"./chunk-33HZCSPU.js";import{d as fe,e as ve}from"./chunk-V6CHNUWL.js";import{o as Ge,q as ze}from"./chunk-UKCT2NNU.js";import"./chunk-AESYL7IM.js";import{E as ke,L as X,U as Ce,V as ye,Z as we,ca as xe,ja as Ie}from"./chunk-I7KWM6MY.js";import{i as ge}from"./chunk-X2X7HICG.js";import{$ as te,Ab as a,Bb as o,Ca as M,Cb as u,Da as H,Dc as he,Gb as x,Gc as _e,Ja as ne,Jb as k,Lb as P,Lc as be,Mb as ce,Mc as z,Nb as se,Ob as le,Qb as me,Rb as J,Sb as D,Tb as T,Vb as s,Wb as A,Xb as R,Ya as n,Yb as ue,Za as h,ba as ie,bc as O,cc as N,da as B,gc as q,ic as G,ka as f,kb as U,la as S,ma as oe,na as re,ob as Q,pb as $,pc as pe,qb as m,qc as K,rb as b,sb as Y,tc as w,ua as C,uc as W,va as y,vb as de,yb as E,za as ae,zb as F}from"./chunk-BEZRA2BD.js";var xt=["input"],It=["formField"],St=["*"],bt=0,j=class{constructor(r,l){this.source=r,this.value=l}},Mt={provide:Se,useExisting:te(()=>ee),multi:!0},gt=new B("MatRadioGroup"),Et=new B("mat-radio-default-options",{providedIn:"root",factory:Ft});function Ft(){return{color:"accent"}}var ee=(()=>{let r=class r{get name(){return this._name}set name(e){this._name=e,this._updateRadioButtonNames()}get labelPosition(){return this._labelPosition}set labelPosition(e){this._labelPosition=e==="before"?"before":"after",this._markRadiosForCheck()}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this._updateSelectedRadioFromValue(),this._checkSelectedRadioButton())}_checkSelectedRadioButton(){this._selected&&!this._selected.checked&&(this._selected.checked=!0)}get selected(){return this._selected}set selected(e){this._selected=e,this.value=e?e.value:null,this._checkSelectedRadioButton()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markRadiosForCheck()}get required(){return this._required}set required(e){this._required=e,this._markRadiosForCheck()}constructor(e){this._changeDetector=e,this._value=null,this._name=`mat-radio-group-${bt++}`,this._selected=null,this._isInitialized=!1,this._labelPosition="after",this._disabled=!1,this._required=!1,this._controlValueAccessorChangeFn=()=>{},this.onTouched=()=>{},this.change=new H}ngAfterContentInit(){this._isInitialized=!0,this._buttonChanges=this._radios.changes.subscribe(()=>{this.selected&&!this._radios.find(e=>e===this.selected)&&(this._selected=null)})}ngOnDestroy(){this._buttonChanges?.unsubscribe()}_touch(){this.onTouched&&this.onTouched()}_updateRadioButtonNames(){this._radios&&this._radios.forEach(e=>{e.name=this.name,e._markForCheck()})}_updateSelectedRadioFromValue(){let e=this._selected!==null&&this._selected.value===this._value;this._radios&&!e&&(this._selected=null,this._radios.forEach(t=>{t.checked=this.value===t.value,t.checked&&(this._selected=t)}))}_emitChangeEvent(){this._isInitialized&&this.change.emit(new j(this._selected,this._value))}_markRadiosForCheck(){this._radios&&this._radios.forEach(e=>e._markForCheck())}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetector.markForCheck()}};r.\u0275fac=function(t){return new(t||r)(h(K))},r.\u0275dir=re({type:r,selectors:[["mat-radio-group"]],contentQueries:function(t,i,p){if(t&1&&me(p,L,5),t&2){let g;D(g=T())&&(i._radios=g)}},hostAttrs:["role","radiogroup",1,"mat-mdc-radio-group"],inputs:{color:"color",name:"name",labelPosition:"labelPosition",value:"value",selected:"selected",disabled:[f.HasDecoratorInputTransform,"disabled","disabled",w],required:[f.HasDecoratorInputTransform,"required","required",w]},outputs:{change:"change"},exportAs:["matRadioGroup"],standalone:!0,features:[O([Mt,{provide:gt,useExisting:r}]),U]});let c=r;return c})(),L=(()=>{let r=class r{get checked(){return this._checked}set checked(e){this._checked!==e&&(this._checked=e,e&&this.radioGroup&&this.radioGroup.value!==this.value?this.radioGroup.selected=this:!e&&this.radioGroup&&this.radioGroup.value===this.value&&(this.radioGroup.selected=null),e&&this._radioDispatcher.notify(this.id,this.name),this._changeDetector.markForCheck())}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.radioGroup!==null&&(this.checked||(this.checked=this.radioGroup.value===e),this.checked&&(this.radioGroup.selected=this)))}get labelPosition(){return this._labelPosition||this.radioGroup&&this.radioGroup.labelPosition||"after"}set labelPosition(e){this._labelPosition=e}get disabled(){return this._disabled||this.radioGroup!==null&&this.radioGroup.disabled}set disabled(e){this._setDisabled(e)}get required(){return this._required||this.radioGroup&&this.radioGroup.required}set required(e){this._required=e}get color(){return this._color||this.radioGroup&&this.radioGroup.color||this._providerOverride&&this._providerOverride.color||"accent"}set color(e){this._color=e}get inputId(){return`${this.id||this._uniqueId}-input`}constructor(e,t,i,p,g,v,V,I){this._elementRef=t,this._changeDetector=i,this._focusMonitor=p,this._radioDispatcher=g,this._providerOverride=V,this._uniqueId=`mat-radio-${++bt}`,this.id=this._uniqueId,this.disableRipple=!1,this.tabIndex=0,this.change=new H,this._checked=!1,this._value=null,this._removeUniqueSelectionListener=()=>{},this.radioGroup=e,this._noopAnimations=v==="NoopAnimations",I&&(this.tabIndex=W(I,0))}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}_markForCheck(){this._changeDetector.markForCheck()}ngOnInit(){this.radioGroup&&(this.checked=this.radioGroup.value===this._value,this.checked&&(this.radioGroup.selected=this),this.name=this.radioGroup.name),this._removeUniqueSelectionListener=this._radioDispatcher.listen((e,t)=>{e!==this.id&&t===this.name&&(this.checked=!1)})}ngDoCheck(){this._updateTabIndex()}ngAfterViewInit(){this._updateTabIndex(),this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{!e&&this.radioGroup&&this.radioGroup._touch()})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._removeUniqueSelectionListener()}_emitChangeEvent(){this.change.emit(new j(this,this._value))}_isRippleDisabled(){return this.disableRipple||this.disabled}_onInputClick(e){e.stopPropagation()}_onInputInteraction(e){if(e.stopPropagation(),!this.checked&&!this.disabled){let t=this.radioGroup&&this.value!==this.radioGroup.value;this.checked=!0,this._emitChangeEvent(),this.radioGroup&&(this.radioGroup._controlValueAccessorChangeFn(this.value),t&&this.radioGroup._emitChangeEvent())}}_onTouchTargetClick(e){this._onInputInteraction(e),this.disabled||this._inputElement.nativeElement.focus()}_setDisabled(e){this._disabled!==e&&(this._disabled=e,this._changeDetector.markForCheck())}_updateTabIndex(){let e=this.radioGroup,t;if(!e||!e.selected||this.disabled?t=this.tabIndex:t=e.selected===this?this.tabIndex:-1,t!==this._previousTabIndex){let i=this._inputElement?.nativeElement;i&&(i.setAttribute("tabindex",t+""),this._previousTabIndex=t)}}};r.\u0275fac=function(t){return new(t||r)(h(gt,8),h(M),h(K),h(ke),h(Ie),h(ne,8),h(Et,8),ae("tabindex"))},r.\u0275cmp=S({type:r,selectors:[["mat-radio-button"]],viewQuery:function(t,i){if(t&1&&(J(xt,5),J(It,7,M)),t&2){let p;D(p=T())&&(i._inputElement=p.first),D(p=T())&&(i._rippleTrigger=p.first)}},hostAttrs:[1,"mat-mdc-radio-button"],hostVars:15,hostBindings:function(t,i){t&1&&k("focus",function(){return i._inputElement.nativeElement.focus()}),t&2&&($("id",i.id)("tabindex",null)("aria-label",null)("aria-labelledby",null)("aria-describedby",null),Y("mat-primary",i.color==="primary")("mat-accent",i.color==="accent")("mat-warn",i.color==="warn")("mat-mdc-radio-checked",i.checked)("_mat-animation-noopable",i._noopAnimations))},inputs:{id:"id",name:"name",ariaLabel:[f.None,"aria-label","ariaLabel"],ariaLabelledby:[f.None,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[f.None,"aria-describedby","ariaDescribedby"],disableRipple:[f.HasDecoratorInputTransform,"disableRipple","disableRipple",w],tabIndex:[f.HasDecoratorInputTransform,"tabIndex","tabIndex",e=>e==null?0:W(e)],checked:[f.HasDecoratorInputTransform,"checked","checked",w],value:"value",labelPosition:"labelPosition",disabled:[f.HasDecoratorInputTransform,"disabled","disabled",w],required:[f.HasDecoratorInputTransform,"required","required",w],color:"color"},outputs:{change:"change"},exportAs:["matRadioButton"],standalone:!0,features:[U,N],ngContentSelectors:St,decls:13,vars:16,consts:[["formField",""],["input",""],["mat-internal-form-field","",3,"labelPosition"],[1,"mdc-radio"],[1,"mat-mdc-radio-touch-target",3,"click"],["type","radio",1,"mdc-radio__native-control",3,"change","id","checked","disabled","required"],[1,"mdc-radio__background"],[1,"mdc-radio__outer-circle"],[1,"mdc-radio__inner-circle"],["mat-ripple","",1,"mat-radio-ripple","mat-mdc-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mat-ripple-element","mat-radio-persistent-ripple"],[1,"mdc-label",3,"for"]],template:function(t,i){if(t&1){let p=x();ce(),a(0,"div",2,0)(2,"div",3)(3,"div",4),k("click",function(v){return C(p),y(i._onTouchTargetClick(v))}),o(),a(4,"input",5,1),k("change",function(v){return C(p),y(i._onInputInteraction(v))}),o(),a(6,"div",6),u(7,"div",7)(8,"div",8),o(),a(9,"div",9),u(10,"div",10),o()(),a(11,"label",11),se(12),o()()}t&2&&(m("labelPosition",i.labelPosition),n(2),Y("mdc-radio--disabled",i.disabled),n(2),m("id",i.inputId)("checked",i.checked)("disabled",i.disabled)("required",i.required),$("name",i.name)("value",i.value)("aria-label",i.ariaLabel)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby),n(5),m("matRippleTrigger",i._rippleTrigger.nativeElement)("matRippleDisabled",i._isRippleDisabled())("matRippleCentered",!0),n(2),m("for",i.inputId))},dependencies:[Ce,xe],styles:['.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio[hidden]{display:none}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{border-color:CanvasText}}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{border-color:CanvasText}}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-radio-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-radio-button .mdc-radio{padding:calc((var(--mdc-radio-state-layer-size) - 20px) / 2)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-selected-icon-color)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color)}.mat-mdc-radio-button .mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-radio-button .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-radio-button .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-focus-icon-color)}.mat-mdc-radio-button .mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-radio-button .mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-focus-icon-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color)}.mat-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-selected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-hover-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color)}.mat-mdc-radio-button .mdc-radio:not(:disabled):active .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-pressed-icon-color)}.mat-mdc-radio-button .mdc-radio .mdc-radio__background::before{top:calc(-1 * (var(--mdc-radio-state-layer-size) - 20px) / 2);left:calc(-1 * (var(--mdc-radio-state-layer-size) - 20px) / 2);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control{top:calc((var(--mdc-radio-state-layer-size) - var(--mdc-radio-state-layer-size)) / 2);right:calc((var(--mdc-radio-state-layer-size) - var(--mdc-radio-state-layer-size)) / 2);left:calc((var(--mdc-radio-state-layer-size) - var(--mdc-radio-state-layer-size)) / 2);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-radio-button .mdc-radio .mdc-radio__background::before{background-color:var(--mat-radio-ripple-color)}.mat-mdc-radio-button .mdc-radio:hover .mdc-radio__native-control:not([disabled]):not(:focus)~.mdc-radio__background::before{opacity:.04;transform:scale(1)}.mat-mdc-radio-button.mat-mdc-radio-checked .mdc-radio__background::before{background-color:var(--mat-radio-checked-ripple-color)}.mat-mdc-radio-button.mat-mdc-radio-checked .mat-ripple-element{background-color:var(--mat-radio-checked-ripple-color)}.mat-mdc-radio-button .mdc-radio--disabled+label{color:var(--mat-radio-disabled-label-color)}.mat-mdc-radio-button .mat-radio-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:50%}.mat-mdc-radio-button .mat-radio-ripple .mat-ripple-element{opacity:.14}.mat-mdc-radio-button .mat-radio-ripple::before{border-radius:50%}.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-radio-button._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-radio-button .mdc-radio .mdc-radio__native-control:focus:enabled:not(:checked)~.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-focus-icon-color, black)}.mat-mdc-radio-button.cdk-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-radio-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-radio-touch-target-display)}[dir=rtl] .mat-mdc-radio-touch-target{left:0;right:50%;transform:translate(50%, -50%)}'],encapsulation:2,changeDetection:0});let c=r;return c})(),ft=(()=>{let r=class r{};r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=oe({type:r}),r.\u0275inj=ie({imports:[X,z,ye,L,X]});let c=r;return c})();var vt=(c,r)=>r.Id,Dt=(c,r)=>r.slug;function Tt(c,r){if(c&1&&(a(0,"mat-option",21),s(1),o()),c&2){let l=r.$implicit;m("value",l.Id),n(),A(l.Nombre)}}function At(c,r){if(c&1&&(a(0,"div",24)(1,"p"),s(2),o(),a(3,"p"),s(4),o()(),u(5,"mat-divider")),c&2){let l=r.$implicit;n(2),ue("",l.Nombre," x ",l.cantidad,""),n(2),R("",l.Precio_rebajado_euros?l.Precio_rebajado_euros*l.cantidad:l.Precio_euros*l.cantidad," \u20AC")}}function Rt(c,r){c&1&&(a(0,"h3"),s(1,"No hay productos en el carrito."),o())}function Ot(c,r){if(c&1&&(a(0,"div",24)(1,"p"),s(2,"Descuento"),o(),a(3,"p"),s(4),q(5,"currency"),o()(),u(6,"mat-divider")),c&2){let l=P();n(4),R("-",G(5,1,l.cupondescuento.Tipo=="Fijo"?l.cupondescuento.Descuento:l.subtotal*(l.cupondescuento.Descuento/100),"EUR"),"")}}function Nt(c,r){if(c&1&&(a(0,"mat-radio-button",30),s(1),o()),c&2){let l=r.$implicit;le("value",l.slug),n(),A(l.nombre)}}function qt(c,r){c&1&&(a(0,"p"),s(1,"No hay m\xE9todos de pago disponibles"),o())}function Gt(c,r){if(c&1){let l=x();a(0,"button",34),k("click",function(){C(l);let t=P();return y(t.crearPedido())}),s(1,"Proceder al pago"),o()}if(c&2){let l=P();m("disabled",!l.pedido)}}he(ut,"es");var Vi=(()=>{let r=class r{constructor(e,t,i,p,g,v,V,I,kt,Ct,yt){this.title=e,this.responsive=t,this.carritoService=i,this.productoService=p,this.cuponService=g,this.metodospagoService=v,this.pedidosService=V,this.metodosenvioService=I,this.router=kt,this._snackbar=Ct,this.dialogService=yt,this.metodospago=[],this.metodosenvio=[],this.gastosenvio=0,this.suscripcion=[],this.cuponForm=new Z({codigo:new _("",d.required)}),this.checkoutForm=new Z({nombre:new _("",d.compose([d.required,d.minLength(1)])),apellidos:new _("",d.compose([d.required,d.minLength(1)])),pais:new _("",d.compose([d.required,d.minLength(1)])),direccion:new _("",d.compose([d.required,d.minLength(1)])),codigo_postal:new _(null,d.compose([d.required,d.minLength(1)])),poblacion:new _("",d.compose([d.required,d.minLength(1)])),provincia:new _("",d.compose([d.required,d.minLength(1)])),telefono:new _(null,d.compose([d.required,d.minLength(1)])),email:new _("",d.compose([d.required,d.minLength(1),d.email])),notas:new _("",d.compose([d.minLength(1)])),metodo_envio:new _(1,d.compose([d.required,d.min(1),d.max(2)])),metodo_pago:new _("",d.compose([d.required,d.minLength(1)]))})}ngOnInit(){this.title.setTitle("Finalizar compra | EasyShop"),this.responsiveDesign(),this.getProductosCarrito(),this.getMetodospagodisponibles(),this.getMetodosenvio(),this.suscripcion.push(this.carritoService.productos.subscribe(()=>{this.getProductosCarrito()}))}ngOnDestroy(){this.suscripcion.forEach(e=>e.unsubscribe())}responsiveDesign(){this.suscripcion.push(this.responsive.obtenerDispositivo().subscribe({next:e=>{switch(e){case"Desktop":this.rowHeight="5:1",this.rowspan=1,this.rowspanArea=3;break;case"Port\xE1til":this.rowHeight="5:1",this.rowspan=1,this.rowspanArea=4;break;case"Tablet":this.rowHeight="5:1",this.rowspan=1,this.rowspanArea=4;break;case"M\xF3vil":this.rowHeight="3:1",this.rowspan=1,this.rowspanArea=4;break;default:this.rowHeight="5:1";break}},error:e=>{console.error(e)}}))}comprobarGastosenvio(e){let t=this.metodosenvio.find(i=>i.Id===e.value);this.gastosenvio=t?.Precio??0,this.getSubtotal()}comprobarcupon(){this.cuponForm.valid&&this.cuponService.getCuponPorCodigo(this.cuponForm.value).subscribe({next:e=>{if(this.subtotal>e.data.Gasto_minimo&&e.data.Limite_uso>0){let t=new Date,i=new Date(e.data.Caducidad),p=Date.parse(t.toDateString());Date.parse(i.toDateString())>p?(this.cupondescuento=e.data,this.getSubtotal(),this._snackbar.open("Cup\xF3n aplicado.","Aceptar",{duration:3e3})):this._snackbar.open("Cup\xF3n caducado.","Aceptar",{duration:3e3})}else this._snackbar.open("Cup\xF3n no v\xE1lido.","Aceptar",{duration:3e3})},error:e=>{this._snackbar.open("Cup\xF3n no encontrado.","Aceptar",{duration:3e3})}})}getMetodosenvio(){this.metodosenvioService.getMetodosenvio().subscribe({next:e=>{this.metodosenvio=e.data},error:e=>{this._snackbar.open("No se ha podido encontrar m\xE9todos de env\xEDo v\xE1lidos.","Aceptar",{duration:3e3})}})}getMetodospagodisponibles(){this.metodospagoService.getMetodosPagoDisponibles().subscribe({next:e=>{this.metodospago=e.data},error:e=>{this._snackbar.open("No se ha podido encontrar m\xE9todos de pago v\xE1lidos.","Aceptar",{duration:3e3})}})}crearPedido(){if(this.checkoutForm.valid){this.dialogService.openSpinner();let e={nombre:this.checkoutForm.value.nombre,apellidos:this.checkoutForm.value.apellidos,pais:this.checkoutForm.value.pais,direccion:this.checkoutForm.value.direccion,codigo_postal:this.checkoutForm.value.codigo_postal,poblacion:this.checkoutForm.value.poblacion,provincia:this.checkoutForm.value.provincia,telefono:this.checkoutForm.value.telefono,email:this.checkoutForm.value.email,notas:this.checkoutForm.value.notas,metodo_pago:this.checkoutForm.value.metodo_pago,subtotal:this.subtotal,nombre_descuento:this.cupondescuento?this.cupondescuento.Nombre:null,tipo_descuento:this.cupondescuento?this.cupondescuento.Tipo:null,descuento:this.cupondescuento?this.cupondescuento.Descuento:null,metodo_envio:this.checkoutForm.value.metodo_envio??1,gastos_envio:this.gastosenvio??0,total:this.total,productos:this.pedido.map(t=>({producto:t.Id,nombre_producto:t.Nombre,subtotal:t.Precio_rebajado_euros?t.Precio_rebajado_euros:t.Precio_euros,cantidad:t.cantidad,total:t.Precio_rebajado_euros?t.Precio_rebajado_euros*t.cantidad:t.Precio_euros*t.cantidad}))};this.checkoutForm.value.metodo_pago=="transferencia"?this.pedidosService.postPedido(e).subscribe({next:t=>{this.dialogService.closeAll(),this._snackbar.open("Su pedido ha sido registrado.","Aceptar",{duration:3e3}),localStorage.setItem("referencia_pedido",t.data),this.carritoService.deleteCarrito(),this.router.navigate(["/informacion-transferencia"])},error:t=>{this.dialogService.closeAll(),this._snackbar.open("No se ha podido procesar su pedido.","Aceptar",{duration:3e3})}}):this.checkoutForm.value.metodo_pago=="tarjeta"&&this.pedidosService.pagoTarjeta(e).subscribe({next:t=>{this.dialogService.closeAll(),t?(this.carritoService.deleteCarrito(),this.pedidosService.redsys(t.form)):this.router.navigate(["/resultado-del-pago/error"])},error:t=>{this.dialogService.closeAll(),this._snackbar.open("No se ha podido procesar su pedido.","Aceptar",{duration:3e3})}})}}getProductosCarrito(){this.carrito=this.carritoService.cart;let e=[];this.carrito.forEach(t=>e.push(t.Id)),e.length>0&&this.productoService.getProductosByIds(e).subscribe({next:t=>{this.pedido=t,this.pedido.forEach(i=>{i.cantidad=this.carrito.find(p=>p.Id===i.Id)?.cantidad||0}),this.getSubtotal()},error:t=>{console.error(t)}})}getSubtotal(){this.subtotal=this.pedido.reduce((e,t)=>Number(e)+Number(t.Precio_rebajado_euros?t.Precio_rebajado_euros*t.cantidad:t.Precio_euros*t.cantidad),0),this.cupondescuento&&this.cupondescuento.Tipo=="Fijo"?this.total=Number(this.subtotal)-Number(this.cupondescuento.Descuento)+Number(this.gastosenvio):this.cupondescuento&&this.cupondescuento.Tipo=="Porcentual"?this.total=this.subtotal+Number(this.gastosenvio)-this.subtotal*this.cupondescuento.Descuento/100:this.total=this.subtotal+Number(this.gastosenvio)}};r.\u0275fac=function(t){return new(t||r)(h(ge),h(mt),h(Le),h(qe),h(pt),h(ht),h(ct),h(_t),h(fe),h(je),h(at))},r.\u0275cmp=S({type:r,selectors:[["app-checkoutpage"]],standalone:!0,features:[O([{provide:pe,useValue:"es"}]),N],decls:122,vars:61,consts:[["autosize","cdkTextareaAutosize"],[1,"checkout"],[1,"cuponForm",3,"formGroup"],["type","text","id","cupon","aria-describedby","cuponHelp","placeholder","C\xF3digo de cup\xF3n","formControlName","codigo",1,"form-control","cupon"],["mat-flat-button","",1,"submit",3,"click"],[1,"checkout-container"],[1,"checkout-form",3,"formGroup"],[1,"checkout-container-item"],["cols","2",1,"input-list",3,"rowHeight"],[3,"colspan","rowspan"],[1,"form-field"],["type","text","matInput","","formControlName","nombre","required",""],["type","text","matInput","","formControlName","apellidos","required",""],["type","text","matInput","","formControlName","pais","required",""],["type","text","matInput","","formControlName","direccion","required",""],["type","number","matInput","","formControlName","codigo_postal","required",""],["type","text","matInput","","formControlName","poblacion","required",""],["type","text","matInput","","formControlName","provincia","required",""],["type","number","matInput","","formControlName","telefono","required",""],["type","email","matInput","","formControlName","email","required",""],["formControlName","metodo_envio",3,"selectionChange"],[3,"value"],["cdkTextareaAutosize","","cdkAutosizeMinRows","7","cdkAutosizeMaxRows","10","type","textarea","matInput","","formControlName","notas"],[1,"checkout-card"],[1,"content-item"],[1,"content-item-title"],[1,"example-card-footer"],[1,"metodo-pago"],[1,"footer-title"],["aria-labelledby","radio-group-label","formControlName","metodo_pago",1,"radio-group"],[1,"radio-button",3,"value"],[1,"datos-personales"],["routerLink",""],["mat-flat-button","",3,"disabled","click",4,"ngIf"],["mat-flat-button","",3,"click","disabled"]],template:function(t,i){if(t&1){let p=x();u(0,"app-header"),a(1,"main")(2,"section",1)(3,"h1"),s(4,"Finalizar compra"),o(),a(5,"h3"),s(6,"Si tienes un cup\xF3n de descuento ind\xEDcalo a continuaci\xF3n:"),o(),a(7,"form",2),u(8,"input",3),a(9,"button",4),k("click",function(){return C(p),y(i.comprobarcupon())}),s(10,"Aplicar cup\xF3n"),o()(),a(11,"div",5)(12,"form",6)(13,"div",7)(14,"h2"),s(15,"Detalles de facturaci\xF3n"),o(),u(16,"mat-divider"),a(17,"mat-grid-list",8)(18,"mat-grid-tile",9)(19,"mat-form-field",10)(20,"mat-label"),s(21,"Nombre:"),o(),u(22,"input",11),o()(),a(23,"mat-grid-tile",9)(24,"mat-form-field",10)(25,"mat-label"),s(26,"Apellidos:"),o(),u(27,"input",12),o()(),a(28,"mat-grid-tile",9)(29,"mat-form-field",10)(30,"mat-label"),s(31,"Pa\xEDs/Regi\xF3n:"),o(),u(32,"input",13),o()(),a(33,"mat-grid-tile",9)(34,"mat-form-field",10)(35,"mat-label"),s(36,"Direcci\xF3n de entrega:"),o(),u(37,"input",14),o()(),a(38,"mat-grid-tile",9)(39,"mat-form-field",10)(40,"mat-label"),s(41,"C\xF3digo postal:"),o(),u(42,"input",15),o()(),a(43,"mat-grid-tile",9)(44,"mat-form-field",10)(45,"mat-label"),s(46,"Poblaci\xF3n:"),o(),u(47,"input",16),o()(),a(48,"mat-grid-tile",9)(49,"mat-form-field",10)(50,"mat-label"),s(51,"Provincia:"),o(),u(52,"input",17),o()(),a(53,"mat-grid-tile",9)(54,"mat-form-field",10)(55,"mat-label"),s(56,"Tel\xE9fono:"),o(),u(57,"input",18),o()(),a(58,"mat-grid-tile",9)(59,"mat-form-field",10)(60,"mat-label"),s(61,"Correo electr\xF3nico:"),o(),u(62,"input",19),o()(),a(63,"mat-grid-tile",9)(64,"mat-form-field",10)(65,"mat-label"),s(66,"M\xE9todo de env\xEDo:"),o(),a(67,"mat-select",20),k("selectionChange",function(v){return C(p),y(i.comprobarGastosenvio(v))}),E(68,Tt,2,2,"mat-option",21,vt),o()()(),a(70,"mat-grid-tile",9)(71,"mat-form-field",10)(72,"mat-label"),s(73,"Notas del pedido:"),o(),u(74,"textarea",22,0),o()()()(),a(76,"div",7)(77,"mat-card",23)(78,"mat-card-header")(79,"mat-card-title"),s(80,"Tu pedido"),o()(),a(81,"mat-card-content")(82,"div",24)(83,"p",25),s(84,"Producto"),o(),a(85,"p",25),s(86,"Subtotal"),o()(),u(87,"mat-divider"),E(88,At,6,3,null,null,vt,!1,Rt,2,0,"h3"),Q(91,Ot,7,4),a(92,"div",24)(93,"p"),s(94,"Gastos de env\xEDo"),o(),a(95,"p"),s(96),q(97,"currency"),o()(),u(98,"mat-divider"),a(99,"div",24)(100,"p"),s(101,"Total"),o(),a(102,"p"),s(103),q(104,"currency"),o()(),u(105,"mat-divider"),o(),a(106,"mat-card-footer",26)(107,"mat-card-content")(108,"div",27)(109,"h2",28),s(110,"M\xE9todo de pago"),o(),a(111,"mat-radio-group",29),E(112,Nt,2,2,"mat-radio-button",30,Dt,!1,qt,2,0,"p"),o()(),a(115,"p",31),s(116," Tus datos personales se utilizar\xE1n para procesar tu pedido, mejorar tu experiencia en esta web y otros prop\xF3sitos descritos en nuestra "),a(117,"a",32),s(118,"pol\xEDtica de privacidad"),o(),s(119,". "),o(),Q(120,Gt,2,1,"button",33),o()()()()()()()(),u(121,"app-footer")}t&2&&(n(7),m("formGroup",i.cuponForm),n(5),m("formGroup",i.checkoutForm),n(5),m("rowHeight",i.rowHeight),n(),m("colspan",1)("rowspan",i.rowspan),n(),b("width",100,"%")("gap",10,"%"),n(4),m("colspan",1)("rowspan",i.rowspan),n(),b("width",100,"%"),n(4),m("colspan",2)("rowspan",i.rowspan),n(),b("width",100,"%"),n(4),m("colspan",2)("rowspan",i.rowspan),n(),b("width",100,"%"),n(4),m("colspan",2)("rowspan",i.rowspan),n(),b("width",100,"%"),n(4),m("colspan",1)("rowspan",i.rowspan),n(),b("width",100,"%"),n(4),m("colspan",1)("rowspan",i.rowspan),n(),b("width",100,"%"),n(4),m("colspan",2)("rowspan",i.rowspan),n(),b("width",100,"%"),n(4),m("colspan",2)("rowspan",i.rowspan),n(),b("width",100,"%"),n(4),m("colspan",2)("rowspan",i.rowspan),n(),b("width",100,"%"),n(4),F(i.metodosenvio),n(2),m("colspan",2)("rowspan",i.rowspanArea),n(),b("width",100,"%"),n(17),F(i.pedido),n(3),de(91,i.cupondescuento?91:-1),n(5),A(G(97,55,i.gastosenvio,"EUR")),n(7),R("",G(104,58,i.total,"EUR")," (incluye IVA)"),n(9),F(i.metodospago),n(8),m("ngIf",i.metodospago.length>0))},dependencies:[Ve,Be,Oe,Pe,Me,De,Ee,Fe,Re,Ne,Te,Ae,Xe,We,Ke,rt,ot,it,dt,nt,we,lt,st,tt,et,Ze,Je,He,Qe,Ye,$e,Ue,ft,ee,L,ze,Ge,ve,z,_e,be],styles:['@charset "UTF-8";.checkout[_ngcontent-%COMP%]{margin:5rem}.cupon[_ngcontent-%COMP%]{margin:1rem 0}.cuponForm[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:1rem;width:30%}.cuponForm[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--darkblue)!important;color:var(--white)!important;width:80%}.checkout[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;font-size:var(--lengthMd3);font-weight:700}.checkout-container[_ngcontent-%COMP%]{margin-top:4rem}.checkout-form[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;gap:5rem}.checkout-container-item[_ngcontent-%COMP%]{width:50%}.input-list[_ngcontent-%COMP%]{margin-top:2rem}.form-field[_ngcontent-%COMP%]{margin:0 1rem}.checkout-card[_ngcontent-%COMP%]{padding:1rem}.checkout-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{margin-bottom:2rem}.content-item[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;margin:.5rem 0}.metodo-pago[_ngcontent-%COMP%]{margin-bottom:1rem}.radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column}.example-card-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:90%;margin:2rem 2rem 1rem;text-align:center;color:var(--white);background-color:var(--darkblue)}@media screen and (min-width: 1024px) and (max-width: 1350px){.checkout-container-item[_ngcontent-%COMP%]{width:100%}.checkout-form[_ngcontent-%COMP%]{flex-direction:column;gap:1rem}}@media screen and (min-width: 768px) and (max-width: 1023px){.cuponForm[_ngcontent-%COMP%]{width:70%}.checkout-container-item[_ngcontent-%COMP%]{width:100%}.checkout-form[_ngcontent-%COMP%]{flex-direction:column;gap:1rem;width:100%}}@media screen and (max-width: 767px){.checkout[_ngcontent-%COMP%]{margin:2rem}.cuponForm[_ngcontent-%COMP%], .checkout-container-item[_ngcontent-%COMP%]{width:100%}.checkout-form[_ngcontent-%COMP%]{flex-direction:column;gap:1rem}}']});let c=r;return c})();export{Vi as CheckoutpageComponent};
