import { React, useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, Button } from "antd";
import NewsCard from "./newsCard";
import { clearNews, fetchNews, logoutUser } from "../redux/action_creators";

const AllPosts = () => {
  const news = useSelector((state) => state.news);
  const user = useSelector((state) => state.user);
  const { type } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(clearNews);
    dispatch(fetchNews(type));
  }, [type]);

  const logOut = () => {
    dispatch(logoutUser());
  };

  const handleChangePage = (page, pageSize) => {
    dispatch(fetchNews(type, pageSize, page));
  };

  const setTitle = () => {
    const category = location.pathname.split('/').slice(-1)[0]
    let title = "";
    switch (category) {
      case 'sports':
        title = 'Sports news'
        break;
      case 'business':
        title = 'Business news'
        break;
      case 'politics':
        title = 'Politics news'
        break;
      case 'entertainment':
        title = 'Entertainment news'
        break;
      case 'tech':
        title = 'Technology news'
        break;
      default:
        title = 'All news'
    }
    return title;
  }

  return (
    <div>
      <div className="container">
      <h2>{setTitle()}</h2>
        <Button
          style={{ marginLeft: "auto" }}
                  onClick={logOut}
                  type="primary"
                  >
                  Log out
        </Button>
      </div>
      {news.result && news.totalLength > 0 ? (
        <>
          {news.result.map((item) => (
            <NewsCard type={type} key={item.ID} {...item} />
          ))}
          <br />
          <Pagination
            onChange={handleChangePage}
            defaultPageSize={5}
            defaultCurrent={1}
            total={news.totalLength}
          />
        </>
      ) : news.result && news.totalLength === 0 ? (
        <h3>
          There is no news to show :(. Please go to "Create News" to make one.
        </h3>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
};

export default AllPosts;
