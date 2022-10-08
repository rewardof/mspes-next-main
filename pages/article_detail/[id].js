import React from "react";
import { DownloadOutlined, EyeOutlined } from "@ant-design/icons";
import { ArticleApi } from "../../api/main/article";
import { tl } from "../../configs/i18n";
import SEO from "../../components/seo";
import axios from "axios";

function ArticleDetail({ data, resolvedUrl }) {
  const getDate = (date) => {
    return <div>{new Date(date).toString().slice(4, 15)}</div>;
  };

  const FileDownload = (id) => {
    ArticleApi.download(id);
  };
  const html_url = "https://mspes.kz/article_detail/".concat(data?.id)
  return (
    <>
      <SEO
        title={data?.journal?.title}
        description={data?.annotation}
        keywords={data?.slug}
        resolvedUrl={resolvedUrl}
        pdf_url={data?.file_url}
        page_from={data?.page_from}
        page_to={data?.page_to}
        authors={data?.author}
        issn={data?.issn_number}
        date={data?.journal?.published_date?.replaceAll('-', '/')}
        article_title={data?.title}
        journal_issue={data?.journal?.number}
        language={data?.language}
        html_url={html_url}
        tags={data?.tags}
      />
      <div className="container section">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h2 className="heading">{tl("article.detail")}</h2>
          </div>
        </div>
        <div className=" trending_article detail">
          <div className="trending_vertical">
            <div className="img_box">
              <img src={data?.photo_url} alt="lorem" />
            </div>
            <div className="trending_data">
              <div className="category">
                <div className="name">{data?.category?.title}</div>-
                <div className="create_date">
                  {getDate(data.published_date)}
                </div>
                <div className="extra-data">
                  <div className="item">
                    <EyeOutlined size={20} />
                    <span>{data.views}</span>
                  </div>
                  <div className="item">
                    <DownloadOutlined />
                    <span>{data.downloads}</span>
                  </div>
                  <div className="item">{`${data.page_from}-${
                    data.page_to
                  } ${tl("pages")}`}</div>
                </div>
              </div>
              <div className="title">{data?.title}</div>
              <div className="short_description">{data?.annotation}</div>
              <div className="author">
                <div className="authoe_img">{data?.authors?.slice(0, 1)}</div>
                <div className="outhor_data">
                  <div className="name">{data?.authors}</div>
                </div>
              </div>
              <a
                onClick={() => FileDownload(data.id)}
                className="article_download"
                href={data.file_url}
                target="_blank"
              >
                <div className="icon">
                  <DownloadOutlined />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps(ctx) {
  const { resolvedUrl, query } = ctx;
  // Fetch data from external API
  const res = await axios(`https://api.mspes.kz/api/v1/articles/${query.id}`);
  const data = await res.data;

  // Pass data to the page via props
  return { props: { data, resolvedUrl } };
}
export default ArticleDetail;
