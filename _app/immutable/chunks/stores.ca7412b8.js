import{w as s}from"./index.7c48644b.js";const e={hard:"hard",medium:"medium",easy:"easy"},G=t=>t<r.length?r[t-1]:e.hard,r=[e.easy,e.easy,e.medium,e.easy,e.easy,e.medium,e.easy,e.medium,e.medium,e.easy,e.medium,e.medium,e.medium,e.medium,e.medium,e.medium,e.medium,e.hard,e.medium,e.hard,e.hard,e.medium,e.hard,e.hard,e.medium,e.hard,e.hard,e.medium,e.hard,e.hard,e.medium,e.hard,e.hard];var u=(t=>(t[t.extraTime=0]="extraTime",t[t.extraLife=1]="extraLife",t[t.category=2]="category",t[t.words=3]="words",t[t.choices=4]="choices",t[t.betterOdds=5]="betterOdds",t))(u||{});class i{constructor(a,o,m,c){this.id=a,this.name=o,this.description=m,this.limit=c}}const n=new Map,d=[new i(0,"Extra time","Grants you an additional second to answer each question",0),new i(1,"Extra life","Grants you one extra life that can be used to retry a failed question",0),new i(2,"Categories","Allows you to see the question category before you select it",1),new i(3,"Words","Allows you to see an additional word of the question before you select it",10),new i(4,"Choices","Grants you an additional question to choose from each round",3),new i(5,"Better odds","Grants you a 25% chance to remove one wrong answer",2)],L=()=>{const t=[];for(;t.length<2;){let a=d[Math.floor(Math.random()*d.length)],o=a.limit===0||!n.has(a.name)||n.get(a.name)<a.limit;!t.includes(a)&&o&&t.push(a)}return t},l=s(e.easy),h=s(1),f=s(1),M=s([]),v=s(),w=s(5),g=s(0),y=s(0),b=s(!1),q=s(0),A=s(!1),C=()=>{f.set(1),l.set(e.easy),h.set(1),w.set(5),g.set(0),b.set(!1),y.set(0),q.set(0),n.clear()};export{u as R,h as a,f as b,g as c,l as d,q as e,b as f,G as g,L as h,n as i,A as l,M as q,C as r,v as s,w as t,y as w};
