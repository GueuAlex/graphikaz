import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NikeReceiptEmail = () => (
  <Html>
    <Head />
    <Preview>Get your order summary, estimated delivery date and more</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={track.container}>
          <Row>
            <Column>
              <Text style={global.paragraphWithBold}>Numéro de commande</Text>
              <Text style={track.number}>1ZV218970300071628</Text>
            </Column>
            <Column align="right">
              <Link style={global.button}>Order Package</Link>
            </Column>
          </Row>
        </Section>
        <Hr style={global.hr} />
        <Section style={message}>
          <Img
            src={`https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/graphikaz_logo-7AGJWygO9vxJBED9LuHVNg4kslfORB.jpg`}
            width="120"
            height="26"
            alt="Graphikaz"
            style={{ margin: "auto" }}
          />
          <Heading style={global.heading}>Dépliants 2 volets A4</Heading>
          <Text style={global.text}>
            Votre commande est en cours de traitement. Utilisez le lien
            ci-dessus pour suivre sa progression.
          </Text>
          <Text style={{ ...global.text, marginTop: 24 }}>
            Nous avons également débité votre mode de paiement du montant de
            votre commande. Pour plus d'informations sur le paiement, consultez
            votre page Commandes sur graphikaz.com
          </Text>
        </Section>
        <Hr style={global.hr} />
        <Section style={global.defaultPadding}>
          <Text style={adressTitle}>Details de la commande</Text>
          <Text style={{ ...global.text, fontSize: 14 }}>
            06 Fev. 2024 à 12:00:00
          </Text>
        </Section>
        <Hr style={global.hr} />
        <Section style={{ padding: "10px" }}>
          <Row
            style={{ justifyContent: "flex-start", alignItems: "flex-start" }}
          >
            <Column>
              <Img
                src={`https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/flyers-folded-a4-RKkhKCaHHg2KPEjUZSXiQX8U8TgGxk.jpeg`}
                alt="Brazil 2022/23 Stadium Away Women's Nike Dri-FIT Soccer Jersey"
                style={{ float: "left" }}
                width="260px"
              />
            </Column>
            <Column
              style={{
                verticalAlign: "top",
                paddingLeft: "12px",
              }}
            >
              <Text style={{ ...adressTitle, fontSize: "19px" }}>
                Dépliants 2 volets A4
              </Text>
              <small style={{ fontWeight: "600" }}>Format</small>
              <Text style={global.text}>Ouvert A5 - Fermé A6</Text>
              <Hr style={global.hr} />
              <small style={{ fontWeight: "600" }}>Type</small>
              <Text style={global.text}>EXPRESS</Text>
              <Hr style={global.hr} />
              <small style={{ fontWeight: "600" }}>Quantité</small>
              <Text style={global.text}>245</Text>
              <Hr style={global.hr} />
              <small style={{ fontWeight: "600" }}>Impression</small>
              <Text style={global.text}>Recto/verso</Text>
              <Hr style={global.hr} />
              <small style={{ fontWeight: "600" }}>
                Type de papier (Support d'impression)
              </small>
              <Text style={global.text}>Gloss Laminated Both Side</Text>
              <Hr style={global.hr} />
              <small style={{ fontWeight: "600" }}>
                Grammage (Densité du papier)
              </small>
              <Text style={global.text}>400 gsm</Text>
              <Hr style={global.hr} />
              <small style={{ fontWeight: "600" }}>Pelliculage</small>
              <Text style={global.text}>Avec Pelliculage</Text>
              <Hr style={global.hr} />
              <small style={{ fontWeight: "600" }}>Zone de livraison</small>
              <Text style={global.text}>
                Cocody Abatta - Abidjan, Côte d'Ivoire
              </Text>
            </Column>
          </Row>
        </Section>
        {/* Facture */}
        <Hr style={global.hr} />
        <Section
          style={{ ...global.defaultPadding, backgroundColor: "#F7F7F7" }}
        >
          <Text style={adressTitle}>Details du paiement</Text>
          <Text style={{ ...global.text, fontSize: 14 }}>
            06 Fev. 2024 à 12:00:00
          </Text>
        </Section>
        <Hr style={global.hr} />
        <Section style={productTitleTable}>
          <Text style={productsTitle}>Orange Money</Text>
        </Section>
        <Section>
          <Row>
            <Column style={{ width: "64px" }}>
              <Img
                src={`https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/om-G6zUSgErLWg30fPq7WXia9LFxOzCpd.png`}
                width="64"
                height="64"
                alt="HBO Max"
                style={productIcon}
              />
            </Column>
            <Column style={{ paddingLeft: "22px" }}>
              <Text style={productTitle}>REF: 1ZV218970300071628</Text>
              <Text style={productDescription}>N°: +225 07 000 000 00</Text>
              <Text style={productDescription}>Paiement partiel (50%)</Text>
              <Link href="" style={productLink} data-saferedirecturl="">
                Laisser un avi
              </Link>
              <span style={divisor}>|</span>
              <Link href="" style={productLink} data-saferedirecturl="">
                Reporter un Probléme
              </Link>
            </Column>

            <Column style={productPriceWrapper} align="left">
              <small style={{ fontSize: "11px", color: "#747474" }}>
                Déjà payer
              </small>
              <Text style={productPrice}>225 000 f CFA</Text>
              <small style={{ fontSize: "11px", color: "#747474" }}>
                Reste à payer
              </small>
              <Text style={productPrice}>225 000 F CFA</Text>
            </Column>
          </Row>
        </Section>
        <Hr style={productPriceLine} />
        <Section align="right" style={{ backgroundColor: "#F7F7F7" }}>
          <Row>
            <Column style={tableCell} align="right">
              <Text style={productPriceTotal}>TOTAL</Text>
            </Column>
            <Column style={productPriceVerticalLine}></Column>
            <Column style={productPriceLargeWrapper}>
              <Text style={productPriceLarge}>450 000 f CFA</Text>
            </Column>
          </Row>
        </Section>

        {/* suggestion */}

        <Hr style={global.hr} />
        <Section style={paddingY}>
          <Row>
            <Text style={global.heading}>Les meilleurs choix pour vous</Text>
          </Row>
          <Row style={recomendations.container}>
            <Column
              style={{ ...recomendations.product, paddingLeft: "4px" }}
              align="center"
            >
              <Img
                src={`https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/flyers-express-15x15-CfFfdOqTtBvkgwKZILIJ85MsJoZ7mn.jpeg`}
                alt="Brazil 2022/23 Stadium Away Women's Nike Dri-FIT Soccer Jersey"
                width="148px"
                height="148px"
              />
              <Text style={recomendations.title}>Dépliants 2 volets A6</Text>
              <Text style={recomendations.text}>Ouvert A5 - Fermé A6</Text>
            </Column>
            <Column style={recomendations.product} align="center">
              <Img
                src={`https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/flyers-folded-10x21-GmRDKhhf1iXCBz4F3WphBe1OjfnfH9.jpeg`}
                alt="Brazil 2022/23 Stadium Away Women's Nike Dri-FIT Soccer Jersey"
                width="148px"
                height="148px"
              />
              <Text style={recomendations.title}>Dépliants 2 volets A6</Text>
              <Text style={recomendations.text}>Ouvert A5 - Fermé A6</Text>
            </Column>
            <Column style={recomendations.product} align="center">
              <Img
                src={`https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/flyers-folded-a4-3-PFGjxuRF1bAMZdXWOTdHpcCxe1KxDQ.jpeg`}
                alt="Brazil 2022/23 Stadium Away Women's Nike Dri-FIT Soccer Jersey"
                width="148px"
                height="148px"
              />
              <Text style={recomendations.title}>Dépliants 2 volets A6</Text>
              <Text style={recomendations.text}>Ouvert A5 - Fermé A6</Text>
            </Column>
            <Column
              style={{ ...recomendations.product, paddingRight: "4px" }}
              align="center"
            >
              <Img
                src={`https://oifoeivdflxzgtj0.public.blob.vercel-storage.com/flyers-folded-a5-RFJjgApYxOHdDJKsPmtUr9L6TYxLVv.jpeg`}
                alt="Brazil 2022/23 Stadium Away Women's Nike Dri-FIT Soccer Jersey"
                width="148px"
                height="148px"
              />
              <Text style={recomendations.title}>Dépliants 2 volets A6</Text>
              <Text style={recomendations.text}>Ouvert A5 - Fermé A6</Text>
            </Column>
          </Row>
        </Section>

        <Hr style={{ ...global.hr, marginTop: "12px" }} />
        <Section style={paddingY}>
          <Row>
            <Text style={{ ...footer.text, paddingTop: 30, paddingBottom: 30 }}>
              N'hésitez pas à nous contacter si vous avez des questions. (Si
              vous répondez à cet e-mail, nous ne pourrons pas le voir).
            </Text>
          </Row>
          <Row>
            <Text style={footer.text}>
              ©2022 Graphikaz, LLC, une société de DIGIFAZ. <br />
              AB Center - RT Abatta, Cocody Abidjan - Côte d'Ivoire
            </Text>
          </Row>
          <Row>
            <Text style={footer.text}>Tous droits réservés.</Text>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default NikeReceiptEmail;

const paddingX = {
  paddingLeft: "40px",
  paddingRight: "40px",
};

const paddingY = {
  paddingTop: "22px",
  paddingBottom: "22px",
};

const paragraph = {
  margin: "0",
  lineHeight: "2",
};

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  paragraphWithBold: { ...paragraph, fontWeight: "bold" },
  heading: {
    fontSize: "28px",
    lineHeight: "1.3",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: "-1px",
  } as React.CSSProperties,
  text: {
    ...paragraph,
    color: "#747474",
    fontWeight: "500",
  },
  button: {
    border: "1px solid #929292",
    fontSize: "16px",
    textDecoration: "none",
    padding: "10px 0px",
    width: "220px",
    display: "block",
    textAlign: "center",
    fontWeight: 500,
    color: "#000",
  } as React.CSSProperties,
  hr: {
    borderColor: "#E5E5E5",
    margin: "0",
  },
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "10px auto",
  width: "600px",
  maxWidth: "100%",
  border: "1px solid #E5E5E5",
};

const track = {
  container: {
    padding: "22px 40px",
    backgroundColor: "#F7F7F7",
  },
  number: {
    margin: "12px 0 0 0",
    fontWeight: 500,
    lineHeight: "1.4",
    color: "#6F6F6F",
  },
};

const message = {
  padding: "40px 74px",
  textAlign: "center",
} as React.CSSProperties;

const adressTitle = {
  ...paragraph,
  fontSize: "15px",
  fontWeight: "bold",
};

const recomendationsText = {
  margin: "0",
  fontSize: "15px",
  lineHeight: "1",
  paddingLeft: "10px",
  paddingRight: "10px",
};

const recomendations = {
  container: {
    padding: "20px 0",
  },
  product: {
    verticalAlign: "top",
    textAlign: "left" as const,
    paddingLeft: "2px",
    paddingRight: "2px",
  },
  title: { ...recomendationsText, paddingTop: "12px", fontWeight: "500" },
  text: {
    ...recomendationsText,
    paddingTop: "4px",
    color: "#747474",
  },
};

const menu = {
  container: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "20px",
    backgroundColor: "#F7F7F7",
  },
  content: {
    ...paddingY,
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  title: {
    paddingLeft: "20px",
    paddingRight: "20px",
    fontWeight: "bold",
  },
  text: {
    fontSize: "13.5px",
    marginTop: 0,
    fontWeight: 500,
    color: "#000",
  },
  tel: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "32px",
    paddingBottom: "22px",
  },
};

const categories = {
  container: {
    width: "370px",
    margin: "auto",
    paddingTop: "12px",
  },
  text: {
    fontWeight: "500",
    color: "#000",
  },
};

const footer = {
  policy: {
    width: "166px",
    margin: "auto",
  },
  text: {
    margin: "0",
    color: "#AFAFAF",
    fontSize: "13px",
    textAlign: "center",
  } as React.CSSProperties,
};
const informationTable = {
  borderCollapse: "collapse" as const,
  borderSpacing: "0px",
  color: "rgb(51,51,51)",
  backgroundColor: "rgb(250,250,250)",
  borderRadius: "3px",
  fontSize: "12px",
};

const productTitleTable = {
  ...informationTable,
  margin: "30px 0 15px 0",
  height: "24px",
};
const productsTitle = {
  background: "#fafafa",
  paddingLeft: "10px",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0",
};
const productIcon = {
  margin: "0 0 0 20px",
  borderRadius: "14px",
  border: "1px solid rgba(128,128,128,0.2)",
};
const resetText = {
  margin: "0",
  padding: "0",
  lineHeight: 1.4,
};

const productTitle = { fontSize: "12px", fontWeight: "600", ...resetText };
const productDescription = {
  fontSize: "12px",
  color: "rgb(102,102,102)",
  ...resetText,
};

const productLink = {
  fontSize: "12px",
  color: "rgb(0,112,201)",
  textDecoration: "none",
};

const divisor = {
  marginLeft: "4px",
  marginRight: "4px",
  color: "rgb(51,51,51)",
  fontWeight: 200,
};

const productPriceTotal = {
  margin: "0",
  color: "rgb(102,102,102)",
  fontSize: "10px",
  fontWeight: "600",
  padding: "0px 30px 0px 0px",
  textAlign: "right" as const,
};

const productPrice = {
  fontSize: "12px",
  fontWeight: "600",
  margin: "0",
};

const productPriceLarge = {
  margin: "0px 20px 0px 0px",
  fontSize: "16px",
  fontWeight: "600",
  whiteSpace: "nowrap" as const,
  textAlign: "right" as const,
};

const productPriceWrapper = {
  display: "table-cell",
  padding: "0px 20px 0px 0px",
  width: "100px",
  verticalAlign: "top",
};

const productPriceLine = { margin: "30px 0 0 0" };

const productPriceVerticalLine = {
  height: "48px",
  borderLeft: "1px solid",
  borderColor: "rgb(238,238,238)",
};

const productPriceLargeWrapper = { display: "table-cell", width: "90px" };
const tableCell = { display: "table-cell" };
