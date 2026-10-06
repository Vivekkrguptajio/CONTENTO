/* Personal study notes: Pomera business model, in Hinglish. Not linked from anywhere on the site. */

export type Block = string | { list: string[] } | { example: string[] };
export type QA = { q: string; a: Block[]; tag?: "site" | "idea" | "todo" };
export type Topic = { id: string; title: string; blurb: string; qs: QA[] };

export const TAGS = {
  site: "Site pe promise",
  idea: "Mera suggestion",
  todo: "Abhi decide karna hai",
};

export const TOPICS: Topic[] = [
  {
    id: "basics",
    title: "Pomera kya hai",
    blurb: "Ek line me samajh lo, phir aage ke topics aasan lagenge.",
    qs: [
      {
        q: "Pomera ko ek line me kaise bolu?",
        tag: "site",
        a: [
          "Pomera ek alternative ad platform hai. Brand ek budget deta hai, hum 1,000 verified views ka rate pehle se fix kar dete hain, aur independent publishers brand ki video ko Instagram Reels aur YouTube Shorts pe apne accounts se post karte hain. Brand ko sirf verified views ka bill aata hai.",
          "Tagline: “Know your number before you spend.”",
        ],
      },
      {
        q: "Meta/Google ads se kya alag hai?",
        tag: "site",
        a: [
          "Meta aur Google me auction hota hai, to views ka daam demand ke saath badalta hai (Diwali jaise season me jump). Pomera me rate campaign shuru hone se pehle fix hota hai.",
          "Post publisher ke apne account se jaata hai, paid partnership label ke saath (ASCI ke hisaab se), to wo normal post jaisa lagta hai, ad slot jaisa nahi.",
        ],
      },
      {
        q: "Hamare 3 customers kaun hain?",
        a: [
          {
            list: [
              "Brands: jo paise dete hain (kamai ka main source).",
              "Publishers: jo videos post karte hain aur payout lete hain (supply side).",
              "Agencies: jo apne brand clients ko laate hain (channel partner).",
            ],
          },
          "Marketplace jaisa hai: ek taraf paisa dene wale, dusri taraf kaam karne wale. Hum beech me trust aur verification bechte hain.",
        ],
      },
    ],
  },
  {
    id: "earn",
    title: "Hum paisa kaise kamate hain",
    blurb: "Revenue ka source, margin ka logic, aur free pilot ka kharcha.",
    qs: [
      {
        q: "Kamai ka main formula kya hai?",
        tag: "idea",
        a: [
          "Brand jo fixed rate (per 1,000 verified views) pay karta hai, usme se publisher ko payout dete hain, aur verification aur support ka kharcha nikalte hain. Jo bachta hai wahi Pomera ki kamai hai.",
          {
            example: [
              "Sirf samajhne ke liye. Ye asli numbers nahi hain.",
              "Maan lo brand ka rate = ₹50 per 1,000 verified views.",
              "Maan lo publisher payout = ₹30 per 1,000 verified views.",
              "Bacha = ₹20 per 1,000. Isme se tools, verification ka time, support aur payment charges nikalo, baaki margin.",
              "10,00,000 verified views pe: brand bill ₹50,000, publisher payout ₹30,000, gross ₹20,000.",
            ],
          },
          "Publisher ka payout har campaign ke hisaab se alag set hota hai (FAQ me yahi likha hai). Asli margin % abhi tay karna baaki hai.",
        ],
      },
      {
        q: "Brand ko kya dikhta hai aur kya nahi?",
        tag: "site",
        a: [
          "Brand ko ek hi rate dikhta hai, jo sab kuch cover karta hai: publisher payout, verification, reporting, support. Koi extra fee nahi. Publisher ko kitna mila, ye brand ko batana zaroori nahi.",
        ],
      },
      {
        q: "Aur kaun se revenue source ban sakte hain?",
        tag: "idea",
        a: [
          {
            list: [
              "Abhi ka main source: brand campaigns (pilot ke baad minimum ₹10,000).",
              "Repeat campaigns: ek brand baar baar chalaye to naya customer dhoondhne ka kharcha nahi lagta, margin badhta hai.",
              "Agencies: ek agency kai brands laati hai. Agency ko commission dena hai ya nahi, ye abhi decide nahi hua.",
              "Baad me (roadmap): self-serve dashboard, jisse ops ka time kam hoga.",
            ],
          },
          "Bahut saare sources shuru se mat jodo. Pehle ek cheez saaf karo: ek campaign pe margin kitna bachta hai.",
        ],
      },
      {
        q: "Free pilot se hume kya milta hai? Kharcha kaun uthata hai?",
        tag: "site",
        a: [
          "Pehla campaign founding brands ke liye free hai. Hum chalate hain, brand report dekhta hai (har post ka link), phir decide karta hai. Uske baad minimum ₹10,000 ka campaign.",
          "Kharcha Pomera ka hai: publisher payout + hamara time. Isliye pilot ka size chhota aur fixed rakhna chahiye, warna loss badh jaata hai.",
          "Pilot ka asli faayda: case study, trust, aur pehla repeat customer. Site pe abhi likha hai ki koi campaign nahi chala, to koi fake number mat daalna.",
        ],
      },
      {
        q: "Brand se paisa kab lena hai: pehle ya baad me?",
        tag: "todo",
        a: [
          "Site pe likha hai ki shortfall ka bacha budget brand ke “balance” me wapas aata hai. Iska matlab model prepaid balance jaisa hai: brand pehle budget jama karta hai, hum use verified views ke hisaab se kaatte hain.",
          "Mera suggestion: pehle (advance) paisa lo, kyunki publishers ko hume weekly pay karna hai. Agar brand baad me pay karega, to cash flow ka bojh hum pe aa jaayega (aage “Payment” topic dekho).",
        ],
      },
    ],
  },
  {
    id: "payment",
    title: "Payment ki problems aur solution",
    blurb: "Paisa lena, paisa dena, aur beech ka gap.",
    qs: [
      {
        q: "Sabse bada payment risk kya hai?",
        tag: "idea",
        a: [
          "Publishers ko weekly UPI payout dena hai, lekin brand ka paisa aane me der ho sakti hai. Agar hum pehle publisher ko pay kar dein aur brand na de, to loss hamara hai.",
          {
            list: [
              "Solution: brand ka budget campaign shuru hone se pehle collect karo (prepaid balance).",
              "Publisher payout sirf verified views pe do, taaki jo hum brand ko bill kar sakte hain wahi publisher ko dein.",
              "Chhote campaigns se shuru karo jab tak process stable na ho.",
            ],
          },
        ],
      },
      {
        q: "Views day 7 ke baad count hote hain, to publisher ko weekly payout kaise?",
        tag: "idea",
        a: [
          "Site pe promise hai: views post live hone ke 7 din baad count honge, aur publishers ko weekly UPI payout milta hai. Dono saath chalane me gap aata hai.",
          {
            list: [
              "Option A: payout sirf us post ka jo 7 din pura kar chuka. Har hafte un posts ka payout jo us hafte 7 din ke hue.",
              "Option B: chhota hissa pehle (advance), baaki day 7 ke baad. Isme risk badhta hai.",
            ],
          },
          "Option A saaf aur safe hai. Publishers ko ye shuru me hi samjhana hoga.",
        ],
      },
      {
        q: "Agar campaign target views tak nahi pahunchi to?",
        tag: "site",
        a: [
          "Brand ko shortfall ka bill nahi jaata. Example: budget 10,00,000 verified views tak ka hai aur 8,00,000 verified hue, to 8,00,000 ka bill, baaki budget balance me wapas.",
          "Hum price aur billing ki guarantee dete hain, virality ki nahi. Ye line hamesha yaad rakhna.",
        ],
      },
      {
        q: "Refund ya dispute aaya to?",
        tag: "todo",
        a: [
          "Site pe sirf ye likha hai: post off-brief ho to brand 48 ghante me flag kar sakta hai, flagged post review tak bill nahi hota.",
          {
            list: [
              "Refund policy likhit me honi chahiye: balance wapas kab, kitne din me, kis account me.",
              "Dispute ka ek proof hona chahiye: tracking link data + platform insights + screenshots.",
              "Ye sab Terms me aana chahiye. Abhi brands-terms page me check karo kya likha hai.",
            ],
          },
        ],
      },
      {
        q: "GST, TDS aur invoices ka kya?",
        tag: "todo",
        a: [
          "Site pe “Direct INR billing, GST invoicing” likha hai, to GST registration aur invoice process ready hona chahiye.",
          "Publisher payouts pe TDS ya GST lagega ya nahi, ye publisher ke status pe depend karta hai (individual ya business). Isme main andaza nahi lagaunga: CA se confirm karo aur likhit me rakho.",
          "Company ka legal naam bhi pakka karna hai. Footer me abhi “Pomera Technologies Pvt. Ltd.” likha hai, wo confirm hona baaki hai.",
        ],
      },
      {
        q: "Payment collect karne ka tareeka kya ho?",
        tag: "todo",
        a: [
          "Abhi form sirf lead leta hai, payment nahi. Pilot free hai to shuru me payment ki zaroorat nahi.",
          "Paid campaign ke liye: bank transfer, UPI ya payment gateway (jaise Razorpay) me se chuno. Shuru me bank transfer + invoice kaafi hai, gateway baad me.",
        ],
      },
    ],
  },
  {
    id: "views",
    title: "Views ki problems aur verification",
    blurb: "Fake views, kam views, aur “verified” ka matlab.",
    qs: [
      {
        q: "“Verified view” ka matlab kya hai?",
        tag: "site",
        a: [
          "Har post ka apna tracking link hota hai. Hum platform ka data (insights) kheench ke engagement ratio, views kitni tezi se aaye, aur account ki history dekhte hain. Saath me kuch posts haath se spot-check hote hain.",
          "Views post live hone ke 7 din baad count hote hain. Jo views check me paas nahi hote, unka bill nahi banta.",
        ],
      },
      {
        q: "Fake ya bot views ka risk kaise handle karein?",
        tag: "idea",
        a: [
          {
            list: [
              "Sirf wahi views bill hote hain jo verify hue. Fake views ka nuksan brand ko nahi jaata.",
              "Publisher ko pata hona chahiye ki suspicious views ka payout nahi milega. Isse wo khud bot views kharidne se bachega.",
              "Publisher onboarding me account ki history dekho (purane views, followers ki growth, comments ki quality).",
              "Rules likhit me rakho: kya count hoga, kya nahi.",
            ],
          },
        ],
      },
      {
        q: "Platform ka data humein kaise milta hai? Koi limit?",
        tag: "todo",
        a: [
          "Ye sabse practical sawal hai. Publisher ke account ke insights tak access kaise milega: API se, ya publisher screenshot/export bhejega?",
          {
            list: [
              "Tracking link clicks batata hai, views nahi. Views ka asli number platform se hi aata hai.",
              "Instagram ke insights ke liye account ki permission chahiye (publisher ko connect karna padega ya screenshot dena padega).",
              "Screenshot me hera-pheri ho sakti hai, isliye spot-check zaroori hai.",
            ],
          },
          "Site pe promise hai ki hum platform insights pull karte hain. Ye technically kaise hoga, ye pakka karo. Jab tak pakka nahi, pilot me manual process hi sach hai.",
        ],
      },
      {
        q: "Day 7 ke baad views gir gaye ya badh gaye to?",
        tag: "idea",
        a: [
          "Billing ke liye ek fixed din (day 7) ka number lena sahi hai, taaki dono taraf clarity rahe. Day 7 ke baad ke extra views ka bill nahi, ye brand ke liye bonus hain.",
          "Agar platform khud views hata de (spam filter), to wo aam taur pe pehle hota hai aur bill me nahi aata. Ye pilot me dekh ke confirm karna.",
        ],
      },
      {
        q: "Brand bole “views aaye par sales nahi aayi” to?",
        tag: "site",
        a: [
          "Hum views ke rate aur verified billing ki guarantee dete hain, sales ya virality ki nahi. Ye baat shuru me hi saaf bolo.",
          "Pilot report me har post ka link aur verified views dikhana kaafi hai. Brand apna conversion alag track karega.",
        ],
      },
    ],
  },
  {
    id: "ground",
    title: "On-ground reality",
    blurb: "Jo kaam me asli me hota hai: publishers, content, delays.",
    qs: [
      {
        q: "Publishers late ya post na kare to?",
        tag: "idea",
        a: [
          {
            list: [
              "Har campaign me post ki deadline likhit me ho.",
              "Backup publishers hamesha ready rakho (jitne chahiye usse thode zyada).",
              "Bina post, bina payout. Brand ka paisa tab tak locked rehta hai jab tak post live na ho.",
            ],
          },
        ],
      },
      {
        q: "Publisher brief follow na kare (off-brief) to?",
        tag: "site",
        a: [
          "Pomera har post check karta hai. Brand 48 ghante me flag bhi kar sakta hai. Flagged post ka bill review tak ruka rehta hai, aur hum publisher se fix ya delete karwate hain.",
          "Brand ko brief me claims aur do/don’t saaf dene hote hain. Health ya beauty jaisi categories me galat claim ka risk hai, isliye wahan extra dhyan.",
        ],
      },
      {
        q: "Brand content nahi de paaya to?",
        tag: "site",
        a: [
          "Brand ko khud videos banane ki zaroorat nahi. Jo hai wahi bhejo: long-form video, raw footage ya product shots, aur ek chhota brief. Publisher short vertical video me edit karta hai.",
          "Reality: kai brands ke paas kuch bhi usable nahi hota. Aise me pilot se pehle ek chhota content checklist do (kam se kam product shots).",
        ],
      },
      {
        q: "Instagram/YouTube account ban ya takedown ho jaaye to?",
        tag: "idea",
        a: [
          {
            list: [
              "Copyright music se bachna: publisher ko royalty-free audio ya platform ka licensed audio use karne ko bolo.",
              "Agar post hat jaaye to us post ka bill nahi, aur publisher se replacement post lo.",
              "Ek hi publisher pe zyada depend mat karo.",
            ],
          },
        ],
      },
      {
        q: "ASCI aur paid label ka kya?",
        tag: "site",
        a: [
          "Har post paid partnership label ke saath jaata hai, jaisa ASCI maangta hai. Ye publisher ko brief me hi bata do aur verification me check karo ki label laga hai ya nahi.",
        ],
      },
      {
        q: "Publisher kaise milte hain? Kitne hain?",
        tag: "site",
        a: [
          "Publishers ClipperCircle by Pomera ke through join karte hain. Wo independent hain aur apne accounts se post karte hain.",
          "Reality check: site pe publishers ki koi ginti nahi likhi hai. Number tabhi dena jab sach me ho.",
        ],
      },
    ],
  },
  {
    id: "publishers",
    title: "Publisher side ki problems",
    blurb: "Publisher khush nahi, to supply nahi.",
    qs: [
      {
        q: "Publisher ko payout kab aur kaise milta hai?",
        tag: "site",
        a: [
          "Weekly, UPI se. Payout kitna hoga wo har campaign ke liye alag set hota hai. Isliye publisher ko campaign shuru hone se pehle hi apna payout pata hona chahiye.",
        ],
      },
      {
        q: "Publisher kab chhod ke jaa sakta hai?",
        tag: "idea",
        a: [
          {
            list: [
              "Payout late ho.",
              "Payout ka calculation samajh na aaye.",
              "Brief bahut bhaari ho ya baar baar badle.",
              "Bina wajah bataye cut lag jaye.",
            ],
          },
          "Solution: payout ki date fix rakho, calculation ek line me dikhao (verified views x rate), aur jab cut ho to wajah batao.",
        ],
      },
      {
        q: "Jo views fail hue unka kya?",
        tag: "idea",
        a: [
          "Unka payout nahi. Lekin publisher ko dikhna chahiye ki kaunse views fail hue aur kyun, warna trust toot jaata hai.",
        ],
      },
    ],
  },
  {
    id: "risks",
    title: "Bade risks (seedha sach)",
    blurb: "Jo kuch galat ja sakta hai, aur kaise bachna hai.",
    qs: [
      {
        q: "Sabse bade 5 risks kaun se hain?",
        tag: "idea",
        a: [
          {
            list: [
              "Cash flow: publisher ko pehle pay, brand se baad me.",
              "Verification: promise bada hai, data access ka tareeka abhi pakka nahi.",
              "Margin: rate bahut kam hai to kuch nahi bachega. Pehle ek campaign ka asli kharcha nikalo.",
              "Supply: publishers kam ya late.",
              "Trust: pehle customers ko fake number ya jhoothe claim mil gaye to wapas nahi aayenge.",
            ],
          },
        ],
      },
      {
        q: "Hum kya promise NAHI karte?",
        tag: "site",
        a: [
          {
            list: [
              "Virality ya sales ki guarantee.",
              "Koi purani case study (abhi koi campaign nahi chala).",
              "Koi invented number (founding brands ki ginti, publishers ki ginti).",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "todo",
    title: "Abhi pakka karne ki list",
    blurb: "Business chalane se pehle ye cheezein saaf honi chahiye.",
    qs: [
      {
        q: "Checklist: kya decide karna baaki hai?",
        tag: "todo",
        a: [
          {
            list: [
              "Per-1,000-views rate: brand ka rate aur publisher ka payout, dono. Margin %.",
              "Payout rule: day 7 ke baad weekly, ya kuch advance.",
              "Brand se payment: advance balance ya baad me. Tareeka (bank, UPI, gateway).",
              "Refund aur dispute policy likhit me.",
              "GST, TDS, invoice: CA se confirm.",
              "Company ka legal naam.",
              "Platform data access ka tareeka (API ya screenshot).",
              "Agency commission dena hai ya nahi.",
              "Pilot ka size aur kitne brands (jab tak number sach na ho, site pe mat likhna).",
              "Real WhatsApp number, email, form endpoint (site pe abhi placeholder hain).",
            ],
          },
        ],
      },
    ],
  },
];
