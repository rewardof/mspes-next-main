import React, { useEffect, useState } from "react";
import New from "../public/assets/images/new.png";
import {
  EyeOutlined,
  DownloadOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import { JournalApi } from "../api/main/journals";
import { Skeleton } from "antd";
import { tl } from "../configs/i18n";
import { useRouter } from "next/router";
import TrendingVertical from "./trendingVertical";
import Link from "next/link";
function JurnalDetail({ oneJournal = {} }) {
  const [articleList, setArticleList] = useState([]);
  const router = useRouter();
  const getDate = (date) => {
    return <div>{new Date(date).toString().slice(4, 15)}</div>;
  };
  const FileDownload = (id) => {
    JournalApi.download(id);
  };
  useEffect(() => {
    if (oneJournal.id) {
      JournalApi.getArticleList(oneJournal.id)
        .then((response) => {
          setArticleList(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [oneJournal.id]);

  if (!oneJournal.id) return ''
  return (
    <div>
      {Object.keys(oneJournal).length === 0 ? (
        <Skeleton active avatar paragraph={{ rows: 12 }} />
      ) : (
        <div className="trending_horizontal detail">
          <div className="img_box">
            <img src={oneJournal.photo_url} alt="lorem" />
          </div>
          <div className="trending_data">
            <div className="category">
              <div className="name">{tl("published.date")}</div>-
              <div className="create_date">
                {getDate(oneJournal.published_date)}
              </div>
            </div>
            <Link href={`/journal_detail/${oneJournal.id}`}>
              <a className="title"> {oneJournal.title}</a>
            </Link>
            <div className="short_description">{oneJournal.description}</div>
            <div className="category">
              <div className="name">{tl("start.date")}: </div>
              <div className="create_date">{getDate(oneJournal.from_date)}</div>
            </div>
            <div className="category">
              <div className="name">{tl("end.date")}: </div>
              <div className="create_date">{getDate(oneJournal.to_date)}</div>
            </div>
            <div className="all_count">
              <div className="item">
                <div className="icon">
                  <EyeOutlined />
                  {tl("views")}:
                </div>
                <div className="value">{oneJournal.views}</div>
              </div>
              <div className="item">
                <div className="icon">
                  <DownloadOutlined />
                  {tl("download")}:
                </div>
                <div className="value">{oneJournal.downloads}</div>
              </div>
              <div className="item">
                <div className="icon">
                  <FilePdfOutlined />
                  Cтатьи:
                </div>
                <div className="value">{oneJournal?.articles?.length}</div>
              </div>
            </div>
            <a
              onClick={() => FileDownload(oneJournal.id)}
              className="download"
              href={oneJournal.file_url}
              target="_blank"
            >
              <div className="icon">
                <DownloadOutlined />
              </div>
            </a>
          </div>
          {oneJournal.status === 1 && (
            <div className="new-tag">
              <img src={New.src} alt="lorem" />
            </div>
          )}
        </div>
      )}
      {router.pathname !== "/archive_journal" &&
        (articleList?.length === 0 ? (
          <div style={{ display: "flex", gap: "50px" }}>
            <Skeleton active avatar paragraph={{ rows: 8 }} />
            <Skeleton active avatar paragraph={{ rows: 8 }} />
            <Skeleton active avatar paragraph={{ rows: 8 }} />
          </div>
        ) : (
          <div className="trending_article">
            {articleList?.map((data) => (
              <TrendingVertical data={data} />
            ))}
          </div>
        ))}
    </div>
  );
}

export default JurnalDetail;
