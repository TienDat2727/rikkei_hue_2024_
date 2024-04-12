import { Priority } from '../../constants/enums/priorities';

export interface Tag {
  value: string;
  priority: Priority;
}

export interface BasicTableRow {
  key: number;
  name: string | JSX.Element;
  avatar: string | JSX.Element;
  caption: string;
  created_at: string;
}

export interface Pagination {
  current?: number;
  pageSize?: number;
  total?: number;
}

export interface BasicTableData {
  data: BasicTableRow[];
  pagination: Pagination;
}

export interface TreeTableRow extends BasicTableRow {
  children?: TreeTableRow[];
}

export interface TreeTableData extends BasicTableData {
  data: TreeTableRow[];
}

export interface EditableTableData extends BasicTableData {
  data: BasicTableRow[];
}

export const getBasicTableData = (pagination: Pagination): Promise<BasicTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 2,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 3,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 4,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 5,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 6,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 7,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 8,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 9,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
        ],
        pagination: { ...pagination, total: 20 },
      });
    }, 1000);
  });
};

export const getTreeTableData = (pagination: Pagination): Promise<TreeTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 2,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 3,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 4,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 5,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 6,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 7,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 8,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 9,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
        ],
        pagination: { ...pagination, total: 20 },
      });
    }, 1000);
  });
};

export const getEditableTableData = (pagination: Pagination): Promise<EditableTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 2,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 3,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 4,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 5,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 6,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 7,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 8,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
          {
            key: 9,
            name: 'John Brown',
            avatar: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            caption: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            created_at: '04/11/2024',
          },
        ],
        pagination: { ...pagination, total: 20 },
      });
    }, 1000);
  });
};
