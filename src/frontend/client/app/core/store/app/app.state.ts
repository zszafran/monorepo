export interface State {
  title: string;
  platform: string;
  isStable: boolean;
}

export const INITIAL_STATE: State = {
  title: 'Application',
  platform: '',
  isStable: false,
};
