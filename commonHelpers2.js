import"./assets/styles-b8e41888.js";const a=document.querySelector(".feedback-form"),r=a.querySelector("input"),i=a.querySelector("textarea"),n="feedback-form-state";document.addEventListener("DOMContentLoaded",()=>{const e=JSON.parse(localStorage.getItem(n));e&&(r.value=e.email,i.value=e.message)});a.addEventListener("submit",d);a.addEventListener("input",c);function c(e){const s=e.currentTarget,l=s.elements.email.value,t=s.elements.message.value,m={email:l.trim(),message:t.trim()};localStorage.setItem(n,JSON.stringify(m))}function d(e){e.preventDefault();const s=a.elements.email.value.trim(),l=a.elements.message.value.trim();if(s===""||l===""){alert("All form fields must be filled in");return}const t=JSON.parse(localStorage.getItem(n));if(t&&t.email&&t.message){const m=t.email,o=t.message;console.log({email:m,message:o}),e.currentTarget.reset(),localStorage.removeItem(n)}else alert("No saved data found")}
//# sourceMappingURL=commonHelpers2.js.map