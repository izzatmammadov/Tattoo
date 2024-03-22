import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      name: "Muhammed Rzayev",
      nav1: "HOME",
      nav2: "ABOUT US",
      nav3: "CONTACT",
      nav4: "AFTERCARE",
      nav5: "FAQ",
      nav6: "ARTIST",
      footer: "© 2024 All right reserved",
      home1: "TATTOSHOP - BAKU, AZERBAIJAN!",
      home2:
        "We are located in Baku, Azerbaijan. We are open 7 days a week from 12PM – 1AM. You can make an appointment through our form below or by calling",
      home3: "The shop is owned by Muhammed Rzayev.",
      home4:
        "Maga is a highly acclaimed tattoo artist, and he is one of Baku's very own. The entire team is dedicated to always growing with the tattoo industry, embracing new techniques, and offering both full color and grey colors tattoos.",
      home5:
        "Our shop is an extension of who we are. Our work ethic and integrity have been ingrained here. We strive to create a welcoming atmosphere for ourselves as well as our clients. Each staff member has their own private station to ensure comfort and privacy. We keep our shop immaculate and take pride in maintaining a safe and sanitary environment. Our goal is to always have all clients walk out with a piece of art on their body that they will love for life.",
      home6: "MEET THE ARTIST",
      home7:
        "We specialize in many different tattoo genres with each artist staying true to their expertise. We are always looking to break boundaries to provide you with a truly unique piece. We prefer working with our clients and collaborate on new ideas, or adding to existing ones, to achieve a finished product that leaves everyone satisfied. Our greatest reward is to leave you feeling proud with your new work.",
      home8: "Click the picture for the artist's portfolio.",
      about1:
        "Welcome to our tattoo studio, where art meets skin and stories are etched for a lifetime. Our tattoo business is more than just ink; it's a sanctuary for self-expression and creativity. With a team of skilled tattoo artists, each with their unique style and expertise, we specialize in turning visions into stunning realities. At our studio, client satisfaction is paramount. We prioritize creating a comfortable and welcoming environment, ensuring every client feels at ease throughout their tattoo journey. From intricate designs to minimalist masterpieces, our artists are dedicated to bringing your ideas to life with precision and passion.",
      about2: "WE HAVE A DEEP UNDERSTANDING OF ART",
      about3:
        "In the tattoo business, being a good tattoo artist calls for a lot of skill and commitment to giving utterly the best kind of art which can rival others. The fact of the matter is, not everyone can become exceptional tattoo artists. The ones that have already made it in the business, such names as Carolina Mansur, Rob Goodkind, and Tim Derose, have that something that makes them each tick and become the best that they are. So don’t let anyone fool you that desire alone is all that you need to get in the game. That said, what makes us stand out from the rest?",
      about4:
        "You especially need to have a sound and creative mind and couple this with putting down your sketches on paper trying to make it as unique and appealing as possible. Some artists go to such extents of sculpting out their ideas into physical 3D models to portray a clear design. If you take up the challenge of learning about art, you can do frequent research from different books or take art classes to start you off. In good time, you just might be able to ink skin perfectly just as we do.",
      about5:
        "At our tattoo shop, creativity knows no bounds. From bold traditional designs to intricate realism, our team of talented artists brings a diverse range of styles and expertise to the table. We believe in honoring each client's vision while infusing our own artistic flair, resulting in tattoos that are not just ink on skin but living works of art. Walking into our tattoo shop feels like entering a sanctuary of self-expression. Warmth, acceptance, and camaraderie permeate the air, creating a space where clients can feel comfortable and empowered to explore their tattoo ideas freely. Whether it's your first tattoo or your fiftieth, our friendly staff is here to guide you through every step of the process with patience and professionalism.",
      contact1: "GET IN TOUCH",
      contact2:
        "We can be contacted by telephone, email or in writing, please find the relevant information below. Alternatively you can send us an enquiry via the online enquiry form.",
      contact3: "Your Fullname",
      contact4: "Your Email",
      contact5: "Phone",
      contact6: "Message",
      contact7: "SEND MESSAGE",
      contact8: "FIND US",
      contact9: "View larger map",
      contact10: "ADRESS",
      contact11: "MAIL",
      faq1: "Does getting a tattoo hurt?",
      faq2: "The pain level of getting a tattoo varies depending on factors such as the location on the body, your pain tolerance, and the size and intricacy of the design. Generally, tattoos involve some level of discomfort, often described as a sensation similar to scratching or a sunburn. However, many people find the pain manageable and worth it for the end result.",
      faq3: "How do I choose the right tattoo design?",
      faq4: "Selecting a tattoo design is a personal decision. Consider factors such as your interests, values, cultural background, and aesthetics. Take your time to research different styles, symbols, and artists to find inspiration and ensure the design reflects your individuality and resonates with you for years to come.",
      faq5: "What should I consider before getting a tattoo?",
      faq6: "Before getting a tattoo, it's important to think about several factors. These include the permanence of tattoos, potential social or professional implications, proper aftercare, and the reputation and expertise of the tattoo artist. Additionally, consider any allergies or medical conditions that might affect your ability to get a tattoo safely.",
      faq7: "How do I care for my new tattoo?",
      faq8: "Proper aftercare is crucial for the healing and longevity of your tattoo. Your tattoo artist will provide specific instructions, but general guidelines include keeping the tattoo clean and moisturized, avoiding exposing it to direct sunlight, refraining from picking at scabs, and avoiding swimming or soaking the tattoo until it's fully healed, which typically takes a few weeks. Following these instructions will help ensure your tattoo heals properly and looks its best for years to come.",
      aftercare1:
        "The aftercare of your tattoo is just as important, if not more important, than getting the actual tattoo. Please keep in mind that tattoos are not permanent until they have fully healed. This means that if a tattoo doesn’t heal properly, it may not turn out as you wanted it to. This is why we also give our customers the proper aftercare steps in order for the tattoo to come out perfect.",
      aftercare2:
        "There are a few common misconceptions and mistakes that are often heard. The first is not washing the area of a tattoo for an extended period of time while using lotion over the tattoo. Lotions do work well to care for tattoos, but the problem is that it suffocates the area. The tattoo needs to air out in order to heal. If a large sum of lotion is often used over the tattoo, it can cause an infection. If you use lotion, be sure to only use a small amount, and rinse and reapply the lotion rather than leaving it on for a long time.",
      aftercare3:
        "When washing the area, make sure you don’t submerge the tattoo under water. This means no diving into pools either! When you clean the area, use a damp clean cloth, and pat it around the area. Be sure to dry it properly to avoid infections. It’s also a good idea to use fragrance free lotions and soaps as it may irritate the skin.",
      aftercare4:
        "Another thing you want to avoid is direct sunlight after a fresh tattoo. If you’re planning on getting a tattoo and you’re leaving off to Cancun the next day or it’s a hot summer day out, keep that tattoo covered. Don’t go off to the beach and let the sun beam on it. The sun will cause the tattoo to burn, scab, heal poorly, and also it will hurt.",
      aftercare5:
        "If you have any questions about the aftercare of the tattoo, it’s essential that you contact us. We want to make sure that you have the best looking tattoo possible. As tattoo artists, we can give you the best looking tattoo possible, but it is your responsibility to take care of the tattoo.",
      portfolio1:
        "He is a talented tattoo artist who started honing his craft at a remarkably young age. At just 26 years old, he already boasts eight years of experience in the tattoo industry. His dedication and passion for his art form have undoubtedly contributed to his success and proficiency as a tattoo artist. With such a substantial amount of experience under his belt, Muhammed likely has developed a unique style and skill set that sets him apart in the tattooing community.",
      portfolio2:
        "Specialization in realistic tattoo works speaks volumes about his skill and artistic vision. Creating realistic tattoos requires a keen eye for detail, mastery of shading and color, and a deep understanding of human anatomy. By focusing on realism, Muhammed demonstrates his ability to capture the intricacies of his subjects and bring them to life on his clients' skin. This dedication to realism not only showcases his technical proficiency but also his commitment to delivering tattoos that resonate with his clients on a deeply personal level.",
      portfolio3: "Back",
      portfolio4: "PORTFOLIO",
      portfolio5:
        "Here's just a small portion displayed here, for more and for your own ideas, head over to Instagram or use the contact links.",
    },
  },
  az: {
    translation: {
      name: "Məhəmməd Rzayev",
      nav1: "ANA SƏHİFƏ",
      nav2: "HAQQIMIZDA",
      nav3: "ƏLAQƏ",
      nav4: "QULLUQ",
      nav5: "SUALLAR",
      nav6: "ARTİST",
      footer: "© 2024 Bütün huquqlar qorunur",
      home1: "TATTOSHOP - BAKI, AZƏRBAYCAN!",
      home2:
        "Biz Bakıda yerləşirik, Azərbaycanda. Həftənin 7 günü 12:00 - 01:00 saatları arasında açığıq. Aşağıdakı formumuz vasitəsilə və ya zəng edərək randevu ala bilərsiniz",
      home3: "Mağazanın sahibi Məhəmməd Rzayevdir.",
      home4:
        "Maga çox təriflənmiş bir dövmə sənətkarıdır və o, Bakının özünəməxsuslarından biridir. Bütün komanda həmişə dövmə sənayesi ilə birgə inkişaf etməyə, yeni texnikaları qəbul etməyə və rəngli və də rəngsiz dövmələr təklif etməyə həsr olunmuşdur.",
      home5:
        "Bizim mağazamız biz kim olduğumuzun bir uzantısıdır. İş etikamız və etikamız buraya əlavə olunub. Özümüzə və müştərilərimizə qarşı qəbul edilən bir atmosfer yaratmağa çalışırıq. Hər işçinin rahatlığı və gizliliyini təmin etmək üçün öz şəxsi stansiyaları var. Mağazamızı mükəmməl saxlayır və təmiz və səhhətli bir mühit qorumaqda fəxr edirik. Məqsədimiz həmişə bütün müştərilərin ömür boyu sevəcəyi bir əsəri dərməklə bitməkdir.",
      home6: "Sənətkarla Tanış",
      home7:
        "Bir çox fərqli dövmə janrlarına öz sənətkarlıqlarına sadiq qalmaqla özünü spesiallaşdırırıq. Həmişə sizi həqiqətən unikal bir əsərlə təmin etmək üçün sərhədləri pozmağa çalışırıq. Müştərilərimizlə işləməyi və yeni ideyalar əlavə etməyi, ya da mövcud olanlara əlavə etməyi tərəfdaşlıq etməyi üstünlük veririk və hər kəsi məmnun edən bir nəticə əldə etmək üçün çalışırıq. Ən böyük mükafatımız sizi yeni işinizlə qürurlu hiss etdirməkdir.",
      home8: "Sənətkarın portfoliyası üçün şəkli klikləyin.",
      about1:
        "İncəsənətin dəri ilə qovuşduğu və hekayələrin bir ömür boyu həkk olunduğu tatu studiyamıza xoş gəlmisiniz. Tatu biznesimiz sadəcə mürəkkəbdən daha çox şeydir; özünü ifadə etmək və yaradıcılıq üçün ziyarətgahdır. Hər biri özünəməxsus üsluba və təcrübəyə malik olan təcrübəli döymə sənətçiləri komandası ilə biz görüntüləri heyrətamiz reallıqlara çevirməkdə ixtisaslaşırıq. Studiyamızda müştəri məmnuniyyəti hər şeydən önəmlidir. Biz rahat və qonaqpərvər bir mühit yaratmağa üstünlük veririk, hər bir müştərinin döymə səyahəti boyunca özünü rahat hiss etməsini təmin edirik. Mürəkkəb dizaynlardan minimalist şedevrlərə qədər, rəssamlarımız ideyalarınızı dəqiqlik və ehtirasla həyata keçirməyə çalışırlar.",
      about2: "BİZİM SƏNƏTƏ DƏRİN QATĞIMIZ VAR",
      about3:
        "Dövmə işində, yaxşı bir dövmə sənətkarı olmaq çoxlu bacarıq və ən yaxşı növ sənəti təqdim etməyə əzələsində kömək edir. Başqa insanları rakib edə bilən. Məsələn, hər kəs istisna olaraq yüksək səviyyəli dövmə sənətkarı ola bilməz. Hal-hazırda bu işdə olanlar, Carolina Mansur, Rob Goodkind və Tim Derose kimi adlar belə, özünəməxsus olan bir şeyə malikdirlər ki, hər birini hərəkət etdirir və ən yaxşı hala gəlmələrinə səbəb olur. Buna görə də, tələb yalnız oyunun içərisinə girmək üçün lazım olan tek şeydir deməsinlər. Bu deyil, bizi digərlərindən fərqli edən şey nədir?",
      about4:
        "Xüsusilə səs və yaradıcı zihniyyətə malik olmaq və bunu sənətləri kəğızda şəkilləndirərək mümkün qədər unikal və cazibəli etmək lazımdır. Bir çox sənətkarlar, dizaynı aydın bir dizayn göstərmək üçün fikirlərini fiziki 3D modellərə toxumaq üçün belə əlavələrə gedirlər. Sənət haqqında öyrənməyə dəvət qəbul edərsinizsə, fərqli kitablar vasitəsilə müəyyən araşdırmalar apara bilərsiniz və ya sənət dərsinə daxil ola bilərsiniz. Yaxşı vaxtda, belə bir şeyi hələ də bizim kimi mükəmməl bir şəkildə əsməyə qadag olun.",
      about5:
        "Bizim dövmə mağazamızda yaradıcılığın həddi-bərakmaması. Qüdrətli sənətkarlarımızın qrupu qəhrəmanlıq stili dizaynlardan incə realizmə qədər müxtəlif xüsusiyyətlər və bacarıqlar getirir. Hər bir müştəri vizyonunu hörmətlə qarşılamamızı təmin edir, əlavə etmək, öz sənəti iffətləndirmək və nəticədə dövmələr etmək deyil, həyatda olan sənətlərin nəticəsidir. Dövmə mağazamıza girmək, öz ifadə məkanına girən kimi hiss edir. Istilik, qəbul və yoldaşlıq hava hiss edir, müştərilərin öz dövmə fikirlərini azadlıqla araşdırmağa və gücləndirməyə imkan verən bir məkan yaradır. İlk dövməniz olub olmaması, əziz işçilərimiz sizi prosesin hər addımında sabır və professionalism ilə rəhbərlik edir.",
      contact1: "ƏLAQƏ QURUN",
      contact2:
        "Bizə telefon, e-poçt və ya yazı ilə əlaqə saxlaya bilərsiniz, əlaqə məlumatlarını aşağıda tapa bilərsiniz. Alternativ olaraq, onlayn sorğu formunu istifadə edərək bizə sorğu göndərə bilərsiniz.",
      contact3: "Adınız və soyadınız",
      contact4: "E-poçtunuz",
      contact5: "Telefon",
      contact6: "Mesaj",
      contact7: "MESAJ GÖNDƏR",
      contact8: "BİZİ TAPIN",
      contact9: "Böyük xəritəni gör",
      contact10: "Adres",
      contact11: "E-poçtumuz",
      faq1: "Dövmə zamanı ağrılıdır?",
      faq2: "Dövmə etmək acının səviyyəsi vücudunuzun yerinə, ağrıya olan səbrinizə və dizaynın ölçüsünə və təfərrüatına kimi faktorlara bağlı olaraq dəyişir. Ümumiyyətlə, dövmələr bir neçə dərəcədə rahatsızlıq əhatə edir, çoxu adətən çizikləmə və ya güneş yanığı kimi bir his kimi təsvir olunur. Lakin, bir çox insan ağrını idarə etmək və nəticə üçün ona dəyər kimi tapır.",
      faq3: "Doğru dövmə dizaynını necə SEÇMƏLİYƏM?",
      faq4: "Dövmə dizaynını seçmək şəxsi bir qərardır. İlgiləndiyiniz məsələlər, dəyərləriniz, mədəni arxanız və estetikası kimi faktorlar nəzərə alın. Fərqli stillər, simvollar və sənətkarlar araşdırmaq və ilham tapmaq üçün vaxtınızı ayırın və dizaynın sizin fərdiyyətinizi yansıtdığını və illər boyu sizinlə birlikdə sizi süründürdüyünü təmin edin.",
      faq5: "Dövmə etməzdən əvvəl NƏLƏRİ nəzərə almalıyam?",
      faq6: "Dövmə etməzdən əvvəl bir sıra faktorları nəzərə almalısınız. Bunlar arasında, dövmələrin daimi olması, potensial sosial və ya professional nəticələr, düzgün nəzarət, və dövmə sənətkarının rəyi və bilikləri var. Əlavə olaraq, dövməni təhlükəsiz şəkildə almağınızı təsir edə biləcək hər hansı alerji və ya tibbi vəziyyətləri nəzərə alın.",
      faq7: "Dövmədən sonra nə ETMƏLİYƏM?",
      faq8: "Doğru nəzarət, dövmənin sağalma və uzun ömürlülüyü üçün vacibdir. Dövmə sənətkarı xüsusi təlimatlar verəcək, lakin ümumi təlimatlar dövməni təmiz və nəmli saxlamağı, doğrudan günəş işığına təhvil verməməyi, siviləri çıxarmaqdan çəkinməyi və dövmənin tamamilə sağalanana qədər bir neçə həftə müddətində yüzməməyi və ya ıslandığından çəkinməməyi əhatə edir. Bu təlimatları izləmək dövmənin düzgün şəkildə sağalanmasına və illərlə başınızda gözəl görünməsinə kömək edəcəkdir.",
      aftercare1:
        "Dövmənizin baxımı, əslində dövməni etməkdən daha vacibdir, hətta daha vacibdir. Zəhmət olmasa diqqət edin ki, dövmələr tamamilə sağalana qədər daimi deyil. Bu deməkdir ki, bir dövmə düzgün şəkildə sağalmazsa, sizin istədiyiniz kimi çıxmaya bilər. Bu, bizim müştərilərimizə dövmənin mükəmməl şəkildə nəticələnməsi üçün lazım olan uyğun baxım addımlarını da verməyimizin səbəbidir.",
      aftercare2:
        "Əsasında eşitdiyimiz bir neçə yayğın yanlış anlayış və səhvlər var. Birincisi, bir dövmə ərazisini uzun müddət yumaq və dövmənin üzərinə losyon sürməməkdir. Losyonlar dövmələrin baxımı üçün yaxşı işləyirlər, amma məsələ, ətrağı tıxanmasıdır. Dövmənin sağalanması üçün havaya ehtiyacı var. Əgər dövmə üzərinə çoxlu miqdarlarda losyon istifadə olunarsa, infeksiyaya səbəb ola bilər. Losyon istifadə edirsinizsə, təxminən kiçik bir miqdar istifadə edin və losyonu uzun müddət üzərində saxlamaq əvəzinə onu yumaq və yenidən tətbiq edin.",
      aftercare3:
        "Əraziyi yuyarkən, dövməni suyun altına daldırmayın. Bu, hər hansı bir havuzda dəbilək getmək deməkdir! Əraziyi təmizlədikdən sonra, nemli təmiz bir pərdə istifadə edin və ətrağı silin. İnfeksiyaları önlemək üçün onu düzgün şəkildə qurudun. Cildə irritasiyaya səbəb ola biləcəyi üçün qeyri-şıx qurutma və sabun istifadə etmək də yaxşı bir fikirdir.",
      aftercare4:
        "Başqa bir şeydən imtina etmək istəyirsinizsə, o da təzə dövmədən sonra doğrudan günəş işığıdır. Əgər bir dövmə almayı planlaşdırırsınızsa və növbədən Cancun'a gedirsinizsə və ya həvli yay günüdürsə, dövməni qapaqlı saxlayın. Sahilə gedib güneşin üzərinə düşməyin. Günəş dövməni yandıracaq, yaralar, düzgün sağalamaq, və həmçinin ağrıya səbəb ola bilər.",
      aftercare5:
        "Dövmənin baxımı ilə bağlı sualınız varsa, bizimlə əlaqə saxlamanız əsasidir. Biz sizin ən gözəl görünən dövməyə malik olmaq istədiyinizdən əmin olmaq istəyirik. Dövmə rəssamları olaraq, biz sizə ən gözəl görünən dövməni verə bilərik, amma dövməni baxımına sizin diqqət etmək sizin məsuliyyətinizdir.",
      portfolio1:
        "O, çox gənc yaşda bacarıqlarını mükəmməlləşdirməyə başlayan bir tərcüməkar dövməçidir. Yalnız 26 yaşında olaraq, o, artıq dövmə sənayesində 8 illik təcrübəyə malikdir. Onun sənət formasına olan bağlılığı və sevgisi nə şübhəsiz ki, onun nailiyyətinə və dövməçi olaraq bacarığına töhfə vermişdir. Belə böyük bir təcrübəyə sahib olan Muhamməd, ehtimal ki, dövməcilik cəmiyyətində onu digərlərindən fərqli kəsilmiş unikal bir üslub və bacarıq dəsti inkişaf etdirib.",
      portfolio2:
        "Reallaşmış dövmə işlərində ixtisasının olması onun bacarığı və sənət vizyonu haqqında çox şey deyir. Reallaşmış dövmələr yaratmaq təfərrüatlar üçün nəzəri göz, gələn və rənglərin hakimiyyəti, və insan anatomiyasının dərin anlayışı tələb edir. Realizmə fokuslanaraq, Muhamməd mövzularının ənənələrini ətraflı şəkildə yakalamaq və onları müştərilərin cildində həyata gətirmək bacarığını göstərir. Bu realizmə olan bağlılıq, yalnız onun texniki bacarıqlarını deyil, həm də müştərilərinə dərin şəxsi səviyyədə dövmələr təqdim etməyə olan əminliyini göstərir.",
      portfolio3: "Geriyə",
      portfolio4: "PORTFOLYO",
      portfolio5:
        "Burada sadəcə bir hissəsi var, daha çoxu və fərqli seçimlər üçün, İnstagram'a keçid edin və ya əlaqə linklərindən istifadə edin.",
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "en",
  resources,
});

export default i18n;
