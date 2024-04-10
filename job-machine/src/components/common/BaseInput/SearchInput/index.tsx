import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { BaseInputProps, BaseInputRef } from "../index";
import * as S from "./SearchInput.styled";

interface SearchInputProps extends BaseInputProps {
  loading?: boolean;
  filter?: React.ReactNode;
  onSearch?: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => void;
  enterButton?: React.ReactNode;
  inputPrefixCls?: string;
}

export const SearchInput = React.forwardRef<BaseInputRef, SearchInputProps>(
  ({ loading, filter, ...props }, ref) => {
    return (
      <S.SearchInput
        ref={ref}
        prefix={<SearchOutlined />}
        {...(filter && {
          suffix: <div>{filter}</div>,
        })}
        {...props}
      />
    );
  }
);
