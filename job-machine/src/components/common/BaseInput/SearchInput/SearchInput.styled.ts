import styled from "styled-components";

import { BaseInput } from "../index";

export const SearchInput = styled(BaseInput.Search)`
  & .ant-input-prefix {
    margin: 0.5rem;
  }

  & .ant-input-search-button {
    height: 3.54875rem;
    box-shadow: none;
  }

  &.ant-input-search-large .ant-input-search-button {
    height: 4.36125rem;
  }

  & input {
    font-weight: 500;
    background-color: #ccc;

    &::placeholder {
      font-weight: 500;
    }
  }

  .ant-input-group-addon {
    min-width: 5.5rem;
    font-weight: 500;
  }

  .ant-input-search-button,
  .ant-input-search-button:hover {
    &.ant-btn {
      font-weight: 500;

      .anticon {
        color: #ccc;
      }
    }

    width: 100%;
    background-color: rgba(1, 80, 154, 0.05);
    color: #ccc;
  }
`;
