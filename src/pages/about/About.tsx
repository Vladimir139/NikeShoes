import React, {FC} from 'react';
import {Container} from "@assets/styles/globalElements";
import {
  AboutImage,
  AboutImageSlogan,
  AboutImageSubSlogan,
  AboutNikeText,
  AboutNikeTitle,
  AboutWrapper, WrapperAboutNike
} from "@pages/about/AboutElements";

export const About:FC= () => {
  return (
    <>
      <Container>
        <AboutWrapper>
          <AboutImage>
            <div>
              <AboutImageSlogan>
                OUR MISSION
              </AboutImageSlogan>
              <AboutImageSubSlogan>
                "BRING INSPIRATION AND INNOVATION TO EVERY ATHLETE* IN THE WORLD"
              </AboutImageSubSlogan>
            </div>
          </AboutImage>
          <WrapperAboutNike>
            <AboutNikeTitle>
              About Nike
            </AboutNikeTitle>
            <AboutNikeText>
              Our mission is what drives us to do everything possible to expand human potential. We do that by creating groundbreaking sport innovations, by making our products more sustainably, by building a creative and diverse global team and by making a positive impact in communities where we live and work. Based in Beaverton, Oregon, NIKE, Inc. includes the Nike, Converse, and Jordan brands.
            </AboutNikeText>
          </WrapperAboutNike>
        </AboutWrapper>
      </Container>
    </>
  );
};
