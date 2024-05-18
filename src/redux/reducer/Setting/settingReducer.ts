import { createSlice } from '@reduxjs/toolkit';

type SettingState = {
  theme: string;
};
const initialState: SettingState = {
  theme: localStorage.getItem('theme') || 'light'
};

export const settingSlice = createSlice({
  name: 'setting',
  initialState: initialState,
  reducers: {
    setSettingSwitchTheme: (state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);

      state.theme = newTheme;
    }
  }
});

export const { setSettingSwitchTheme } = settingSlice.actions;
export default settingSlice.reducer;
