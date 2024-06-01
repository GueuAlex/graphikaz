import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Hr,
} from "@react-email/components";
import * as React from "react";

interface SlackConfirmEmailProps {
  validationCode?: string;
}

/* const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ""; */

export const SlackConfirmEmail = ({
  validationCode,
}: SlackConfirmEmailProps) => (
  <Html>
    <Head />
    <Preview>Confirmez votre adresse e-mail</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Img
            src={`https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/graphikaz_logo-7AGJWygO9vxJBED9LuHVNg4kslfORB.jpg`}
            width="100"
            height="20"
            alt="Graphikaz"
          />
        </Section>
        <Heading style={h1}>Confirmez votre adresse e-mail</Heading>
        <Text style={heroText}>
          Votre code de confirmation se trouve ci-dessous - saisissez-le dans la
          fenêtre ouverte de votre navigateur pour continuer la créatio de votre
          compte.
        </Text>

        <Section style={codeBox}>
          <Text style={confirmationCodeText}>{validationCode}</Text>
        </Section>

        <Text style={text}>
          Si vous n'avez pas demandé cet e-mail, il n'y a pas lieu de
          s'inquiéter, vous pouvez l'ignorer en toute sécurité.
        </Text>

        <Section>
          <Row style={footerLogos}>
            <Column style={{ width: "66%" }}>
              <Img
                src={`https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/graphikaz_logo-7AGJWygO9vxJBED9LuHVNg4kslfORB.jpg`}
                width="100"
                height="20"
                alt="Graphikaz"
              />
            </Column>
            <Column>
              <Section>
                <Row>
                  <Column>
                    <Link href="/">
                      <Img
                        src={`https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/2023_Facebook_icon.svg-9GQdjOCJv8h8LlP8lUUlCxauqiSNKx.png`}
                        width="32"
                        height="32"
                        alt="Graphikaz"
                        style={socialMediaIcon}
                      />
                    </Link>
                  </Column>
                  <Column>
                    <Link href="/">
                      <Img
                        src={`https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/linkedin-icon-logo-png-transparent-bmmlMTEHnzlUY7K5Ma11x5qeF7Z4EV.png`}
                        width="32"
                        height="32"
                        alt="Graphikaz"
                        style={socialMediaIcon}
                      />
                    </Link>
                  </Column>
                  <Column>
                    <Link href="/">
                      <Img
                        src={`https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/whatsapp_logo_icon_186881-5tldw9GbY3OBcetrWN4o6PKc28mmi3.png`}
                        width="32"
                        height="32"
                        alt="Graphikaz"
                        style={socialMediaIcon}
                      />
                    </Link>
                  </Column>
                </Row>
              </Section>
            </Column>
          </Row>
        </Section>

        <Section>
          <Link
            style={footerLink}
            href="https://graphikaz-sqv5.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notre blog
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://graphikaz-sqv5.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Politiques
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://graphikaz-sqv5.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Centre d'aide
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://graphikaz-sqv5.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            data-auth="NotApplicable"
            data-linkindex="6"
          >
            Communauté Graphikaz
          </Link>
          <Text style={footerText}>
            ©2022 Graphikaz, LLC, une société de DIGIFAZ. <br />
            AB Center - RT Abatta, Cocody Abidjan - Côte d'Ivoire <br />
            <br />
            Tous droits réservés.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

SlackConfirmEmail.PreviewProps = {
  validationCode: "567860",
} as SlackConfirmEmailProps;

export default SlackConfirmEmail;

const footerText = {
  fontSize: "12px",
  color: "#b7b7b7",
  lineHeight: "15px",
  textAlign: "left" as const,
  marginBottom: "50px",
};

const footerLink = {
  color: "#b7b7b7",
  textDecoration: "underline",
};

const footerLogos = {
  marginBottom: "32px",
  paddingLeft: "8px",
  paddingRight: "8px",
  width: "100%",
};

const socialMediaIcon = {
  display: "inline",
  marginLeft: "32px",
};

const main = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "0px 20px",
};

const logoContainer = {
  marginTop: "32px",
};

const h1 = {
  color: "#1d1c1d",
  fontSize: "36px",
  fontWeight: "700",
  margin: "30px 0",
  padding: "0",
  lineHeight: "42px",
};

const heroText = {
  fontSize: "20px",
  lineHeight: "28px",
  marginBottom: "30px",
};

const codeBox = {
  background: "rgb(245, 244, 245)",
  borderRadius: "4px",
  marginBottom: "30px",
  padding: "40px 10px",
};

const confirmationCodeText = {
  fontSize: "30px",
  textAlign: "center" as const,
  verticalAlign: "middle",
};

const text = {
  color: "#000",
  fontSize: "14px",
  lineHeight: "24px",
};
