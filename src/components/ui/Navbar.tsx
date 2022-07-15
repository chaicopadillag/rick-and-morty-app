import { Button, Image, Spacer, Text, useTheme } from "@nextui-org/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 1rem",
        backgroundColor: theme?.colors.gray50.value,
      }}
    >
      <Image
        src="https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty.png"
        alt="Rick an Marty"
        width={50}
        height={50}
      />
      <Link to="/">
        <Text
          h2
          size={30}
          css={{
            textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="bold"
        >
          Rick and Morty
        </Text>
      </Link>
      <Spacer
        css={{
          flexGrow: 1,
        }}
      />
      <Link to="/favorites">
        <Text color="white">Favoritos</Text>
      </Link>
    </div>
  );
};
