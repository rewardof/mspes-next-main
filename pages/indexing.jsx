import { Card, Skeleton } from "antd";
import React, { useContext, useEffect } from "react";
import { MainContext } from "../utils/MainContext";
import { tl } from "../configs/i18n";
import SEO from "../components/seo";

function Indexing() {
  const { indexing, getIndexing } = useContext(MainContext);

  useEffect(() => {
    getIndexing();
  }, []);

  return (
    <>
      <SEO
        title="Mspes"
        description=""
        keywords="maqola, transport, poyezd, temiryo'l, texnika, tarix, ijitimoiy, iqtisodiy, taqriz, ilmiy ish, ilmiy maqola, fan, ta'lim | статья, транспорт, поезд, Железнодорожный, технологии, История, Социальное, Экономическая, обзор, исследовательская работа, исследовательская работа, наука, Образование | article, transport, train, railway, technology, history, social, economic, review, research paper, research paper, science, education"
      />
      <div className="container section">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h2 className="heading">{tl("index")}</h2>
          </div>
        </div>
        <div className="indexing">
          {indexing.length === 0 ? (
            <div style={{ display: "flex", gap: 30 }}>
              <Card style={{ width: 300 }}>
                <Skeleton loading={true} avatar active></Skeleton>
              </Card>
              <Card style={{ width: 300 }}>
                <Skeleton loading={true} avatar active></Skeleton>
              </Card>
              <Card style={{ width: 300 }}>
                <Skeleton loading={true} avatar active></Skeleton>
              </Card>
              <Card style={{ width: 300 }}>
                <Skeleton loading={true} avatar active></Skeleton>
              </Card>
            </div>
          ) : (
            indexing?.map((data, key) => {
              return (
                <div key={key} className="item">
                  <a href={data.url} target="_blank">
                    <div className="img_box">
                      <img src={data.photo_url} alt="Image" />
                    </div>
                  </a>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default Indexing;
