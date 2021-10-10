import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  margin-right: 8px;
  background-color: ${colors.white};
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 8px;
`;

export const Name = styled.Text`
  font-family: ${fonts.title};
`;
