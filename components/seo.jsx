import Head from "next/head";

export default function SEO({
  title,
  article_title,
  description,
  image,
  keywords,
  resolvedUrl = "",
  pdf_url = "https://mspes.kz",
  page_from = 0,
  page_to = 0,
  authors = [],
  issn = "",
  date = "",
  journal_issue = "",
  language = "",
  html_url = "",
  tags=[]
}) {
  return (
    <Head>
      <title>{title ? `${title}` : "mspes.kz"}</title>
      <meta data-n-head="ssr" charSet="utf-8" />
      {authors?.map((data, id) => {
        return (
      <>
      <meta key={id} name="citation_author" content={data.full_name} />
      <meta name="citation_author_institution" content={data.work_place} />
      </>
        );
      })}
      {tags?.map((data, id) => {
        return (
          <meta name="citation_keywords" content={data?.title} />
        );
      })}
      <meta name="citation_issn" content={issn} />
      <meta name="citation_journal_title" content={title} />
      <meta name="citation_title" content={article_title} />
      <meta name="citation_firstpage" content={page_from} />
      <meta name="citation_lastpage" content={page_to} />
      <meta name="citation_pdf_url" content={pdf_url} />
      <meta name="citation_language" content={language} />
      <meta name="citation_volume" content="1" />
      <meta name="citation_issue" content={journal_issue} />
      <meta name="citation_abstract_html_url" content={html_url} />
      <meta
        data-n-head="ssr"
        name="dc.Source"
        content={`https://mspes.kz${resolvedUrl}`}
      />
      <meta data-n-head="ssr" name="dc.Date" content={date} />
      <meta data-n-head="ssr" name="dc.Format" content="application/pdf" />
      <meta
        data-n-head="ssr"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        data-n-head="ssr"
        name="robots"
        data-hid="robots"
        content="index, follow"
      />
      <meta
        data-n-head="ssr"
        name="googlebot"
        data-hid="googlebot"
        content="index, follow"
      />
      <meta data-n-head="ssr" name="description" content={description} />
      <meta
        data-n-head="ssr"
        name="keywords"
        content={
          keywords
            ? keywords
            : "Manyovr lokomotivi, manyovr ishi, tortuv hisobi, yarim reys, yoqilg‘i sarfi, tajriba, EНM uchun dasturб chegaradagi stansiya, о‘tkazish qobiliyati, qayta ishlash qobiliyati, yuk oqimi, temir yо‘l uchastkasi, transport, yuk, multimodal tashish, transport tizimi, multimodallik, intermodal tashish, avtomobil transporti, temir yo‘l transporti, shahar atrof qatnovi, mahalliy qatnov, yo‘lovchi filiallari, yo‘lovchilar aylanmasi, yo‘lovchilar oqimi, avtomobillar ishchi parki, avtomobillar inventar parki, sanoat korxonasi, manyovr ishlari, avtomobil transporti, yuk tashish, manyovr ishlari, manyovr lokomotivi, vaqt me’yori, tortuv hisoblari, yo‘l nishabligi, manyovr tezligi, tormoz yo‘li, tish, sun'iy oziqlantirish, tish kasalliklari, bolalar og’iz bo’shlig’i stomatologik holati, sut prikusi, tuprik bezlari, sialadenoz, og'iz suyuqligi, sialoz, avtotrombotsit massasi, monoterapiya. | Маневровый локомотив, маневровая работа, тяговый расчет, полурейс, расход топлива, эксперимент, программа для ЭВМ, пограничная станция, пропускная способность, перерабатывающая способность, грузопоток, железнодорожный участок, Транспорт, грузовые, мультимодальные перевозки, транспортная система, мультимодальные, интермодальные перевозки, автомобильный транспорт, железнодорожный транспорт, пригородное сообщение, местное сообщение, пассажирские филиалы, пассажиропоток, Рабочий парк вагонов, инвентарный парк вагонов, промышленное предприятие, маневровая работа, вагонопоток, грузопоток, Маневровая работа, маневровой локомотив, нормы времени, тяговый расчет, уклон пути, скорость маневров, тормозной путь, зуб, искусственное вскармливание, стоматологические заболевания, стоматологические состояния полости рта у детей, молочный прикус, краниофасциальная область, врождённая расщелина губы и нёба, слюнные железы, сиаладеноз, ротовая жидкость, сиалоз, аутотромбоцитарная масса, монотерапия, рубец после ожога, фракционный лазер, фракционный фототермолиз, посттравматическое рубцевание, лечение, | shunting locomotive, shunting work, traction calculation, semi-flight, fuel consumption, experiment, computer program, border station, capacity, processing capacity, cargo flow, railway section, Transport, freight, multimodal transportation, transportation system, multimodal, intermodal transportation, car transporti, railway transporti, suburban traffic, local traffic, passenger branches, passenger traffic, Working fleet of cars, inventory fleet of cars, industrial enterprise, shunting work, car traffic, freight traffic, Shunting work, shunting locomotive, time limits, traction calculation, track gradient, maneuvering speed, stopping distance, tooth, artificial feeding, dental diseases, dental conditions of the oral cavity in children, milk bite, monitoring, morphometry, cleft, child, lip, palate, salivary glands, sialadenosis, oral fluid, sialosis, autothrombocyte mass, monotherapy, scar after burn, fractional laser, fractional photothermolysis, post-traumatic scarring, treatment, salivary glands, sialadenosis, oral fluid, sialosis, autothrombocyte mass, monotherapy, scar after burn, fractional laser, fractional photothermolysis, post-traumatic scarring, treatment, "
        }
      />
      <meta
        data-n-head="ssr"
        data-hid="name"
        name="itemprop"
        content="Ilmiy maqolalar mspes.kz | Hаучные статьи mspes.kz | scientific articles mspes.kz"
      />
      <meta
        data-n-head="ssr"
        data-hid="og:url"
        property="og:url"
        content={`https://mspes.kz${resolvedUrl}`}
      />
      <meta data-n-head="ssr" property="og:type" content="website" />
      <meta
        data-n-head="ssr"
        property="og:title"
        content="mspes.kz"
        key="ogtitle"
      />
      <meta
        data-n-head="ssr"
        property="og:description"
        content={description}
        key="ogdesc"
      />
      <meta
        data-n-head="ssr"
        data-hid="og:site_name"
        property="og:site_name"
        content="mspes.kz"
      />
      <meta property="og:image" content={image || "/mspes.jpg"} key="ogimage" />
      <meta
        data-n-head="ssr"
        data-hid="twitter:url"
        name="twitter:url"
        content={`https://mspes.kz${resolvedUrl}`}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title ? `${title}` : `mspes.kz`} />
      <meta name="twitter:description" content={description} />
      <meta
        data-n-head="ssr"
        data-hid="twitter:creator"
        name="twitter:creator"
        content="@mspes.kz"
      />
      <meta
        data-n-head="ssr"
        data-hid="twitter:site"
        name="twitter:site"
        content="@mspes.kz"
      />
      <meta
        data-n-head="ssr"
        name="twitter:image"
        content={image || "/mspes.jpg"}
      />
      <link rel="icon" href="/mspes.jpg" />
    </Head>
  );
}
