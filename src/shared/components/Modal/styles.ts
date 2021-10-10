import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const BackButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: ${colors.blue};
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.Text`
  margin-left: 8px;
  color: ${colors.white};
  font-size: 18px;
  font-family: ${fonts.title};
`;
