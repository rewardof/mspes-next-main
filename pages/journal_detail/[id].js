import React, { useContext, useEffect } from "react";
import { MainContext } from "../../utils/MainContext";
import JurnalDetail from "../../components/jurnalDetail";
import { tl } from "../../configs/i18n";
import { useRouter } from "next/router";
import SEO from "../../components/seo";
function JournalDetail() {
  const { oneJournal, getOneJournal } = useContext(MainContext);
  const router = useRouter();

  const id = router.query.id;

  useEffect(() => {
    if (id) {
      getOneJournal(id);
    }
  }, [id]);
  if (!oneJournal.id) return ''
  return (
    <>
      <SEO
        title={oneJournal?.title}
        description={oneJournal?.description}
        keywords={oneJournal?.slug}
        pdf_url={oneJournal?.file_url}
      />
      <div className="container section">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h2 className="heading">{tl("journal.detail")}</h2>
          </div>
        </div>
        <JurnalDetail oneJournal={oneJournal} />
      </div>
    </>
  );
}

export default JournalDetail;
