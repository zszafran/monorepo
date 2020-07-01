export interface State {
  enabled: boolean;
  updateAvailable: boolean;
  updateActivated: boolean;
}

export const INITIAL_STATE: State = {
  enabled: false,
  updateAvailable: false,
  updateActivated: false,
};
