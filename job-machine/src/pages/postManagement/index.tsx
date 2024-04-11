import { TreeTable } from "components/table/TreeTable";
import { Card } from "antd";
import { Flex } from "antd";
import { ContainerPost } from "./PostManagement.styled";
import { NewsFilter } from "./NewsFilter/NewsFilter";
import { BaseFeed } from "components/common/BaseFeed/BaseFeed";
import { BaseArticle } from "components/common/BaseArticle";

const Post = () => {
  return (
    <ContainerPost>
      <Flex>
        <Card id="tree-table" style={{ marginTop: "25px" }}>
          {/* <NewsFilter news={news}>
            {({ filteredNews }) =>
              filteredNews?.length || !loaded ? (
                <BaseFeed next={next} hasMore={hasMore}>
                  {filteredNews.map((post, index) => (
                    <BaseArticle
                      key={index}
                      title={post.title}
                      description={post.text}
                      date={post.date}
                      imgUrl={post.img}
                      author={post.author}
                      avatar={post.avatarUrl}
                      tags={post.tags}
                    />
                  ))}
                </BaseFeed>
              ) : (
                <BaseEmpty />
              )
            }
          </NewsFilter> */}
        </Card>
      </Flex>
    </ContainerPost>
  );
};

export default Post;
