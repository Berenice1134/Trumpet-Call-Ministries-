import {
  BookOpen,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Church,
  Crown,
  GraduationCap,
  HandHeart,
  Heart,
  HeartHandshake,
  HeartPulse,
  Leaf,
  Maximize2,
  MessageCircle,
  MessageSquareHeart,
  Pause,
  Play,
  Quote,
  Sparkles,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/useLanguage.js";

const volunteerPhotos = [
  {
    key: "teamBags",
    src: `${import.meta.env.BASE_URL}assets/voluntarios/english-center/english-center-02.jpeg`,
    alt: "Equipo de voluntarios con despensas",
  },
  {
    key: "youngTeam",
    src: `${import.meta.env.BASE_URL}assets/voluntarios/senda-de-vida/senda-de-vida-01.jpeg`,
    alt: "Jóvenes voluntarios",
  },
  {
    key: "ricePacking",
    src: `${import.meta.env.BASE_URL}assets/voluntarios/leoncitas/leoncitas-01.jpeg`,
    alt: "Empacando arroz",
  },
  {
    key: "tablePrep",
    src: `${import.meta.env.BASE_URL}assets/voluntarios/mensajes-de-vida/mensajes-de-vida-01.jpeg`,
    alt: "Preparando mesa de trabajo",
  },
  {
    key: "bagFilling",
    src: `${import.meta.env.BASE_URL}assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-01.jpeg`,
    alt: "Llenando bolsas",
  },
  {
    key: "supplies",
    src: `${import.meta.env.BASE_URL}assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-02.jpeg`,
    alt: "Organizando suministros",
  },
  {
    key: "familiesPacking",
    src: `${import.meta.env.BASE_URL}assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-03.jpeg`,
    alt: "Familias empacando",
  },
  {
    key: "waving",
    src: `${import.meta.env.BASE_URL}assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-04.jpeg`,
    alt: "Voluntarios saludando",
  },
  {
    key: "childrenBags",
    src: `${import.meta.env.BASE_URL}assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-05.jpeg`,
    alt: "Niños con bolsas",
  },
];

const featuredVolunteerPhotoKeys = ["teamBags", "youngTeam", "bagFilling"];

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
    description:
      "Los estudiantes del English Center se suman al ministerio cada medio año para ayudar a empacar despensas. Su participación une aprendizaje, disciplina, formación de carácter y amor práctico por las familias que reciben apoyo.",
    descriptionEn:
      "English Center students join the ministry every six months to help pack food pantry packages. Their participation brings together learning, discipline, character formation, and practical love for the families receiving support.",
    impact:
      "El English Center Tlaxcala nació en junio de 2021 con el propósito de fortalecer a estudiantes mexicanos por medio del inglés. El 100% de sus ganancias apoya la compra de alimentos y el acompañamiento a familias en crisis.",
    impactEn:
      "English Center Tlaxcala began in June 2021 to empower Mexican students through English learning. 100% of its profits support food purchases and care for families in crisis.",
    stats: ["Cada medio año", "Estudiantes", "Empaque de despensas"],
    statsEn: ["Every six months", "Students", "Pantry packing"],
    color: "from-blue-500 to-indigo-600",
    photos: [
      { key: "ec1", src: `${import.meta.env.BASE_URL}assets/voluntarios/english-center/english-center-02.jpeg` },
      { key: "ec2", src: `${import.meta.env.BASE_URL}assets/voluntarios/english-center/english-center-01.jpeg` },
      { key: "ec3", src: `${import.meta.env.BASE_URL}assets/voluntarios/english-center/english-center-03.jpeg` },
      { key: "ec4", src: `${import.meta.env.BASE_URL}assets/voluntarios/english-center/english-center-04.jpeg` },
      { key: "ec5", src: `${import.meta.env.BASE_URL}assets/voluntarios/english-center/english-center-05.jpeg` },
      { key: "ec6", src: `${import.meta.env.BASE_URL}assets/voluntarios/english-center/english-center-06.jpeg` },
      { key: "ec7", src: `${import.meta.env.BASE_URL}assets/voluntarios/english-center/english-center-07.jpeg` },
    ],
  },
  {
    id: "senda-de-vida",
    icon: Leaf,
    title: "Voluntarios Senda de Vida",
    titleEn: "Senda de Vida Volunteers",
    subtitle: "Servicio desde la fe y la comunidad",
    subtitleEn: "Service rooted in faith and community",
    description:
      "Este grupo representa a personas que comparten la visión de llevar esperanza a familias vulnerables. Su ayuda fortalece la preparación, organización y entrega de despensas.",
    descriptionEn:
      "This group represents people who share the vision of bringing hope to vulnerable families. Their help strengthens the preparation, organization, and delivery of pantry packages.",
    impact:
      "Su servicio recuerda que el ministerio no solo entrega alimento: también ofrece oración, escucha y acompañamiento a quienes atraviesan necesidad.",
    impactEn:
      "Their service reminds visitors that the ministry does more than deliver food: it also offers prayer, listening, and accompaniment to those in need.",
    stats: ["Fe en acción", "Apoyo comunitario", "Oración"],
    statsEn: ["Faith in action", "Community support", "Prayer"],
    color: "from-emerald-500 to-teal-600",
    photos: [
      { key: "sd1", src: `${import.meta.env.BASE_URL}assets/voluntarios/senda-de-vida/senda-de-vida-01.jpeg` },
      { key: "sd2", src: `${import.meta.env.BASE_URL}assets/voluntarios/senda-de-vida/senda-de-vida-02.jpeg` },
      { key: "sd3", src: `${import.meta.env.BASE_URL}assets/voluntarios/senda-de-vida/senda-de-vida-03.jpeg` },
      { key: "sd4", src: `${import.meta.env.BASE_URL}assets/voluntarios/senda-de-vida/senda-de-vida-04.jpeg` },
      { key: "sd5", src: `${import.meta.env.BASE_URL}assets/voluntarios/senda-de-vida/senda-de-vida-05.jpeg` },
      { key: "sd6", src: `${import.meta.env.BASE_URL}assets/voluntarios/senda-de-vida/senda-de-vida-06.jpeg` },
      { key: "sd7", src: `${import.meta.env.BASE_URL}assets/voluntarios/senda-de-vida/senda-de-vida-07.jpeg` },
      { key: "sd8", src: `${import.meta.env.BASE_URL}assets/voluntarios/senda-de-vida/senda-de-vida-08.jpeg` },
    ],
  },
  {
    id: "leoncitas",
    icon: Crown,
    title: "Voluntarios Leoncitas",
    titleEn: "Leoncitas Volunteers",
    subtitle: "Amistad, convivencia y servicio con propósito",
    subtitleEn: "Friendship, fellowship, and purposeful service",
    description:
      "Leoncitas nació de la amistad, la convivencia y el deseo de servir juntas. Con el tiempo, ese vínculo se transformó en un grupo oficial de voluntarios que participa con alegría en el empaque, la preparación y el acompañamiento del ministerio.",
    descriptionEn:
      "Leoncitas grew out of friendship, fellowship, and the desire to serve together. Over time, that bond became an official volunteer group that joyfully participates in packing, preparation, and ministry support.",
    impact:
      "Su historia recuerda que Dios también forma equipos a través de relaciones sencillas: amistades que crecen, se organizan y terminan llevando esperanza a otras familias.",
    impactEn:
      "Their story shows how God can form teams through simple relationships: friendships that grow, become organized, and end up carrying hope to other families.",
    stats: ["Amistad", "Convivencia", "Grupo oficial"],
    statsEn: ["Friendship", "Fellowship", "Official group"],
    color: "from-amber-400 to-orange-500",
    photos: [
      { key: "l1", src: `${import.meta.env.BASE_URL}assets/voluntarios/leoncitas/leoncitas-01.jpeg` },
      { key: "l2", src: `${import.meta.env.BASE_URL}assets/voluntarios/leoncitas/leoncitas-02.jpeg` },
      { key: "l3", src: `${import.meta.env.BASE_URL}assets/voluntarios/leoncitas/leoncitas-03.jpeg` },
      { key: "l4", src: `${import.meta.env.BASE_URL}assets/voluntarios/leoncitas/leoncitas-04.jpeg` },
      { key: "l5", src: `${import.meta.env.BASE_URL}assets/voluntarios/leoncitas/leoncitas-05.jpeg` },
      { key: "l6", src: `${import.meta.env.BASE_URL}assets/voluntarios/leoncitas/leoncitas-06.jpeg` },
      { key: "l7", src: `${import.meta.env.BASE_URL}assets/voluntarios/leoncitas/leoncitas-07.jpeg` },
      { key: "l8", src: `${import.meta.env.BASE_URL}assets/voluntarios/leoncitas/leoncitas-08.jpeg` },
    ],
  },
  {
    id: "mensajes-de-vida",
    icon: BookOpen,
    title: "Voluntarios Mensajes de Vida",
    titleEn: "Messages of Life Volunteers",
    subtitle: "Voluntarios de iglesia sirviendo con fe",
    subtitleEn: "Church volunteers serving with faith",
    description:
      "Mensajes de Vida reúne voluntarios de la iglesia que se suman al ministerio para preparar despensas, apoyar la logística y servir a las familias con un corazón dispuesto.",
    descriptionEn:
      "Messages of Life brings together church volunteers who join the ministry to prepare pantry packages, support logistics, and serve families with willing hearts.",
    impact:
      "Su participación une la ayuda material con el ánimo espiritual, recordando a cada familia que la iglesia también puede ser presencia, oración y compañía en tiempos difíciles.",
    impactEn:
      "Their participation connects material help with spiritual encouragement, reminding each family that the church can also be present through prayer, care, and companionship in difficult seasons.",
    stats: ["Evangelio", "Ánimo", "Acompañamiento"],
    statsEn: ["Gospel", "Encouragement", "Accompaniment"],
    color: "from-sky-500 to-indigo-600",
    photos: [
      { key: "mv1", src: `${import.meta.env.BASE_URL}assets/voluntarios/mensajes-de-vida/mensajes-de-vida-01.jpeg` },
      { key: "mv2", src: `${import.meta.env.BASE_URL}assets/voluntarios/mensajes-de-vida/mensajes-de-vida-02.jpeg` },
      { key: "mv3", src: `${import.meta.env.BASE_URL}assets/voluntarios/mensajes-de-vida/mensajes-de-vida-03.jpeg` },
      { key: "mv4", src: `${import.meta.env.BASE_URL}assets/voluntarios/mensajes-de-vida/mensajes-de-vida-04.jpeg` },
      { key: "mv5", src: `${import.meta.env.BASE_URL}assets/voluntarios/mensajes-de-vida/mensajes-de-vida-05.jpeg` },
      { key: "mv6", src: `${import.meta.env.BASE_URL}assets/voluntarios/mensajes-de-vida/mensajes-de-vida-06.jpeg` },
    ],
  },
  {
    id: "beneficiarios-voluntarios",
    icon: HeartPulse,
    title: "Beneficiarios que también son voluntarios",
    titleEn: "Beneficiaries Who Also Volunteer",
    subtitle: "Recibir ayuda y convertirla en servicio",
    subtitleEn: "Receiving help and turning it into service",
    description:
      "Algunos beneficiarios también participan como voluntarios. Esta reciprocidad refleja una comunidad viva: quienes han recibido apoyo también encuentran formas de bendecir a otros.",
    descriptionEn:
      "Some beneficiaries also participate as volunteers. This reciprocity reflects a living community: those who have received support also find ways to bless others.",
    impact:
      "El ministerio acompaña a viudas, huérfanos, personas con discapacidad, adultos mayores abandonados, familias vulnerables y personas con padecimientos crónicos o crisis temporales.",
    impactEn:
      "The ministry accompanies widows, orphans, people with disabilities, abandoned older adults, vulnerable families, and people facing chronic illness or temporary crisis.",
    stats: ["Reciprocidad", "Comunidad", "Esperanza compartida"],
    statsEn: ["Reciprocity", "Community", "Shared hope"],
    color: "from-fuchsia-500 to-rose-600",
    photos: [
      { key: "bv1", src: `${import.meta.env.BASE_URL}assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-01.jpeg` },
      { key: "bv2", src: `${import.meta.env.BASE_URL}assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-02.jpeg` },
      { key: "bv3", src: `${import.meta.env.BASE_URL}assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-03.jpeg` },
      { key: "bv4", src: `${import.meta.env.BASE_URL}assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-04.jpeg` },
      { key: "bv5", src: `${import.meta.env.BASE_URL}assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-05.jpeg` },
      { key: "bv6", src: `${import.meta.env.BASE_URL}assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-06.jpeg` },
      { key: "bv7", src: `${import.meta.env.BASE_URL}assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-07.jpeg` },
      { key: "bv8", src: `${import.meta.env.BASE_URL}assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-08.jpeg` },
      { key: "bv9", src: `${import.meta.env.BASE_URL}assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-09.jpeg` },
      { key: "bv10", src: `${import.meta.env.BASE_URL}assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-10.jpeg` },
      { key: "bv11", src: `${import.meta.env.BASE_URL}assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-11.jpeg` },
      { key: "bv12", src: `${import.meta.env.BASE_URL}assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-12.jpeg` },
      { key: "bv13", src: `${import.meta.env.BASE_URL}assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-13.jpeg` },
      { key: "bv14", src: `${import.meta.env.BASE_URL}assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-14.jpeg` },
      { key: "bv15", src: `${import.meta.env.BASE_URL}assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-15.jpeg` },
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
    photo: `${import.meta.env.BASE_URL}assets/voluntarios/senda-de-vida/senda-de-vida-01.jpeg`,
    icon: HeartHandshake,
    quotes: [
      {
        name: "Judith M.",
        fullText:
          "Me he unido al ministerio por el amor a los principios que anhela y realiza, me enorgullece ser parte de: servir y ayudar bajo la palabra de Dios nuestro Señor. Dicho así me hace una sierva más del Señor para demostrar que Dios nuestro Señor está presente. Asimismo, que a través del ministerio el objetivo sea cumplido y multiplicado, lo que hace que uno se sienta comprometido y entregado. En hora buena, que esto llegue a más personas que verdaderamente lo necesitan.",
      },
      {
        name: "Xochil X.",
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
    photo: `${import.meta.env.BASE_URL}assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-08.jpeg`,
    icon: Users,
    quotes: [
      {
        name: "Claudia V.",
        fullText:
          "Desde que recibimos ayuda hasta ahorita no nos vamos a la cama sin comer. En hora buena, que Dios bendiga a los fundadores de esta noble causa.",
      },
      {
        name: "Arturo I.",
        fullText:
          "Estoy agradecido por recibir la ayuda y gracias a ustedes mi economía ha mejorado un poco. Mi estilo de vida, sin duda alguna, ha tomado un respiro y gracias al ministerio tengo más para proporcionar a mi familia. También, pero no menos importante, la ropa: muchas gracias por ello, porque gracias a eso le he podido llevar algunas prendas a mi familia con todo el amor de mi corazón. Muchas gracias, se los agradezco de corazón.",
      },
      {
        name: "Araceli C.",
        fullText:
          "Buenas tardes, Sra. María de Lourdes. Mi testimonio es que Dios mandó sus ángeles hacia mi familia cuando estábamos careciendo alimento por muchas situaciones, pero la doctora Mónica y usted estaban aquí para apoyarnos. Nos han ayudado demasiado y la pancita ahora sí tiene alimento. Cada reflexión es sentir a Dios con nosotras y que está siempre a nuestro lado. Dios la bendiga siempre y a todos esos ángeles que nos están apoyando. Gracias.",
      },
      {
        name: "María Benita R.",
        fullText:
          "Recibir la despensa cada mes es como un abrazo al corazón. Saber que hay gente que piensa en nosotros y se preocupa por que tengamos lo básico en casa, no tiene precio. Es un gesto que nos llena de esperanza y nos da fuerzas para seguir adelante. Me siento muy afortunada de ser parte de esta familia del ministerio, donde todos nos apoyamos y nos queremos. Es un lugar donde encontramos comprensión y cariño, y donde sabemos que podemos contar con los demás en momentos difíciles. Es una bendición enorme. Saber que formamos parte de algo más grande y que no estamos solos en este camino es algo que agradezco profundamente.",
      },
      {
        name: "Concepción O.",
        fullText:
          "El recibir la despensa, la verdad es que me ha ayudado demasiado. He tenido días muy difíciles y gracias a la bendición de Dios, que a través de ustedes me bendice con los sagrados alimentos, he visto la gracia de Dios a través de ustedes. Sobre todo he tenido mucho tiempo para leer las reflexiones que me dan con la despensa y he concluido que la gracia de Dios viene de personas ajenas a mi familia y que aún existen personas buenas que buscan ayudar al prójimo. Le mando un caluroso abrazo y que Dios la bendiga a usted y a todo el ministerio. Ojalá su recompensa sea mayor al apoyo que da.",
      },
      {
        name: "Marco Antonio O.",
        fullText:
          "Gracias. Bueno, qué puedo decir: ha sido una ayuda increíble, porque sí hay veces que nos quedamos sin cosas para hacer de comer, y la despensa nos ha ayudado cuando pasamos por crisis un poco fuertes. Con las reflexiones nos han ayudado a estar más juntos como familia, a tratar de entendernos más y apoyarnos. Les agradezco de todo corazón por el apoyo que nos brindan, o más bien que les brindan a mis papás. Que Dios siempre los cuide y los bendiga.",
      },
      {
        name: "Laura J.",
        fullText:
          "Buenas tardes a todos. Gracias a la despensa que nos brindan nos ha ayudado mucho, pero sobre todo también agradezco mucho que nos dan una bonita reflexión, que con eso nos regresan mucha paz y sobre todo la fe. Gracias a la fundación.",
      },
      {
        name: "Maria Angeles M.",
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
    photo: `${import.meta.env.BASE_URL}assets/voluntarios/leoncitas/leoncitas-01.jpeg`,
    icon: HandHeart,
    quotes: [
      {
        name: "Cristina B.",
        fullText:
          "Yo comparto mi ayuda porque siempre me ha gustado ayudar a los que necesitan. Lo hago con mucho gusto.",
      },
      {
        name: "Alejandrina C.",
        fullText:
          "Agradezco a este ministerio por darme la oportunidad de servir a mis hermanos en una de sus necesidades, esperando sea muy útil. La principal razón que me motivó para compartir lo poco o mucho que Dios me provee es porque yo también he tenido necesidad y sé lo difícil que es esta situación. Muchas gracias por todo.",
      },
      {
        name: "Maria del Carmen M.",
        fullText:
          "A mí me motivó dar mi pequeña cooperación para alguien necesitado, porque mi hermano me platicó la labor hermosa de Andrea.",
      },
      {
        name: "Susana P.",
        fullText:
          "Mi misión siempre ha sido seguir la palabra de Dios, compartir, pensar y accionar en ayudar a quien lo necesite.",
      },
      {
        name: "Guillermina C.",
        fullText:
          "A mi edad me considero una persona muy bendecida por mi vida y familia. Estoy agradecida por tener la oportunidad de colaborar con el ministerio y poder ayudar a alguien que está necesitado, y contribuir con ayuda para la realización de este programa. Mientras pueda, cuentan conmigo. Muchas, muchas gracias y muchas bendiciones siempre.",
      },
      {
        name: "Adelina M.",
        fullText:
          "Buenas tardes. Quiero darles un pequeño testimonio de por qué me convertí en donador. Es algo que se siente en mi corazón al ver la necesidad. Esto yo ya lo venía haciendo desde antes: compraba despensas y salíamos a los semáforos o a las calles y las entregábamos a las personas que veíamos que tenían la necesidad de una despensa. Pero sobre todo es el amor, el amor que Jesús pone en nuestro corazón, porque hemos aprendido bíblicamente que es mejor dar que recibir. También hay una palabra que dice: bendiciendo, te bendeciré. Esto quiere decir que yo con una despensa puedo bendecir a una familia y Dios me bendice a mí. Quiero dar ese testimonio también: yo no aporto una cantidad porque me sobre, sino porque lo siento en mi corazón. Quisiera poder aportar mucho más porque sé que hay muchísima gente que lo necesita, pero lo poco que doy lo doy con todo mi corazón. He visto la mano de Dios en mi economía, que Dios me sorprende muchas veces porque lo doy de corazón y Dios me da de tal manera que puedo ver cómo Dios me socorre y me provee. Ese es uno de los motivos por el cual yo me convertí en donador, porque Cristo pone en mí ese querer y el hacer; siempre es su voluntad. Yo sé que su voluntad es que nosotros, que tenemos un plato de comida, una cobija segura, un techo que nos cubre, escojamos algo para darlo a aquellas personas que no tienen nada. Dios nos bendice grandemente porque Él mira el corazón lleno de amor con el cual nos despojamos para poder apoyar a algunas familias. Gracias a Dios me encontré con Andy y sé que el ministerio Trompeta está haciendo una buena labor. Seguimos adelante; si el día de mañana puedo donar un poco más, con mucho gusto lo haré, porque sé que cada vez hay más gente que necesita recibir una despensa para tener un plato de comida seguro. Ese es mi testimonio. Espero que le sirva y que Dios les bendiga a todos los que son parte de este ministerio Trompeta.",
      },
      {
        name: "Ofelia R.",
        fullText:
          "Bendecido día para todos ustedes. Le doy gracias a Dios por tantas bendiciones que nos ha dado sin merecer y nos sigue dando. Con lo mucho o poco que tengamos, ayudemos a nuestros hermanos más necesitados. Dios Padre lo multiplique y tengamos un tesoro en el cielo, porque así como venimos nos vamos sin nada. Bendiciones, hermano.",
      },
    ],
  },
];

const testimonialTextEn = {
  "Judith M.":
    "I joined the ministry because of my love for the principles it longs for and carries out. I am proud to be part of serving and helping under the Word of God our Lord. In that way, it makes me one more servant of the Lord, showing that God our Lord is present. Likewise, through the ministry, may the objective be fulfilled and multiplied, which makes one feel committed and devoted. Thankfully, may this reach more people who truly need it.",
  Xochil:
    "When I met my friend Andy and realized the work she is doing, supporting low-income families with food, I was immediately moved and remembered God's great mercy toward us, and I decided to support her. I asked myself: she is here in this state doing this. And I said to myself: I can do it too, especially because I am originally from here in Tlaxcala. Because of the example I saw, I am supporting as long as God allows me to. Every time I go to help, my heart grows in love for those in need and I feel happy to be able to help in this way. May God always bless her in her hard work, and she will continue to count on me. May God remain with her always.",
  "Xochil X.":
    "When I met my friend Andy and realized the work she is doing, supporting low-income families with food, I was immediately moved and remembered God's great mercy toward us, and I decided to support her. I asked myself: she is here in this state doing this. And I said to myself: I can do it too, especially because I am originally from here in Tlaxcala. Because of the example I saw, I am supporting as long as God allows me to. Every time I go to help, my heart grows in love for those in need and I feel happy to be able to help in this way. May God always bless her in her hard work, and she will continue to count on me. May God remain with her always.",
  "Claudia V.":
    "Since we started receiving help until now, we do not go to bed without eating. Thankfully, may God bless the founders of this noble cause.",
  "Arturo I.":
    "I am grateful to receive the help, and thanks to you my economy has improved a little. My lifestyle has, without a doubt, taken a breath, and thanks to the ministry I have more to provide for my family. Also, but no less important, the clothing: thank you very much for that, because thanks to it I have been able to take some garments to my family with all the love in my heart. Thank you very much; I thank you from my heart.",
  "Araceli C.":
    "Good afternoon, Mrs. María de Lourdes. My testimony is that God sent His angels to my family when we were lacking food because of many situations, but Dr. Mónica and you were here to support us. You have helped us so much, and now our stomachs have food. Each reflection helps us feel God with us and know that He is always by our side. May God always bless you and all those angels who are supporting us. Thank you.",
  "Maria Bertha R.":
    "Receiving the pantry package every month is like a hug to the heart. Knowing that there are people who think about us and care that we have the basics at home is priceless. It is a gesture that fills us with hope and gives us strength to keep going. I feel very fortunate to be part of this ministry family, where we all support and care for one another. It is a place where we find understanding and affection, and where we know we can count on others in difficult moments. It is an enormous blessing. Knowing that we are part of something greater and that we are not alone on this path is something I am deeply grateful for.",
  "María Benita R.":
    "Receiving the pantry package every month is like a hug to the heart. Knowing that there are people who think about us and care that we have the basics at home is priceless. It is a gesture that fills us with hope and gives us strength to keep going. I feel very fortunate to be part of this ministry family, where we all support and care for one another. It is a place where we find understanding and affection, and where we know we can count on others in difficult moments. It is an enormous blessing. Knowing that we are part of something greater and that we are not alone on this path is something I am deeply grateful for.",
  "Concepción O.":
    "Receiving the pantry package has honestly helped me so much. I have had very difficult days, and thanks to God's blessing, which through you blesses me with sacred food, I have seen God's grace through you. Above all, I have had a lot of time to read the reflections you give me with the pantry package, and I have concluded that God's grace comes through people outside my family, and that there are still good people who seek to help their neighbor. I send you a warm hug, and may God bless you and the whole ministry. May your reward be greater than the support you give.",
  "Marco Antonio O.":
    "Thank you. Well, what can I say: it has been incredible help, because there are times when we run out of things to cook, and the pantry package has helped us when we go through somewhat strong crises. The reflections have helped us stay more united as a family, try to understand each other more, and support one another. I thank you with all my heart for the support you give us, or rather, that you give to my parents. May God always care for you and bless you.",
  "Laura J.":
    "Good afternoon to everyone. Thanks to the pantry package you provide, it has helped us a lot, but above all I am also very grateful that you give us a beautiful reflection, which brings us much peace and, above all, faith. Thank you to the foundation.",
  "Cristina B.":
    "I share my help because I have always liked helping those who need it. I do it gladly.",
  "Maria Angeles M.":
    "Good evening. First of all, my family and I are grateful because thanks to the foundation we do not lack food on the table. I thank you from my heart because we are blessed. Thank you from the heart to the people who always keep us in mind. Thank you very much.",
  "Alejandrina C.":
    "I thank this ministry for giving me the opportunity to serve my brothers and sisters in one of their needs, hoping it will be very useful. The main reason that motivated me to share the little or much that God provides for me is because I have also experienced need, and I know how difficult that situation is. Thank you very much for everything.",
  "Maria del Carmen M.":
    "What motivated me to give my small contribution for someone in need was that my brother told me about Andrea's beautiful work.",
  "Susana P.":
    "My mission has always been to follow the Word of God, to share, to think, and to take action in helping whoever needs it.",
  "Guillermina C.":
    "At my age, I consider myself a person very blessed by my life and family. I am grateful to have the opportunity to collaborate with the ministry and to be able to help someone who is in need, and to contribute help toward the realization of this programa. As long as I can, you can count on me. Many, many thanks and many blessings always.",
  "Adelina M.":
    "Good afternoon. I want to give you a small testimony about why I became a donor. It is something I feel in my heart when I see need. I had already been doing this before: I bought pantry packages and we went out to traffic lights or streets and gave them to people we saw had the need for a pantry package. But above all, it is love, the love that Jesus places in our hearts, because we have learned biblically that it is better to give than to receive. There is also a word that says: blessing, I will bless you. This means that with one pantry package I can bless a family, and God blesses me. I also want to give that testimony: I do not contribute an amount because I have extra, but because I feel it in my heart. I wish I could contribute much more because I know there are so many people who need it, but the little I give, I give with all my heart. I have seen God's hand in my finances; God surprises me many times because I give from the heart, and God gives to me in such a way that I can see how God helps and provides for me. That is one of the reasons I became a donor, because Christ places in me both the desire and the action; it is always His will. I know His will is that those of us who have a plate of food, a secure blanket, and a roof that covers us should choose something to give to those who have nothing. God blesses us greatly because He sees the heart full of love with which we let go of what we have in order to support some families. Thank God I met Andy, and I know the Trumpet ministry is doing good work. We keep moving forward; if tomorrow I can donate a little more, I will gladly do it, because I know more and more people need to receive a pantry package so they can have a secure plate of food. That is my testimony. I hope it is useful, and may God bless all who are part of this Trumpet ministry.",
  "Ofelia R.":
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
    exploreGroups: "Conocer a los grupos",
    communityEyebrow: "Manos que multiplican",
    impactMore: "Conocer más sobre su impacto",
    impactLess: "Ocultar detalle de impacto",
    ctaEyebrow: "Súmate a la misión",
    ctaTitle: "Cada mano que empaca y cada oración compartida transforma un hogar",
    ctaText:
      "Detrás de cada despensa entregada en Tlaxcala hay estudiantes, familias, iglesias, donadores y beneficiarios sirviendo unidos por amor al prójimo.",
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
    exploreGroups: "Explore volunteer groups",
    communityEyebrow: "Hands that multiply hope",
    impactMore: "Learn more about their impact",
    impactLess: "Hide impact details",
    ctaEyebrow: "Join the mission",
    ctaTitle: "Every hand that packs and every shared prayer transforms a home",
    ctaText:
      "Behind every pantry package delivered in Tlaxcala are students, families, churches, donors, and beneficiaries serving together out of love for their neighbor.",
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

// Carrusel con estado local para índice activo y reproducción automática.
const PhotoCarousel = ({ photos, language }) => {
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
    <div className="photo-frame relative overflow-hidden bg-ink">
      <div className="relative h-[300px] overflow-hidden sm:h-[360px] lg:h-[400px]">
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {photos.map((photo, index) => (
            <div
              key={`${photo.key}-${index}`}
              className="relative h-full min-w-full flex-shrink-0 overflow-hidden bg-ink"
            >
              <img
                src={photo.src}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover blur-2xl opacity-35"
                loading="lazy"
              />
              <img
                src={photo.src}
                alt={photo.alt || `Voluntarios ${index + 1}`}
                className="relative z-10 h-full w-full object-contain p-2"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="photo-overlay z-20" />
            </div>
          ))}
        </div>

        {/* Controles para recorrer las imágenes en ambas direcciones. */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-ink/60 p-2.5 text-white backdrop-blur-sm transition hover:scale-105 hover:bg-ink/85"
          aria-label={language === "en" ? "Previous image" : "Imagen anterior"}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-ink/60 p-2.5 text-white backdrop-blur-sm transition hover:scale-105 hover:bg-ink/85"
          aria-label={language === "en" ? "Next image" : "Siguiente imagen"}
        >
          <ChevronRight size={20} />
        </button>

        {/* Indicadores sincronizados con el índice de la imagen activa. */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
          {photos.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-7 bg-ember"
                  : "w-2 bg-white/45 hover:bg-white/75"
              }`}
              aria-label={`${language === "en" ? "Go to image" : "Ir a imagen"} ${index + 1}`}
            />
          ))}
        </div>

        {/* Permite alternar la reproducción automática del carrusel. */}
        <button
          type="button"
          onClick={togglePlay}
          className="absolute right-3 top-3 rounded-full bg-ink/60 p-2 text-white backdrop-blur-sm transition hover:bg-ink/85"
          aria-label={isPlaying ? (language === "en" ? "Pause" : "Pausar") : (language === "en" ? "Play" : "Reproducir")}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
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
    if (isFullscreen || totalSlides < 2) return undefined;
    const timer = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % totalSlides);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isFullscreen, totalSlides]);

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
      <div className="space-y-3">
        <figure className="photo-frame relative h-[360px] w-full overflow-hidden bg-ink sm:h-[440px] lg:h-[480px]">
          <img
            src={currentPhoto.src}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover blur-2xl opacity-35"
          />
          <img
            key={currentPhoto.src}
            src={currentPhoto.src}
            alt={`${title} ${currentIndex + 1}`}
            className="gallery-photo-enter relative z-10 h-full w-full object-contain p-2 sm:p-4"
            loading={currentIndex === 0 ? "eager" : "lazy"}
          />
          <div className="photo-overlay z-20" />

          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
            <div>
              <p className="font-display text-lg font-semibold text-white sm:text-xl">
                {title}
              </p>
              <p className="mt-0.5 text-xs font-medium text-white/75">
                {language === "en" ? "Photo" : "Fotografía"} {currentIndex + 1} / {totalSlides}
              </p>
            </div>
            <span className="rounded-full bg-white/15 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-md">
              {currentIndex + 1} / {totalSlides}
            </span>
          </figcaption>

          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-3.5 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ink/60 text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-ink/85"
            aria-label={language === "en" ? "Previous photo" : "Foto anterior"}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-3.5 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-ink/60 text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-ink/85"
            aria-label={language === "en" ? "Next photo" : "Siguiente foto"}
          >
            <ChevronRight size={22} />
          </button>
          <button
            type="button"
            onClick={() => setIsFullscreen(true)}
            className="absolute right-3.5 top-3.5 grid h-10 w-10 place-items-center rounded-full bg-ink/60 text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-ink/85"
            aria-label={language === "en" ? "View fullscreen" : "Ver en pantalla completa"}
          >
            <Maximize2 size={18} />
          </button>
        </figure>

        {/* Miniaturas de la galería del grupo */}
        <div className="no-scrollbar flex gap-2.5 overflow-x-auto pb-1">
          {photos.map((photo, index) => (
            <button
              key={photo.key}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-16 w-20 shrink-0 overflow-hidden rounded-2xl border-2 transition duration-200 ${
                index === currentIndex
                  ? "border-ember shadow-md opacity-100"
                  : "border-transparent opacity-60 hover:opacity-95"
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
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md sm:p-6">
            <button
              type="button"
              onClick={() => setIsFullscreen(false)}
              className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white shadow-lg backdrop-blur transition hover:bg-white/25 sm:h-12 sm:w-12"
              aria-label={language === "en" ? "Close fullscreen" : "Cerrar pantalla completa"}
            >
              <X size={24} />
            </button>
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white shadow-lg backdrop-blur transition hover:bg-white/25 sm:left-5 sm:h-14 sm:w-14"
              aria-label={language === "en" ? "Previous photo" : "Foto anterior"}
            >
              <ChevronLeft size={30} />
            </button>

            <figure className="flex h-full max-h-[calc(100vh-5.5rem)] w-full max-w-[calc(100vw-2rem)] items-center justify-center sm:max-h-[calc(100vh-6.5rem)] sm:max-w-[calc(100vw-8rem)]">
              <img
                src={currentPhoto.src}
                alt={`${title} ${currentIndex + 1}`}
                className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
              />
            </figure>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white shadow-lg backdrop-blur transition hover:bg-white/25 sm:right-5 sm:h-14 sm:w-14"
              aria-label={language === "en" ? "Next photo" : "Siguiente foto"}
            >
              <ChevronRight size={30} />
            </button>
            <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white shadow-lg backdrop-blur">
              {currentIndex + 1} / {totalSlides}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

// Presenta testimonios asociados al grupo seleccionado y expone sus acciones.
const TestimonialGroup = ({ group, copy, language, onOpenTestimonial }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const groupTitle = language === "en" ? group.titleEn : group.title;
  const groupEyebrow = language === "en" ? group.eyebrowEn : group.eyebrow;
  const activeQuote = group.quotes[activeIndex] ?? group.quotes[0];
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
    <div className="grid items-stretch gap-8 lg:grid-cols-12">
      {/* Tarjeta de insignia con la letra inicial del testimonio activo (sin fotografía) */}
      <div className="relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-ink via-[#0D2B52] to-[#0A1E3C] p-7 text-white shadow-photo sm:min-h-[380px] sm:p-9 lg:col-span-5">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-ember/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-12 h-64 w-64 rounded-full bg-ministry-teal/20 blur-3xl" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-8 right-4 select-none font-display text-[11rem] font-bold leading-none text-white/[0.05] sm:text-[13rem]"
        >
          {activeQuote.name.charAt(0).toUpperCase()}
        </span>

        <div className="relative z-10 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-ember-light ring-1 ring-white/15 backdrop-blur-md">
            <Icon size={14} />
            {groupEyebrow}
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white/80">
            {activeIndex + 1} / {group.quotes.length}
          </span>
        </div>

        <div className="relative z-10 my-6 flex flex-col items-center text-center">
          <div
            key={activeQuote.name}
            className="gallery-photo-enter grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-ember via-rose-500 to-amber-500 font-display text-4xl font-bold text-white shadow-xl shadow-ember/30 ring-4 ring-white/15 sm:h-28 sm:w-28 sm:text-5xl"
          >
            {activeQuote.name.charAt(0).toUpperCase()}
          </div>
          <h3 className="mt-4 font-display text-2xl font-semibold text-white sm:text-3xl">
            {activeQuote.name}
          </h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            {groupTitle}
          </p>
        </div>

        {/* Selector rápido por inicial de cada testimonio del grupo */}
        <div className="relative z-10 border-t border-white/10 pt-4">
          <p className="mb-2.5 text-center text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white/60">
            {group.quotes.length} {copy.testimonials}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {group.quotes.map((quote, index) => {
              const isSelected = activeIndex === index;
              return (
                <button
                  key={`avatar-${quote.name}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  title={quote.name}
                  aria-label={quote.name}
                  className={`grid h-9 w-9 place-items-center rounded-full font-display text-sm font-bold transition ${
                    isSelected
                      ? "scale-110 bg-white text-ember shadow-md ring-2 ring-ember-light"
                      : "bg-white/10 text-white/80 hover:bg-white/25 hover:text-white"
                  }`}
                >
                  {quote.name.charAt(0).toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tarjeta editorial del testimonio */}
      <div className="soft-card flex flex-col justify-between lg:col-span-7">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/5 pb-4">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-ember to-rose-500 font-display text-lg font-bold text-white shadow-sm">
                {activeQuote.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h4 className="font-display text-xl font-semibold text-ink">
                  {activeQuote.name}
                </h4>
                <p className="text-xs font-medium text-slate-500">
                  {groupTitle} • {copy.testimony} {activeIndex + 1} / {group.quotes.length}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previous}
                aria-label={language === "en" ? "Previous testimony" : "Testimonio anterior"}
                className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 bg-white text-ink transition hover:border-ember hover:text-ember"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label={language === "en" ? "Next testimony" : "Siguiente testimonio"}
                className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition hover:bg-ember"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="mt-6">
            <Quote size={28} className="mb-3 text-ember/60" />
            <p className="font-display text-xl italic leading-relaxed text-ink sm:text-2xl">
              “{previewText}”
            </p>

            {hasLongText && (
              <button
                type="button"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-ember transition hover:text-ember-dark"
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
                <ChevronRight size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Selector directo de personas dentro del grupo con ícono de inicial */}
        <div className="mt-8 border-t border-ink/5 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5">
              {group.quotes.map((quote, index) => (
                <button
                  key={quote.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`inline-flex items-center gap-2 rounded-full py-1 pl-1.5 pr-3.5 text-xs font-bold transition ${
                    activeIndex === index
                      ? "bg-ink text-white shadow-sm"
                      : "bg-cream text-slate-600 hover:bg-sand hover:text-ink"
                  }`}
                >
                  <span
                    className={`grid h-5 w-5 place-items-center rounded-full text-[0.65rem] font-bold ${
                      activeIndex === index
                        ? "bg-ember text-white"
                        : "bg-ink/10 text-ink"
                    }`}
                  >
                    {quote.name.charAt(0).toUpperCase()}
                  </span>
                  {quote.name}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="btn-secondary !px-5 !py-2 text-xs"
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
      </div>
    </div>
  );
};

// Diálogo modal con contenido ampliado y cierre accesible.
const TestimonialModal = ({ testimonial, onClose, copy }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink/80 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <article
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[1.75rem] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-ink/10 bg-white/95 px-6 py-5 backdrop-blur">
          <div>
            <span className="kicker">
              {testimonial.eyebrow} • {testimonial.group}
            </span>
            <h3 className="mt-1 font-display text-2xl font-semibold text-ink sm:text-3xl">
              {testimonial.name}
            </h3>
          </div>
          <button
            type="button"
            aria-label={copy.closeTestimony}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream text-ink transition hover:bg-sand"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6 sm:p-8">
          <Quote className="mb-4 text-ember/50" size={34} />
          <p className="whitespace-pre-line font-display text-lg italic leading-8 text-ink/90 sm:text-xl">
            “{testimonial.fullText}”
          </p>
          <div className="mt-8 flex justify-end border-t border-ink/5 pt-5">
            <button
              type="button"
              className="btn-primary"
              onClick={onClose}
            >
              {copy.close}
            </button>
          </div>
        </div>
      </article>
    </div>,
    document.body
  );
};

export default function Volunteers() {
  const { language, t } = useLanguage();
  const copy = volunteerPageCopy[language] ?? volunteerPageCopy.es;
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(volunteerGroups[0]);
  const [showGroupImpact, setShowGroupImpact] = useState(false);
  const [activeTestimonialCategory, setActiveTestimonialCategory] = useState(0);

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
  const ActiveGroupIcon = selectedGroup.icon;
  const activeTestimonialGroup =
    testimonialGroups[activeTestimonialCategory] ?? testimonialGroups[0];

  return (
    <>
      {/* ===== HERO DIVIDIDO: HISTORIA Y ROSTROS COMPLETOS ===== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ink via-[#0D2B52] to-[#0A1E3C] text-white">
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-ember/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-ministry-teal/15 blur-3xl" />

        <div className="section-shell relative z-10 w-full py-12 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="motion-rise lg:col-span-6">
              <span className="kicker kicker-light">
                <HeartHandshake size={15} />
                {t("volunteers.carouselLabel")}
              </span>

              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.06] text-white sm:text-5xl lg:text-6xl">
                {t("volunteers.title")}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
                {t("volunteers.text")}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href="#grupos" className="btn-primary">
                  <Users size={16} />
                  {copy.exploreGroups}
                </a>
                <a href="#testimonios" className="btn-ghost-light">
                  <MessageSquareHeart size={16} />
                  {copy.voices}
                </a>
              </div>

              {/* Cifras rápidas en la base del hero */}
              <div className="mt-10 grid gap-6 border-t border-white/15 pt-7 sm:grid-cols-3">
                <div>
                  <p className="font-display text-3xl font-semibold text-white sm:text-4xl">48</p>
                  <p className="mt-1 text-xs font-medium text-white/75 sm:text-sm">
                    {language === "en" ? "Active volunteers" : "Voluntarios activos"}
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl font-semibold text-ember-light sm:text-4xl">5</p>
                  <p className="mt-1 text-xs font-medium text-white/75 sm:text-sm">
                    {language === "en" ? "Volunteer groups" : "Grupos de voluntarios"}
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl font-semibold text-white sm:text-4xl">
                    {testimonialGroups.reduce((acc, g) => acc + g.quotes.length, 0)}
                  </p>
                  <p className="mt-1 text-xs font-medium text-white/75 sm:text-sm">
                    {copy.voices}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <figure className="photo-frame aspect-[4/3] w-full shadow-2xl ring-1 ring-white/15">
                <img
                  src={`${import.meta.env.BASE_URL}assets/voluntarios/english-center/english-center-02.jpeg`}
                  alt={t("volunteers.title")}
                  className="h-full w-full object-cover object-center"
                />
                <div className="photo-overlay" />
                <figcaption className="absolute bottom-5 left-5 right-5 text-sm font-semibold text-white">
                  {t("volunteers.carouselLabel")}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MOSAICO VISUAL Y ESPÍRITU DE RECIPROCIDAD ===== */}
      <section className="section-shell bg-cream">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal grid gap-4 sm:grid-cols-12">
            <figure className="photo-frame h-80 sm:col-span-7 sm:h-[430px]">
              <img
                src={featuredVolunteerPhotos[0]?.src}
                alt={t("volunteers.photoLabels.teamBags")}
                loading="lazy"
              />
              <div className="photo-overlay" />
              <figcaption className="absolute bottom-5 left-5 right-5 font-display text-lg font-medium text-white">
                {t("volunteers.galleryTitle")}
              </figcaption>
            </figure>

            <div className="grid gap-4 sm:col-span-5">
              <figure className="photo-frame h-52 sm:h-[207px]">
                <img
                  src={featuredVolunteerPhotos[1]?.src}
                  alt={t("volunteers.photoLabels.youngTeam")}
                  loading="lazy"
                />
              </figure>
              <figure className="photo-frame h-52 sm:h-[207px]">
                <img
                  src={featuredVolunteerPhotos[2]?.src}
                  alt={t("volunteers.photoLabels.bagFilling")}
                  loading="lazy"
                />
              </figure>
            </div>
          </div>

          <div className="reveal space-y-6">
            <span className="kicker">{copy.communityEyebrow}</span>
            <h2 className="title-lg">{t("volunteers.galleryTitle")}</h2>
            <p className="lead">{t("volunteers.placeholder")}</p>

            <blockquote className="rounded-2xl border-l-4 border-ember bg-white p-6 shadow-soft">
              <Sparkles size={20} className="mb-2 text-ember" />
              <p className="font-display text-lg italic leading-snug text-ink sm:text-xl">
                {t("volunteers.reciprocalText")}
              </p>
            </blockquote>

            <div className="pt-1">
              <PhotoCarousel photos={volunteerPhotos} language={language} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== GRUPOS DE VOLUNTARIOS ===== */}
      <section id="grupos" className="section-shell scroll-mt-28 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="kicker">{copy.groups}</span>
              <h2 className="title-lg mt-3">{copy.fiveWays}</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-slate-600">
              {copy.chooseGroup}
            </p>
          </div>

          {/* Tarjetas selectoras de grupo con miniatura fotográfica */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {volunteerGroups.map((group) => {
              const Icon = group.icon;
              const isActive = group.id === selectedGroup.id;
              const groupTitle = language === "en" ? group.titleEn : group.title;
              const coverPhoto = group.photos[0]?.src;

              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => {
                    setSelectedGroup(group);
                    setShowGroupImpact(false);
                  }}
                  aria-pressed={isActive}
                  className={`group relative flex items-center gap-3.5 overflow-hidden rounded-2xl border p-3 text-left transition duration-300 hover:-translate-y-0.5 ${
                    isActive
                      ? "border-ink bg-ink text-white shadow-soft"
                      : "border-ink/10 bg-cream/60 text-ink hover:border-ember/40 hover:bg-white"
                  }`}
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                    <img
                      src={coverPhoto}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-ink/35 text-white">
                      <Icon size={18} />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <span
                      className={`block text-sm font-bold leading-snug ${
                        isActive ? "text-white" : "text-ink"
                      }`}
                    >
                      {groupTitle}
                    </span>
                    <span
                      className={`mt-1 block text-xs ${
                        isActive ? "text-ember-light" : "text-slate-500"
                      }`}
                    >
                      {group.photos.length} {language === "en" ? "photos" : "fotos"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Panel principal del grupo seleccionado con fotografía protagonista */}
          <div
            id={selectedGroup.id}
            className="mt-8 grid items-start gap-8 rounded-[2rem] border border-ink/5 bg-cream p-6 shadow-soft sm:p-8 lg:grid-cols-12 lg:p-10"
          >
            {/* Galería grande a la izquierda/derecha */}
            <div className="lg:col-span-7">
              <GroupPhotoCarousel
                photos={selectedGroup.photos}
                title={content.title}
                language={language}
              />
            </div>

            {/* Información editorial del grupo con divulgación progresiva */}
            <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-ember/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ember">
                  <ActiveGroupIcon size={15} />
                  {language === "en" ? "Volunteer Group" : "Grupo de voluntarios"}
                </div>

                <h3 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                  {content.title}
                </h3>

                <p className="mt-2 font-display text-lg italic text-ember-dark">
                  {content.subtitle}
                </p>

                <p className="mt-5 text-base leading-7 text-slate-600">
                  {content.description}
                </p>

                {/* Etiquetas clave */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {content.stats.map((stat) => (
                    <span
                      key={stat}
                      className="rounded-full border border-ink/10 bg-white px-4 py-1.5 text-xs font-bold text-ink shadow-sm"
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                {/* Divulgación progresiva del texto de impacto para no saturar */}
                <div className="mt-6 border-t border-ink/10 pt-5">
                  <button
                    type="button"
                    onClick={() => setShowGroupImpact((prev) => !prev)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-ember transition hover:text-ember-dark"
                  >
                    <span>{showGroupImpact ? copy.impactLess : copy.impactMore}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        showGroupImpact ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {showGroupImpact && (
                    <div className="mt-4 rounded-2xl border border-ink/5 bg-white p-5 shadow-sm">
                      <p className="text-sm leading-7 text-slate-700">
                        {content.impact}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5 border border-ink/5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {t("volunteers.gallery")}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {t("volunteers.galleryIntro")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIOS (CON PESTAÑAS POR CATEGORÍA PARA EVITAR SATURACIÓN) ===== */}
      <section id="testimonios" className="section-shell scroll-mt-28 bg-sand/60">
        <div className="mx-auto max-w-7xl">
          <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="kicker">
                <MessageSquareHeart size={14} />
                {copy.voices}
              </span>
              <h2 className="title-lg mt-3">{copy.title}</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {copy.intro}
              </p>
            </div>

            {/* Pestañas para alternar entre Voluntarios, Beneficiarios y Donadores */}
            <div className="inline-flex flex-wrap gap-1.5 rounded-full bg-cream p-1.5 shadow-sm">
              {testimonialGroups.map((group, idx) => {
                const Icon = group.icon;
                const isSelected = activeTestimonialCategory === idx;
                const label = language === "en" ? group.titleEn : group.title;
                return (
                  <button
                    key={group.title}
                    type="button"
                    onClick={() => setActiveTestimonialCategory(idx)}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition ${
                      isSelected
                        ? "bg-ink text-white shadow-sm"
                        : "text-slate-600 hover:text-ink"
                    }`}
                  >
                    <Icon size={16} />
                    <span>{label}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs ${
                        isSelected ? "bg-white/20 text-white" : "bg-sand text-slate-600"
                      }`}
                    >
                      {group.quotes.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10">
            <TestimonialGroup
              key={activeTestimonialGroup.title}
              group={activeTestimonialGroup}
              copy={copy}
              language={language}
              onOpenTestimonial={setSelectedTestimonial}
            />
          </div>
        </div>
      </section>

      {/* ===== IMPACTO EN NÚMEROS (SECCIÓN OSCURA DE IMPACTO) ===== */}
      <section className="section-shell bg-ink text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <span className="kicker kicker-light">
                <TrendingUp size={14} />
                {language === "en" ? "Impact in numbers" : "Impacto en números"}
              </span>
              <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
                {language === "en" ? "The ministry in figures" : "El ministerio en cifras"}
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/80">
                {t("volunteers.placeholder")}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  value: "48",
                  label: language === "en" ? "Active volunteers" : "Voluntarios activos",
                  icon: HeartHandshake,
                },
                {
                  value: "5",
                  label: language === "en" ? "Volunteer groups" : "Grupos de voluntarios",
                  icon: Church,
                },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/20 text-ember-light">
                      <Icon size={22} />
                    </div>
                    <p className="font-display text-5xl font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm font-medium text-white/75">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== LLAMADO EMOCIONAL FINAL ===== */}
      <section className="section-shell bg-cream">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink via-[#0D2B52] to-ink text-white shadow-photo">
          <div className="grid items-center gap-8 p-6 sm:p-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="kicker kicker-light">{copy.ctaEyebrow}</span>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
                {copy.ctaTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-white/85 sm:text-lg">
                {copy.ctaText}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/522463307994?text=${encodeURIComponent(
                    language === "en"
                      ? "Hello! I would like to join as a volunteer at Trumpet Call Ministries."
                      : "¡Hola! Me gustaría sumarme como voluntario en Trumpet Call Ministries."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
                >
                  <MessageCircle size={18} className="fill-white/20" />
                  {language === "en" ? "Join via WhatsApp" : "Sumarme por WhatsApp"}
                </a>
                <a href="#grupos" className="btn-primary">
                  <Users size={16} />
                  {copy.exploreGroups}
                </a>
                <Link to="/misiones" className="btn-ghost-light">
                  {t("nav.hospital")}
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <figure className="photo-frame aspect-[4/3] w-full ring-1 ring-white/15">
                <img
                  src={`${import.meta.env.BASE_URL}assets/voluntarios/beneficiarios-voluntarios/beneficiarios-voluntarios-13.jpeg`}
                  alt={copy.ctaTitle}
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
                <div className="photo-overlay" />
              </figure>
            </div>
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
