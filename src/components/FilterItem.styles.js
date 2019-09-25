
import styled from 'vue-styled-components';
export const FilterWraper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 14px;
  & + & {
    border-top: 1px solid rgba(0, 0, 0, 0.03);
  }
  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  flex-grow: 1;
  font-size: 14px;
  height: 40px;
  cursor: pointer;
`;
export const Value = styled.span`
  flex-grow: 1;
  font-weight: bold;
`;
export const Count = styled.span`
  font-size: 12px;
`;