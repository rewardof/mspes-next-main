import React, { useEffect, useState } from "react";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import { SettingsApi } from "../api/main/settings";
import { Divider } from "antd";
import Telegram from "../public/assets/images/telegram.png";
import Instagram from "../public/assets/images/instagram.png";
import Facebook from "../public/assets/images/facebook.png";
import Youtube from "../public/assets/images/youtube.png";

function Footer() {
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    SettingsApi.get()
      .then((res) => {
        setSettings(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Divider />
      <div className="footer container section">
        <div className="social">
          <div className="icon">
            <a href={settings.facebook} target="_blank">
              <img src={Facebook.src} alt="Facebook" />
            </a>
          </div>
          <div className="icon">
            <a href={settings.youtube} target="_blank">
              <img src={Youtube.src} alt="Youtube" />
            </a>
          </div>
          <div className="icon">
            <a href={settings.instagram} target="_blank">
              <img src={Instagram.src} alt="Instagram" />
            </a>
          </div>
          <div className="icon">
            <a href={settings.telegram} target="_blank">
              <img style={{ padding: 3 }} src={Telegram.src} alt="Telegram" />
            </a>
          </div>
        </div>
        <div className="widget">
          <p>{settings.aphorism}</p>
          <div style={{ display: "flex", gap: 24 }}>
            <p>
              <a
                href={`tel:${settings.phone}`}
                style={{ display: "flex", gap: 4, alignItems: "center" }}
              >
                <PhoneOutlined />
                {settings.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${settings.email}`}
                style={{ display: "flex", gap: 4, alignItems: "center" }}
              >
                <MailOutlined />
                {settings.email}
              </a>
            </p>
          </div>
          <div>{settings.address}</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
