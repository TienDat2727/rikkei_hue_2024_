import { Card } from "antd";
import { Flex } from "antd";
import { ContainerPost } from "./PostManagement.styled";
import { getNews, Post } from "../../api/mock/news.api";
import { useEffect, useState } from "react";
import { BaseArticle } from "components/common/BaseArticle";
import { BaseButton } from "components/common/BaseButton/BaseButton";

const PostContainer = () => {
  const [news, setNews] = useState<Post[]>([]);

  useEffect(() => {
    getNews().then((res) => setNews(res));
  }, []);

  return (
    <ContainerPost>
      {news?.map((post, index) => (
        <Flex gap={10}>
          <Card className="post-item">
            <BaseArticle
              key={index}
              title={post.title}
              description={post.text}
              date={post.date}
              imgUrl={post.img}
              author={post.author}
              avatar={post.avatarUrl}
            />
            <Flex gap={10} style={{ justifyContent: "flex-end", marginTop: '20px'}}>
              <Flex>
                <BaseButton size="large">Xóa</BaseButton>
              </Flex>
              <Flex>
                <BaseButton size="large">Duyệt</BaseButton>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      ))}
    </ContainerPost>
  );
};

export default PostContainer;
