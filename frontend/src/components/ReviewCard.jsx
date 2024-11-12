import React from "react";
import { Box, Rating, Typography } from "@mui/material";

const ReviewCard = () => {
  const averageRating = 4.7;
  return (
    <Box
      display="flex"
      alignItems="start"
      justifyContent="center"
      bgcolor="#fff"
      borderRadius="25px"
      px={3}
      py={3}
      mx="auto"
     mb={2}
      sx={{
        width: "90%",
        
        maxWidth: "1200px",
        flexDirection: { xs: "column", md: "column" },
        gap: { xs: 2, md: 2 },
      }}
    >
      <Box
        display="flex"
        flexDirection="raw"
        alignItems="center"
        gap={2}
        width={{ xs: "100%", md: "50%" }}
        textAlign="center"
      >
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", md: "2rem" },
            fontWeight: "bold",
            color: "#4c4c4c",
            lineHeight: 1,
          }}
        >
          Chamy mobile
        </Typography>
        <Rating
          name="read-only"
          value={averageRating}
          precision={0.1}
          readOnly
          size="medium"
          sx={{
            color: "#4c4c4c",
            "& .MuiRating-iconFilled": { color: "#30b0c0" },
            "& .MuiRating-iconEmpty": { color: "#d3d3d3" },
          }}
        />
      </Box>
      <Typography
        sx={{
          fontSize: { xs: "1rem", md: "1.2rem" },
          // fontWeight:400,
          color: "#4c4c4c",
          lineHeight: 1,
        }}
      >
        aos hdjabsd akl sdkasdahsdfuinaksf ih s nds findsa sjdna iadsa
        sdjfbsadfndsbfidsan kvacvdbs aiv dnckvjnd ivdsa nvjksa sajbd jasb
      </Typography>
    </Box>
  );
};

export default ReviewCard;
