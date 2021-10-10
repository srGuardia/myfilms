import styled from 'styled-components/native';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.TouchableOpacity`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 16px;
  width: 140px;
  height: 180px;
`;

export const BannerItem = styled.Image`
  width: 100%;
  height: 170px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-family: ${fonts.sub_title};
  font-size: 14px;
  color: ${colors.white};
  padding-top: 8px;
`;

export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 5px;
`;

export const Rate = styled.Text`
  padding-left: 4px;
  font-family: ${fonts.title};
  color: ${colors.white};
  font-size: 12px;
`;
