import { DownOutlined } from "@ant-design/icons";
import { Drawer, Dropdown, Menu, Space, Select } from "antd";
import { useContext } from "react";
import Link from "next/link";
import { MainContext } from "../utils/MainContext";
import {} from "@ant-design/icons";
import Logo from "../public/assets/images/logo.jpg";
import { lang } from "../utils";
import { tl } from "../configs/i18n";
import { setCookie } from "nookies";
const { Option } = Select;
const Navbar = () => {
  const { setVisible, visible } = useContext(MainContext);

  const onClose = () => {
    setVisible(false);
  };
  const handleChange = (value) => {
    window.location.reload();
    return setCookie(null, "lang", value, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="left_side">
          <div className="logo">
            <img src={Logo.src} alt="logo" />
            Mspes
          </div>
        </div>
        <div className="right_side">
          <div className="menu_links">
            <ul>
              <li>
                <Link href="/">
                  <a>{tl("main.page")}</a>
                </Link>
              </li>
              <li>
                <Link href="/members">
                  <a>{tl("members")}</a>
                </Link>
              </li>
              <li>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item>
                        <Link href="/requirements">
                          <a>{tl("requirements")}</a>
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link href="/instruction">{tl("instruction")}</Link>
                      </Menu.Item>
                    </Menu>
                  }
                  trigger={["click"]}
                >
                  <Space>
                    {tl("to_authors")}
                    <DownOutlined />
                  </Space>
                </Dropdown>
              </li>
              <li>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item>
                        <Link href="/current_journal">
                          {tl("current.journal")}
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link href="/archive_journal">{tl("archive")}</Link>
                      </Menu.Item>
                    </Menu>
                  }
                  trigger={["click"]}
                >
                  <Space>
                    {tl("archive")}
                    <DownOutlined />
                  </Space>
                </Dropdown>
              </li>
              <li>
                <Link href="/indexing">{tl("index")}</Link>
              </li>
            </ul>
          </div>
          <div className="language">
            {lang === "ru" ? (
              <img src="https://img.icons8.com/color/30/000000/russian-federation.png" />
            ) : (
              <img src="https://img.icons8.com/officel/30/000000/kazakhstan.png" />
            )}
            <Select defaultValue={lang} onChange={handleChange}>
              <Option value="ru">Русский</Option>
              <Option value="kk">қазақ</Option>
            </Select>
          </div>
          <div className="burger" onClick={() => setVisible(true)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <Drawer title="" onClose={onClose} visible={visible}>
        <Menu defaultSelectedKeys={["1"]} mode="inline" onClick={onClose}>
          <Menu.Item>
            <Link href="/">{tl("main.page")}</Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/members">{tl("members")}</Link>
          </Menu.Item>
          <Menu.SubMenu title={tl("members")}>
            <Menu.Item>
              <Link href="/requirements">{tl("requirements")}</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/instruction">{tl("instruction")}</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu title={tl("archive")}>
            <Menu.Item>
              <Link href="/current_journal">{tl("current.journal")}</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/archive_journal">{tl("archive")}</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item>
            <Link href="/indexing">{tl("index")}</Link>
          </Menu.Item>
        </Menu>
        <div className="language mobile">
          {lang === "ru" ? (
            <img src="https://img.icons8.com/color/30/000000/russian-federation.png" />
          ) : (
            <img src="https://img.icons8.com/officel/30/000000/kazakhstan.png" />
          )}
          <Select defaultValue={lang} onChange={handleChange}>
            <Option value="ru">Русский</Option>
            <Option value="kk">қазақ</Option>
          </Select>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
