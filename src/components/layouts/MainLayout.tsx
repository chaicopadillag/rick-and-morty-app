import { Grid } from "@nextui-org/react";
import React, { FC } from "react";
import { Navbar } from "../ui";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
  title?: string;
};

const origin = window.location.origin;

export const MainLayout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      {/* <Head>
        <title>{title?.toUpperCase() ?? "Pokemon GO"}</title>
        <meta name="autor" content="Dev Chaico" />
        <meta name="description" content="App de Pokemones" />
        <meta name="keywords" content="pickachu,pokemon,pokedex" />

        <meta
          property="og:title"
          content={`Información sobre el pokemón ${title}`}
        />
        <meta property='og:type' content='video.movie' />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head> */}
      <Navbar />
      <main
        style={{
          padding: "0 1rem",
        }}
      >
        <Grid.Container
          gap={2}
          justify="center"
          css={{ marginTop: "10px" }}
        >
          {children}
        </Grid.Container>
      </main>
    </>
  );
};
