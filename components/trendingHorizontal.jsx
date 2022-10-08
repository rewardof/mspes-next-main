import New from "../public/assets/images/new.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EyeOutlined,
  DownloadOutlined,
  FilePdfOutlined,
} from "@ant-design/icons";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import Link from "next/link";
import { tl } from "../configs/i18n";

const Trending = ({ journal = [] }) => {
  const getDate = (date) => {
    return <div>{new Date(date).toString().slice(4, 15)}</div>;
  };

  return (
    <Swiper
      pagination={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {journal?.map((data, key) => {
        return (
          <SwiperSlide key={key}>
            <div className="trending_horizontal">
              <div className="img_box">
                <img src={data.photo_url} alt="lorem" />
              </div>
              <div className="trending_data">
                <div className="category">
                  <div className="name">{tl("published.date")}</div>-
                  <div className="create_date">
                    {getDate(data.published_date)}
                  </div>
                </div>
                <Link href={`/journal_detail/${data.id}`}>
                  <a className="title">{`${data.title} № ${data.number}`}</a>
                </Link>
                <div className="short_description">{data.description}</div>
                <div className="category">
                  <div className="name">{tl("start.date")}: </div>
                  <div className="create_date">{getDate(data.from_date)}</div>
                </div>
                <div className="category">
                  <div className="name">{tl("end.date")}: </div>
                  <div className="create_date">{getDate(data.to_date)}</div>
                </div>
                <div className="all_count">
                  <div className="item">
                    <div className="icon">
                      <EyeOutlined />
                      {tl("views")}:
                    </div>
                    <div className="value">{data.views}</div>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <DownloadOutlined />
                      {tl("download")}:
                    </div>
                    <div className="value">{data.downloads}</div>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <FilePdfOutlined />
                      {tl("articles")}:
                    </div>
                    <div className="value">{data.count_articles}</div>
                  </div>
                </div>
              </div>
              {data.status === 1 && (
                <div className="new-tag">
                  <img src={New} alt="lorem" />
                </div>
              )}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Trending;
