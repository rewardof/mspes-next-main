import { Skeleton } from "antd";
import React, { useContext, useEffect } from "react";
import { MainContext } from "../utils/MainContext";
import TrendingVertical from "../components/trendingVertical";
import JurnalDetail from "../components/jurnalDetail";
import { tl } from "../configs/i18n";
import SEO from "../components/seo";
function CurrentJournal() {
  const { currentJournal, currentJournalDetail, getCurrentJournal } =
    useContext(MainContext);

  useEffect(() => {
    getCurrentJournal();
  }, []);

  return (
    <>
      <SEO
        title={currentJournalDetail[0]?.title}
        description={currentJournalDetail[0]?.description}
        keywords={currentJournalDetail[0]?.id}
      />
      <div className="container section">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <h2 className="heading">{tl("current.article")}</h2>
          </div>
        </div>
        <div>
          {currentJournal && (
            <JurnalDetail oneJournal={currentJournalDetail[0]} />
          )}
        </div>
        {currentJournal?.length === 0 ? (
          <div style={{ display: "flex", gap: "50px" }}>
            <Skeleton active avatar paragraph={{ rows: 8 }} />
            <Skeleton active avatar paragraph={{ rows: 8 }} />
            <Skeleton active avatar paragraph={{ rows: 8 }} />
          </div>
        ) : (
          <div className="trending_article">
            {currentJournal?.map((data) => (
              <TrendingVertical data={data} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default CurrentJournal;
