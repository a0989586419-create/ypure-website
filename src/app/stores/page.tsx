"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPin,
  Clock,
  Wifi,
  CreditCard,
  Bell,
  ExternalLink,
  Thermometer,
  ParkingSquare,
  Accessibility,
  Wind,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreFront from "@/components/illustrations/StoreFront";
import Link from "next/link";

const stores = [
  {
    id: "s1",
    name: "悠洗自助洗衣",
    address: "嘉義市東區文雅街181號",
    city: "嘉義",
    machines: 6,
    mapUrl: "https://maps.google.com/?q=嘉義市東區文雅街181號",
    owner: "陳老闆",
    quote: "雲管家讓我每月省下 20 小時的對帳時間",
  },
  {
    id: "s2",
    name: "吼你洗自助洗衣 玉清店",
    address: "苗栗市玉清路51號",
    city: "苗栗",
    machines: 6,
    mapUrl: "https://maps.google.com/?q=苗栗市玉清路51號",
    owner: "林老闆",
    quote: "顧客用 LINE Pay 付款後，回頭率提升 35%",
  },
  {
    id: "s3",
    name: "吼你洗自助洗衣 農會店",
    address: "苗栗市為公路290號",
    city: "苗栗",
    machines: 6,
    mapUrl: "https://maps.google.com/?q=苗栗市為公路290號",
    owner: "林老闆",
    quote: "兩家店的營收報表一目了然，管理輕鬆很多",
  },
  {
    id: "s4",
    name: "熊愛洗自助洗衣",
    address: "台中市西屯區福聯街22巷2號",
    city: "台中",
    machines: 6,
    mapUrl: "https://maps.google.com/?q=台中市西屯區福聯街22巷2號",
    owner: "張老闆",
    quote: "機器故障即時通知，維修速度快了一倍",
  },
  {
    id: "s5",
    name: "上好洗自助洗衣",
    address: "高雄市鳳山區北平路214號",
    city: "高雄",
    machines: 6,
    mapUrl: "https://maps.google.com/?q=高雄市鳳山區北平路214號",
    owner: "黃老闆",
    quote: "儲值優惠帶動了客單價，營收穩定成長",
  },
];

const tags = [
  { icon: CreditCard, label: "LINE Pay" },
  { icon: Wifi, label: "即時監控" },
  { icon: Bell, label: "推播通知" },
];

const amenities = [
  { icon: Clock, label: "24hr" },
  { icon: Wind, label: "冷氣" },
  { icon: ParkingSquare, label: "停車" },
  { icon: Accessibility, label: "無障礙" },
];

const upcomingCities = [
  { city: "台北", stores: "3-5 家" },
  { city: "新竹", stores: "2-3 家" },
  { city: "台南", stores: "2-3 家" },
  { city: "桃園", stores: "2-3 家" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function StoresPage() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInView = useInView(mapRef, { once: true, margin: "-50px" });
  const comingSoonRef = useRef<HTMLDivElement>(null);
  const comingSoonInView = useInView(comingSoonRef, { once: true, margin: "-50px" });

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]">
          <div className="max-w-4xl mx-auto text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                服務據點
              </h1>
              <div className="w-16 h-1 bg-[#E5B94C] mx-auto mb-6 rounded-full" />
              <p className="text-gray-400 text-lg">
                全台 5 家合作店，持續擴展中
              </p>
            </motion.div>
          </div>
        </section>

        {/* Store Cards */}
        <section className="py-20 bg-[#0a0a0a] px-4">
          <div className="max-w-6xl mx-auto">
            <div
              ref={gridRef}
              className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory md:overflow-visible md:flex-none pb-4 md:pb-0"
            >
              {stores.map((store, i) => (
                <motion.div
                  key={store.id}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={gridInView ? "visible" : "hidden"}
                  className="bg-white rounded-2xl p-6 border-l-4 border-[#E5B94C] shadow-lg hover:shadow-xl transition-all duration-300 min-w-[85vw] snap-center md:min-w-0"
                >
                  <div className="mb-4 -mx-2 -mt-2">
                    <StoreFront variant={((i % 3) + 1) as 1 | 2 | 3} className="w-full h-24 opacity-30" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {store.name}
                  </h3>
                  <div className="flex items-start gap-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#E5B94C]" />
                    <span className="text-sm">{store.address}</span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#E5B94C] bg-[#E5B94C]/10 px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3" />
                      24 小時營業
                    </span>
                    <span className="text-xs text-gray-400">
                      {store.machines} 台機器
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((tag) => {
                      const Icon = tag.icon;
                      return (
                        <span
                          key={tag.label}
                          className="inline-flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full"
                        >
                          <Icon className="w-3 h-3" />
                          {tag.label}
                        </span>
                      );
                    })}
                  </div>

                  {/* Amenity Icons */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {amenities.map((amenity) => {
                      const Icon = amenity.icon;
                      return (
                        <span
                          key={amenity.label}
                          className="inline-flex items-center gap-0.5 text-[10px] text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-200"
                        >
                          <Icon className="w-2.5 h-2.5" />
                          {amenity.label}
                        </span>
                      );
                    })}
                  </div>

                  {/* Testimonial Quote */}
                  <div className="border-l-2 border-[#E5B94C]/50 pl-3 mb-5">
                    <p className="text-sm italic text-gray-500">
                      &ldquo;{store.quote}&rdquo;
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      -- {store.owner}
                    </p>
                  </div>

                  <a
                    href={store.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[#E5B94C] hover:text-[#F0D078] transition-colors"
                  >
                    在 Google Maps 開啟
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Visualization */}
        <section className="py-20 bg-[#111] px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              ref={mapRef}
              initial={{ opacity: 0 }}
              animate={mapInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-12">據點分布</h2>

              <div className="relative bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden">
                {/* SVG Taiwan Administrative Map */}
                <div className="w-full relative flex justify-center py-8 px-4">
                  <svg viewBox="0 0 400 600" className="w-full max-w-[420px] h-auto" xmlns="http://www.w3.org/2000/svg">
                    {/* County fills with political map colors */}
                    {/* 台東縣 */}
                    <path d="M291,459L286,459L285,455L289,453L293,455Z M281,326L286,327L289,330L287,334L286,338L285,342L285,346L281,349L278,352L277,356L276,360L275,364L272,368L274,372L273,376L275,379L271,382L267,384L265,388L263,391L262,395L259,399L258,403L255,406L251,409L250,413L247,417L244,420L240,422L236,424L234,428L236,431L234,435L232,439L229,442L225,445L222,447L218,449L214,451L210,454L206,456L204,459L202,463L202,468L199,471L196,474L194,479L193,483L191,487L190,491L188,495L186,498L185,502L183,507L181,510L180,515L180,519L181,523L179,527L174,527L170,526L167,523L164,519L160,517L163,514L162,510L157,508L154,506L156,502L159,499L161,495L159,491L155,488L157,484L155,481L154,477L153,472L154,468L155,464L158,460L161,457L162,453L166,451L170,450L173,447L178,447L181,444L181,440L182,436L180,432L176,430L175,426L175,422L171,420L169,416L169,412L168,408L169,404L173,401L175,397L178,394L176,390L178,386L180,382L179,378L179,374L182,371L183,366L184,362L188,360L191,357L194,354L199,353L203,351L208,351L211,353L213,357L215,361L219,363L224,363L227,367L231,365L235,367L237,371L238,375L242,377L247,379L248,383L253,382L257,382L258,378L258,373L261,370L262,366L264,362L265,358L269,355L268,351L271,347L273,344L277,341L273,338L274,334L276,330L280,328Z M293,555L297,553L301,553L304,556L304,560L308,562L307,566L303,565L299,562L295,560L292,557Z" fill="#8FBC8F" fillOpacity={0.45} stroke="white" strokeWidth={0.8} />
                    {/* 宜蘭縣 */}
                    <path d="M354,126L356,130L359,132L357,136L358,140L359,145L354,146L353,150L356,153L352,155L349,158L346,161L344,165L343,169L342,173L340,177L338,181L334,179L329,179L325,177L321,175L317,174L315,178L310,178L306,180L302,179L297,177L293,176L288,175L284,174L281,171L276,170L272,170L267,171L265,168L260,167L259,163L258,159L261,155L264,152L268,150L271,147L272,142L274,138L274,134L278,132L280,128L281,124L285,121L290,121L294,119L298,117L302,115L306,113L308,109L308,105L311,101L314,99L318,98L323,98L327,95L330,93L335,91L339,90L343,88L344,84L348,83L353,81L354,77L355,73L360,73L364,71L368,70L373,69L369,71L367,75L363,77L361,80L357,83L354,86L351,89L350,94L349,98L349,102L349,106L350,111L352,114L352,119L353,123Z" fill="#DDA0DD" fillOpacity={0.45} stroke="white" strokeWidth={0.8} />
                    {/* 台北市 */}
                    <path d="M302,32L305,34L305,38L308,42L310,45L311,49L314,53L313,57L315,61L319,62L314,63L310,63L309,68L311,71L307,73L302,73L300,69L296,69L295,64L291,65L288,61L292,58L292,54L289,51L284,50L284,45L287,42L291,39L295,38L299,35L301,32Z" fill="#D2B48C" fillOpacity={0.45} stroke="white" strokeWidth={0.8} />
                    {/* 雲林縣 */}
                    <path d="M29,318L25,320L23,323L18,323L21,319L25,317L29,315L33,313L31,316Z M135,289L134,293L133,297L138,298L142,298L147,297L150,300L151,304L147,304L142,305L138,305L135,301L131,303L126,302L121,302L117,301L113,299L110,295L106,295L101,295L97,296L92,296L88,297L84,300L80,301L77,305L72,306L69,309L65,309L63,313L60,316L55,315L51,315L46,314L44,310L44,305L44,301L43,297L44,292L46,289L49,285L49,281L50,277L54,274L49,274L51,269L52,265L56,263L58,259L63,260L68,262L72,263L77,263L82,263L86,262L91,262L96,262L100,263L104,265L109,266L114,267L118,266L123,267L128,268L132,268L136,271L137,275L135,279L135,283L136,287Z" fill="#F0E68C" fillOpacity={0.45} stroke="white" strokeWidth={0.8} />
                    {/* 桃園縣 */}
                    <path d="M235,51L238,49L243,48L247,46L252,48L255,50L259,51L264,53L268,56L272,58L273,62L273,66L270,69L265,70L261,70L260,75L262,79L258,81L261,84L264,87L265,91L268,94L272,93L276,95L279,98L282,101L279,105L278,109L280,113L283,116L286,119L283,122L281,126L279,130L276,133L272,135L268,134L265,131L265,126L264,122L261,119L257,117L256,113L256,109L253,105L249,103L245,101L241,100L237,98L233,96L229,93L229,89L226,86L221,86L217,84L213,83L211,80L208,76L204,76L199,77L201,73L202,69L204,65L207,62L211,59L215,58L219,55L223,54L228,53L233,52Z" fill="#87CEEB" fillOpacity={0.45} stroke="white" strokeWidth={0.8} />
                    {/* 屏東縣 */}
                    <path d="M83,513L84,509L88,508L86,511Z M144,565L143,561L146,558L146,553L148,550L147,546L145,542L144,537L143,534L141,530L139,526L137,522L135,518L133,514L130,511L127,508L124,504L120,502L116,500L112,497L107,496L103,494L100,491L97,488L96,484L95,479L97,476L99,472L99,467L97,463L97,459L98,454L100,451L101,446L101,442L101,438L102,434L103,430L107,427L112,428L116,428L121,427L124,424L128,421L132,420L137,420L139,424L144,423L147,420L152,421L156,423L159,426L163,425L167,423L171,424L175,426L176,431L181,432L182,436L181,440L180,444L177,447L173,447L170,451L166,451L162,454L160,458L157,461L155,465L154,469L153,473L154,477L155,481L156,485L155,489L159,491L161,495L158,499L156,502L154,506L158,509L162,511L162,515L162,519L163,523L168,524L172,526L176,528L180,526L181,530L180,534L181,539L181,543L180,547L182,550L180,555L181,559L180,563L177,566L173,568L171,572L172,576L174,580L170,580L166,578L162,576L158,574L154,576L153,580L149,578L148,573L148,569L145,566Z" fill="#F4A460" fillOpacity={0.45} stroke="white" strokeWidth={0.8} />
                    {/* 台中市 - active */}
                    <path d="M106,194L107,190L111,186L113,183L118,182L119,178L120,174L123,171L125,167L128,164L131,161L135,163L138,166L141,169L144,172L148,174L152,176L156,179L160,180L165,181L168,184L173,185L177,184L182,185L186,183L185,178L189,177L194,178L198,178L203,180L206,183L210,182L214,180L219,179L223,177L226,173L230,173L233,170L237,167L240,170L243,167L245,163L249,162L254,161L258,160L259,164L261,168L266,168L268,172L273,170L277,170L281,171L279,175L279,179L275,182L272,185L270,189L266,192L263,195L259,195L254,194L249,194L245,195L240,195L236,196L231,196L227,198L223,201L219,201L216,204L212,206L207,207L203,207L201,211L197,213L192,213L188,214L183,215L180,217L177,214L173,213L170,216L169,220L165,223L163,226L160,230L157,232L152,232L147,232L142,231L138,229L134,228L132,225L131,221L130,216L125,216L120,215L116,213L114,209L112,205L110,201L108,198L103,198L106,194Z" fill="#98D8C8" fillOpacity={0.7} stroke="white" strokeWidth={1.5} />
                    {/* 台南市 */}
                    <path d="M123,364L126,361L130,363L134,362L135,366L134,370L131,373L127,376L125,380L123,383L121,387L117,389L113,392L110,395L106,397L102,399L101,403L98,406L96,410L94,414L89,413L85,416L82,418L78,417L73,417L69,416L64,418L60,416L56,414L51,414L50,410L48,406L45,402L42,399L38,397L34,395L30,393L26,389L24,385L26,381L28,378L30,374L31,369L33,366L33,361L35,358L35,353L37,350L39,346L44,346L48,348L51,351L55,351L59,349L62,345L66,344L70,342L71,338L75,335L80,335L84,333L89,332L93,331L98,331L102,333L106,335L109,338L110,342L115,344L114,348L113,352L114,356L113,360L117,362L121,363Z" fill="#C9A9E2" fillOpacity={0.45} stroke="white" strokeWidth={0.8} />
                    {/* 基隆市 */}
                    <path d="M333,40L338,40L342,42L347,42L346,46L342,47L337,48L338,52L340,56L336,57L332,57L327,55L324,53L319,51L317,47L314,44L318,42L323,41L327,39L331,39Z" fill="#F7DC6F" fillOpacity={0.45} stroke="white" strokeWidth={0.8} />
                    {/* 南投縣 */}
                    <path d="M243,197L246,193L250,194L255,194L260,195L263,197L260,201L256,203L252,206L251,210L255,212L259,214L258,218L256,222L252,224L251,228L249,232L248,236L250,239L249,244L250,248L249,252L246,255L244,259L243,263L241,267L239,271L240,275L242,278L244,282L243,286L242,291L241,295L239,299L235,300L231,303L229,306L227,310L225,314L220,313L216,314L211,316L209,319L210,323L206,326L202,324L198,322L193,322L189,321L184,321L179,321L175,321L170,321L168,317L167,313L165,309L167,305L167,301L163,300L158,299L154,298L150,296L145,297L141,298L137,296L133,294L134,290L136,286L135,282L135,278L137,274L136,271L139,268L142,264L137,265L134,262L132,258L132,253L133,249L133,245L133,241L136,237L134,234L138,232L143,232L149,232L153,233L158,232L161,229L164,225L166,222L169,218L170,214L175,214L178,217L182,214L187,215L191,212L195,213L200,212L202,208L206,208L211,207L214,204L218,201L222,201L226,199L230,196L234,197L239,196L243,197Z" fill="#AED6F1" fillOpacity={0.45} stroke="white" strokeWidth={0.8} />
                    {/* 苗栗縣 - active */}
                    <path d="M237,148L240,151L244,154L247,157L247,161L244,164L242,169L238,167L234,170L231,173L226,174L223,176L219,179L214,180L210,182L206,184L203,181L199,178L195,178L190,177L185,177L185,181L182,185L178,184L173,185L169,184L166,181L161,180L157,179L153,176L149,174L145,172L141,169L139,166L135,163L132,160L135,157L138,154L140,150L143,147L144,143L146,139L148,135L151,132L156,131L157,127L160,124L164,122L169,122L172,119L175,116L177,112L181,111L185,114L189,115L194,115L194,119L197,122L201,124L205,127L208,129L213,131L215,135L213,139L214,143L212,147L215,150L220,150L224,149L229,149L234,149Z" fill="#E8DAEF" fillOpacity={0.7} stroke="white" strokeWidth={1.5} />
                    {/* 嘉義市 - active */}
                    <path d="M96,315L101,314L105,316L108,318L109,322L104,323L101,326L96,323L92,323L90,319L93,316Z" fill="#ABEBC6" fillOpacity={0.7} stroke="white" strokeWidth={1.5} />
                    {/* 新竹縣 */}
                    <path d="M191,86L193,83L195,79L199,77L204,77L208,76L211,79L213,83L217,84L221,86L226,86L229,89L229,93L233,96L237,97L240,100L245,99L247,102L251,105L255,107L254,111L255,115L259,118L262,121L264,125L267,128L266,132L270,135L274,136L272,140L272,144L270,148L267,151L263,153L260,156L257,160L253,161L249,162L247,158L244,155L242,151L240,148L235,149L230,150L226,148L221,149L217,151L213,149L214,145L212,141L214,137L214,133L210,131L206,128L202,126L199,123L196,120L195,116L191,115L189,111L193,108L197,106L201,104L204,107L205,103L203,99L200,96L195,95L191,94L188,91L190,87Z" fill="#F9E79F" fillOpacity={0.45} stroke="white" strokeWidth={0.8} />
                    {/* 新北市 */}
                    <path d="M344,83L343,87L339,90L335,91L330,93L327,95L323,98L319,98L314,99L311,101L308,105L308,109L307,113L302,115L298,117L295,119L290,121L286,119L283,116L280,112L278,109L279,105L280,100L277,97L274,93L270,94L265,94L263,90L263,86L259,84L259,79L260,75L260,71L264,70L269,70L272,67L275,64L272,60L271,56L266,56L263,53L258,51L254,49L257,46L262,45L266,44L270,42L274,40L274,36L277,33L280,29L282,25L286,24L289,21L293,18L297,18L302,18L306,18L310,20L314,22L315,26L319,29L321,32L326,32L325,36L324,40L319,41L315,43L317,46L319,50L323,53L327,55L331,56L335,58L339,56L338,53L336,49L341,47L345,48L348,44L352,45L357,46L361,46L366,46L367,50L367,54L369,58L370,62L374,63L379,63L383,65L379,67L375,69L371,69L366,70L362,72L357,73L353,74L354,78L352,82L348,82Z" fill="#D5F5E3" fillOpacity={0.45} stroke="white" strokeWidth={0.8} />
                    {/* 花蓮縣 */}
                    <path d="M269,353L267,357L265,360L263,364L262,368L259,371L259,376L259,380L255,382L250,383L247,380L243,378L239,376L237,372L236,368L233,365L228,367L224,364L220,363L216,361L213,358L211,354L208,351L209,346L205,344L201,341L198,339L201,336L204,333L204,329L207,326L211,323L209,319L212,316L216,314L220,313L225,313L227,310L229,306L233,303L236,301L240,298L241,293L243,290L244,285L243,281L242,277L239,274L240,270L241,266L243,262L245,258L248,255L248,250L250,246L250,242L250,238L247,235L250,231L252,227L253,223L257,221L258,217L256,213L252,211L252,207L256,203L259,201L263,199L264,194L267,191L269,188L272,185L276,182L278,178L280,174L284,174L289,176L293,176L298,177L302,179L306,181L310,178L315,178L313,174L317,175L322,176L326,178L330,179L335,179L339,181L337,185L335,189L332,192L329,195L325,198L321,200L320,204L321,208L319,212L316,215L313,218L312,222L314,227L316,230L316,234L314,238L316,234L312,237L310,241L311,245L310,249L309,254L308,258L307,262L305,265L304,270L304,274L302,278L300,282L300,286L299,290L297,294L296,298L296,302L294,306L292,310L292,314L292,318L291,322L290,326L286,327L281,326L278,329L275,332L273,336L275,339L274,343L271,347L269,350Z" fill="#FADBD8" fillOpacity={0.45} stroke="white" strokeWidth={0.8} />
                    {/* 高雄市 - active */}
                    <path d="M101,438L101,443L101,447L100,451L98,455L97,459L97,464L99,468L99,472L97,476L95,480L96,484L92,487L88,485L84,483L81,480L77,477L73,476L72,471L69,468L67,465L65,461L64,457L66,453L68,449L65,447L63,443L60,439L59,435L54,432L55,428L54,425L52,420L51,417L53,413L58,415L62,416L67,417L71,416L76,417L81,418L84,416L88,413L92,414L95,411L97,407L99,404L102,400L106,398L109,395L113,392L116,390L120,387L123,384L125,380L127,376L130,373L134,371L135,367L137,363L136,359L134,355L135,351L140,351L144,352L147,349L151,348L155,346L158,343L162,341L166,338L169,336L172,332L175,329L179,328L182,324L187,324L191,322L196,322L200,323L202,327L205,330L203,334L200,337L198,340L202,342L206,344L209,348L205,350L201,352L196,353L192,356L189,359L185,360L184,365L184,369L181,372L179,376L179,380L179,385L177,389L178,393L175,395L173,399L171,403L168,406L168,410L169,414L170,418L174,420L176,424L171,424L167,423L162,425L158,426L155,423L151,421L147,420L143,423L139,423L136,420L131,421L127,422L123,425L120,428L115,428L111,428L106,427L103,431L102,435Z" fill="#D4E6F1" fillOpacity={0.7} stroke="white" strokeWidth={1.5} />
                    {/* 彰化縣 */}
                    <path d="M132,245L133,249L132,253L132,257L132,261L136,264L141,263L140,268L135,269L131,268L126,268L121,267L117,266L112,267L107,266L103,265L99,263L94,262L89,262L85,262L80,263L75,263L70,262L66,261L65,257L70,255L72,251L74,247L74,243L77,239L78,235L82,232L85,228L89,225L87,222L92,219L96,219L97,215L93,216L88,217L91,213L94,211L98,207L102,206L105,203L110,201L112,205L114,209L116,213L120,215L125,216L129,216L131,221L132,225L134,228L138,229L135,232L136,236L135,240L133,244Z" fill="#FCF3CF" fillOpacity={0.45} stroke="white" strokeWidth={0.8} />
                    {/* 嘉義縣 - active */}
                    <path d="M137,351L134,355L136,359L133,362L128,362L124,363L119,364L115,362L115,358L113,354L113,349L116,346L112,343L111,339L106,338L108,335L104,334L100,332L95,332L90,332L86,333L81,333L78,336L73,337L70,340L66,342L63,346L60,349L56,351L51,352L48,348L44,346L40,344L41,340L45,338L48,334L45,331L45,327L45,323L47,319L42,319L40,315L44,314L49,314L54,315L58,316L63,315L62,311L67,312L70,309L74,306L78,304L82,301L86,298L90,296L94,296L99,295L103,295L108,294L111,297L115,300L119,301L123,303L128,303L132,302L136,304L141,304L145,304L150,305L151,301L155,298L159,299L163,300L168,302L167,306L165,310L167,314L168,318L171,321L176,321L180,321L185,321L189,322L185,324L181,325L178,328L173,330L171,333L169,337L165,338L161,341L157,343L154,346L151,349L146,350L143,352L138,351Z" fill="#E8F8F5" fillOpacity={0.7} stroke="white" strokeWidth={1.5} />
                    {/* 新竹市 */}
                    <path d="M184,95L184,91L189,92L192,94L197,95L201,97L204,100L205,104L201,104L196,106L193,108L189,111L186,114L184,111L179,111L181,107L181,103L182,99Z" fill="#FDEDEC" fillOpacity={0.45} stroke="white" strokeWidth={0.8} />

                    {/* Gold map pins for active store cities */}
                    {/* 苗栗 pin */}
                    <g transform="translate(165, 122)">
                      <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z" fill="#E5B94C" />
                      <circle cx="12" cy="12" r="5" fill="white" />
                    </g>
                    <text x="177" y="118" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>苗栗</text>
                    <text x="177" y="158" textAnchor="middle" fill="#E5B94C" fontSize="10" fontWeight="600">2 店</text>

                    {/* 台中 pin */}
                    <g transform="translate(150, 170)">
                      <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z" fill="#E5B94C" />
                      <circle cx="12" cy="12" r="5" fill="white" />
                    </g>
                    <text x="162" y="166" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>台中</text>
                    <text x="162" y="206" textAnchor="middle" fill="#E5B94C" fontSize="10" fontWeight="600">1 店</text>

                    {/* 嘉義 pin */}
                    <g transform="translate(88, 295)">
                      <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z" fill="#E5B94C" />
                      <circle cx="12" cy="12" r="5" fill="white" />
                    </g>
                    <text x="100" y="291" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>嘉義</text>
                    <text x="100" y="331" textAnchor="middle" fill="#E5B94C" fontSize="10" fontWeight="600">1 店</text>

                    {/* 高雄 pin */}
                    <g transform="translate(100, 390)">
                      <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24C24 5.4 18.6 0 12 0z" fill="#E5B94C" />
                      <circle cx="12" cy="12" r="5" fill="white" />
                    </g>
                    <text x="112" y="386" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>高雄</text>
                    <text x="112" y="426" textAnchor="middle" fill="#E5B94C" fontSize="10" fontWeight="600">1 店</text>

                    {/* Gray reference city markers */}
                    {/* 台北 */}
                    <circle cx="305" cy="54" r="4" fill="#666" stroke="white" strokeWidth={0.5} />
                    <text x="305" y="48" textAnchor="middle" fill="#888" fontSize="10">台北</text>

                    {/* 新竹 */}
                    <circle cx="210" cy="100" r="4" fill="#666" stroke="white" strokeWidth={0.5} />
                    <text x="210" y="94" textAnchor="middle" fill="#888" fontSize="10">新竹</text>

                    {/* 台南 */}
                    <circle cx="85" cy="372" r="4" fill="#666" stroke="white" strokeWidth={0.5} />
                    <text x="85" y="366" textAnchor="middle" fill="#888" fontSize="10">台南</text>
                  </svg>
                </div>

                {/* Store location cards */}
                <div className="p-6 md:p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {/* 苗栗 x2 */}
                    <a href="https://maps.google.com/?q=苗栗市玉清路51號" target="_blank" rel="noopener noreferrer"
                      className="group bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-[#E5B94C]/40 hover:bg-white/[0.1] transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E5B94C] animate-pulse" />
                        <span className="text-white font-bold text-sm">苗栗</span>
                        <span className="text-[#E5B94C] text-xs font-medium ml-auto">2 店</span>
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed">玉清店 / 農會店</p>
                    </a>

                    {/* 台中 x1 */}
                    <a href="https://maps.google.com/?q=台中市西屯區福聯街22巷2號" target="_blank" rel="noopener noreferrer"
                      className="group bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-[#E5B94C]/40 hover:bg-white/[0.1] transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E5B94C] animate-pulse" />
                        <span className="text-white font-bold text-sm">台中</span>
                        <span className="text-[#E5B94C] text-xs font-medium ml-auto">1 店</span>
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed">熊愛洗</p>
                    </a>

                    {/* 嘉義 x1 */}
                    <a href="https://maps.google.com/?q=嘉義市東區文雅街181號" target="_blank" rel="noopener noreferrer"
                      className="group bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-[#E5B94C]/40 hover:bg-white/[0.1] transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E5B94C] animate-pulse" />
                        <span className="text-white font-bold text-sm">嘉義</span>
                        <span className="text-[#E5B94C] text-xs font-medium ml-auto">1 店</span>
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed">悠洗自助洗衣</p>
                    </a>

                    {/* 高雄 x1 */}
                    <a href="https://maps.google.com/?q=高雄市鳳山區北平路214號" target="_blank" rel="noopener noreferrer"
                      className="group bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-[#E5B94C]/40 hover:bg-white/[0.1] transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E5B94C] animate-pulse" />
                        <span className="text-white font-bold text-sm">高雄</span>
                        <span className="text-[#E5B94C] text-xs font-medium ml-auto">1 店</span>
                      </div>
                      <p className="text-gray-500 text-xs leading-relaxed">上好洗</p>
                    </a>
                  </div>

                  <div className="flex items-center justify-center gap-3 mt-6 text-gray-500 text-sm">
                    <span>覆蓋 4 縣市</span>
                    <span className="text-gray-700">.</span>
                    <span>5 家門店</span>
                    <span className="text-gray-700">.</span>
                    <span>30 台智慧機台</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 bg-[#0a0a0a] px-4">
          <div className="max-w-4xl mx-auto text-center" ref={comingSoonRef}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={comingSoonInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">即將擴展</h2>
              <div className="w-16 h-1 bg-[#E5B94C] mx-auto mb-4 rounded-full" />
              <p className="text-gray-400 mb-12">
                2026 年目標：全台 20 家合作店
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {upcomingCities.map((item, i) => (
                <motion.div
                  key={item.city}
                  custom={i + 1}
                  variants={fadeUp}
                  initial="hidden"
                  animate={comingSoonInView ? "visible" : "hidden"}
                  className="rounded-2xl bg-white p-6 text-center shadow-lg"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="h-2 w-2 rounded-full bg-[#E5B94C] animate-pulse" />
                    <span className="text-2xl font-bold text-gray-900">{item.city}</span>
                  </div>
                  <p className="text-sm text-[#E5B94C]">{item.stores}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-20 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              想讓您的店加入雲管家？
            </h2>
            <p className="text-gray-400 mb-8">
              我們持續尋找優質的自助洗衣店合作夥伴
            </p>
            <Link
              href="/business"
              className="inline-block bg-[#E5B94C] text-[#0d0d2b] font-bold rounded-full px-8 py-4 text-lg hover:bg-[#F0D078] transition-colors duration-300"
            >
              了解店家方案
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
