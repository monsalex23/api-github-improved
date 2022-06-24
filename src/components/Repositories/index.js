import React from 'react'
import * as S from './styled';

const Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected">
      <S.WrapperTabLists>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
        </S.WrapperTabLists>
        <S.WrapperTabPanel>Panel Repositories</S.WrapperTabPanel>
        <S.WrapperTabPanel>Panel Starred</S.WrapperTabPanel>
      
    </S.WrapperTabs>
  )
};

export default Repositories 