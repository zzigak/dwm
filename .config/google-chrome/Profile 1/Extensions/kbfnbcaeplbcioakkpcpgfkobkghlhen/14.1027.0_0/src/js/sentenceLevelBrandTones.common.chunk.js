(self.webpackChunk=self.webpackChunk||[]).push([[3025],{32173:(e,s,t)=>{t.r(s),t.d(s,{SentenceLevelBrandTonesFeature:()=>g});var a=t(40327),r=t(17404),n=t(84966);class i{constructor(){this._feedback=new Map}getFeedback(e){return this._feedback.get(e)}setFeedback(e,s){this._feedback.set(e,s)}get addFeedbackToRawAlertTransformer(){return e=>{if(n.wQ.isSentenceLevelBrandTones(e)){const s=this.getFeedback(e.id);return s?{...e,extra_properties:{...e.extra_properties,brandToneFeedback:s}}:e}return e}}}var c=t(88097),d=t(15646),b=t(14601),o=t(85985),h=t(77176),l=t(78674),k=t(83078),p=t(22232),u=t(5114);class g{constructor(e,s){this._alertStateService=e,this._gnar=s,this._subs=new b.w,this.feedbackStore=new i,this._subs.add(this._alertStateService.newlyHighlightedAlerts.pipe(o.h(r.S.isSentenceLevelBrandTonesAlert)).subscribe((()=>this._gnar.brandTonesSentenceHighlight())))}initCardActionsProcessing(e,s){this._subs.add(e.pipe(o.h(d.lY.isSentenceLevelBrandTonesFeedbackAction)).subscribe((e=>{(0,a.pipe)(s.getById(e.alertId),u.chain((e=>c.bZ.getRawId(e))),k.tap((s=>this.feedbackStore.setFeedback(s,e.feedbackType)))),this._trackAssistantFeedbackClick(e.feedbackType)}))),this._subs.add(e.pipe(o.h(d.lY.isAlertCardShow),h.U((e=>e.alertId)),l.b(300)).subscribe((e=>{(0,a.pipe)(s.getById(e),u.filter(c.bZ.isSentenceLevelBrandTones),k.tap((()=>this._gnar.brandTonesSentenceCardShow("assistant"))))}))),this._subs.add(e.pipe(o.h(d.lY.isAlertIgnoreAction)).subscribe((e=>{(0,a.pipe)(s.getById(e.alertId),u.filter(c.bZ.isSentenceLevelBrandTones),k.tap((()=>this._gnar.brandTonesSentenceCardDismissButtonClick("assistant"))))})))}get addFeedbackToRawAlertTransformer(){return this.feedbackStore.addFeedbackToRawAlertTransformer}_trackAssistantFeedbackClick(e){switch(e){case c.id.accurate:this._gnar.brandTonesSentenceFeedbackClick("assistant","yes");break;case c.id.inaccurate:this._gnar.brandTonesSentenceFeedbackClick("assistant","no");break;default:(0,p.vE)(e)}}dispose(){this._subs.unsubscribe()}}}}]);