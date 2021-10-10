import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  height: 70px;
  flex-direction: row;
  align-items: center;
  padding-left: 14px;
`;

export const MenuButton = styled.TouchableOpacity`
  height: 70px;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: ${fonts.title};
  color: ${colors.white};
  font-size: 20px;
  margin-left: 14px;
`;
