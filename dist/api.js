var api=function(e){var t={};function a(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([function(e,t,a){var n;n=function(){var e=JSON.parse('{"$":"dollar","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ґ":"G","ґ":"g","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₹":"indian rupee","₽":"russian ruble","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}');function t(t,a){return a="string"==typeof a?{replacement:a}:a||{},t=t.split("").reduce(function(t,n){return e[n]&&(n=e[n]),t+=n=n.replace(a.remove||/[^\w\s$*_+~.()'"!\-:@]/g,"")},"").replace(/^\s+|\s+$/g,"").replace(/[-\s]+/g,a.replacement||"-").replace("#{replacement}$",""),a.lower?t.toLowerCase():t}return t.extend=function(t){for(var a in t)e[a]=t[a]},t},e.exports=n(),e.exports.default=n()},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n);let o={kent_dodds:{id:"kent_dodds",name:"Kent C. Dodds",avatarURL:"https://pbs.twimg.com/profile_images/759557613445001216/6M2E1l4q_bigger.jpg",reviews:[8],checked_out:[]},ken_wheeler:{id:"ken_wheeler",name:"Ken Wheeler",avatarURL:"https://pbs.twimg.com/profile_images/985388996011405312/O6rB4xNM_bigger.jpg",reviews:[1],checked_out:["art_of_war"]},ryan_florence:{id:"ryan_florence",name:"Ryan Florence",avatarURL:"https://pbs.twimg.com/profile_images/937382461918478336/AxXNkFRG_bigger.jpg",reviews:[],checked_out:["console_wars","american_kingpin"]},peggy_rayzis:{id:"peggy_rayzis",name:"Peggy Rayzis",avatarURL:"https://pbs.twimg.com/profile_images/783341508820893696/JphRM0xk_400x400.jpg",reviews:[2,12,13],checked_out:[]},lin_clark:{id:"lin_clark",name:"Link Clark",avatarURL:"https://pbs.twimg.com/profile_images/497876628651782146/hrCHz_ym_400x400.jpeg",reviews:[3],checked_out:[]}},r={american_kingpin:{id:"american_kingpin",title:"American Kingpin: The Epic Hunt for the Criminal Mastermind Behind the Silk Road",author:"Nick Bilton",image:"https://images-na.ssl-images-amazon.com/images/I/51thUQ3znCL._SX329_BO1,204,203,200_.jpg",checked_out:"ryan_florence",reviews:[{id:1,user:"ken_wheeler",rating:5,book:"american_kingpin"},{id:2,user:"peggy_rayzis",rating:4,book:"american_kingpin"},{id:3,user:"lin_clark",rating:5,book:"american_kingpin"}],description:"In 2011, a twenty-six-year-old libertarian programmer named Ross Ulbricht launched the ultimate free market: the Silk Road, a clandestine Web site hosted on the Dark Web where anyone could trade anything—drugs, hacking software, forged passports, counterfeit cash, poisons—free of the government’s watchful eye. It wasn’t long before the media got wind of the new Web site where anyone—not just teenagers and weed dealers but terrorists and black hat hackers—could buy and sell contraband detection-free. Spurred by a public outcry, the federal government launched an epic two-year manhunt for the site’s elusive proprietor, with no leads, no witnesses, and no clear jurisdiction. All the investigators knew was that whoever was running the site called himself the Dread Pirate Roberts. The Silk Road quickly ballooned into $1.2 billion enterprise, and Ross embraced his new role as kingpin. He enlisted a loyal crew of allies in high and low places, all as addicted to the danger and thrill of running an illegal marketplace as their customers were to the heroin they sold. Through his network he got wind of the target on his back and took drastic steps to protect himself—including ordering a hit on a former employee. As Ross made plans to disappear forever, the Feds raced against the clock to catch a man they weren’t sure even existed, searching for a needle in the haystack of the global Internet. Drawing on exclusive access to key players and two billion digital words and images Ross left behind, Vanity Fair correspondent and New York Times bestselling author Nick Bilton offers a tale filled with twists and turns, lucky breaks and unbelievable close calls. It’s a story of the boy next door’s ambition gone criminal, spurred on by the clash between the new world of libertarian-leaning, anonymous, decentralized Web advocates and the old world of government control, order, and the rule of law. Filled with unforgettable characters and capped by an astonishing climax, American Kingpin might be dismissed as too outrageous for fiction. But it’s all too real."},oliver_twist:{id:"oliver_twist",title:"Oliver Twist",author:"Charles Dickens",image:"https://images-na.ssl-images-amazon.com/images/I/51xKmBrsE%2BL._SX331_BO1,204,203,200_.jpg",checked_out:null,reviews:[{id:4,user:null,rating:5,book:"oliver_twist"},{id:13,user:"peggy_rayzis",rating:5,book:"oliver_twist"}],description:"Oliver Twist, or The Parish Boy's Progress, is the second novel by Charles Dickens and one of his most popular works. The story is of the orphan Oliver Twist, who starts his life in a workhouse and is then apprenticed with an undertaker. He escapes from there and travels to London where he meets the Artful Dodger, a member of a gang of juvenile pickpockets, which is led by the elderly criminal Fagin. Oliver Twist is notable for Dickens's unromantic portrayal of criminals and their sordid lives, as well as exposing the cruel treatment of the many orphans in London in the mid–nineteenth century. An early example of the social novel, Dickens satirises the hypocrisies of his time, including child labour, the recruitment of children as criminals, and the presence of street children. The novel features a range of colourful and unforgettable characters. Oliver Twist has been the subject of numerous adaptations, for various media, including a highly successful musical play, Oliver!, and the multiple Academy Award-winning 1968 motion picture."},console_wars:{id:"console_wars",title:"Console Wars: Sega, Nintendo, and the Battle that Defined a Generation",author:"Harris J. Blake",image:"https://images-na.ssl-images-amazon.com/images/I/51zpf17Eh1L._SX330_BO1,204,203,200_.jpg",checked_out:"ryan_florence",reviews:[{id:5,user:null,rating:4,book:"console_wars"},{id:6,user:null,rating:2,book:"console_wars"},{id:7,user:null,rating:4,book:"console_wars"},{id:8,user:"kent_dodds",rating:5,book:"console_wars"}],description:"Following the success of The Accidental Billionaires and Moneyball comes Console Wars a mesmerizing, behind-the-scenes business thriller that chronicles how Sega, a small, scrappy gaming company led by an unlikely visionary and a team of rebels, took on the juggernaut Nintendo and revolutionized the video game industry. In 1990, Nintendo had a virtual monopoly on the video game industry. Sega, on the other hand, was just a faltering arcade company with big aspirations and even bigger personalities. But that would all change with the arrival of Tom Kalinske, a man who knew nothing about videogames and everything about fighting uphill battles. His unconventional tactics, combined with the blood, sweat and bold ideas of his renegade employees, transformed Sega and eventually led to a ruthless David-and-Goliath showdown with rival Nintendo. The battle was vicious, relentless, and highly profitable, eventually sparking a global corporate war that would be fought on several fronts: from living rooms and schoolyards to boardrooms and Congress. It was a once-in-a-lifetime, no-holds-barred conflict that pitted brother against brother, kid against adult, Sonic against Mario, and the US against Japan. Based on over two hundred interviews with former Sega and Nintendo employees, Console Wars is the underdog tale of how Kalinske miraculously turned an industry punchline into a market leader. Its the story of how a humble family man, with an extraordinary imagination and a gift for turning problems into competitive advantages, inspired a team of underdogs to slay a giant and, as a result, birth a $60 billion dollar industry."},art_of_war:{id:"art_of_war",title:"The Art of War",author:"Sun Tzu",image:"https://images-na.ssl-images-amazon.com/images/I/51HmF37IInL._SX311_BO1,204,203,200_.jpg",checked_out:"ken_wheeler",reviews:[{id:9,user:null,rating:1,book:"art_of_war"},{id:10,user:null,rating:5,book:"art_of_war"},{id:11,user:null,rating:3,book:"art_of_war"},{id:12,user:"peggy_rayzis",rating:5,book:"art_of_war"}],description:"The timeless original text; required listening for anyone interested in strategy. This is a work of subtlety and paradox that shows the way to a clean and aesthetic triumph. Sun Tzu insisted that a skilled warrior observes, calculates, outwits, and outmaneuvers an adversary, and in doing so averts the destruction of battle."}};const s=["id","author","title","image","checked_out","reviews","description"];function l(e,t,a){return Math.random()*(Math.random()>e?t:a)}function d(e){return{...e,checked_out:e.checked_out?e.checked_out:[],id:(t=e.title,i()(t.split(":")[0],{replacement:"_",lower:!0}))};var t}function c(e,t){o={...o,[e.id]:{...e,checked_out:e.checked_out.filter(e=>e!==t).concat(t)}}}function u(e){const t=Object.keys(e),a=s.filter(e=>t.indexOf(e)<0);return{valid:0===a.length,missingKeys:a}}function h(e){return new Promise((n,i)=>{let{valid:s,missingKeys:h}=u(e);if(!s)return i({error:`Missing key${h.length>1?"s":""} \`${h.join("`, `")}\``});const g=d(e),m=r[g.id];if(!m)return i({error:"Book could not be found"});let f=o[m.checked_out],p=o[g.checked_out];if(g.checked_out.length&&!p)return i({error:`No user in database found for checked out book user \`${g.checked_out}\``});setTimeout(()=>{r={...r,[g.id]:g},f&&f.id!==g.checked_out&&(t=f,a=m.id,o={...o,[t.id]:{...t,checked_out:t.checked_out.filter(e=>e!==a)}}),p&&c(p,m.id),n(g)},l(.3,100,500))});var t,a}function g(e){return Object.keys(e).map(t=>({...e[t]}))}const m={getUsers:async function(){return new Promise((e,t)=>{setTimeout(()=>e({...o}),l(.2,1e3,2e3))}).then(e=>g(e))},getBooks:function(){return new Promise((e,t)=>{setTimeout(()=>e({...r}),l(.2,1e3,2e3))}).then(e=>g(e))},createBook:function(e){return function(e){return new Promise((t,a)=>{let{valid:n,missingKeys:i}=u(e);if(!n)return a({error:`Missing key${i.length>1?"s":""} \`${i.join("`, `")}\``});const s=d(e);if(r[s.id])return a({error:"Book with that title already exists"});let h=o[s.checked_out];if(s.checked_out.length&&!h)return a({error:`No user in database found for checked out book user \`${s.checked_out}\``});setTimeout(()=>{r={...r,[s.id]:s},h&&c(h,s.id),t(s)},l(.3,500,1e3))})}(e).then(e=>e)},updateBook:function(e){return h(e).then(e=>e)}};t.default=m}]);