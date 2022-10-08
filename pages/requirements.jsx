import React from "react";
import { Typography } from "antd";
import { tl } from "../configs/i18n";
import SEO from "../components/seo";

const { Title, Paragraph, Text } = Typography;

function Requirements() {
  return (
    <>
      <SEO />
      <div className="container section">
        <Typography>
          <Title>{tl("requirements.title")}:</Title>
          <Paragraph>
            <ul>
              <li>{tl("category1")}</li>
              <li>{tl("category2")}</li>
              <li>{tl("category3")}</li>
              <li>{tl("category4")}</li>
              <li>{tl("category5")}</li>
              <li>{tl("category6")}</li>
              <li>{tl("category7")}</li>
              <li>{tl("category8")}</li>
            </ul>
          </Paragraph>
          <Title level={3}>Примечание для авторов статьи:</Title>
          <Paragraph>
            - статьи принимаются на казахском, русском, узбекском и английском
            языках;
          </Paragraph>
          <Paragraph>
            - статьи можно отправлять в электронном виде до конца каждого месяца
            через: httpmspeskz (telegram) или aerjan84@mail.ru (эл. почта);
          </Paragraph>
          <Paragraph>
            - статьи, присланные на журнал, будут рассмотрены редакционной
            коллегией, неотредактированные статьи не будут опубликованы;
          </Paragraph>
          <Paragraph>
            - в журнал могут подавать статьи профессора, докторанты, независимые
            исследователи, магистранты, одаренные студенты.
          </Paragraph>
          <Paragraph>
            - статьи, принятые в журнал, будут размещены на сайт журнала
            (www.mspes.kz) и в телеграм-канале https://t.me/mspeskaz в течение
            первого декады каждого месяца.
          </Paragraph>
          <Title level={3}>Требования к оформлению статьи</Title>
          <Paragraph>
            <Text strong>Объем статьи:</Text>
            от 3 до 10 стр.
          </Paragraph>
          <Paragraph>
            <Text strong> Шрифт:</Text>
            Times New Roman
          </Paragraph>
          <Paragraph>
            <Text strong> Размер шрифта:</Text>
            14 пт
          </Paragraph>
          <Paragraph>
            <Text strong>Междустрочный интервал:</Text>
            1,5 пт
          </Paragraph>
          <Paragraph>
            <Text strong> Поля:</Text>с каждой стороны листа по 2 см
          </Paragraph>
          <Paragraph>
            <Text strong> Языки журнала:</Text>рус, eng, қаз, о'zbek.
          </Paragraph>
          <Paragraph>
            <Text strong>1. Заголовок/название статьи: </Text>
            заглавными, жирными буквами, выравнивание по центру строки
          </Paragraph>
          <Paragraph>
            <Text strong> 2. ФИО автора: </Text>
            шрифт жирный курсив, выравнивание по правому краю
          </Paragraph>
          <Paragraph>
            <Text strong>3. Должность, ВУЗ, страна, город:</Text>
             шрифт курсив, выравнивание по правому краю (сокращения не
            допускаются) Если авторов статьи несколько, то информация
            повторяется для каждого автора.
          </Paragraph>
          <Paragraph>
            <Text strong> 4. Аннотация.</Text>
            Аннотация должен быть на языке статьи (на русском и английском языке
            обязательно).
          </Paragraph>
          <Paragraph>
            <Text strong>5. Текст статьи</Text>
          </Paragraph>
          <Paragraph>
            <Text strong>6. Список литературы. </Text>
            Ссылки в тексте оформляется в квадратных скобках на соответствующий
            источник списка литературы, например [1]. Использование
            автоматических постраничных ссылок не допускается.
          </Paragraph>
          <Paragraph>
            <Text strong>7. Статья не должна: </Text>
            быть ранее опубликована, а также представлена для рассмотрения и
            публикации в другом издании.
          </Paragraph>
          <Paragraph>
            <Text strong> 8. Запрещается: </Text>
            Использовать способы для обхода антиплагиата: слова-формулы, замену
            русских букв латинскими и т.д. Данные нарушения выявляются с помощью
            программного обеспечения и статья возвращается на доработку или не
            принимается для опубликования.
          </Paragraph>
        </Typography>
      </div>
    </>
  );
}

export default Requirements;
