import styled from 'styled-components/native';
import colors from '../../shared/styles/colors';
import fonts from '../../shared/styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.blue};
`;

export const Header = styled.View`
  z-index: 99;
  position: absolute;
  top: 35;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 14px;
`;

export const HeaderButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  background-color: ${colors.blue};
  border-radius: 23px;
  justify-content: center;
  align-items: center;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 350px;
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
`;

type LinkProps = {
  homepage: string;
};

export const ButtonLink = styled.TouchableOpacity<LinkProps>`
  background-color: ${(props) => (props.homepage ? colors.red : colors.dark)};
  width: 63px;
  height: 63px;
  border-radius: 35px;
  position: absolute;
  top: 300px;
  right: 15px;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 22px;
  font-family: ${fonts.title};
  padding: 8px 14px;
  margin-top: 20px;
`;

export const ContentArea = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 14px;
  justify-content: space-between;
`;

export const Rate = styled.Text`
  font-size: 18px;
  font-family: ${fonts.title};
  color: ${colors.white};
`;

export const ListGenres = styled.FlatList`
  padding-left: 14px;
  margin: 8px 0;
  max-height: 35px;
`;

export const Description = styled.Text`
  padding-left: 14px;
  padding-right: 14px;
  padding-bottom: 30px;
  font-family: ${fonts.sub_title};
  color: ${colors.white};
  line-height: 20px;
`;
