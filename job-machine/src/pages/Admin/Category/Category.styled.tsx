import { styled } from 'styled-components';

export const ContainerCategory = styled.div`
  max-width: 1500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 200px;
  h1 {
    margin-left: 47px;
    text-align: left;
  }
  .category-add {
    width: 500px;
  }
  .category-management {
    width: 850px;
  }
  .ant-table-cell span {
    display: flex;
  }
  .ant-form .ant-flex .ant-form-item {
    width: 80%;
  }
`;
