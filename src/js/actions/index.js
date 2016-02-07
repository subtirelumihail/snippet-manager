export const UPDATE_SNNIPET = 'UPDATE_SNNIPET';
export const SAVE_ACTIVE    = 'SAVE_ACTIVE';
export const SAVE_INACTIVE  = 'SAVE_INACTIVE';
export const TOGGLE_MODAL   = 'TOGGLE_MODAL';

export function canSave(value) {
  return {
    type: !value ? SAVE_INACTIVE : SAVE_ACTIVE
  };
}


export function toggleModal() {
  return {
    type: TOGGLE_MODAL
  };
}
