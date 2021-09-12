export interface Item {
  id: number | string;
  name: string;
  description: string;
}

export const emptyItem: Item = {
  id: 0,
  name: '',
  description: '',
};
