import { Avatar, Card, Skeleton } from "antd";
import React, { useContext, useEffect } from "react";
import { MainContext } from "../utils/MainContext";
import { tl } from "../configs/i18n";
import SEO from "../components/seo";
const { Meta } = Card;

function Member() {
  const { member, getMember } = useContext(MainContext);
  useEffect(() => {
    getMember();
  }, []);

  return (
    <>
      <SEO />
      <div className="container section">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center">
            <h2 className="heading">{tl("members")}</h2>
          </div>
        </div>
        <div className="member">
          {!member?.payload ? (
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
            member?.payload?.map((data, key) => {
              return (
                <Card key={key}>
                  <Skeleton loading={!member?.payload} avatar active>
                    <Meta
                      avatar={
                        <Avatar
                          src={
                            data.photo_url
                              ? data.photo_url
                              : "https://joeschmoe.io/api/v1/random"
                          }
                        />
                      }
                      title={data.name}
                      description={
                        <>
                          <div>{data.status?.title}</div>
                          <div>{data.degree?.title}</div>
                          <div>{data.title === 1 ? "Профессор" : "Доцент"}</div>
                        </>
                      }
                    />
                  </Skeleton>
                </Card>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default Member;
