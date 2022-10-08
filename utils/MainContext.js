import React, { useState } from "react";
import { ArticleApi } from "../api/main/article";
import { CategoryApi } from "../api/main/category";
import { JournalApi } from "../api/main/journals";
import { MemberApi } from "../api/main/member";
import { IndexingApi } from "../api/main/indexing";

export const MainContext = React.createContext();

const MainContextProvider = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [journal, setJournal] = useState([]);
  const [oneJournal, setOneJournal] = useState([]);
  const [currentJournal, setCurrentJournal] = useState([]);
  const [currentJournalDetail, setCurrentJournalDetail] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);
  const [category, setCategory] = useState([]);
  const [articleByCategory, setArticleByCategory] = useState(null);
  const [articleDetail, setArticleDetail] = useState([]);
  const [member, setMember] = useState([]);
  const [indexing, setIndexing] = useState([]);

  const getJournals = () => {
    JournalApi.get().then((res) => {
      setJournal(res);
    });
  };
  const getOneJournal = (id) => {
    JournalApi.getID(id).then((res) => {
      setOneJournal(res);
    });
  };
  const getCurrentJournal = (params) => {
    JournalApi.get({ is_new: true }).then((res) => {
      setCurrentJournalDetail(res);
      JournalApi.getOne(res[0].id, params).then((data) => {
        setCurrentJournal(data);
      });
    });
  };
  const getMostPopular = () => {
    ArticleApi.get({ most_popular: true }).then((res) => {
      setMostPopular(res);
    });
  };
  const getCategory = () => {
    CategoryApi.get().then((res) => {
      setCategory(res);
    });
  };
  const getArticleByCategory = (id) => {
    ArticleApi.get({ category_id: id }).then((res) => {
      setArticleByCategory(res);
    });
  };
  const getArticleDetail = (id) => {
    ArticleApi.getOne(id).then((res) => {
      setArticleDetail(res);
    });
  };
  const getMember = () => {
    MemberApi.get().then((res) => {
      setMember(res);
    });
  };
  const getIndexing = () => {
    IndexingApi.get().then((res) => {
      setIndexing(res);
    });
  };
  return (
    <MainContext.Provider
      value={{
        visible,
        setVisible,
        getJournals,
        journal,
        getCurrentJournal,
        currentJournal,
        getMostPopular,
        mostPopular,
        category,
        getCategory,
        getArticleByCategory,
        articleByCategory,
        getOneJournal,
        oneJournal,
        getArticleDetail,
        articleDetail,
        getMember,
        member,
        getIndexing,
        indexing,
        currentJournalDetail,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
