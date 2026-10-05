import {
  Camera,
  Church,
  HeartHandshake,
  MessageSquareHeart,
  Quote,
  Repeat,
  Sparkles,
  TrendingUp,
  Users,
  X,
  Star,
  ChevronRight,
  ChevronLeft,
  Maximize2,
  Play,
  Pause,
  Calendar,
  Heart,
  HandHeart,
  GraduationCap,
  BookOpen,
  Leaf,
  Crown,
  HeartPulse,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import InfoCard from "../components/InfoCard.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { useLanguage } from "../context/useLanguage.js";

const volunteerPhotos = [
  {
    key: "teamBags",
    src: "/assets/voluntarios/english-center/english-center-02.jpeg", // Ruta corregida
    alt: "Equipo de voluntarios con despensas",
  },
  {
    key: "youngTeam",
    src: "/assets/voluntarios/senda-de-vida/senda-de-vida-01.jpeg", // Ruta corregida
    alt: "Jóvenes voluntarios",
  },
  {
    key: "ricePacking",
    src: "/assets/voluntarios/leoncitas/leoncitas-01.jpeg", // Ruta corregida
    alt: "Empacando arroz",
  },
  {
    key: "tablePrep",
    src: "/assets/voluntarios/mensajes-de-vida/mensajes-de-vida-01.jpeg", // Ruta corregida
    alt: "Preparando mesa de trabajo",
  },
  {
    key: "bagFilling",
    src: "/assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-01.jpeg", // Ruta corregida
    alt: "Llenando bolsas",
  },
  {
    key: "supplies",
    src: "/assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-02.jpeg", // Ruta corregida
    alt: "Organizando suministros",
  },
  {
    key: "familiesPacking",
    src: "/assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-03.jpeg", // Ruta corregida
    alt: "Familias empacando",
  },
  {
    key: "waving",
    src: "/assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-04.jpeg", // Ruta corregida
    alt: "Voluntarios saludando",
  },
  {
    key: "childrenBags",
    src: "/assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-05.jpeg", // Ruta corregida
    alt: "Niños con bolsas",
  },
];

const featuredVolunteerPhotoKeys = [
  "teamBags",
  "youngTeam",
  "bagFilling",
];

const featuredVolunteerPhotos = featuredVolunteerPhotoKeys
  .map((key) => volunteerPhotos.find((photo) => photo.key === key))
  .filter(Boolean);

const volunteerGroups = [
  {
    id: "english-center",
    icon: GraduationCap,
    title: "Voluntarios del English Center",
    titleEn: "English Center Volunteers",
    subtitle: "Estudiantes que sirven cada medio año",
    subtitleEn: "Students serving every six months",
    description: "Los estudiantes del English Center se suman al ministerio cada medio año para ayudar a empacar despensas. Su participación une aprendizaje, disciplina, formación de carácter y amor práctico por las familias que reciben apoyo.",
    descriptionEn: "English Center students join the ministry every six months to help pack food pantry packages. Their participation brings together learning, discipline, character formation, and practical love for the families receiving support.",
    impact: "El English Center Tlaxcala nació en junio de 2021 con el propósito de fortalecer a estudiantes mexicanos por medio del inglés. El 100% de sus ganancias apoya la compra de alimentos y el acompañamiento a familias en crisis.",
    impactEn: "English Center Tlaxcala began in June 2021 to empower Mexican students through English learning. 100% of its profits support food purchases and care for families in crisis.",
    stats: ["Cada medio año", "Estudiantes", "Empaque de despensas"],
    statsEn: ["Every six months", "Students", "Pantry packing"],
    color: "from-blue-500 to-indigo-600",
    photos: [
      { key: "ec1", src: "/assets/voluntarios/english-center/english-center-02.jpeg" },
      { key: "ec2", src: "/assets/voluntarios/english-center/english-center-01.jpeg" },
      { key: "ec3", src: "/assets/voluntarios/english-center/english-center-03.jpeg" },
      { key: "ec4", src: "/assets/voluntarios/english-center/english-center-04.jpeg" },
      { key: "ec5", src: "/assets/voluntarios/english-center/english-center-05.jpeg" },
      { key: "ec6", src: "/assets/voluntarios/english-center/english-center-06.jpeg" },
      { key: "ec7", src: "/assets/voluntarios/english-center/english-center-07.jpeg" },
    ],
  },
  {
    id: "senda-de-vida",
    icon: Leaf,
    title: "Voluntarios Senda de Vida",
    titleEn: "Senda de Vida Volunteers",
    subtitle: "Servicio desde la fe y la comunidad",
    subtitleEn: "Service rooted in faith and community",
    description: "Este grupo representa a personas que comparten la visión de llevar esperanza a familias vulnerables. Su ayuda fortalece la preparación, organización y entrega de despensas.",
    descriptionEn: "This group represents people who share the vision of bringing hope to vulnerable families. Their help strengthens the preparation, organization, and delivery of pantry packages.",
    impact: "Su servicio recuerda que el ministerio no solo entrega alimento: también ofrece oración, escucha y acompañamiento a quienes atraviesan necesidad.",
    impactEn: "Their service reminds visitors that the ministry does more than deliver food: it also offers prayer, listening, and accompaniment to those in need.",
    stats: ["Fe en acción", "Apoyo comunitario", "Oración"],
    statsEn: ["Faith in action", "Community support", "Prayer"],
    color: "from-emerald-500 to-teal-600",
    photos: [
      { key: "sd1", src: "/assets/voluntarios/senda-de-vida/senda-de-vida-01.jpeg" },
      { key: "sd2", src: "/assets/voluntarios/senda-de-vida/senda-de-vida-02.jpeg" },
      { key: "sd3", src: "/assets/voluntarios/senda-de-vida/senda-de-vida-03.jpeg" },
      { key: "sd4", src: "/assets/voluntarios/senda-de-vida/senda-de-vida-04.jpeg" },
      { key: "sd5", src: "/assets/voluntarios/senda-de-vida/senda-de-vida-05.jpeg" },
      { key: "sd6", src: "/assets/voluntarios/senda-de-vida/senda-de-vida-06.jpeg" },
      { key: "sd7", src: "/assets/voluntarios/senda-de-vida/senda-de-vida-07.jpeg" },
      { key: "sd8", src: "/assets/voluntarios/senda-de-vida/senda-de-vida-08.jpeg" },
    ],
  },
  {
    id: "leoncitas",
    icon: Crown,
    title: "Voluntarios Leoncitas",
    titleEn: "Leoncitas Volunteers",
    subtitle: "Amistad, convivencia y servicio con propósito",
    subtitleEn: "Friendship, fellowship, and purposeful service",
    description: "Leoncitas nació de la amistad, la convivencia y el deseo de servir juntas. Con el tiempo, ese vínculo se transformó en un grupo oficial de voluntarios que participa con alegría en el empaque, la preparación y el acompañamiento del ministerio.",
    descriptionEn: "Leoncitas grew out of friendship, fellowship, and the desire to serve together. Over time, that bond became an official volunteer group that joyfully participates in packing, preparation, and ministry support.",
    impact: "Su historia recuerda que Dios también forma equipos a través de relaciones sencillas: amistades que crecen, se organizan y terminan llevando esperanza a otras familias.",
    impactEn: "Their story shows how God can form teams through simple relationships: friendships that grow, become organized, and end up carrying hope to other families.",
    stats: ["Amistad", "Convivencia", "Grupo oficial"],
    statsEn: ["Friendship", "Fellowship", "Official group"],
    color: "from-amber-400 to-orange-500",
    photos: [
      { key: "l1", src: "/assets/voluntarios/leoncitas/leoncitas-01.jpeg" },
      { key: "l2", src: "/assets/voluntarios/leoncitas/leoncitas-02.jpeg" },
      { key: "l3", src: "/assets/voluntarios/leoncitas/leoncitas-03.jpeg" },
      { key: "l4", src: "/assets/voluntarios/leoncitas/leoncitas-04.jpeg" },
      { key: "l5", src: "/assets/voluntarios/leoncitas/leoncitas-05.jpeg" },
      { key: "l6", src: "/assets/voluntarios/leoncitas/leoncitas-06.jpeg" },
      { key: "l7", src: "/assets/voluntarios/leoncitas/leoncitas-07.jpeg" },
      { key: "l8", src: "/assets/voluntarios/leoncitas/leoncitas-08.jpeg" },
    ],
  },
  {
    id: "mensajes-de-vida",
    icon: BookOpen,
    title: "Voluntarios Mensajes de Vida",
    titleEn: "Messages of Life Volunteers",
    subtitle: "Voluntarios de iglesia sirviendo con fe",
    subtitleEn: "Church volunteers serving with faith",
    description: "Mensajes de Vida reúne voluntarios de la iglesia que se suman al ministerio para preparar despensas, apoyar la logística y servir a las familias con un corazón dispuesto.",
    descriptionEn: "Messages of Life brings together church volunteers who join the ministry to prepare pantry packages, support logistics, and serve families with willing hearts.",
    impact: "Su participación une la ayuda material con el ánimo espiritual, recordando a cada familia que la iglesia también puede ser presencia, oración y compañía en tiempos difíciles.",
    impactEn: "Their participation connects material help with spiritual encouragement, reminding each family that the church can also be present through prayer, care, and companionship in difficult seasons.",
    stats: ["Evangelio", "Ánimo", "Acompañamiento"],
    statsEn: ["Gospel", "Encouragement", "Accompaniment"],
    color: "from-sky-500 to-indigo-600",
    photos: [
      { key: "mv1", src: "/assets/voluntarios/mensajes-de-vida/mensajes-de-vida-01.jpeg" },
      { key: "mv2", src: "/assets/voluntarios/mensajes-de-vida/mensajes-de-vida-02.jpeg" },
      { key: "mv3", src: "/assets/voluntarios/mensajes-de-vida/mensajes-de-vida-03.jpeg" },
      { key: "mv4", src: "/assets/voluntarios/mensajes-de-vida/mensajes-de-vida-04.jpeg" },
      { key: "mv5", src: "/assets/voluntarios/mensajes-de-vida/mensajes-de-vida-05.jpeg" },
      { key: "mv6", src: "/assets/voluntarios/mensajes-de-vida/mensajes-de-vida-06.jpeg" },
    ],
  },
  {
    id: "beneficiarios-voluntarios",
    icon: HeartPulse,
    title: "Beneficiarios que también son voluntarios",
    titleEn: "Beneficiaries Who Also Volunteer",
    subtitle: "Recibir ayuda y convertirla en servicio",
    subtitleEn: "Receiving help and turning it into service",
    description: "Algunos beneficiarios también participan como voluntarios. Esta reciprocidad refleja una comunidad viva: quienes han recibido apoyo también encuentran formas de bendecir a otros.",
    descriptionEn: "Some beneficiaries also participate as volunteers. This reciprocity reflects a living community: those who have received support also find ways to bless others.",
    impact: "El ministerio acompaña a viudas, huérfanos, personas con discapacidad, adultos mayores abandonados, familias vulnerables y personas con padecimientos crónicos o crisis temporales.",
    impactEn: "The ministry accompanies widows, orphans, people with disabilities, abandoned older adults, vulnerable families, and people facing chronic illness or temporary crisis.",
    stats: ["Reciprocidad", "Comunidad", "Esperanza compartida"],
    statsEn: ["Reciprocity", "Community", "Shared hope"],
    color: "from-fuchsia-500 to-rose-600",
    photos: [
      { key: "bv1", src: "/assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-01.jpeg" },
      { key: "bv2", src: "/assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-02.jpeg" },
      { key: "bv3", src: "/assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-03.jpeg" },
      { key: "bv4", src: "/assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-04.jpeg" },
      { key: "bv5", src: "/assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-05.jpeg" },
      { key: "bv6", src: "/assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-06.jpeg" },
      { key: "bv7", src: "/assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-07.jpeg" },
      { key: "bv8", src: "/assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-08.jpeg" },
      { key: "bv9", src: "/assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-09.jpeg" },
      { key: "bv10", src: "/assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-10.jpeg" },
      { key: "bv11", src: "/assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-11.jpeg" },
      { key: "bv12", src: "/assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-12.jpeg" },
      { key: "bv13", src: "/assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-13.jpeg" },
      { key: "bv14", src: "/assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-14.jpeg" },
      { key: "bv15", src: "/assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-15.jpeg" },
    ],
  },
];

const testimonialGroups = [
  {
    title: "Voluntarios",
    titleEn: "Volunteers",
    eyebrow: "Servir con amor",
    eyebrowEn: "Serving with love",
    accent: "from-blue-500 to-indigo-600",
    icon: HeartHandshake,
    quotes: [
      {
        name: "Dra. Judith",
        fullText:
          "Me he unido al ministerio por el amor a los principios que anhela y realiza, me enorgullece ser parte de: servir y ayudar bajo la palabra de Dios nuestro Señor. Dicho así me hace una sierva más del Señor para demostrar que Dios nuestro Señor está presente. Asimismo, que a través del ministerio el objetivo sea cumplido y multiplicado, lo que hace que uno se sienta comprometido y entregado. En hora buena, que esto llegue a más personas que verdaderamente lo necesitan.",
      },
      {
        name: "Xochil",
        fullText:
          "Cuando conocí a mi amiga Andy y me di cuenta de la obra que está realizando, apoyando con víveres a familias de bajos recursos, de inmediato me conmovió y recordé la gran misericordia de Dios para con nosotros, y me he marcado en apoyarla. Haciendo una pregunta: ella aquí en este estado realizando esto. Y me dije: yo también lo puedo hacer, ya que con mucha razón yo soy originaria de aquí de Tlaxcala. Por tal ejemplo que vi, me encuentro apoyando hasta que Dios me lo permita. Cada vez que acudo a apoyar, mi corazón crece de amor para los necesitados y me siento feliz de poder ayudar de esta manera. Dios la bendiga siempre en su ardua labor y seguirá contando conmigo. Dios quede con ella siempre.",
      },
    ],
  },
  {
    title: "Beneficiarios",
    titleEn: "Beneficiaries",
    eyebrow: "Esperanza en casa",
    eyebrowEn: "Hope at home",
    accent: "from-emerald-500 to-teal-600",
    icon: Users,
    quotes: [
      {
        name: "Sra. Lidia",
        fullText:
          "Desde que recibimos ayuda hasta ahorita no nos vamos a la cama sin comer. En hora buena, que Dios bendiga a los fundadores de esta noble causa.",
      },
      {
        name: "Arturo",
        fullText:
          "Estoy agradecido por recibir la ayuda y gracias a ustedes mi economía ha mejorado un poco. Mi estilo de vida, sin duda alguna, ha tomado un respiro y gracias al ministerio tengo más para proporcionar a mi familia. También, pero no menos importante, la ropa: muchas gracias por ello, porque gracias a eso le he podido llevar algunas prendas a mi familia con todo el amor de mi corazón. Muchas gracias, se los agradezco de corazón.",
      },
      {
        name: "Araceli Cuadros",
        fullText:
          "Buenas tardes, Sra. María de Lourdes. Mi testimonio es que Dios mandó sus ángeles hacia mi familia cuando estábamos careciendo alimento por muchas situaciones, pero la doctora Mónica y usted estaban aquí para apoyarnos. Nos han ayudado demasiado y la pancita ahora sí tiene alimento. Cada reflexión es sentir a Dios con nosotras y que está siempre a nuestro lado. Dios la bendiga siempre y a todos esos ángeles que nos están apoyando. Gracias.",
      },
      {
        name: "María Bertha",
        fullText:
          "Recibir la despensa cada mes es como un abrazo al corazón. Saber que hay gente que piensa en nosotros y se preocupa por que tengamos lo básico en casa, no tiene precio. Es un gesto que nos llena de esperanza y nos da fuerzas para seguir adelante. Me siento muy afortunada de ser parte de esta familia del ministerio, donde todos nos apoyamos y nos queremos. Es un lugar donde encontramos comprensión y cariño, y donde sabemos que podemos contar con los demás en momentos difíciles. Es una bendición enorme. Saber que formamos parte de algo más grande y que no estamos solos en este camino es algo que agradezco profundamente.",
      },
      {
        name: "Conchita",
        fullText:
          "El recibir la despensa, la verdad es que me ha ayudado demasiado. He tenido días muy difíciles y gracias a la bendición de Dios, que a través de ustedes me bendice con los sagrados alimentos, he visto la gracia de Dios a través de ustedes. Sobre todo he tenido mucho tiempo para leer las reflexiones que me dan con la despensa y he concluido que la gracia de Dios viene de personas ajenas a mi familia y que aún existen personas buenas que buscan ayudar al prójimo. Le mando un caluroso abrazo y que Dios la bendiga a usted y a todo el ministerio. Ojalá su recompensa sea mayor al apoyo que da.",
      },
      {
        name: "Marco Antonio",
        fullText:
          "Gracias. Bueno, qué puedo decir: ha sido una ayuda increíble, porque sí hay veces que nos quedamos sin cosas para hacer de comer, y la despensa nos ha ayudado cuando pasamos por crisis un poco fuertes. Con las reflexiones nos han ayudado a estar más juntos como familia, a tratar de entendernos más y apoyarnos. Les agradezco de todo corazón por el apoyo que nos brindan, o más bien que les brindan a mis papás. Que Dios siempre los cuide y los bendiga.",
      },
      {
        name: "Laura",
        fullText:
          "Buenas tardes a todos. Gracias a la despensa que nos brindan nos ha ayudado mucho, pero sobre todo también agradezco mucho que nos dan una bonita reflexión, que con eso nos regresan mucha paz y sobre todo la fe. Gracias a la fundación.",
      },
      {
        name: "Angeles",
        fullText:
          "Buenas noches. Antes que nada, mi familia y yo estamos agradecidos porque gracias a la fundación no nos falta alimento en la mesa. Lo agradezco de corazón, de que somos bendecidos. Muchas gracias de corazón a las personas que siempre nos tienen presentes. Muchas gracias.",
      },
    ],
  },
  {
    title: "Donadores",
    titleEn: "Donors",
    eyebrow: "Generosidad que multiplica",
    eyebrowEn: "Generosity that multiplies",
    accent: "from-amber-400 to-orange-500",
    icon: HandHeart,
    quotes: [
      {
        name: "Cristina Bermudez",
        fullText:
          "Yo comparto mi ayuda porque siempre me ha gustado ayudar a los que necesitan. Lo hago con mucho gusto.",
      },
      {
        name: "Alejandrina Cruz",
        fullText:
          "Agradezco a este ministerio por darme la oportunidad de servir a mis hermanos en una de sus necesidades, esperando sea muy útil. La principal razón que me motivó para compartir lo poco o mucho que Dios me provee es porque yo también he tenido necesidad y sé lo difícil que es esta situación. Muchas gracias por todo.",
      },
      {
        name: "Ma. del Carmen Maldonado",
        fullText:
          "A mí me motivó dar mi pequeña cooperación para alguien necesitado, porque mi hermano me platicó la labor hermosa de Andrea.",
      },
      {
        name: "Susana Piantzi",
        fullText:
          "Mi misión siempre ha sido seguir la palabra de Dios, compartir, pensar y accionar en ayudar a quien lo necesite.",
      },
      {
        name: "Guillermina Carmona",
        fullText:
          "A mi edad me considero una persona muy bendecida por mi vida y familia. Estoy agradecida por tener la oportunidad de colaborar con el ministerio y poder ayudar a alguien que está necesitado, y contribuir con ayuda para la realización de este programa. Mientras pueda, cuentan conmigo. Muchas, muchas gracias y muchas bendiciones siempre.",
      },
      {
        name: "Adelina",
        fullText:
          "Buenas tardes. Quiero darles un pequeño testimonio de por qué me convertí en donador. Es algo que se siente en mi corazón al ver la necesidad. Esto yo ya lo venía haciendo desde antes: compraba despensas y salíamos a los semáforos o a las calles y las entregábamos a las personas que veíamos que tenían la necesidad de una despensa. Pero sobre todo es el amor, el amor que Jesús pone en nuestro corazón, porque hemos aprendido bíblicamente que es mejor dar que recibir. También hay una palabra que dice: bendiciendo, te bendeciré. Esto quiere decir que yo con una despensa puedo bendecir a una familia y Dios me bendice a mí. Quiero dar ese testimonio también: yo no aporto una cantidad porque me sobre, sino porque lo siento en mi corazón. Quisiera poder aportar mucho más porque sé que hay muchísima gente que lo necesita, pero lo poco que doy lo doy con todo mi corazón. He visto la mano de Dios en mi economía, que Dios me sorprende muchas veces porque lo doy de corazón y Dios me da de tal manera que puedo ver cómo Dios me socorre y me provee. Ese es uno de los motivos por el cual yo me convertí en donador, porque Cristo pone en mí ese querer y el hacer; siempre es su voluntad. Yo sé que su voluntad es que nosotros, que tenemos un plato de comida, una cobija segura, un techo que nos cubre, escojamos algo para darlo a aquellas personas que no tienen nada. Dios nos bendice grandemente porque Él mira el corazón lleno de amor con el cual nos despojamos para poder apoyar a algunas familias. Gracias a Dios me encontré con Andy y sé que el ministerio Trompeta está haciendo una buena labor. Seguimos adelante; si el día de mañana puedo donar un poco más, con mucho gusto lo haré, porque sé que cada vez hay más gente que necesita recibir una despensa para tener un plato de comida seguro. Ese es mi testimonio. Espero que le sirva y que Dios les bendiga a todos los que son parte de este ministerio Trompeta.",
      },
      {
        name: "Ofelia",
        fullText:
          "Bendecido día para todos ustedes. Le doy gracias a Dios por tantas bendiciones que nos ha dado sin merecer y nos sigue dando. Con lo mucho o poco que tengamos, ayudemos a nuestros hermanos más necesitados. Dios Padre lo multiplique y tengamos un tesoro en el cielo, porque así como venimos nos vamos sin nada. Bendiciones, hermano.",
      },
    ],
  },
];

const testimonialTextEn = {
  "Dra. Judith":
    "I joined the ministry because of my love for the principles it longs for and carries out. I am proud to be part of serving and helping under the Word of God our Lord. In that way, it makes me one more servant of the Lord, showing that God our Lord is present. Likewise, through the ministry, may the objective be fulfilled and multiplied, which makes one feel committed and devoted. Thankfully, may this reach more people who truly need it.",
  Xochil:
    "When I met my friend Andy and realized the work she is doing, supporting low-income families with food, I was immediately moved and remembered God's great mercy toward us, and I decided to support her. I asked myself: she is here in this state doing this. And I said to myself: I can do it too, especially because I am originally from here in Tlaxcala. Because of the example I saw, I am supporting as long as God allows me to. Every time I go to help, my heart grows in love for those in need and I feel happy to be able to help in this way. May God always bless her in her hard work, and she will continue to count on me. May God remain with her always.",
  "Sra. Lidia":
    "Since we started receiving help until now, we do not go to bed without eating. Thankfully, may God bless the founders of this noble cause.",
  Arturo:
    "I am grateful to receive the help, and thanks to you my economy has improved a little. My lifestyle has, without a doubt, taken a breath, and thanks to the ministry I have more to provide for my family. Also, but no less important, the clothing: thank you very much for that, because thanks to it I have been able to take some garments to my family with all the love in my heart. Thank you very much; I thank you from my heart.",
  "Araceli Cuadros":
    "Good afternoon, Mrs. María de Lourdes. My testimony is that God sent His angels to my family when we were lacking food because of many situations, but Dr. Mónica and you were here to support us. You have helped us so much, and now our stomachs have food. Each reflection helps us feel God with us and know that He is always by our side. May God always bless you and all those angels who are supporting us. Thank you.",
  "María Bertha":
    "Receiving the pantry package every month is like a hug to the heart. Knowing that there are people who think about us and care that we have the basics at home is priceless. It is a gesture that fills us with hope and gives us strength to keep going. I feel very fortunate to be part of this ministry family, where we all support and care for one another. It is a place where we find understanding and affection, and where we know we can count on others in difficult moments. It is an enormous blessing. Knowing that we are part of something greater and that we are not alone on this path is something I am deeply grateful for.",
  Conchita:
    "Receiving the pantry package has honestly helped me so much. I have had very difficult days, and thanks to God's blessing, which through you blesses me with sacred food, I have seen God's grace through you. Above all, I have had a lot of time to read the reflections you give me with the pantry package, and I have concluded that God's grace comes through people outside my family, and that there are still good people who seek to help their neighbor. I send you a warm hug, and may God bless you and the whole ministry. May your reward be greater than the support you give.",
  "Marco Antonio":
    "Thank you. Well, what can I say: it has been incredible help, because there are times when we run out of things to cook, and the pantry package has helped us when we go through somewhat strong crises. The reflections have helped us stay more united as a family, try to understand each other more, and support one another. I thank you with all my heart for the support you give us, or rather, that you give to my parents. May God always care for you and bless you.",
  Laura:
    "Good afternoon to everyone. Thanks to the pantry package you provide, it has helped us a lot, but above all I am also very grateful that you give us a beautiful reflection, which brings us much peace and, above all, faith. Thank you to the foundation.",
  Angeles:
    "Good evening. First of all, my family and I are grateful because thanks to the foundation we do not lack food on the table. I thank you from my heart because we are blessed. Thank you from the heart to the people who always keep us in mind. Thank you very much.",
  "Cristina Bermudez":
    "I share my help because I have always liked helping those who need it. I do it gladly.",
  "Alejandrina Cruz":
    "I thank this ministry for giving me the opportunity to serve my brothers and sisters in one of their needs, hoping it will be very useful. The main reason that motivated me to share the little or much that God provides for me is because I have also experienced need, and I know how difficult that situation is. Thank you very much for everything.",
  "Ma. del Carmen Maldonado":
    "What motivated me to give my small contribution for someone in need was that my brother told me about Andrea's beautiful work.",
  "Susana Piantzi":
    "My mission has always been to follow the Word of God, to share, to think, and to take action in helping whoever needs it.",
  "Guillermina Carmona":
    "At my age, I consider myself a person very blessed by my life and family. I am grateful to have the opportunity to collaborate with the ministry and to be able to help someone who is in need, and to contribute help toward the realization of this program. As long as I can, you can count on me. Many, many thanks and many blessings always.",
  Adelina:
    "Good afternoon. I want to give you a small testimony about why I became a donor. It is something I feel in my heart when I see need. I had already been doing this before: I bought pantry packages and we went out to traffic lights or streets and gave them to people we saw had the need for a pantry package. But above all, it is love, the love that Jesus places in our hearts, because we have learned biblically that it is better to give than to receive. There is also a word that says: blessing, I will bless you. This means that with one pantry package I can bless a family, and God blesses me. I also want to give that testimony: I do not contribute an amount because I have extra, but because I feel it in my heart. I wish I could contribute much more because I know there are so many people who need it, but the little I give, I give with all my heart. I have seen God's hand in my finances; God surprises me many times because I give from the heart, and God gives to me in such a way that I can see how God helps and provides for me. That is one of the reasons I became a donor, because Christ places in me both the desire and the action; it is always His will. I know His will is that those of us who have a plate of food, a secure blanket, and a roof that covers us should choose something to give to those who have nothing. God blesses us greatly because He sees the heart full of love with which we let go of what we have in order to support some families. Thank God I met Andy, and I know the Trumpet ministry is doing good work. We keep moving forward; if tomorrow I can donate a little more, I will gladly do it, because I know more and more people need to receive a pantry package so they can have a secure plate of food. That is my testimony. I hope it is useful, and may God bless all who are part of this Trumpet ministry.",
  Ofelia:
    "Blessed day to all of you. I thank God for so many blessings He has given us without deserving them, and that He continues to give us. With the much or little we have, let us help our brothers and sisters most in need. May God the Father multiply it, and may we have treasure in heaven, because just as we came, we leave with nothing. Blessings, brother.",
};

const volunteerPageCopy = {
  es: {
    testimony: "Testimonio",
    readFull: "Leer testimonio completo",
    viewLess: "Ver menos",
    complete: "Completo",
    summary: "Resumen",
    viewAll: "Ver todos",
    showing: "Mostrando 3 de",
    testimonials: "testimonios",
    viewMore: "Ver más",
    voices: "Voces del ministerio",
    title: "Testimonios que animan a seguir sirviendo",
    intro:
      "Historias reales de voluntarios, beneficiarios y donadores que muestran cómo una despensa, una visita y una palabra de esperanza pueden tocar una vida.",
    closeTestimony: "Cerrar testimonio",
    close: "Cerrar",
    carouselLabel: "Galería de voluntarios",
    groups: "Grupos de voluntarios",
    fiveWays: "Cinco formas de servir, una misma misión",
    chooseGroup: "Selecciona un grupo para conocer su historia",
  },
  en: {
    testimony: "Testimony",
    readFull: "Read full testimony",
    viewLess: "View less",
    complete: "Full",
    summary: "Summary",
    viewAll: "View all",
    showing: "Showing 3 of",
    testimonials: "testimonies",
    viewMore: "View more",
    voices: "Ministry voices",
    title: "Testimonies that encourage continued service",
    intro:
      "Real stories from volunteers, beneficiaries, and donors showing how a pantry package, a visit, and a word of hope can touch a life.",
    closeTestimony: "Close testimony",
    close: "Close",
    carouselLabel: "Volunteer gallery",
    groups: "Volunteer groups",
    fiveWays: "Five ways to serve, one shared mission",
    chooseGroup: "Select a group to learn its story",
  },
};

function getLocalizedTestimonialText(quote, language) {
  return language === "en"
    ? testimonialTextEn[quote.name] ?? quote.fullText
    : quote.fullText;
}

function getTestimonialPreview(text) {
  if (text.length <= 250) return text;
  const shortText = text.slice(0, 250);
  const sentenceEnd = Math.max(
    shortText.lastIndexOf("."),
    shortText.lastIndexOf("!"),
    shortText.lastIndexOf("?")
  );
  return `${shortText.slice(0, sentenceEnd > 140 ? sentenceEnd + 1 : 250)}...`;
}

// ===== CARRUSEL DE FOTOS =====
const PhotoCarousel = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);

  const totalSlides = photos.length;

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((index + totalSlides) % totalSlides);
    window.setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  const togglePlay = () => setIsPlaying(!isPlaying);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(() => {
        setIsTransitioning(true);
        setCurrentIndex((index) => (index + 1) % totalSlides);
        window.setTimeout(() => setIsTransitioning(false), 500);
      }, 5000);
    } else {
      window.clearInterval(timerRef.current);
    }
    return () => window.clearInterval(timerRef.current);
  }, [isPlaying, totalSlides]);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-2xl">
      <div className="relative h-[320px] overflow-hidden sm:h-[380px] lg:h-[420px] xl:h-[460px]">
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {photos.map((photo, index) => (
            <div
              key={`${photo.key}-${index}`}
              className="relative min-w-full h-full flex-shrink-0"
            >
              <img
                src={photo.src}
                alt={photo.alt || `Voluntarios ${index + 1}`}
                className="h-full w-full object-cover object-center sm:object-[50%_35%]"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
            </div>
          ))}
        </div>

        {/* Flechas de navegación */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2.5 text-white backdrop-blur-sm transition hover:bg-black/70 hover:scale-110"
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2.5 text-white backdrop-blur-sm transition hover:bg-black/70 hover:scale-110"
          aria-label="Siguiente imagen"
        >
          <ChevronRight size={22} />
        </button>

        {/* Indicadores de página (puntos) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 bg-amber-400"
                  : "w-1.5 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>

        {/* Botón de pausa/reproducción */}
        <button
          onClick={togglePlay}
          className="absolute top-3 right-3 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition hover:bg-black/70"
          aria-label={isPlaying ? "Pausar" : "Reproducir"}
        >
          {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        </button>
      </div>
    </div>
  );
};

const GroupPhotoCarousel = ({ photos, title, language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const totalSlides = photos.length;
  const currentPhoto = photos[currentIndex];

  useEffect(() => {
    setCurrentIndex(0);
  }, [photos]);

  useEffect(() => {
    if (!isFullscreen) return undefined;

    const handleEsc = (event) => {
      if (event.key === "Escape") setIsFullscreen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isFullscreen]);

  const goToSlide = (index) => {
    setCurrentIndex((index + totalSlides) % totalSlides);
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  if (!currentPhoto) return null;

  return (
    <>
    <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-xl lg:ml-auto">
      <div className="relative h-[330px] overflow-hidden sm:h-[380px] lg:h-[420px] xl:h-[450px]">
        <img
          src={currentPhoto.src}
          alt={`${title} ${currentIndex + 1}`}
          className="h-full w-full object-contain p-2"
          loading={currentIndex === 0 ? "eager" : "lazy"}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-5 pb-5 pt-16">
          <p className="text-sm font-bold text-white">
            {title}
          </p>
          <p className="mt-1 text-xs font-semibold text-white/65">
            {currentIndex + 1} / {totalSlides}
          </p>
        </div>
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/55 text-white shadow-lg backdrop-blur transition hover:scale-105 hover:bg-black/75"
          aria-label={language === "en" ? "Previous photo" : "Foto anterior"}
        >
          <ChevronLeft size={23} />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/55 text-white shadow-lg backdrop-blur transition hover:scale-105 hover:bg-black/75"
          aria-label={language === "en" ? "Next photo" : "Siguiente foto"}
        >
          <ChevronRight size={23} />
        </button>
        <button
          type="button"
          onClick={() => setIsFullscreen(true)}
          className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-black/55 text-white shadow-lg backdrop-blur transition hover:scale-105 hover:bg-black/75"
          aria-label={language === "en" ? "View fullscreen" : "Ver en pantalla completa"}
        >
          <Maximize2 size={20} />
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto border-t border-white/10 bg-slate-900 p-3">
        {photos.map((photo, index) => (
          <button
            key={photo.key}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-14 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition ${
              index === currentIndex
                ? "border-amber-400 opacity-100"
                : "border-white/10 opacity-60 hover:opacity-90"
            }`}
            aria-label={`${language === "en" ? "View photo" : "Ver foto"} ${index + 1}`}
          >
            <img
              src={photo.src}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
    {isFullscreen &&
      createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 sm:p-6">
          <button
            type="button"
            onClick={() => setIsFullscreen(false)}
            className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-white/12 text-white shadow-lg backdrop-blur transition hover:bg-white/25 sm:h-12 sm:w-12"
            aria-label={language === "en" ? "Close fullscreen" : "Cerrar pantalla completa"}
          >
            <X size={26} />
          </button>
          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/12 text-white shadow-lg backdrop-blur transition hover:bg-white/25 sm:left-5 sm:h-14 sm:w-14"
            aria-label={language === "en" ? "Previous photo" : "Foto anterior"}
          >
            <ChevronLeft size={32} />
          </button>

          <figure className="flex h-full max-h-[calc(100vh-5.5rem)] w-full max-w-[calc(100vw-2rem)] items-center justify-center sm:max-h-[calc(100vh-6.5rem)] sm:max-w-[calc(100vw-8rem)]">
            <img
              src={currentPhoto.src}
              alt={`${title} ${currentIndex + 1}`}
              className="max-h-full max-w-full rounded-xl object-contain shadow-2xl"
            />
          </figure>

          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/12 text-white shadow-lg backdrop-blur transition hover:bg-white/25 sm:right-5 sm:h-14 sm:w-14"
            aria-label={language === "en" ? "Next photo" : "Siguiente foto"}
          >
            <ChevronRight size={32} />
          </button>
          <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white shadow-lg backdrop-blur">
            {currentIndex + 1} / {totalSlides}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

// ===== TESTIMONIAL GROUP COMPONENT =====
const TestimonialGroup = ({ group, copy, language, onOpenTestimonial }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const groupTitle = language === "en" ? group.titleEn : group.title;
  const groupEyebrow = language === "en" ? group.eyebrowEn : group.eyebrow;
  const activeQuote = group.quotes[activeIndex];
  const activeText = getLocalizedTestimonialText(activeQuote, language);
  const previewText = getTestimonialPreview(activeText);
  const hasLongText = activeText.length > previewText.length;
  const Icon = group.icon;

  const next = () => {
    setActiveIndex((index) => (index + 1) % group.quotes.length);
  };

  const previous = () => {
    setActiveIndex((index) => (index - 1 + group.quotes.length) % group.quotes.length);
  };

  return (
    <div className="mb-12 last:mb-0">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex min-w-0 items-center gap-4">
          <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${group.accent} text-white shadow-lg`}>
            <Icon size={24} />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-600">
              {groupEyebrow}
            </p>
            <h3 className="mt-1 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">{groupTitle}</h3>
          </div>
        </div>
        <span className="w-fit rounded-full bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
          {group.quotes.length} {copy.testimonials}
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl py-4">
        <div className="absolute -left-6 top-10 hidden h-72 w-72 rounded-full bg-amber-200/30 blur-3xl lg:block" />
        <div className="absolute -right-6 bottom-0 hidden h-72 w-72 rounded-full bg-emerald-200/20 blur-3xl lg:block" />

        <div className="relative grid items-center gap-6 lg:grid-cols-[220px_1fr] xl:grid-cols-[250px_1fr]">
          <div className="relative mx-auto h-36 w-36 sm:h-44 sm:w-44 lg:h-52 lg:w-52 xl:h-56 xl:w-56">
            <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${group.accent} p-2 shadow-2xl`}>
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-5xl font-black text-slate-800 sm:text-6xl">
                {activeQuote.name.charAt(0)}
              </div>
            </div>
            <div className={`absolute -bottom-2 left-1/2 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full border-4 border-white bg-gradient-to-br ${group.accent} text-white shadow-xl sm:h-16 sm:w-16`}>
              <Icon size={23} />
            </div>
          </div>

          <article className="relative min-w-0 overflow-hidden rounded-3xl border border-slate-100 bg-white p-5 shadow-2xl shadow-slate-200/70 sm:p-7 lg:p-8">
            <Quote className="absolute right-5 top-5 text-emerald-200/40" size={56} />
            <div className="relative">
              <div className="mb-5 flex gap-1 text-amber-400">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={20} className="fill-amber-400" />
                ))}
              </div>

              <p className="min-h-28 break-words text-base font-medium italic leading-7 text-slate-700 sm:text-lg sm:leading-8">
                "{previewText}"
              </p>
              {hasLongText && (
                <button
                  type="button"
                  className="mt-4 text-sm font-black text-blue-600 underline-offset-4 transition hover:text-emerald-600 hover:underline"
                  onClick={() =>
                    onOpenTestimonial({
                      name: activeQuote.name,
                      fullText: activeText,
                      eyebrow: groupEyebrow,
                      group: groupTitle,
                    })
                  }
                >
                  {copy.readFull}
                </button>
              )}

              <div className="my-6 h-px bg-slate-200" />

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className={`grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br ${group.accent} text-xl font-black text-white`}>
                    {activeQuote.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-slate-900">{activeQuote.name}</h4>
                    <p className="text-sm font-semibold text-slate-500">
                      {copy.testimony} {activeIndex + 1} / {group.quotes.length}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className={`w-fit rounded-full bg-gradient-to-r ${group.accent} px-6 py-2.5 text-sm font-black text-white shadow-lg transition hover:scale-105 hover:shadow-xl`}
                  onClick={() =>
                    onOpenTestimonial({
                      name: activeQuote.name,
                      fullText: activeText,
                      eyebrow: groupEyebrow,
                      group: groupTitle,
                    })
                  }
                >
                  {copy.readFull}
                </button>
              </div>
            </div>
          </article>
        </div>

        <div className="mx-auto mt-8 flex w-fit items-center gap-4 rounded-full border border-slate-100 bg-white px-5 py-3 shadow-xl shadow-slate-200/60">
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-blue-600"
            onClick={previous}
          >
            <ChevronLeft size={22} />
          </button>

          <div className="flex items-center gap-2">
            {group.quotes.map((quote, index) => (
              <button
                key={quote.name}
                type="button"
                className={[
                  "h-2.5 rounded-full transition-all",
                  activeIndex === index
                    ? "w-8 bg-emerald-500"
                    : "w-2.5 bg-slate-200 hover:bg-amber-400",
                ].join(" ")}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-blue-600"
            onClick={next}
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

// ===== MODAL DE TESTIMONIO =====
const TestimonialModal = ({ testimonial, onClose, copy }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm">
      <article className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-slate-200 bg-white p-6 rounded-t-3xl">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-600">
              {testimonial.eyebrow} / {testimonial.group}
            </p>
            <h3 className="mt-1 text-2xl font-black text-slate-900">
              {testimonial.name}
            </h3>
          </div>
          <button
            type="button"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6 sm:p-8">
          <Quote className="mb-4 text-emerald-200/40" size={40} />
          <p className="whitespace-pre-line text-lg font-medium leading-8 text-slate-700">
            "{testimonial.fullText}"
          </p>
          <button
            type="button"
            className="mt-8 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3 text-sm font-black text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
            onClick={onClose}
          >
            {copy.close}
          </button>
        </div>
      </article>
    </div>
  );
};

export default function Volunteers() {
  const { language, t } = useLanguage();
  const copy = volunteerPageCopy[language] ?? volunteerPageCopy.es;
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(volunteerGroups[0]);

  const getGroupContent = (group) => {
    const isEn = language === "en";
    return {
      title: isEn ? group.titleEn : group.title,
      subtitle: isEn ? group.subtitleEn : group.subtitle,
      description: isEn ? group.descriptionEn : group.description,
      impact: isEn ? group.impactEn : group.impact,
      stats: isEn ? group.statsEn : group.stats,
    };
  };

  const content = getGroupContent(selectedGroup);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0">
          <img
            src="/assets/voluntarios/english-center/english-center-02.jpeg"
            alt="Voluntarios"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-blue-900/50" />
        </div>
        <div className="section-shell relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-amber-400 backdrop-blur">
              <HeartHandshake size={16} />
              {t("volunteers.carouselLabel")}
            </div>
            <h1 className="mt-6 text-5xl font-black leading-none sm:text-6xl lg:text-7xl">
              {t("volunteers.title")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              {t("volunteers.text")}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { value: "38", label: t("volunteers.missionCount") },
                { value: "8", label: t("volunteers.church") },
                { value: "2021", label: t("volunteers.missions") },
              ].map((item) => (
                <div
                  key={item.value}
                  className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur"
                >
                  <p className="text-3xl font-black text-amber-400">{item.value}</p>
                  <p className="mt-1 text-xs font-semibold leading-5 text-white/70">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Carrusel principal */}
          <div>
            <PhotoCarousel photos={featuredVolunteerPhotos} />
          </div>
        </div>
      </section>

      {/* ===== GRUPOS DE VOLUNTARIOS ===== */}
      <section id="grupos" className="section-shell scroll-mt-28 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-blue-700 border border-blue-200">
              <Users size={15} />
              {copy.groups}
            </div>
            <h2 className="mt-6 text-4xl font-black text-slate-900 sm:text-5xl">
              {copy.fiveWays}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              {copy.chooseGroup}
            </p>
          </div>

          {/* Selector de grupos */}
          <div className="grid gap-3 md:grid-cols-5 mb-8">
            {volunteerGroups.map((group) => {
              const Icon = group.icon;
              const isActive = group.id === selectedGroup.id;
              const groupTitle = language === "en" ? group.titleEn : group.title;

              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => setSelectedGroup(group)}
                  className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 hover:-translate-y-1 ${
                    isActive
                      ? `border-${group.color.split(' ')[0].replace('from-', '')} bg-slate-900 text-white shadow-xl`
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${group.color} ${isActive ? '' : 'opacity-0 group-hover:opacity-100'}`} />
                  <div className={`flex items-center gap-3 ${isActive ? '' : ''}`}>
                    <div className={`grid h-10 w-10 place-items-center rounded-xl transition ${
                      isActive ? 'bg-white/15 text-amber-400' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                    }`}>
                      <Icon size={18} />
                    </div>
                    <span className={`text-sm font-bold leading-tight ${isActive ? 'text-white' : 'text-slate-700'}`}>
                      {groupTitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Contenido del grupo seleccionado */}
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl border border-slate-100">
            <div className={`bg-gradient-to-r ${selectedGroup.color} p-6 md:p-8 text-white`}>
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20 text-2xl">
                  <selectedGroup.icon size={28} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-white/70">
                    {language === "en" ? "Volunteer Group" : "Grupo de voluntarios"}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-black">{content.title}</h3>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.95fr)] xl:grid-cols-[minmax(0,1.1fr)_minmax(440px,0.9fr)]">
                <div>
                  <p className="text-lg font-medium text-slate-700 leading-relaxed">
                    {content.subtitle}
                  </p>
                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {content.description}
                  </p>
                  <div className="mt-6 rounded-2xl bg-slate-50 p-5 border border-slate-100">
                    <p className="text-sm font-semibold text-slate-700">
                      <span className="text-emerald-600">✦</span> {content.impact}
                    </p>
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {content.stats.map((stat) => (
                      <div key={stat} className="rounded-xl bg-slate-50 p-4 text-center border border-slate-100">
                        <p className="text-sm font-bold text-slate-800">{stat}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Carrusel del grupo */}
                <div>
                  <p className="text-sm font-bold text-slate-500 mb-3 uppercase tracking-wider">
                    {language === "en" ? "Gallery" : "Galería"}
                  </p>
                  <GroupPhotoCarousel
                    photos={selectedGroup.photos}
                    title={content.title}
                    language={language}
                  />
                  <p className="mt-3 text-xs text-slate-400 text-center">
                    {selectedGroup.photos.length} {language === "en" ? "photos" : "fotos"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIOS ===== */}
      <section id="testimonios" className="section-shell scroll-mt-28 bg-gradient-to-b from-white via-emerald-50/30 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-emerald-700 border border-emerald-200">
              <MessageSquareHeart size={15} />
              {copy.voices}
            </div>
            <h2 className="mt-6 text-4xl font-black text-slate-900 sm:text-5xl">
              {copy.title}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              {copy.intro}
            </p>
          </div>

          <div className="rounded-3xl bg-white/80 backdrop-blur-sm border border-slate-100 p-6 shadow-xl sm:p-8">
            {testimonialGroups.map((group) => (
              <TestimonialGroup
                key={group.title}
                group={group}
                copy={copy}
                language={language}
                onOpenTestimonial={setSelectedTestimonial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="section-shell bg-slate-900">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-amber-400 border border-white/10">
              <TrendingUp size={15} />
              {language === "en" ? "Impact in numbers" : "Impacto en números"}
            </span>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              {language === "en" ? "The ministry in figures" : "El ministerio en cifras"}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "10+", label: language === "en" ? "Tons of food" : "Toneladas de alimentos", icon: TrendingUp },
              { value: "80+", label: language === "en" ? "Families reached" : "Familias alcanzadas", icon: Users },
              { value: "48", label: language === "en" ? "Active volunteers" : "Voluntarios activos", icon: HeartHandshake },
              { value: "12", label: language === "en" ? "Communities" : "Comunidades", icon: Church },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm border border-white/10 transition hover:bg-white/15 hover:scale-105"
                >
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-amber-400/20 text-amber-400">
                    <Icon size={24} />
                  </div>
                  <p className="text-4xl font-black text-white">{stat.value}</p>
                  <p className="mt-1 text-sm font-semibold text-white/60">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== MODALES ===== */}
      {selectedTestimonial && (
        <TestimonialModal
          testimonial={selectedTestimonial}
          onClose={() => setSelectedTestimonial(null)}
          copy={copy}
        />
      )}

    </>
  );
}
