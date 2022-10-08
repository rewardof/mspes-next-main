import { Empty } from "antd";
import React, { useContext, useEffect } from "react";
import JurnalDetail from "../components/jurnalDetail";
import SEO from "../components/seo";
import { tl } from "../configs/i18n";
import { MainContext } from "../utils/MainContext";

function Archive() {
  const { journal, getJournals } = useContext(MainContext);

  useEffect(() => {
    getJournals();
  }, []);

  const FilteredResult = journal?.filter((data) => data.status !== 1);
  if (!FilteredResult.length) return "";

  return (
    <>
      <SEO
        title={FilteredResult[0]?.title}
        description={FilteredResult[0]?.description}
        keywords={FilteredResult[0]?.slug}
      />
      <div className="container section">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h2 className="heading">{tl("archive.journal")}</h2>
          </div>
        </div>
        {FilteredResult.length === 0 ? (
          <Empty />
        ) : (
          FilteredResult.map((data, key) => {
            return (
              <div key={key} className="mb-5">
                <JurnalDetail oneJournal={data} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default Archive;
