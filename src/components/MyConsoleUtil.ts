
export const getNames = (o) => {	return Object.getOwnPropertyNames(o)}

export const warn = console.warn;   // Orange on Brown
export const err2 = console.error;   // Pink on DkRed

export const err  =      (msg:string, value:any = "") =>      { console.log(`%c ${msg} `, "color: red;background-color:black;", value) }
export const progress =  (msg:string, value:any = "") =>      { console.log(`%c ${msg} `, "color: black; background-color:orange;", value) }
export const joy  =    	 (msg:string, value:any = "") =>      { console.log(`%c ${msg} `, "color: blue; background-color:white;", value) }
export const success = 	 (msg:string, value:any = "") =>      { console.log(`%c ${msg} `, "color: green; background-color:black;", value) }

export const log  =		(msg:string, value:any = "") =>      { console.log(`%c${msg}`, "color: cyan;", value) }
export const log1 =     (msg:string, value:any = "") =>      { console.log(`%c${msg}`, "color: red;", value) }
export const log2 =     (msg:string, value:any = "") =>      { console.log(`%c${msg}`, "color: chartreuse;", value) }
export const log3 =     (msg:string, value:any = "") =>      { console.log(`%c${msg}`, "color: fuchsia;", value) }
export const log4 =     (msg:string, value:any = "") =>      { console.log(`%c${msg}`, "color: yellow;", value) }
export const log5 =     (msg:string, value:any = "") =>      { console.log(`%c${msg}`, "color: darkorange;", value) }
export const log6 =     (msg:string, value:any = "") =>      { console.log(`%c${msg}`, "color: pink;", value) }
export const log7 =     (msg:string, value:any = "") =>      { console.log(`%c${msg}`, "color: mediumpurple;", value) }
// 
export const enter  =    (msg:string, value:any = "") =>      { console.log(`%c>>>--> ENTER -  ${msg}`, "color: yellow;font-weight:bold;", value) }
export const enter0 =    (msg:string, value:any = "") =>      { console.log(`%c>>>--> ENTER -  ${msg}`, "color: green;font-weight:bold;", value) }
export const enter1 =    (msg:string, value:any = "") =>      { console.log(`%c>>>--> ENTER -  ${msg}`, "color: red;font-weight:bold;", value) }
export const enter2 =    (msg:string, value:any = "") =>      { console.log(`%c>>>--> ENTER -  ${msg}`, "color: magenta;font-weight:bold;", value) }
export const enter3 =    (msg:string, value:any = "") =>      { console.log(`%c>>>--> ENTER -  ${msg}`, "color: chartreuse;font-weight:bold;", value) }
export const enter4 =    (msg:string, value:any = "") =>      { console.log(`%c>>>--> ENTER -  ${msg}`, "color: darkorange;font-weight:bold;", value) }
export const enter5 =    (msg:string, value:any = "") =>      { console.log(`%c>>>--> ENTER -  ${msg}`, "color: pink;font-weight:bold;", value) }
export const enter6 =    (msg:string, value:any = "") =>      { console.log(`%c>>>--> ENTER -  ${msg}`, "color: mediumpurple;font-weight:bold;", value) }
export const enter7 =    (msg:string, value:any = "") =>      { console.log(`%c>>>--> ENTER -  ${msg}`, "color: #0D47A1;font-weight:bold;", value) }
// 
export const exit =    	 (msg:string, value:any = "") =>      { console.log(`%c<--<<< EXIT -  ${msg}`, "color: green;font-weight:bold;", value) }
export const start =     (msg:string, value:any = "") =>      { console.log(`%c>>>--> START -- ${msg}`, "color: yellow;", value) }
export const fini =    	 (msg:string, value:any = "") =>      { console.log(`%c<--<<< FINI --- ${msg}`, "color: magenta;", value) }
export const pause =     (msg:string, value:any = "") =>      { console.log(`%c>>>--> PAUSE -- ${msg}`, "color: yellow;", value) }
export const resume =    (msg:string, value:any = "") =>      { console.log(`%c<--<<< RESUME - ${msg}`, "color: magenta;", value) }
//

export const bar =		 (msg:string = "", value:any = "") => { console.log(`%c                                 %c ${msg}`, "color: white; background-color:black;", value) }
export const greybar =   (msg:string = "", value:any = "") => { console.log(`%c                                 %c ${msg}`, "color: black; background-color:dimgrey;", value) }
export const whitebar =  (msg:string = "", value:any = "") => { console.log(`%c                                 %c ${msg}`, "color: black; background-color:white;", value) }
export const bluebar =   (msg:string = "", value:any = "") => { console.log(`%c                                 %c ${msg}`, "color: black; background-color:lightskyblue;", value) }
export const redbar =	 (msg:string = "", value:any = "") => { console.log(`%c                                 %c ${msg}`, "color: white; background-color:red;", value) }
export const greenbar =  (msg:string = "", value:any = "") => { console.log(`%c                                 %c ${msg}`, "color: white; background-color:green;", value) }
export const orangebar = (msg:string = "", value:any = "") => { console.log(`%c                                 %c ${msg}`, "color: white; background-color:orange;", value) }

export const pass =      (msg:string, value:any = "") =>      { console.log(`%cPASS --  ${msg}`, "color: green;", value) }
export const fail =      (msg:string, value:any = "") =>      { console.log(`%cFAIL --  ${msg}`, "color: red;", value) }

export const exe =    	 (msg:string, value:any = "") =>      { console.log(`%c${msg}`, "color: cyan;", value) }
export const exe1 =    	 (msg:string, value:any = "") =>      { console.log(`%c${msg}`, "color: red;", value) }
export const exe2 =    	 (msg:string, value:any = "") =>      { console.log(`%c${msg}`, "color: chartreuse;", value) }
export const exe3 =    	 (msg:string, value:any = "") =>      { console.log(`%c${msg}`, "color: fuchsia;", value) }
export const exe4 =    	 (msg:string, value:any = "") =>      { console.log(`%c${msg}`, "color: yellow;", value) }
export const exe5 =    	 (msg:string, value:any = "") =>      { console.log(`%c${msg}`, "color: darkorange;", value) }
export const exe6 =    	 (msg:string, value:any = "") =>      { console.log(`%c${msg}`, "color: pink;", value) }
export const exe7 =    	 (msg:string, value:any = "") =>      { console.log(`%c${msg}`, "color: mediumpurple;", value) }
// /Users/kevinbowe/Projects/Analysis/Vue3-SAM-EB-Analysis-v9/src/my-util-code/MyConsoleUtil.ts