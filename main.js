const TEXT = document.getElementById("demo");
const CRSR = document.getElementById("cursor");
function Type(text, t, then) {
  CRSR.className = "";
  //step 1: clear
  let time = 0;
  let temp = TEXT.innerText;
  for (let i = temp.length; i >= 0; i--) {
    time += t;
    setTimeout(() => {
      TEXT.innerText = temp.substring(0, i);
    }, time);
  }
  //step 2: unclear
  for (let i = 1; i <= text.length; i++) {
    time += t;
    setTimeout(() => {
      TEXT.innerText = text.substring(0, i);
    }, time);
  }
  //step 3: recursor
  time += t;
  setTimeout(() => {
    CRSR.className = "blink";
  }, time);
  if (then) {
    time += t;
    setTimeout(then, time);
  }
}
const tab = String.fromCharCode(127).repeat(3);
document.getElementById("i_dont_wanna_add_code_myself").innerText = `var _count
_count=0
call main
jmp @halt

function collatz
takes acc
var length
_count++
length=0
while acc>1
${tab}length++
${tab}if acc%2==0
${tab}${tab}acc/=2
${tab}else
${tab}${tab}acc=3*acc+1
${tab}endc #End Condition
endl #End Loop
return length
endf

function main
var start
var length
var maxlen
start=0
maxlen=-1
while start<10000
start++
${tab}call collatz start
${tab}retrieve length
${tab}if length>maxlen
${tab}${tab}maxlen=length
${tab}${tab}push "New Longest Collatz Sequence Found! Starting at "+start+", "+length+" element(s) long."
${tab}${tab}invoke print
${tab}endc
endl
push "The function has been called "+_count+" times.";
invoke print
return
endf

@halt`;
document.getElementById(
  "i_dont_wanna_add_code_myself_2"
).innerText = `0 0 = 13 jsr
24 jmp
1 swap = 0 0 ? 1 + = 2 0 =
1 ? 1 > isf
6 jmp
12 jmp
2 2 ? 1 + = 1 ? 2 % 0 == isf
9 jmp
10 jmp
1 1 ? 2 / = 11 jmp
1 3 1 ? * 1 + =
3 jmp
2 ? rtn
3 0 = 4 1 -u =
3 ? 10000 < isf
17 jmp
23 jmp
3 3 ? 1 + = 3 ? 2 jsr
5 swap = 5 ? 4 ? > isf
21 jmp
22 jmp
4 5 ? = "4e6577204c6f6e6765737420436f6c6c61747a2053657175656e636520466f756e6421205374617274696e6720617420 3 ? + "2c20 + 5 ? + "20656c656d656e74287329206c6f6e672e + "7072696e74 invoke
14 jmp
"5468652066756e6374696f6e20686173206265656e2063616c6c656420 0 ? + "2074696d65732e + "7072696e74 invoke rtn`;

let panel = 1;
const paneltexts = [
  ["efficiency", "performance", "speed", "productivity"],
  [
    "newcomers",
    "beginners",
    "simplicity",
    "minimalism",
    "everyone",
    "programmers",
  ],
  ["the community", "open source", "developers", "everyone"],
];
const NEXT = document.getElementById("next");
NEXT.addEventListener("click", () => {
  NEXT.classList.add("disabled");
  panel++;
  panel %= 3;
  let temp = paneltexts[panel];
  Type(temp[Math.floor(Math.random() * temp.length)], 50, () => {
    NEXT.classList.remove("disabled");
    document.getElementById(`panel${panel}`).classList.remove("blurry");
  });
  document.getElementById("panel0").classList.add("blurry");
  document.getElementById("panel1").classList.add("blurry");
  document.getElementById("panel2").classList.add("blurry");
});
const EMAIL = document.getElementById("scrmail");
const PHONE = document.getElementById("scrphone");
function garbage(l) {
  e = "";
  for (let i = 0; i < l; i++) {
    e += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[
      Math.floor(Math.random() * 62)
    ];
  }
  return e;
}
function scrmail() {
  let e = "";
  e += garbage(12);
  e += "@";
  for (let i = 0; i < 5; i++) {
    e += "0123456789abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 36)];
  }
  e += "." + ["com", "net", "org", "edu"][Math.floor(Math.random() * 4)];
  EMAIL.innerText = e;
}
function scrphone() {
  let e = "(+84) 0";
  for (let i = 0; i < 2; i++) {
    e += "0123456789"[Math.floor(Math.random() * 10)];
  }
  e += "&nbsp;";
  for (let i = 0; i < 3; i++) {
    e += "0123456789"[Math.floor(Math.random() * 10)];
  }
  e += "&nbsp;";
  for (let i = 0; i < 4; i++) {
    e += "0123456789"[Math.floor(Math.random() * 10)];
  }
  e += "&nbsp;";
  PHONE.innerHTML = e;
}
setInterval(scrmail, 100);
setInterval(scrphone, 100);
let sc = 0;
document.getElementById("secret").addEventListener("click", () => {
  sc++;
  Type(`Af Laи́waиӣia Zµewikaгe Kowьaиλ (L.Z.K), me aʟe koww̄ifeƋ fo wakiи∂ ъezf µi∂µ ьи́ʟifλ zµewikaгz toʟ гaъoʟafoʟλ aиƋ ʟe∂и́гaʟ и́ze. Oи́ʟ wozf ьoьи́гaʟ ьʟoƋи́kf aʟe Laи́waиӣiaи Ч̂λƋʟoиkaʟъoиz. Fµeze iиkги́Ƌe:

Laи́waиӣiaи Гi∂µfeиaгkaиeи (15Kи́/г): Ч36K17 - LЧK-17
Laи́waиӣiaи Гi∂µfeиaгkeиeи (20Kи́/г): Ч36K18 - LЧK-18
Laи́waиӣiaи Ч̂eaάλиaгkeиeи (40Kи́/г): Ч72K36 - LЧK-72
Laи́waиӣiaи Ч̂eaάλиaгkaиeи (45Kи́/г): Ч74K36 - LЧK-74

Aгг̄ ot aъoάe aʟe zfʟai∂µf Kaʟъoиeиzµaiиz, иo ъʟaиzµez. Fµeʟe'z aгzo 'гom ьи́ʟifλ' άaʟiaиf mifµ wixeƋ Kaʟъoиeиzµaiиz, ъи́f oигλ ʟaи∂e tʟow ги́kaɿKи́/г fo maиӣaKи́/г.`, 36.7);
  document.getElementById("secret").innerText = "Zfoиkaгλazafoиe";
  document.getElementById("secret2").innerText = `Koи∂ʟafzeи! λoи́ ƋizkoάeʟeƋ zekʟef гaи∂и́a∂e ot Laи́waиӣia, zьokeи oигλ iи Fawги́keиӣafoи!`;
  document.getElementById("panel0").classList.add("blurry");
  document.getElementById("panel1").classList.add("blurry");
  document.getElementById("panel2").classList.add("blurry");
});
