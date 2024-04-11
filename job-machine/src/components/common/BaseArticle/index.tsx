import React from "react";
// import { Dates } from '@app/constants/Dates';
import BaseImage from "../BaseImage/BaseImage";
import { BaseAvatar } from "../BaseAvatar/BaseAvatar";
import * as S from "./BaseArticle.styled";

export interface BaseArticleProps {
  author?: React.ReactNode;
  imgUrl: string;
  title: string;
  date: number;
  description: string;
  avatar?: string;
  className?: string;
}

export const BaseArticle: React.FC<BaseArticleProps> = ({
  imgUrl,
  title,
  date,
  description,
  author,
  avatar,
  className,
}) => {

  console.log(avatar)
  return (
    <S.Wrapper className={className}>
      <S.Header>
        {!!avatar && <BaseAvatar src={avatar} alt="author" size={60} />}
        <S.AuthorWrapper>
          {author && <S.Author>{author}</S.Author>}
          <S.DateTime>{new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(new Date(date))}</S.DateTime>
        </S.AuthorWrapper>
      </S.Header>
      <S.InfoWrapper>
        <S.InfoHeader>
          <S.Title>{title}</S.Title>
        </S.InfoHeader>
        <S.Description>{description}</S.Description>
      </S.InfoWrapper>
      <BaseImage src={imgUrl} alt="article" preview={false} className="img-post" />
    </S.Wrapper>
  );
};
