import React from 'react';
import Chip from '../assets/chip.png';
import ImgLogo from '../assets/logo.png';

import {
  Container,
  Flipper,
  Front,
  Back,
  WrapperBoll,
  HeaderFront,
  BollPrimary,
  BollSecondary,
  ImgChip,
  ChipWrapper,
  WrapperName,
  Name,
  Logo,
  Description,
  BarReader,
  Text,
  Selo,
  ItemInformation,
  WrapperInformations,
  NumberText,
  Sup,
} from './styles';

type Props = {
  reverse?: boolean,
  name: string;
  cardNumber: string;
  validThruOne: string;
  validThruTwo: string;
  securityCode: string;
  onClick?(): void;
}
const Card: React.FC<Props> = ({
  reverse,
  name = 'Marcelo Silva',
  cardNumber = '0000 0000 0000 0000',
  validThruOne = '00',
  validThruTwo = '00',
  securityCode = '123',
  onClick,
}) => {
  const [reversed, setReversed] = React.useState(false);
  const handleCard = () => setReversed(!reversed)
  
  return (
    <Container onClick={onClick || handleCard}>
      <Flipper flip={reverse || reversed}>
        <Front>
          <HeaderFront>
            <WrapperBoll>
              <BollPrimary />
              <BollSecondary />
            </WrapperBoll>
          </HeaderFront>
          <ChipWrapper>
            <ImgChip src={Chip} />
          </ChipWrapper>
          <WrapperName>
            <Logo src={ImgLogo} />
            <Name>{name.toUpperCase()}</Name>
          </WrapperName>
        </Front>
        <Back>
          <Description>
            issue by Nubank under license by Mastercard internacional.
          </Description>
          <BarReader />
          <Text>gold</Text>
          <Selo />
          <Text>{cardNumber.replace(/^(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4')}</Text>
          <WrapperInformations>
            <ItemInformation>
              <Sup>
                MEMBER
                SINCE
              </Sup>
              <NumberText>01/18</NumberText>
            </ItemInformation>

            <ItemInformation>
              <Sup>
                VALID
                THRU
              </Sup>
              <NumberText>{`${validThruOne}/${validThruTwo}`}</NumberText>
            </ItemInformation>

            <ItemInformation>
              <Sup>
                SECURITY
                CODE
              </Sup>
              <NumberText>{securityCode}</NumberText>
            </ItemInformation>
          </WrapperInformations>
        </Back>
      </Flipper>
    </Container>
  )
};
export default Card;