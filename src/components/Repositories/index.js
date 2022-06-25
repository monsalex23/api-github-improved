import React from 'react'
import * as S from './styled';
import RepositoryItem from '../Repository-item';

const Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected">
      <S.WrapperTabLists>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabLists>
      <S.WrapperTabPanel>
        <RepositoryItem name="repo1" fullName="actividad-sintaxis-y-operadores-JS" linkToRepo="https://github.com/monsalex23/actividad-sintaxis-y-operadores-JS"/>
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem name="repo2" fullName="calculator-JS" linkToRepo="https://github.com/monsalex23/calculator-JS" />
      </S.WrapperTabPanel>

    </S.WrapperTabs>
  )
};

export default Repositories 